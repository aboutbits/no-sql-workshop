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

5.1 Find all trees within a radius of 50 meters for these coordinates: [ -122.318951977075, 47.649140795159 ]

Hint: 
- we need an index to make $near queries
- it should have 11 trees in the result.

## 6. Aggregation pipeline

  1. Get the number of trees per "BOTANICAL NAME"

```
db.trees.aggregate([
  {
    $group: {
      _id: "$BOTANICAL_NAME",
      numberOfTrees: { $sum: 1 }
    }   
}
]);
```

  2. Sort the above result by the number of trees in descending order

  3. Calculate the average CONDITION_RATING per group

  4. Within every group of BOTANITCAL_NAME find the number of trees per CONDITIONAL_RATING

  5. Define the percentage of trees per CONDITION_RATING for the BOTANICAL_NAME: "PAPE".

  conditionRating: 2, ratio: 0.018796992481203
  conditionRating: 4: ratio: 0.759398496240602
  ...
