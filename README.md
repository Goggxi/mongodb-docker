* cek mongo version
https://docs.mongodb.com/manual/release-notes/

## Setup mongodb
* in terminal
* running mongo container on docker-compose
```text
    docker-compose -f docker-compose.yml up -d
```
* go to mongo shell
```text
    docker exec -it mongo /bin/sh
```
* connect to mongo
```text
    mongo

    - or -
 
    mongo --host localhost --port 27017
```