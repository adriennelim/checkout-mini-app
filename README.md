# checkout-mini-app
Full stack mini app to simulate a shopping cart checkout experience.

## Project Description
Single page app with a series of forms (signup, shipping info & credit card)
- F1 collects name, email, and password for account creation.
- F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
- F3 collects credit card #, expiry date, CVV, and billing zip code.

No actual shopping cart or products are necessary; you are modeling the checkout process only.
- Use express to serve up index.html file
- Build UI using ReactJS, pre-compile views using Babel
- Use mongo or mysql to store user data

## Basic Requirements
- [X] Build client app inside client folder
- [X] All React components in 1 file, app.jsx
- [ ] Build express app inside Server.js
- [X] The homepage of your application should have a Checkout button
- [X] At each step, a Next button allows the user to progress to the next step in the checkout process. 
- [ ] Every run through the checkout process (each time Checkout is clicked) creates a new record in your server's database, 
- [ ] Each step in the checkout process saves its piece of the data (the data is saved when Next is clicked)
- [ ] Finally, show a confirmation page which summarizes the data collected in the prior three steps.
- [X] This page contains a Purchase button that completes the purchase.
- [X] When the purchase is complete, the user is returned to the homepage.


## Environment Setup
- [X] Babel CLI
- [X] No Webpack
- [X] Nodemon 