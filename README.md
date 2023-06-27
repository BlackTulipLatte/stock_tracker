How to run the application:
1. CD /wea_skills/src
2. 'npm install' in terminal
3. 'npm run start' in terminal

An overview of the web application with details surrounding what it is, as
well as its purpose, functionality, and potential constraints.

Our web application is a stock tracking/stock saving app. The premise of this website is that users
can view stocks based on their tickers. When a ticker is searched, the users can view the details
of the specific stock such as name, country of origin, currency, which exchange the stock resides on,
IPO date, market capitalization, and the industry of the stock. Furthermore, users can login to the 
website through Firebase authentication. Users can login with a pre-existing Google account. Once
the user is logged in they can save specific stocks to the database. Users can view their stocks
in the saved stocks pages.

To develop our application we used React and Tailwind CSS for the frontend. To test our application we 
used Jest. Furthermore for our database, we used Firebase, a Google application.

One potential constraint of our website is the number of concurrent signed in users and users in general.
Since we are using Firebase's free plan, the website is limited to 1000 users and can only handle
so many requests per second. Therefore if there are a large number of people using our web application
they may encounter lag or poor performance

An examination of the development process and the challenges your team
faced, both in building the functional prototype and the learning curves that
may have been experienced personally