# ysChat

Web chat application developed with Express.js, Socket.IO and ReactJS, Bulma.

## How to Use

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/yusufsefasezer/ysChat.git
cd ysChat
```

### Server

```sh
cd server
npm install
```

If you want to use it on your local network, you must change the ip address in the `server/bin/www` file. Find the line below and change it.

```sh
origin: 'http://YOUR-LOCAL-IP:3000'
```

Now you can start the server.

```sh
npm start
```

Your app should now be running on [YOUR-LOCAL-IP:1234](http://0.0.0.0:1234/).

### Client

```sh
cd client
npm install
```

Same as the server, if you want to use it on your local network, you must change the ip address in the `client/src/Socket.js` file. Find the line below and change it.

```sh
const SOCKET_URL = 'YOUR-LOCAL-IP:1234';
```

Now you can start the client.

```sh
npm start
```

Your app should now be running on [YOUR-LOCAL-IP:3000](http://0.0.0.0:3000/).

## Screenshot
![user](screen/user.png)


# License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details

Created by [Yusuf Sezer](https://www.yusufsezer.com)
