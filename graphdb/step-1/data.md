http://graphgen.graphaware.com/#/

```
(user:#User *10)
(post:#BlogPost *200)
(post2:#BlogPost:ActivePost {active:{randomElement:["true"]}} *200)
(user)-[:WRITTEN *1..n]->(post)
(user)-[:WRITTEN *1..n]->(post2)
(user)-[:FOLLOWS *n..n]->(user)
```
