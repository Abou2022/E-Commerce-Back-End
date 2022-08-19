# Object-Relational Mapping (ORM): E-Commerce Back End

    ## Table of Contents:

    1. Descriptions
    2. Installation
    3. Technologies
    4. Mock-Up
    5. Github
    5.Question

## Description

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

## Installation

```md
- Uses the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

- Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

- Uses the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.
```

## Technologies used

```md
- Html
- JavaScript
- Express.js
- MySQL
- Node.js
```

## Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia.

## Github

https://github.com/Abou2022/E-Commerce-Back-End

### Question

syllabakary2002@gmail.com

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
