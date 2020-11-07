import re
import requests
from bs4 import BeautifulSoup

response = requests.get('https://s3.amazonaws.com/codecademy-content/courses/beautifulsoup/shellter.html')

webpage = response.content

soup = BeautifulSoup(webpage, "html.parser")


# find all <ol> and <ul> using regex
soup.find_all(re.compile('[ou]l'))

# find all headers using regex
soup.find_all(re.compile('h[1-9]'))

# find all h1, a, p using lists
soup.find_all(['h1', 'a', 'p'])

# find all elements with btn as class attribute
soup.find_all(attrs={'class': 'btn'})

# find all can be use to get a specific element 
soup.find_all(attrs={'class': 'banner', 'id': 'jumbotron'})

