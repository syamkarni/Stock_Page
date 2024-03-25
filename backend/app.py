from flask import Flask,  jsonify
import requests
from bs4 import BeautifulSoup
from flask_cors import CORS

def scrape_data():
    url = 'https://www.moneycontrol.com/stocks/marketstats/nsemact1/index.php'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    data = []
    for row in soup.find_all('tr'):
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

def indi_data_graph(number):
    d = scrape_data()
    for i in d:
        if i['number'] == number:
            url = i['link']
            stock_identifier = url.rsplit('/', 1)[-1]
            api_url = f"https://api.moneycontrol.com/mcapi/v1/stock/estimates/price-forecast?scId={stock_identifier}&ex=N&deviceType=W"
            return api_url
    return None


def get_individual_stock_data(number):
    stock_url = indi_data_link(number)
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    response = requests.get(stock_url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')

    stock_data = {}
    name_sector_div = soup.find('div', class_='inid_name')
    stock_data['Name'] = name_sector_div.find('h1').get_text(strip=True)
    sector_strong = name_sector_div.find('strong')
    stock_data['Sector'] = sector_strong.get_text(strip=True)
    stock_data['Graph_link'] = indi_data_graph(number)

    nse_change_div = soup.find('div', id='nsechange')
    if nse_change_div:
        change_text = nse_change_div.get_text(strip=True)
        change_data = change_text.split()
        if len(change_data) >= 2:
            stock_data['NSE_Change'] = change_data[0]
            stock_data['NSE_Change_Percentage'] = change_data[1].strip('()')

    oview_tables = soup.find_all('div', class_='oview_table')
    for table in oview_tables[:2]:
        table_rows = table.find_all('tr')
        for tr in table_rows:
            cells = tr.find_all('td')
            if len(cells) == 2:
                key = cells[0].get_text(strip=True).replace('i', 'VWAP')
                value = cells[1].get_text(strip=True)
                stock_data[key] = value

    return stock_data




app = Flask(__name__)
CORS(app) 

@app.route('/', methods=['GET'])
def index():
   data = scrape_data()
   return jsonify(data)

@app.route('/stock/<int:number>', methods=['GET'])
def index1(number):
    data = get_individual_stock_data(number)
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001, debug=True)