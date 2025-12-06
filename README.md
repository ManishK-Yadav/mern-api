# JavaScript
-High-level programming language
-Interpreted programming language->means check line by line if there is error than not run the code from there(furthur)
-Built on C++(this programming language is built using C++)
-Dynamically typed programming language(it mean we cannot use data_type of variable(int,double,string) or put before variable of type of data)
-Used to build interactive web pages
-First name of javascript is "Mocha"
- there is no relation between java and javascript because of java popular at that time its name kept javascript
-First programming language run in browser other are in desktop(desktop means local machine)
- ECMA Script(ES6 2015)-> standarization of js
-JavaScript is the best option for frontend
-node js-> using node js(run time environment)-> we can also do the back backend. so we can do full stack project using javascript
- node js-> for web app, electron js->desktop app, react native->mobile app, tenserflow js-> AI

--------------
1.JS
Q. why using node insted of js-> when we made a home, we need brick but we can make brick but we using NodeJs
2.NODE
Q. why using express instead of node-> we use rod in many work like home and bridge but we want pillar for home so we pillar is as express 
3.EXPRESS
4.MONGODB
5.REACT
6.NEXTJS

# Nodejs
- it is a javascript runtime environment
- Runtime: A program that runs another program
- To run javascript code in local machine we need to install nodejs in our system
- Built on C++
- Built on top of Google Chrome V8 engine(V8 engine is an engine which is used to run javascript code in browser)
- Used for:API,Micro-Services,real-time app,JSON-based API
# Architecture of Nodejs
- Single Threaded(thread-> smallest unit of operation)
- Non-blocking operation-> time consuming code is sent to the worker thread and ohter codes are executed in main thread
- Event-Driven->

# Learning Path
 Backend
 - Node
 - Express
 - MongoDB

 Frontend
 -DOM Manipulation
 -React
 -Nextjs

 # Github Pull Request
 - Always create new brach from main branch
 - Always format your code, use prettier code formatter

 # HTTP Methods
 1. GET: Used to fetch/retrieve data, No request body (READ)
 2. POST: Used to create data, uses request body to send data to API (CEATE)
 3. PUT: Used to update data, uses request body to send data to API (UPDATE)
 4. DELETE: Used to delete data(DELETE)
 5. PATCh: Used to partially update data
 Example: POST/JSON(DATA)->validate data -> store data in database

 # HTTP status code
 1. 1xx- informational (rarely used)
 2. 2xx- Success
    - 200: OK
    - 201: Created/Update
    - 204: No Content (Deleted)
3. 3xx- Redirect (rarely used)
    - 301: Moved Permanently (domain)
    - 304: Not Modified (used for caching)
4. 4xx- Client Side Error
    - 400: Bad request (Invalid Input)
    - 401: Unauthorized (Not logged in user, no token/expired token)
    - 402: Forbidden (logged in but Not Allowed)
    - 404: Not found
    - 405: Method not allowed
    - 409: Conflict (duplicate email, phone)
    - 422: Unprocessable entity (validation error like date,phone)
5. 5xx- Server Error
    - 500: Internal Server Error
    - 502: Bad Gateway (invalid response from another service)
    - 503: Service Unavailable (Temporary Unavailable )
    - 504: Timeout
