## Modelling data in document store

### Flexible schema

- The documents in a single collection do not need to have the same set of fields and the data type for a field can differ across documents within a collection.

- To change the structure of the documents in a collection, such as add new fields, remove existing fields, or change the field values to a new type, update the documents to the new structure.

https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-one-relationships-between-documents/

Update many: Change the type of a field by reindexing all the data

- https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany


### Modelliung relationships

https://docs.mongodb.com/manual/core/data-model-design/
