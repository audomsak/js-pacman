# PacMan: single and multiplayers
[![Build Status](https://travis-ci.org/dubzzz/js-pacman.svg?branch=master)](https://travis-ci.org/dubzzz/js-pacman)[![Coverage Status](https://coveralls.io/repos/dubzzz/js-pacman/badge.svg?branch=master)](https://coveralls.io/r/dubzzz/js-pacman?branch=master)

An online version of the famous PacMan game. It features the ability to play online with up to 4 players on the same grid.

Initially the project focused on a 100% client-side version of the PacMan game. Due to a will to discover both websockets and Node.js, I decided to increase this challenge by creating a program with a light client and heavy server.
The last commit on the client only version is [0ff5bcb](https://github.com/dubzzz/js-pacman/tree/0ff5bcbdb37726a8097032dfba5ff3a149b1a626). This new architecture allowed to add a multiplayers functionnality.

So that this version has two sides:
- a server (Node.js): Which has to manage the whole game. It has to compute each iteration of it and send back results to as many clients as necessary.
- a client: Which has to render what has been computed server-side.

## Run the server using Docker

### Setup Docker on your computer

I recommand you to follow the instructions available on the official documentation of docker: https://docs.docker.com/engine/installation/linux/debian/

### Build and run the image

```bash
$: # Create an image called pacman
$: sudo docker build -t pacman .
$: # Run it at port 8080 in daemon mode
$: sudo docker run -d -p 8080:80 pacman
$: # List running dockers (-a to see all dockers)
$: sudo docker ps
$: # Stop the container
$: sudo docker stop <constainer_id>
```

## Run the server locally

### Setup Node.js on your computer

In order to run ```js-pacman``` on your machine, you need to have a valid version of Node.js. Indeed this project is a server-side program written in JavaScript.

### Install required dependencies

```js-pacman``` requires some dependencies to be able to run properly. Among these dependencies we can quote:
- Socket.IO: heavily used in this project to handle the communications between the server and its clients to establich and then run the game
- Express: used to serve static files (mainly used for its routes)

In order to install these dependencies, you need to ```cd``` in the root of this project and run the following command:

```
npm install
```

### Run the server using Node.js

Once all the pre-requisites explained before are solved, you can launch the server using:

```
node app.js
```

Alternatively you can use this command:

```
./app.js
```

## Test it

http://pacman.dubien.me
