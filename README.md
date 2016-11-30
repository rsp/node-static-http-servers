Node Static HTTP Servers
========================

[![Build Status][travis-img]][travis-url]
[![Dependencies Status][david-img]][david-url]
[![Known Vulnerabilities][snyk-img]][snyk-url]
[![License][license-img]][license-url]

Examples of serving static files with HTTP using Node.js
on few levels of abstraction, from `express.static` to directly using the `net` module with raw TCP sockets.

Examples
--------
Every example serves the same files from the [`public`](public) directory and supports the minumum functionality of:

* MIME types for most common files
* serves `index.html` as a default directory index
* responds with error codes for missing files
* no path traversal vulnerabilities
* no race conditions while reading files

Every version is tested with Travis on Node versions 4, 5, 6 and 7. See [test results][travis-url].

All examples:

1. [`express.static`](#expressstatic)
2. [`express`](#express)
3. [`connect`](#connect)
4. [`http`](#http)
5. [`net`](#net)

### `express.static`

[estatic.js](estatic.js) ([raw](https://raw.githubusercontent.com/rsp/node-static-http-servers/master/estatic.js))

This version uses the [`express.static`](https://expressjs.com/en/starter/static-files.html) built-in middleware of the [`express`](https://expressjs.com/) module.

It has the most functionality and the least ammount of code.

### `express`

[express.js](express.js) ([raw](https://raw.githubusercontent.com/rsp/node-static-http-servers/master/express.js))

This version uses the [`express`](https://expressjs.com/) module but without the `express.static` middleware. Serving static files is implemented as a single route handler using streams.

It has simple path traversal countermeasures and supports a limited set of most common MIME types.

### `connect`

[connect.js](connect.js) ([raw](https://raw.githubusercontent.com/rsp/node-static-http-servers/master/connect.js))

This version uses the [`connect`](http://senchalabs.github.com/connect) module which is a one level of abstraction lower than `express`.

It has similar functionality to [the `express` version](#express) but using slightly lower-lever APIs.

### `http`

[http.js](http.js) ([raw](https://raw.githubusercontent.com/rsp/node-static-http-servers/master/http.js))

This version uses the [`http`](https://nodejs.org/api/http.html#http_http) module which is the lowest-level API for HTTP in Node.

It has similar functionality to [the `connect` version](#connect) but using even more lower-level APIs.

### `net`

[net.js](net.js) ([raw](https://raw.githubusercontent.com/rsp/node-static-http-servers/master/net.js))

This version uses the [`net`](https://nodejs.org/api/net.html#net_net) module which is the lowest-level API for TCP sockets in Node.

It has some of the functionality of [the `http` version](#http) but the minimal and incomplete HTTP protocol has been implemented from scratch. Since it doesn't support chunked encoding it loads the files into memory before serving them to know the size before sending a response because statting the files and then loading would introduce a race condition.

Installation
------------
Download the files using git:

```sh
git clone git@github.com:rsp/node-static-http-servers.git
# or:
git clone https://github.com/rsp/node-static-http-servers.git
```

Or download a ZIP file:

```sh
wget https://github.com/rsp/node-static-http-servers/archive/master.zip
tar xzvf master.zip
```

Install dependencies:

```sh
npm install
```

Running tests:

```sh
npm test
```

Running individual servers:

```sh
node net.js
node http.js
node connect.js
node express.js
node estatic.js
```

Issues
------
For any bug reports or feature requests please
[post an issue on GitHub](https://github.com/rsp/node-static-http-servers/issues).

Author
------
[**Rafał Pocztarski**](https://pocztarski.com/)
<br/>
[![Follow on GitHub][github-follow-img]][github-follow-url]
[![Follow on Twitter][twitter-follow-img]][twitter-follow-url]
<br/>
[![Follow on Stack Exchange][stackexchange-img]][stackoverflow-url]

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

[github-url]: https://github.com/rsp/node-static-http-servers
[readme-url]: https://github.com/rsp/node-static-http-servers#readme
[issues-url]: https://github.com/rsp/node-static-http-servers/issues
[license-url]: https://github.com/rsp/node-static-http-servers/blob/master/LICENSE.md
[license-img]: https://img.shields.io/github/license/rsp/node-static-http-servers.svg
[travis-url]: https://travis-ci.org/rsp/node-static-http-servers
[travis-img]: https://travis-ci.org/rsp/node-static-http-servers.svg?branch=master
[snyk-url]: https://snyk.io/test/github/rsp/node-static-http-servers
[snyk-img]: https://snyk.io/test/github/rsp/node-static-http-servers/badge.svg
[david-url]: https://david-dm.org/rsp/node-static-http-servers
[david-img]: https://david-dm.org/rsp/node-static-http-servers/status.svg
[github-follow-url]: https://github.com/rsp
[github-follow-img]: https://img.shields.io/github/followers/rsp.svg?style=social&label=Follow
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=pocztarski
[twitter-follow-img]: https://img.shields.io/twitter/follow/pocztarski.svg?style=social&label=Follow
[stackoverflow-url]: https://stackoverflow.com/users/613198/rsp
[stackexchange-url]: https://stackexchange.com/users/303952/rsp
[stackexchange-img]: https://stackexchange.com/users/flair/303952.png
