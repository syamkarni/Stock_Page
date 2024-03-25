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

- An assumption is made regarding the graph-related data fetched for the stocks. The data fetched might not always correspond to the day's graph due to the nature of the source website. Therefore, it is recommended to verify the relevance of the graph data for real-time application.

### Running the Backend

To start the Flask application, run:

```
python app.py
```

Your backend should now be running on `localhost:3001`.