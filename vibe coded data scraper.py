 import requests
import json
from fuzzywuzzy import fuzz
import spacy
import PyPDF2
from io import BytesIO
import re
import os
from typing import List, Dict, Optional

# Load spaCy model for semantic analysis
nlp = spacy.load("en_core_web_sm")

# Configuration
SERPER_API_KEY = os.getenv("SERPER_API_KEY", "your-serper-api-key")
CUSTOM_WEBSITE_URLS = [
    "https://example.com/careers",
    # Add custom websites here
]
FUZZY_KEYWORDS = ["data scientist", "machine learning", "python developer", "software engineer"]
MATCH_THRESHOLD = 80  # Fuzzy matching threshold
SEMANTIC_SIMILARITY_THRESHOLD = 0.7  # spaCy similarity threshold

class DataScraper:
    def __init__(self):
        self.scraped_data: List[Dict] = []

    def serper_api_search(self, query: str) -> List[Dict]:
        """Fetch search results from Serper API."""
        url = "https://api.serper.dev/search"
        headers = {"X-API-KEY": SERPER_API_KEY}
        payload = {"q": query}
        
        try:
            response = requests.post(url, json=payload, headers=headers)
            response.raise_for_status()
            results = response.json().get("organic", [])
            return [
                {
                    "title": item.get("title", ""),
                    "snippet": item.get("snippet", ""),
                    "link": item.get("link", ""),
                }
                for item in results
            ]
        except requests.RequestException as e:
            print(f"Serper API error: {e}")
            return []

    def scrape_custom_website(self, url: str) -> Optional[Dict]:
        """Scrape content from a custom website."""
        try:
            response = requests.get(url)
            response.raise_for_status()
            # Simple text extraction (extend with BeautifulSoup for better parsing)
            doc = nlp(response.text)
            text = " ".join(token.text for token in doc if not token.is_stop)
            return {
                "url": url,
                "content": text,
            }
        except requests.RequestException as e:
            print(f"Error scraping {url}: {e}")
            return None

    def fuzzy_match(self, text: str, keywords: List[str]) -> List[Dict]:
        """Perform fuzzy matching on text against keywords."""
        matches = []
        for keyword in keywords:
            ratio = fuzz.partial_ratio(text.lower(), keyword.lower())
            if ratio >= MATCH_THRESHOLD:
                matches.append({"keyword": keyword, "score": ratio})
        return matches

    def semantic_analysis(self, text: str, text2: str) -> float:
        """Calculate semantic similarity between two texts."""
        doc1 = nlp(text)
        doc2 = nlp(text2)
        return doc1.similarity(doc2)

    def extract_resume_data(self, file_content: bytes) -> Optional[Dict]:
        """Extract text from a resume (PDF or text file)."""
        try:
            if file_content.startswith(b"%PDF"):
                pdf_reader = PyPDF2.PdfReader(BytesIO(file_content))
                text = "".join(page.extract_text() for page in pdf_reader.pages)
            else:
                text = file_content.decode("utf-8")
            # Clean up text
            text = nlp(text)
            # Extract entities (e.g., skills, experience)
            skills = [ent.text for ent in doc.ents if ent.label_ in ["SKILL", "NORP", "ORG"]]
            experience = re.findall(r"(\d+)\s*(?:years?|yrs?)\s*(?:of)?\s*experience", text.lower())
            return {
                "skills": skills,
                "experience": text,
                "raw_text": [token.text for token in doc if not token.is_stop],
            }
        except Exception as e:
            print(f"Error processing resume: resume_data"e}")
            return None

    def scrape_and_process(self, query: str):
        """Scrape data from Serper and custom websites, apply fuzzy and semantic analysis."""
        # Scrape Serper API
        serper_results = self.serper_api_search(query)
        for result in serper_results:
            fuzzy_matches = self.fuzzy_match(result["snippet"], FUZZY_KEYWORDS)
            if fuzzy_matches:
                self.scraped_data.append({
                    "source": "serper",
                    "title": result["title"],
                    "content": result["snippet"],
                    "link": result["link"],
                    "fuzzy_matches": fuzzy_matches,
                })

        # Scrape custom websites
        for url in CUSTOM_WEBSITE_URLS:
            website_data = self.scrape_custom_website(url)
            if website_data:
                fuzzy_matches = self.fuzzy_match(website_data["content"], FUZZY_KEYWORDS)
                if fuzzy_matches:
                    self.scraped_data.append({
                        "source": "website",
                        "title": website_data["url"],
                        "content": website_data["content"],
                        "fuzzy_matches": fuzzy_matches,
                    })

    def match_resume(self, resume_file: bytes) -> List[Dict]:
        """Match uploaded resume to scraped data."""
        resume_data = self.extract_resume_data(resume_file)
        if not resume_data:
            return []

        matches = []
        for scraped_item in self.scraped_data:
            # Fuzzy matching on skills
            resume_skills = " ".join(resume_data["skills"])
            content_matches = self.fuzzy_match(scraped_item["content"], FUZZY_KEYWORDS)
            
            # Semantic similarity
            similarity = self.semantic_analysis(resume_data["raw_text"], scraped_item["content"])
            
            if content_matches or similarity > SEMANTIC_SIMILARITY_THRESHOLD:
                matches.append({
                    "source": scraped_item["source"],
                    "title": scraped_item["title"],
                    "link": scraped_item.get("link", ""),
                    "fuzzy_matches": content_matches,
                    "semantic_score": similarity,
                    "match_score": (len(content_matches) * 0.4 + similarity * 0.6) * 100,  # Weighted score
                })

        # Sort by match score
        return sorted(matches, key=lambda x: x["match_score"], reverse=True)

def main():
    scraper = DataScraper()
    query = "python data scientist jobs"
    scraper.scrape_and_process(query)
    
    # Example: Process a sample resume (replace with actual file upload handling)
    with open("sample_resume.pdf", "rb") as f:
        resume_content = f.read()
        matches = scraper.match_resume(resume_content)
    
    # Output results
    for match in matches:
        print(f"Match: {match['title']}")
        print(f"Source: {match['source']}")
        print(f"Match Score: {match['match_score']:.2f}")
        print(f"Fuzzy Matches: {match['fuzzy_matches']}")
        print(f"Semantic Score: {match['semantic_score']:.3f}")
        print("-" * 50)

if __name__ == "__main__":
    main()