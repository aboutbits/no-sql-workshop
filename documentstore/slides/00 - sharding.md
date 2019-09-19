# Sharding

## Motivation

- Support very large datasets, that can not be stored by vertical scaling.
- Vertically scaling is limited, especially if you are using cloud providers.
- Support horizontal scaling on comodity hardware.
- Achieve higher throughput with multiple machines vs a single highly equiped machine.

## What does Sharding mean?

- Distributing data across multiple machines
- Each shard contains a subset of a very large collection
- A specific **shard key** defines how the data is split and distributed within the cluster

## Advantages of sharding

- Read / Writes: Sharding supports distribution of the read and write workload across the shards. Each shard processes a subset of cluster operations. If an operation targets a specific shard key, the router can direct the operation to the specific shard.

- Storage Capacity: As the data set grows, additional shards increase the storage capacity of the cluster.

- High Availability: A sharded cluster can continue to perform partial read / write operations even if one or more shards are unavailable. While the subset of data on the unavailable shards cannot be accessed during the downtime, reads or writes directed at the available shards can still succeed.
