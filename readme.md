# Assignment 2 - Web API.

Name: Michael Barcoe - 20080330

## Features.
 
 + Feature 1 - Display a list of Movies
 + Feature 2 - Display a list of Tv Shows
 + Feature 3 - Display a list of Actors
 + Feature 4 - Login using you login credentials
 + Feature 5 - Sign up an account with a password and email

 

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone http:\myrepo.git
```

followed by installation
```bat
git install
```

followed by npm installation
```bat
npm install
```


## API Configuration

+ Creat Cluster in Mongodb, get url of cluster

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY = YourTMDBKey
mongoDB=YourMongoURL
MONGO_DB=YourMongoURL
SEED_DB=true
SECRET=YourJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies |
| /api/actors | Get a list of actors |
| /api/tvshows | Get a list of tv shows|
| /api/tvshows | Get a list of tv shows|
| /api/users | Get a list of users|
| /api/users/ | Post a users|
| ... | ... | ... | ... | ...


## Security and Authentication
Movies, TvShows and actors list pages are protected. User will have to login to access the pages


## Integrating with React App

The below method is for getting tv shows from the api. A similar method is used to get movies, actors and users

~~~Javascript
 export const getTvShows = () => {
    return fetch(
       '/api/tvshows',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
~~~


# Assignment 2 - Agile  

Name: Michael Barcoe - 20080330


## Target Web API.

+ Get /api/movies - returns an array of movie objects.
+ Get /api/actors - returns an array of actor objects.
+ Get /api/tvshows - returns an array of tv show objects.
+ Get /api/movies/:id - returns detailed information on a specific movie.

## Basic Testing
Basic test for Movies
- check the return of 20 movies
- check return matching movie to id
- check not return message for incorrect id

### Basic test for Users
- check the return of 2 users
- check return matching movie to id
- check not return message for incorrect id

### Basic test for Tv Shows
- check the return of 20 tvshows
- check return matching tv show to id
- check not return message for incorrect id

### Basic test for Actors
- check the return of 20 actors
- check return matching movie to id
- check not return message for incorrect id


## Continuous Delivery/Deployment.

+ https://moviesdb-api-staging.herokuapp.com/ - Staging deployment

+ Staging app overview 

![][stagingapp]

[stagingapp]: https://res.cloudinary.com/dmikx06rt/image/upload/v1610895669/Assignment2%28agileReadMe%29/heroku_ppniyx.png
