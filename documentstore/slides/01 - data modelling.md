# Data models

- In RDBMS the data model is representing the real world, with all its relations.
- In document stores usually you try to model the data according to the needs of your queries.
- Flexible schema means, that no schema needs to be defined upfront.
- Double, String, Object, Array, ObjectId, Boolean, Date, ...

## Embedded vs. Normalized data models

- Embed related data in a single structure or document (denormalized)
    - One-to-one relationships
    - One-to-many relationships
    - Support fast reads and atomic writes
- Normalized data can be achieved with relationships
    - to avoid duplication
    - complex many-to-many relationships
    - large hierarchical data sets
