# 13 Object-Relational Mapping (ORM): E-Commerce Back End 
![license](https://img.shields.io/badge/license-MIT-black)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How-to-Contribute](#how-to-contribute)
- [Tests](#test-instructions)
- [Questions](#questions)

## Description
Build the backend for an e-commerce site by configuring an express.js API to use Sequelize to interact with a MySQL db.


**User Story**

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

**Acceptance Criteria**

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

```
<!-- ## Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./assets/13-orm-homework-demo-03.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia. -->

## Installation
<!-- audience is other developers -->


**Note: In package.json, peer dependencies already exist for dotenv, mysql2, sequelize, nodemon and dates-fns so you do not have to install these packages. You should have mysql already installed on your computer.**

1. Clone this GitHub repo https://github.com/abrownstein2022/proj2-restaurant-mgmt-sys:
<!-- Check out the gh cli tool from github -->
```bash
$ gh repo clone /abrownstein2022/proj2-restaurant-mgmt-sys
```
2. From the terminal, install npm:

```bash
$ npm install
```

3. Log into mysql, create the database on your local machine and seed the database:

```bash
$mysql -u root -p < db/schema.sql
$npm run seed-database
```

<!-- [] implies user input 
 mysql> restaurant_mgr < C:\[filename].sql
-->

4. Start the local server and watch for file changes to automatically restart server:
```bash
$ npm run watch 
```

5. Open Express or a browser to test any changes you make to the application after cloning.
## Usage

1. Start the application:
```bash
$ node index.js
```
2. The first prompts will be for the team manager information, including manager name, employee id, email and 
office number.  You may only enter one team manager.
3. After you have entered the manager info, a main menu appears so you can select to add Engineers and/or Interns.  
You may enter as many Engineers and Interns as needed.
4. When you have entered all the team members' information, click on the menu option "Done - Exit and Generate HTML file".  
At this point, the application will generate the team.html file in the /dist folder, and exit the application.
5. Go to the /dist folder.
6. Right-click on the team.html file that was created by the application and select "Open in Default Browser". 
7. To test the application using Jest and the JavaScript files in the _tests_ folder:
```bash
$ npm run test 
```

**Please review to the screenshots and demonostration video below to view how the application works:**
![example image get started page](./assets/images/ch11-express-screen1-get-started-pg.jpg)
![example image get started page](./assets/images/ch11-express-screen1-get-started-pg.jpg)
![example image get started page](./assets/images/ch11-express-screen1-get-started-pg.jpg)
![example image get started page](./assets/images/ch11-express-screen1-get-started-pg.jpg)
![example image get started page](./assets/images/ch11-express-screen1-get-started-pg.jpg)

Walk-through Video
![example image get started page](./assets/images/ch11-express-screen1-get-started-pg.jpg)
## Credits

```md
Alexis Brownstein
```

## License

 ```md
 MIT 
```

Link to license text:
https://opensource.org/licenses/mit-license


![badge](https://img.shields.io/badge/license-mit-black)


## Features

<!-- 
# h1
###### h6
**bold**
*italic*
_underline_

| key | value |
|-|-|
| name | 'bob' |


- list
- items

1. numberd
1. list
1. all ones - auttomatic numbering
Feattures for *future* development
 -->
**The main features found in this project are:**<br>
1. Node.js and Express.js to create a RESTful API
1. Handlebars.js as the template engine
1. MySQL and the Sequelize ORM for the database
1. Both GET and POST routes for retrieving and adding new data (create customer registration and order data in database, view order data)
1. Dates-fns to format the order date in vieworder.handlebars (https://date-fns.org/)
1. Nodemon for testing to automatically restart the local server when it detects changes made to files
1. Folder structure that meets the MVC paradigm
1. Authentication (express-session and cookies in login and registration pages)
1. Protect API keys and sensitive information with environment variables
1. Deployed using Heroku (with data)
1. Polished UI
1. Interactive and responsive design
1. Meets good-quality coding standards 
1. Professional README


## How-to-Contribute

N/A

## Test Instructions

N/A

## Questions

Feel free to contact me with any questions.

I can be reached at alexis@drdatabase.com.

This GitHub repo can be found at:
  
https://github.com/abrownstein2022/ch13-orm-ecommerce-backend
 
-------------------------------
## Getting Started

This Challenge will require a video submission. Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

You’ll need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

Use the `schema.sql` file in the `db` folder to create your database with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.

### Database Models

Your database should contain the following four models, including the requirements listed for each model:

* `Category`

  * `id`

    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `category_name`
  
    * String.
  
    * Doesn't allow null values.

* `Product`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `product_name`
  
    * String.
  
    * Doesn't allow null values.

  * `price`
  
    * Decimal.
  
    * Doesn't allow null values.
  
    * Validates that the value is a decimal.

  * `stock`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set a default value of `10`.
  
    * Validates that the value is numeric.

  * `category_id`
  
    * Integer.
  
    * References the `Category` model's `id`.

* `Tag`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `tag_name`
  
    * String.

* `ProductTag`

  * `id`

    * Integer.

    * Doesn't allow null values.

    * Set as primary key.

    * Uses auto increment.

  * `product_id`

    * Integer.

    * References the `Product` model's `id`.

  * `tag_id`

    * Integer.

    * References the `Tag` model's `id`.

### Associations

You'll need to execute association methods on your Sequelize models to create the following relationships between them:

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

> **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

### Fill Out the API Routes to Perform RESTful CRUD Operations

Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

> **Hint**: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!

### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.