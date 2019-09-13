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

4. Query nested document

5. Spatial query with index

6. Full text query with index
