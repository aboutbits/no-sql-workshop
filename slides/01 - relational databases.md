# Relational Databases

## Relational Databases

- Is a digital database based on the relational model of data
- Relational model organizes data into one or more tables of columns and rows

Source: https://en.wikipedia.org/wiki/Relational_database

## RDBMS

- Relational database management system
- A software system used to maintain relational databases
- Mostly SQL (Structured Query Language) used for querying and maintaining the database
- Transactions are used to operate efficiently and accurately

Source: https://en.wikipedia.org/wiki/Relational_database

## ACID

- Atomicity, Consistency, Isolation, Durability
- Is a set of properties of database transactions intended to guarantee validity even in the event of errors, power failures, etc. In the context of databases, a sequence of database operations that satisfies the ACID properties (and these can be perceived as a single logical operation on the data) is called a transaction.

Source: https://en.wikipedia.org/wiki/ACID

### Atomicity

Transactions are often composed of multiple statements. Atomicity guarantees that each transaction is treated as a single "unit", which either succeeds completely, or fails completely: if any of the statements constituting a transaction fails to complete, the entire transaction fails and the database is left unchanged. An atomic system must guarantee atomicity in each and every situation, including power failures, errors and crashes.

### Consistency

Consistency ensures that a transaction can only bring the database from one valid state to another, maintaining database invariants: any data written to the database must be valid according to all defined rules, including constraints, cascades, triggers, and any combination thereof. This prevents database corruption by an illegal transaction, but does not guarantee that a transaction is correct. Referential integrity guarantees the primary key - foreign key relationship. 

### Isolation

Transactions are often executed concurrently (e.g., multiple transactions reading and writing to a table at the same time). Isolation ensures that concurrent execution of transactions leaves the database in the same state that would have been obtained if the transactions were executed sequentially. Isolation is the main goal of concurrency control; depending on the method used, the effects of an incomplete transaction might not even be visible to other transactions. 

### Durability

Durability guarantees that once a transaction has been committed, it will remain committed even in the case of a system failure (e.g., power outage or crash). This usually means that completed transactions (or their effects) are recorded in non-volatile memory. 
