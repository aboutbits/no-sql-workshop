### Documentstore - MongoDB

## Setup of MongoDB

```
docker-compose up --build
```

## Import the dataset

```
docker-compose run --rm mongo mongoimport --host workshop_mongo -d workshop -c trees --type csv --file /tmp/data/Trees.csv --headerline
```

## Web UI

`http://localhost:8888/`

## Desktop UI

MongoDB Compass or Robo 3T.
I personally like Robo 3T.
