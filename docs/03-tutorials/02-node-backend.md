---
id: 02-node-backend
title: Your first Node/Express Backend
sidebar_label: Node/Express Backend
slug: /tutorials/node-backend
---

**In this tutorial, you will learn how to develop a simple backend to authenticate users.**
**Later on, we will also develop a small frontend to interact with our API.**

In addition, there will be a small introduction to OpenAPI/Swagger, which allows you to write intuitive API documentations.

### Prerequisites

- Make sure you have **[NodeJS](https://nodejs.org/en/download/)** installed. You can check this by typing `node --version` into your terminal.
- Also, **[npm](https://nodejs.org/en/download/)**, the Node package manager should also work. Check with `npm --version`.
- Choose your preferred code editor. For this tutorial, we will use **Visual Studio Code**.
- Install **[Postman](https://www.postman.com/downloads/)**, the free tool to test our API.

### Getting Started

First, we need to create a new folder where our backend code will be stored.
For this case, you can choose something like `my-backend`.
Next, you have to open this folder in VS Code and open a terminal to the bottom.

Make sure you are in the correct folder and run `npm init -y` to initialise a new Node project.
Since we will use JavaScript for this tutorial, there is no need to configure TypeScript.

After that, you will see a new file in your project. It is called **package.json** and it will contain all your dependencies.

### Installing Dependencies

We want to create a backend, so we need a web server. In this case, the best option is to use **Express**, which is a very popular backend framework for Node.

To install everything we need for this tutorial, run the following command: `npm install express cors`.

After that, you will see a new folder in your project, called `node_modules`. This folder contains the actual code of the installed dependencies, so we can ignore it. _Note: If you want to upload your project to GitHub, you want to exclude this folder._

### Developing the Backend

So, now we are finally ready to start coding. Create a new file called `index.js` and open it.

First, we need to import the dependencies.

```js
const express = require('express');
const cors = require('cors');
```

Next up, we want to create our Express application.

```js
const app = express();
```

Since we want our responses to be in the JSON format and allow every domain to connect to your backend, we have to do a few additional steps.

```js
app.use(express.json());
app.use(cors());
```

Lastly, we can start our backend service locally on a specific port. Additionally, we can define a message to be displayed when the API is started successfully.

```js
app.listen(3001, () => console.log("Y`our backend is running!"));
```

In this case, the port is `3001`, but you can choose a different one for yourself.

Your code should look something like this:

```js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Implement new stuff here

app.listen(3001, () => console.log("Your backend is running!"));
```

### Run your application

Now, we are at a point where we can start our application the first time.
If you run `node index.js`, you will see the message you defined earlier. In my case, its `Your backend is running!`.

Since our backend can not do anything, we can stop it with `Ctrl + c`.

### Implement user validation

Next up, we will define an array of users with their passwords as well as a function to check if a combination of username and password is correct.

Please make sure you implement to following features in the correct spot. See the last code block for exact information.

The array of users will look something like this:

```js
const users = [{ username: "laurens", password: "test" }, { username: "po", password: "best_teacher" }];
```

Also, we need a function to validate a combination of username and password.

```js
const checkCredentials = (username, password) => {
    for (const user of users) {
        if (user.username == username && user.password == password) return true;
    }
    return false;
}
```

This functions takes username and password and returns if this combination of username and password exists.

Your code should look something like this:

```js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const users = [{ username: "laurens", password: "test" }, { username: "po", password: "best_teacher" }];

const checkCredentials = (username, password) => {
    for (const user of users) {
        if (user.username == username && user.password == password) return true;
    }
    return false;
}

// Implement routes here

app.listen(3001, () => console.log("Your backend is running!"));
```

### Implement routes

Routes are things your API can do. For this tutorial, we will only create a single route.
There are multiple HTTP methods you can use. Here is an overview about the most common ones.

- **GET**: Used to get data from the backend.
- **POST**: Used to create something on the backend.
- **PUT**: Used to edit something.
- **DELETE**: This one is self explanatory.

But there is more: **POST** and **PUT** can have a so-called "request body" whereas **GET** and **DELETE** can not.

The request body is (at least for this tutorial) a JSON which can be sent to the server.
We will need it to transfer username and password to the server. So the best method to use is **POST**.

Please make sure you implement to following route in the correct spot. See the last code block for exact information.

```js
app.post("/login", (req, res) => {
    // This is the route
});
```

The **POST** method takes a string, which is the actual route, in this case `/login` and a callback method with `req` and `res`, which stands for request and response.

In this function, we can now implement the validation and a response back. Your code should then look something like this:

```js
app.post("/login", (req, res) => {
    const result = checkCredentials(req.body.username, req.body.password)
    res.json({ success: result });
});
```

Note the `req.body.username` and `req.body.password`. That is the way we can get the username and password from the request body.
With `res.json()`, we can send the result back.

Your final code should look something like this:

```js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const users = [{ username: "laurens", password: "test" }, { username: "po", password: "best_teacher" }];

const checkCredentials = (username, password) => {
    for (const user of users) {
        if (user.username == username && user.password == password) return true;
    }
    return false;
}

app.post("/login", (req, res) => {
    const result = checkCredentials(req.body.username, req.body.password)
    res.json({ success: result });
});

app.listen(3001, () => console.log("Your backend is running!"));
```

Done, take a deep breath.

We can now start our service once again by typing `node index.js` into the terminal.

### Test the API

As mentioned earlier, we can test our API with a free tool called **[Postman](https://www.postman.com/downloads/)**.

Please watch the video on how to test your API with Postman.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nIrR2ayY00U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Write docs with OpenAPI/Swagger

Please watch the video on how to write docs with OpenAPI/Swagger.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wh1CZ82vJI0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Develop the Frontend

Please watch the video on how to develop the frontend.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ocnRCf4EMsw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>