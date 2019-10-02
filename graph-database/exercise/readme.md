# Graph database - Neo4j

## Docker - Setup

`docker-compose up --build`

## Discovery

http://localhost:7474

username: neo4j
password: neo4j

## Import data

`docker exec -it nosql-workshop-neo4j /bin/bash`
`cypher-shell -u neo4j -p %YOUR_PASSWORD% < '/import/import.cql'`
