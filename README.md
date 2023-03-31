# Target-Search-Application

# Credits
```
Harrison Tran-Chung (GitHub: htranchung)
Tanvir Khondakar (GitHub: tanvirkhon)
Ricardo Cisneros (GitHub: ricardoci)
Raymond Stack-Vanasse (GitHub: Bright-Verdant)
```
![image](https://user-images.githubusercontent.com/60548511/229012870-5e29077d-e574-475b-81a5-dd2bcc942870.png)


## User Story

AS A webpage user 

I WANT to look up a target property by T# and be provided directions and other associated property information

SO THAT i can find the store


## Acceptance Criteria

GIVEN the user is on the homepage of the Target-Search-Application

WHEN the user enters the T# of the property in the search bar and clicks on the "Search" button

THEN the application displays the address, city, state, and zip code of the location searched for


## Description

This is a web application that allows users to search for Target property/store locations and obtain the address, city, state, and zip code of the location.

This guide is intended for the person who will be setting up the Target Property/Store Locator application on a server or hosting platform. Please follow the instructions below to set up the application.


## Prerequisites
Before setting up the application, you need to have the following software and accounts:

-Node.js version 12 or later installed on your computer.

-An account with a hosting platform or server to host the application. The application is currently setup in the config/connection.js for Heroku

-MySQL


## Installation
To install the Target Property/Store Locator application, follow the steps below:


-Navigate to the project directory

-Install the application dependencies: npm install

-Create a .env file in the root directory of the application with the following content:

DB_NAME = 'tBuilding_db'
DB_USER = 'root'
DB_PASSWORD = 'YOUR_MYSQL_PASSWORD_HERE' (the .env file is for testing or modification purposes only, you don't need it if you go straight to deployment)

-Start the application: npm start

-The application should now be running locally at http://localhost:3001


## Deployment
To deploy the Target Property/Store Locator application, follow the instructions below:

-Choose a hosting platform or server to host the application. We used Heroku

-Create a new project or application on your hosting platform or server.

-Follow the instructions provided by your hosting platform or server to deploy a Node.js application.

-Deploy the application to your hosting platform or server.

-The application should now be accessible at the URL provided by your hosting platform or server.


## Built With
HTML
CSS
JavaScript
dependencies and devDependencies in package.json
