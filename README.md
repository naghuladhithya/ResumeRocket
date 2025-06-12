# ResumeRocket 🚀

Built for the PANDA x Mind The Gap Hackathon  
Team Members: Naghul, [@sumedhx](https://github.com/sumedhx), [Add other names here]  
Tech Stack: Python, Streamlit, OpenAI, Pinecone, Serper.dev, Airtable, Zapier

---

**“Automate your job search, apply smarter.”**  
ResumeRocket is an AI-powered job application assistant that helps users upload resumes, find matching jobs, generate personalized resume improvements and cover letters, and track applications — all in one place.

---

## 🧠 What is ResumeRocket?

ResumeRocket leverages advanced AI and vector search technologies to transform your job hunting process. It intelligently parses your resume, scrapes job listings from the web, semantically matches you to relevant roles, and automatically crafts customized application materials — saving you time and increasing your chances.

---

## 🔥 Why ResumeRocket?

Traditional job applications are:

- Manual and time-consuming  
- Generic, with little personalization  
- Hard to track and manage  

ResumeRocket solves these by automating resume analysis, job matching, and personalized content creation — plus seamless application tracking.

---

## 🌟 Core Features (MVP)

| Feature                         | Description                                                        |
|--------------------------------|--------------------------------------------------------------------|
| 📄 Resume Upload & Parsing       | Upload PDF resumes and extract skills, experience, education       |
| 🔍 Job Scraping & Matching       | Fetch and embed job listings using Serper.dev & Pinecone           |
| 🤖 AI-Powered Resume & Cover Letter | Generate tailored resume tips & cover letters via OpenAI GPT        |
| 📊 Application Tracking          | Track job applications and statuses with Airtable                  |
| ⚙️ Automation                   | Auto email follow-ups using Zapier or Make                         |
| 🖥️ User Interface               | Simple UI with Streamlit for uploads, matches, and content display |

---

## ⚙️ Tech Stack & Tools

| Component                 | Technology / API                | Purpose                               |
|--------------------------|--------------------------------|-------------------------------------|
| Resume Upload            | Streamlit File Upload           | User uploads PDF resumes             |
| Resume Parsing           | pdfplumber, PyMuPDF, GPT       | Extract resume content               |
| Embeddings               | OpenAI Embedding API            | Create vector representations       |
| Vector Database          | Pinecone                       | Store and search embeddings          |
| Job Search & Scraping    | Serper.dev API, Apify, Puppeteer | Fetch and scrape job listings         |
| Matching Algorithm       | Cosine Similarity               | Compare resume and job embeddings    |
| Text Generation          | OpenAI GPT-4o                  | Resume improvement suggestions, cover letters |
| Application Tracking     | Airtable, Supabase             | Store and track applications         |
| Automation               | Zapier, Make                   | Automate emails and reminders        |
| Frontend                | Streamlit (Python)             | User-facing app                      |
| Deployment              | Streamlit Cloud / Replit       | Host the app                        |

---

## 🧑‍💻 Team Roles & Responsibilities

| Module                     | Owner(s)        | Tasks                                                                 |
|----------------------------|-----------------|----------------------------------------------------------------------|
| Resume Parsing & Embeddings | Backend Dev     | Upload, extract text, create and store embeddings                    |
| Job Scraping & Matching     | Backend Dev     | Fetch jobs, extract info, embed jobs, similarity matching             |
| GPT Content Generation      | Backend Dev     | Generate resume tips & personalized cover letters                    |
| Frontend & Automation       | UI & Automation | Build UI, integrate Airtable, automate follow-up workflows           |
| Final Polish & Deployment   | Whole Team      | Dashboard, demo prep, app deployment                                 |

---

## ⚙️ Setup & Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/naghuladhithya/ResumeRocket.git
   cd ResumeRocket


Devpost: https://devpost.com/software/942875?ref_content=user-portfolio&ref_feature=in_progress