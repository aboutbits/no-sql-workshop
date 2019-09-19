# Document-based stores

- NoSQL database concept
- Subclass of key-value stores
- In a key-value store, the data is considered to be inherently opaque to the database.
- In document stores, the value is a document, on which the system can extract metadata that the database engine uses for further optimization. For example GPS coordinates for geospatial queries.
- The values of fields may include other documents, arrays, and arrays of documents.

## Advantages of using documents

- Documents can often be mapped one-to-one with native data types in many programming languages.
- Embedded documents reduce the need for expensive joins.
- Dynamic schema supports fluent polymorphism. This is particuarly useful if you are building a prototype, where the structure of your data is not very clear from the beginning.

## Key features of document-based stores

- no static schema (its even possible to have differnt datatypes for one field)
- data aggregation on large datasets by leverging the pricinples of map-reduce
- supports large datasets by horizontal scaling
- high availability (no single point of failure, due to replica sets)
