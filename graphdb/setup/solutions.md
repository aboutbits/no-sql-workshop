3. Find the company with the name "Kross Group" and explore the linked data by using the UI.

```
MATCH (c:Company {name:"Koss Group"}) RETURN c
```

4. Find all companies that are looking for people with "REBOL" skill.

```
MATCH (c:Company)-[:LOOKS_FOR_COMPETENCE]->(s:Skill {name:"REBOL"}) RETURN c
```

4.1 Calculate the count of companies that are looking for people with "REBOL" skill.
```
MATCH (c:Company)-[:LOOKS_FOR_COMPETENCE]->(s:Skill {name:"REBOL"})
RETURN count(*) as count
```

4.2 Aggregate the number of companies per skill and list them.
```
MATCH (c:Company)-[:LOOKS_FOR_COMPETENCE]->(s:Skill)
RETURN s.name, collect(c.name)
```

5. Find people that could be interesting for company "Kross Group"

```
MATCH (c:Company {name:"Koss Group"})-[:LOOKS_FOR_COMPETENCE]->(s:Skill)<-[:HAS]-(p:Person)
RETURN p
```

6. Find people that live in the area where company "Koss Group" is located.

```
MATCH (c:Company {name:"Koss Group"})-[:LOCATED_IN]->(l:Country)<-[:LIVES_IN]-(p:Person)
RETURN p
```

7. Find people that live in the area where company "Koss Group" is located and have the necessary skill that the company is looking for.

```
MATCH (c:Company {name:"Koss Group"})-[:LOOKS_FOR_COMPETENCE]->(:Skill)<-[:HAS]-(p:Person)-[:LIVES_IN]->(:Country)<-[:LOCATED_IN]-(c)
RETURN p
```



