# Step 1

## Download sample dataset

Tree dataset of the city of Seattle

Listing of both publicly and privately maintained trees in the public right of
way, with information on the condition, location, size, species and
maintenance responsibility. Data was collected with the intent to predict
maintenance needs, as well as to show the level of diversification within the
street tree population.

http://data-seattlecitygis.opendata.arcgis.com/datasets/0b8c124ace214943ab0379623937eccb_6.csv
https://www.seattle.gov/Documents/Departments/SDOT/GIS/Trees_OD.pdf

Copy the downloaded file into the current folder: `documentstore/step-1/`

## Setup of MongoDB

```
docker-compose up --build
```

## Import the dataset

```
docker-compose run --rm mongo mongoimport --host mongo -d workshop -c trees --type csv --file /tmp/data/Trees.csv --headerline
```

## MongoDB Compass

GUI to visualize your data in your MongoDB cluster. There are also other options like Robomongo, which are also great for inspecting your data.

Please download and install the community version on your local machine.

https://www.mongodb.com/download-center/compass

Connect to local mongodb instance. Keep all the defaults and **CONNECT**.
