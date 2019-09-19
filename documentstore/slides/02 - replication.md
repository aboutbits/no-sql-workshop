# Replication

## Motivation

- Redundancy
- High availability
- Increased read capacity
- Copies for dedicated purposes, such as disaster recovery, reporting, or backup


## What does it mean?

- A set of instances maintain the same data set.
- One node receives the write request and the changes will be replicated eventually on all the replicas.
- If one node dies, the rest of the replica set can cover for the missing node.
