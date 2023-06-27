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

Our development process involved splitting up different sections of the website to each member of the team.
In our case, we split the work between UI/UX implementation and database/user authentication implementation.
Here were our steps to approaching building out this website:
1. Created a mockup of how the website would look like
2. Created the main components of the website in React (eg. chart, header, details, overview, icons)
3. Implemented all the components on a single page
4. Developed and implemented continuous test cases using Jest
5. Introduced the Finnhub API to the application by making RESTful calls
6. Handled and display user input to the screen (ie. stock name etc...)
7. Implemented the user authentication through Firebase authentication
8. Implemented user writing to the Firebase real-time database
9. Implemented user reading from the Firebase real-time database
10. Created the saved stock pages and display the user-stock information retrieved from the previous step
11. Performed regression testing and unit testing using Jest
12. Deployed the website using Netlify/Heroku?

Here are some challenges we faced during the development of the website:
1. Developing and rendering the CSS components
2. Resolving merge conflicts in Github
3. Correctly writing to the Firebase database
4. Correctly managing the authentication persistence of users in Firebase authentication (making sure users are logged out
   at the end of every session)

Your team's plan for continuous development or improvements.
TBD