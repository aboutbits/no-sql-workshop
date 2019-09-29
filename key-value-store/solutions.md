# Solutions

## Exercise 1 - Basic commands

```
SET workshop:string "We are learning Redis"
GET workshop:string
DEL workshop:string
EXISTS workshop:string
```

## Exercise 2 - String commands

```
APPEND workshop:string " at the NOI Techpark"
STRLEN workshop:string
```

## Exercise 3 - Integer commands

```
SET workshop:integer 10
INCR workshop:integer
DECR workshop:integer
INCRBY workshop:integer 5
DECRBY workshop:integer 5
```

## Exercise 3 - TTL (Time To Live)

Setting a value with an expiration time:

```
SET workshop:ttl "I'm only here for some seconds!" EX 10

SET workshop:ttl "I'm only here for some seconds!"
EXPIRE workshop:ttl 10
```

Checking the expiration time:

```
EXPIRE workshop:ttl 10
```

The -2 for the TTL of the key means that the key does not exist (anymore). A -1 for the TTL of the key means that it will never expire.

If you SET a key, its TTL will be reset.

## Exercise 4 - List commands

```
LPUSH workshop:list "blue"
LPUSH workshop:list "white"
RPUSH workshop:list "red"
RPUSH workshop:list "green"

LLEN workshop:list

LINDEX workshop:list 1

LRANGE workshop:list 0 -1
LRANGE workshop:list 1 2

LPOP workshop:list
RPOP workshop:list
```

## Exercise 5 - Set commands

```
SADD workshop:set "red"
SADD workshop:set "green"
SADD workshop:set "blue"

SMEMBERS workshop:set

SISMEMBER workshop:set "red"

SREM workshop:set "red"
```

## Exercise 6 - Hashes commands

```
HSET user:1000 name "Alex Lanz"
HSET user:1000 email "alex.lanz@aboutbits.it"
HSET user:1000 language "de"

HGETALL user:1000

HGET user:1000 name

HDEL user:1000 language
```

## Exercise 7 - Publish/Subscribe

```bash
docker-compose run --rm node solution-exercise7-subscribe.js
docker-compose run --rm node solution-exercise7-publish.js
```
