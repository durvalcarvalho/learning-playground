import re
import requests
from bs4 import BeautifulSoup

response = requests.get('https://s3.amazonaws.com/codecademy-content/courses/beautifulsoup/shellter.html')

webpage = response.content

soup = BeautifulSoup(webpage, "html.parser")

def has_banner_class_and_hello_word(tag):
	return (tag.has_attr('class') == 'banner' and
			tag.string == 'Hello World')

# for complicated logic use a function
soup.find_all(has_banner_class_and_hello_word)

