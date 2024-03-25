# Stock Market Dashboard - Backend

## Introduction

This backend serves as the data provider for the Stock Market Dashboard, a project displaying live stock prices and details for companies listed on the NSE (National Stock Exchange of India). The backend is built using Flask and is responsible for web scraping and API handling.

## Prerequisites

- Python 3.x installed on your system.

## Setting Up the Backend

### Virtual Environment Setup

A virtual environment in Python is a tool to keep dependencies required by different projects separate by creating isolated python virtual environments for them. This is one of the best practices for Python development.

1. Install `virtualenv`:
   ```
   pip install virtualenv
   ```

2. Navigate to the backend directory of the project.

3. Create a virtual environment:
   ```
   virtualenv venv
   ```

4. Activate the virtual environment:
   - For Unix or MacOS:
     ```
     source venv/bin/activate
     ```
   - For Windows:
     ```
     venv\Scripts\activate
     ```

### Installing Dependencies

The `requirements.txt` file lists all Python libraries that your project depends on. Run the following command to install these dependencies:

```
pip install -r requirements.txt
```

### Dependencies and Their Usage

- **Flask**: A lightweight WSGI web application framework. It's used to create the web server that our backend service runs on.
- **requests**: A library to make HTTP requests in Python. It's used for making requests to external websites for web scraping.
- **beautifulsoup4**: A library that makes it easy to scrape information from web pages. It's used here to parse HTML and extract the required data.
- **pandas**: An open-source data analysis and manipulation tool. It's included as a dependency for potential future use in data manipulation, though it's not actively used in the current version of the backend.
- **flask-cors**: A Flask extension for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible. This is important for the backend to accept requests from the frontend part of the application.

### Assumptions and Notes

#### Graph Data Assumption
- The project retrieves stock price movement data for graphical representation. However, due to the nature of the data source (https://www.moneycontrol.com), there is an assumption that the graph data may not always reflect the current day's trends or movements accurately. This is important to consider, especially if the application is used for time-sensitive financial analysis or decision-making. Users are advised to verify the real-time relevance and accuracy of the graph data independently if using it for critical purposes.

#### Data Source and Rights
- All stock market data displayed in this application, including but not limited to stock names, values, and price movement graphs, are sourced from Moneycontrol (https://www.moneycontrol.com/stocks/marketstats/nsemact1/index.php). Moneycontrol owns all rights to this data. This project only uses the data for educational and demonstration purposes, and the backend script fetches this data in compliance with web scraping best practices and ethical guidelines. It's essential to respect and acknowledge the intellectual property rights of the data source. Users and developers replicating or modifying this project should also ensure they adhere to the terms and conditions of the source website and applicable legal standards regarding data use.

#### No Financial Advice
- It is important to note that this project is for informational and educational purposes only and should not be construed as financial advice. The accuracy, completeness, or reliability of the data is not guaranteed, and the application developers or maintainers bear no responsibility for any financial decisions or actions taken based on the information provided by this application.

### Running the Backend

To start the Flask application, run:

```
python app.py
```

Your backend should now be running on `localhost:3001`.