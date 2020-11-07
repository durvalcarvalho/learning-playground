import requests
from bs4 import BeautifulSoup

prefix = "https://s3.amazonaws.com/codecademy-content/courses/beautifulsoup/"
webpage_response = requests.get('https://s3.amazonaws.com/codecademy-content/courses/beautifulsoup/shellter.html')

webpage = webpage_response.content
soup = BeautifulSoup(webpage, "html.parser")

turtle_links = soup.find_all("a")
links = []
#go through all of the a tags and get the links associated with them:
for a in turtle_links:
    links.append(prefix+a["href"])
    
#Define turtle_data:
turtle_data = {}
name = None

#follow each link:
for link in links:
    webpage = requests.get(link)
    turtle = BeautifulSoup(webpage.content, "html.parser")

    name = turtle.select('p.name')[0].text
    info = turtle.find_all(['li'])

    turtle_data[name] = { }
    turtle_data[name]['age'] = info[0].string
    turtle_data[name]['weight'] = info[1].string
    turtle_data[name]['sex'] = info[2].string
    turtle_data[name]['breed'] = info[3].string
    turtle_data[name]['source'] = info[4].string


for turtle, props in turtle_data.items():
    print(turtle, props)
