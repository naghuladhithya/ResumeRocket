import requests

url = "https://indeed12.p.rapidapi.com/company/Ubisoft/jobs"

querystring = {"locality":"us","start":"1"}

headers = {
	"x-rapidapi-key": "a1ab4042e0msh5cdc2c3631a6a5cp16618fjsn0414ad7e8f5d",
	"x-rapidapi-host": "indeed12.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())