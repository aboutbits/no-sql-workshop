# Graph databases

- What is a graph?
    - Nodes: Every node represents an entity (person, place)
    - Relationships: Represents how two nodes are connected
- What is a graph database?
    - Relationships have the highest priority in graph databases
    - No need to use foreign keys in combination with map reduce to find the answers
    - [Graph databases book](https://neo4j.com/graph-databases-book/)

## Motivation

- Constant time for relationship queries
- Flexible schema
- Adding new relationships should be easy

## Example Friend Graph

- person: nodes
- friends_with: relationship

For a graph database it is very easy to answer questions like:

What are my friends friends?

And even more levels deep. With a RDBMS we would have to solve this by joining the table again and again.
