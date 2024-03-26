# Stock Market Dashboard

## Introduction

This project is a stock market dashboard that displays live stock prices of the most active companies from NSE (National Stock Exchange of India). It features a simple React frontend and a Flask backend. The frontend utilizes Redux for state management and presents a detailed view of individual stock information along with price movement graphs.

## Features

- Display live stock prices of 20 NSE companies initially.
- Lazy loading of additional stock data on scroll
- Detailed stock information page with price details
- Graphical representation of stock price movements of the day
- Redux integration for state management

## Prerequisites

Also make sure you have met the following requirements:

- Python 3.x
- Node.js and npm
- Virtualenv (optional, for Python environment management)

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/syamkarni/Stock_Page
   ```

2. Backend Setup:    
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - If you are using virtualenv, create and activate a virtual environment:
     ```
     virtualenv venv
     source venv/bin/activate  # For Unix or MacOS
     venv\Scripts\activate  # For Windows
     ```
   - Install the required Python packages:
     ```
     pip install -r requirements.txt
     ```
   - Start the Flask application:
     ```
     python app.py
     ```

3. Frontend Setup:
   - Navigate to the frontend directory from the root of the project:
     ```
     cd frontend
     ```
   - Install the required Node.js packages:
     ```
     npm install
     ```
   - Start the React application:
     ```
     npm start
     ```

4. Access the application in a web browser at `localhost:3000`.

## Third-party Libraries and Tools

- **Flask**: A micro web framework written in Python, used for the backend.
- **React**: A JavaScript library for building user interfaces, used for the frontend.
- **Redux**: A state management library for JavaScript apps.
- **Axios**: A promise-based HTTP client for JavaScript, used for API requests.
- **react-router-dom**: A standard routing library for React.
- **react-apexcharts**: React component for ApexCharts, used for rendering stock price graphs.
- **Beautiful Soup**: A library for parsing HTML and XML documents, used in the backend for web scraping.
- **CORS (Cross-Origin Resource Sharing)**: A package for providing a Connect/Express middleware to enable CORS.