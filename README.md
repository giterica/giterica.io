giterica.io
===========

giterica.io static website. Pug, Sass, Gulp, Bootstrap 4, Docker.

Build Setup
-----------

```bash
# install dependencies
npm i

# serve with live reload at localhost:8080
npm start
# serve with live reload at 0.0.0.0:8080
npm start:broadcast

# build without minification for development/test/debug purpose into "dev-dist" directory
npm run build:dev

# build for production with minification into "docker/dist"
npm run build

# build docker image
# works in Linux only
npm run docker:build
```

See ``scripts`` section in ``package.json`` for other available commands.

Complete Docker image
---------------------

Complete Docker images of [giterica.io](https://giterica.io) website is available on 
<https://hub.docker.com/r/giterica/giterica.io/> 
(see [Tags](https://hub.docker.com/r/giterica/giterica.io/tags/) section).

For example: 

```
$ docker run -d -p 80:80 --name=giterica.io giterica/giterica.io:1.0.0
...
...
$ curl -I localhost
HTTP/1.1 200 OK
Server: nginx/1.10.3
Date: Sun, 07 Jan 2018 06:45:55 GMT
Content-Type: text/html
Content-Length: 1385
Last-Modified: Sun, 07 Jan 2018 05:16:12 GMT
Connection: keep-alive
ETag: "5a51ad1c-569"
Expires: Sun, 07 Jan 2018 06:45:55 GMT
Cache-Control: max-age=0
Pragma: no-cache
Accept-Ranges: bytes

$ docker stop giterica.io 
giterica.io
$
```

See also
--------

* <https://github.com/giterica/giterica.io-deploy> - this project deployment on [giterica.io](https://giterica.io) 
server

License
-------

MIT license.
