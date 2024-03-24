from flask import Flask,  jsonify
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
    for index, stock_info in enumerate(data, start=1):
        stock_info['number'] = index
    return data

def indi_data_link(number):
   d=scrape_data()
   for i in d:
      if i['number']==number:
         return i['link']
      
def indi_data(name):
    url=indi_data_link(name)
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    data = []

def get_individual_stock_data(number):
    stock_url = indi_data_link(number)
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    response = requests.get(stock_url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    stock_data = {}
    table_rows = soup.select_one('div.oview_table').find_all('tr')
    for tr in table_rows:
        cells = tr.find_all('td')
        if len(cells) == 2:
            key = cells[0].get_text(strip=True)
            value = cells[1].get_text(strip=True)
            stock_data[key] = value

    return stock_data



app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
   data = scrape_data()
   return jsonify(data)

@app.route('/stock/<int:number>', methods=['GET'])
def index1(number):
    data = get_individual_stock_data(number)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)