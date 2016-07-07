# SQLite-Express backend

#### Crazy simple SQLite-Express backend for your HTML forms

#### Web Development
Frontend: [http://localhost:9090](http://localhost:9090) 

#### People
Brett Smentek (@brettsmentek)

# Clone the project

All of the notes below assume you've already cloned the project
```
git clone https://github.com/brettsmentek/SQLite-Express-backend.git
```

Made NO CHANGES and want latest copy of code?
```
git fetch origin
git pull
```

MADE CHANGES but want to NUKE them and get latest copy of code?
```
git fetch origin
git reset --hard origin/master
```

All other situations assume you know what you're doing with Git

## Web development - Backend

#### The Basic Stack

* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [SQLite](https://www.sqlite.org/)

#### Requirements

* [Node.js](https://nodejs.org/en/)

#### Install dependencies

```
npm install sqlite3
```
<br>
```
npm install
```

#### Deploy

* Create ```./data``` directory
* Start server at http://localhost:9090

```
node app.js
```


#### Integration with HTML
* Add this to your HTML form to post to form1 table: ```<form role="form" id="form1" action="http://localhost:9090/form1" method="post">```