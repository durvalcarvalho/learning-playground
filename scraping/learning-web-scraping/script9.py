import codecademylib3_seaborn
from bs4 import BeautifulSoup
import requests
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

response = requests.get('https://s3.amazonaws.com/codecademy-content/courses/beautifulsoup/cacao/index.html')

soup = BeautifulSoup(response.content, 'html.parser')
ratings_column = soup.find_all(attrs={'class': 'Rating'})
ratings = []

for td in ratings_column[1:]:
  value = td.get_text()
  ratings.append(float(value))
  
company_column = soup.find_all(attrs={'class': 'Company'})
companies = []

for td in company_column[1:]:
  value = td.get_text()
  companies.append(value)

cocoa_perc_raw = soup.find_all(attrs={'class': 'CocoaPercent'})
cocoa_perc = []

for td in cocoa_perc_raw[1:]:
  value = td.get_text().strip('%')
  value = float(value)
  value = int(value//1)
  cocoa_perc.append(value)

d = {'Companies': companies, 'Ratings': ratings, 
     'CocoaPercentage': cocoa_perc}
df = pd.DataFrame.from_dict(d)

# mean_values = df.groupby('Companies').Ratings.mean()
# ten_best = mean_values.nlargest(10)

plt.scatter(df.CocoaPercentage, df.Ratings)
z = np.polyfit(df.CocoaPercentage, df.Ratings, 1)
line_function = np.poly1d(z)
plt.plot(df.CocoaPercentage, line_function(df.CocoaPercentage), "r--")
plt.show()
