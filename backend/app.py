import requests
from bs4 import BeautifulSoup

def scrape_data():
    url = 'https://www.moneycontrol.com/stocks/marketstats/nsemact1/index.php'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    data = []
    for row in soup.find_all('tr'):
      if len(data) >= 20:
        break
      cells = row.find_all('td')
      if len(cells) > 1:
          stock_info = {}
          h3_tag = cells[0].find('h3')
          if h3_tag and h3_tag.find('a'):
              stock_info['name'] =h3_tag.find('a').get_text(strip=True)
              stock_info['link']=h3_tag.find('a')['href']
          if len(cells)>5:
              stock_info['value']=cells[5].get_text(strip=True)
          if 'name' in stock_info and 'value' in stock_info:
              data.append(stock_info)
    return data
data = scrape_data()
print(data)