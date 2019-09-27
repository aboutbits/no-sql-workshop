## Query mongodb

1. Get a tree by _id

    ```javascript
    db.getCollection('trees').find({
        _id: ObjectId("5d7ba48752129b84dd9f8674")
    })
    ```

    Note the time it took to retrieve the document.

2. Get a tree by OBJECTID

    ```javascript
    db.getCollection('trees').find({
        OBJECTID: 1004
    })
    ```

    Note the time it took to retrieve the document.

3. Why is the first one slower than the second one and how can we fix this? Create an index.

    ```javascript
    db.trees.createIndex( { OBJECTID: 1 } )
    ```
    This command will create an index on the _OBJECTID_ field, with ascending order.
    Try to execute the query from listing 2 again. Can see any difference?

5. Spatial data

Lets prepare the data. Currently X and Y are just values as any other value in the document. We have to let MongoDB know that these are special coordinates.

Therefore we need to transform the data and change the schema.

```
{ type: "Point", coordinates: [ 40, 5 ] }
```

```
db.trees.update(
  {},
  [{ $set: { loc: { type: "Point", coordinates: [ "$X", "$Y" ] } } }],
  { multi: true }
)
```

5.1 Find all trees within a radius of 10 meters


First we need an index to make $near queries.

```
db.trees.createIndex({loc:"2dsphere"});
```

```
db.trees.find(
   {
       loc:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [ -122.318951977075, 47.649140795159 ] },
            $minDistance: 0,
            $maxDistance: 10
          }
       }
       }
   )
```

6. Aggregation pipeline
