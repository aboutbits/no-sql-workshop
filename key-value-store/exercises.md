# Exercises

## Set up

Start the containers by executing the following command inside the current directory:

```bash
docker-compose up --build
```

You can access the Web UI using this URL: [http://localhost:8888/](http://localhost:8888/).

Most of the following exercises can be done directly using the Web UI.

## Exercise 1 - Basic commands

Try to create, read, update and delete a string value in the Redis database. Play around with the basic commands and try to get used to them.

- Create
- Read
- Update
- Delete
- Exists

You can find the appropiate Redis commands on this page: [https://redis.io/commands](https://redis.io/commands).

## Exercise 2 - String commands

Try to find the commands to perform the following string operations:

1. Append a string
2. Length of a string

## Exercise 3 - Integer commands

Try to find the commands to perform the following integer operations:

1. Increment an integer
2. Decrement an integer
3. Increment an integer by 5
4. Decrement an integer by 5

## Exercise 3 - TTL (Time To Live)

Create an entry that expires in 10 seconds. Check the remaining time to live of the entry.

Create an additional entry without TTL and check also the remaining time of this entry.

What do the values -1 and -2 mean?

What happens to the TTL when you update an entry?

## Exercise 4 - List commands

Try to find the commands to perform the following list operations:

1. Create a list
2. Append list items at the start of the list
3. Append list items at the end of the list
4. Get the length of the list
5. Get the item at a specific index
6. List all items of the list
7. List only a specific range of the list
8. Remove an item from the start of the list
9. Remove an item from the end of the list

## Exercise 5 - Set commands

Try to find the commands to perform the following set operations:

1. Create a set
2. Add items to the set
3. Add the same item multiple times to the set
4. List all items of the set
5. Check if an item is in the set
6. Remove an item form the set

## Exercise 6 - Hashes commands

Try to find the commands to perform the following hashes operations:

1. Create a hash with differend fields and values
2. Get all values of a hash
3. Get only a specific field of a hash
4. Remove a specific field of a hash

## Exercise 7 - Publish/Subscribe

Implement two applications that communicate with each other using Redis with the publish and subscribe commands. You are free to use your programming language of choice.

The Redis server can be accessed on `localhost:6379`.

## Tear down

Stop the containers by executing the following command inside the current directory:

```bash
docker-compose down
```
