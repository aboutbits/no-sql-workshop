# CRUD operations

- Insert
    - Every document needs a unique _id
    - atomic on single document level
    - Bulk insert support
- Query
    - Its possible to also query nested structures such as objects and arrays
- Update
    - modify single fields of a document
    - update the first document that matches a query
    - replace a complete document
- Delete

# Aggregations

- Group values from multiple documents together
- Perform a variety of operations on the grouped data to return a single result
- Three methods:
    - Aggregation pipelines
    - Map-Reduce function
    - Single-Purpose Aggregation (count, distinct, ...)

## Aggregation pipelines

- Documents enter a multi-stage pipeline that transforms the documents into aggregated results
- 28 different stages, that can be applied multiple times (`$count, $sortByCount, $group, $geoNear, $graphLookup, ...`)
- Place `$match`, `$limit` and `$skip` stages at the beginning to reduce the number of documents that enter the pipeline
- Used on a sharded cluster, Mongo makes sure that each shard performs as much as possible on its own.

```javascript
{
  _id : "jane",
  joined : ISODate("2011-03-02"),
  likes : ["golf", "racquetball"]
}
{
  _id : "joe",
  joined : ISODate("2012-07-02"),
  likes : ["tennis", "golf", "swimming"]
}
```

```javascript
db.users.aggregate(
  [
    { $project :
       {
         month_joined : { $month : "$joined" },
         name : "$_id",
         _id : 0
       }
    },
    { $sort : { month_joined : 1 } }
  ]
)
```

1. The `$project` operator:
    - Creates two new fields: month_joined and name.
    - Suppresses the id from the results. The aggregate() method includes the _id, unless explicitly suppressed.
2. The `$month` operator converts the values of the joined field to integer representations of the month. Then the $project operator assigns those values to the month_joined field.
3. The `$sort` operator sorts the results by the month_joined field.

```javascript
{
  "month_joined" : 1,
  "name" : "jane"
},
{
  "month_joined" : 2,
  "name" : "jill"
}
```

## Map-Reduce function

- Paradigm to condense large data sets to aggregated results
- Has more flexibility than the aggregation pipeline
- Custom JavaScript functions provide flexibility to map-reduce operations
- Additional finalize stage can polish the data after the reduce function

![Map-Reduce](https://docs.mongodb.com/manual/_images/map-reduce.bakedsvg.svg)

### Map-reduce on sharded collections

- Everything runs in parallel on each shard
- **Map phase**: extract and calculate values from documents and assign them to a key
- **Shuffle phase** (transparent to the user): based on the key, groups will be created and redistributed to the shards, such that same keys are being processed by a single shard
- **Reduce phase**: Execute reduce function on the intermediate result
- **Finalize phase**: Optional phase, where additional calculations on the reduce values can be made.
