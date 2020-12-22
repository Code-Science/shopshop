### Shopshop

This is an Ecommerce application built with next.js. Initialtized with create-next-app, shopshop is an application where all the items are displayed, user is allowed to add item in a cart or remove it, and checkout with stripe.

## Main Dependencies and Integrations

Next.js , React --> Core Functionality ( All functions with hooks ) <br/>
Mysql, serverless-mysql --> Handle Relatinal Database<br/>
Context Api --> useContext hook in combination with useReducer hook is used to manage state of the application <br/>
CSS Modules --> Scoped css styling for Components <br/>
Material UI --> For styled components <br/>
Stripe --> For Processing Purchase <br/>
NextAuth --> Authentication (Integrated with Facebook and Auth0) <br/>
Splide --> For Image Slide Show <br/>
Classnames --> Easily changing classes with conditions <br/>
Prop-Types --> Type Checking <br/>
jest and Enzyme --> For components testing (snapshot testing includes) <br/>

## Main Routes Or Pages

All the pages are rendered statically and data is loaded by making query to mysql with getStaticProps async function provided by next.js. For the Dynamic route, getStaticPaths function is used to recieve all the products data and make routes according to id's.

```javascript
'/' --> Main Landing Page
'/collection/women/clothes/' --> Display of clothes
'/collection/women/accessories/' --> Display of accessories
'/collection/men/clothes/' --> Display of clothes
'/collection/men/accessories/' --> Display of accessories
'/collection/kids/clothes/' --> Display of clothes
'/products/[id]/ --> Dynamic Route for display of a selected item by its id
'/accounts/orders/' --> Display of All orders made by authenticated and authorized user
'/checkout/' --> For getting user details and checkout
```

## Seed Data

Seed data is available to populate database with necessary data (items).
Mysql is used, and to load the data, copy the project and from the terminal navigate to the root project folder, open mysql-cli and type the following query:

```mysql
SOURCE seed_data/seed.sql;
```

seed.sql will create a new database named 'shopshop', select it and create new tables named 'Products', 'Categories', 'Orders', 'Customers' and 'Order_details'. The 'seed.js' is node-mysql integration file and will transfer all the data in 'data.json' to mysql database. Open seed.js in CodeEditor and change all the values for database connection.

To populate the tables, close mysql-cli and enter following commad:

```javascript
npm run seed
```

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           |
