# Redis Sets

## SADD
### Adds one or more members to a set
#### ```sadd key member [member ...]```

```
127.0.0.1:6379> sadd fruits mango
(integer) 1
```

## SMEMBERS
### Gets all the members in a set
#### ```smembers key```

```
127.0.0.1:6379> sadd fruits lichi
(integer) 1
127.0.0.1:6379> smembers fruits
1) "mango"
2) "lichi"
```

## SCARD
### Gets the number of members in a set
#### ```scard key```

```
127.0.0.1:6379> scard fruits
(integer) 2
```

## SPOP
### Removes and returns a random member from a set
#### ```spop key [count]```

```
127.0.0.1:6379> spop fruits
"lichi"
127.0.0.1:6379> smembers fruits
1) "mango"
```

## SISMEMBER
### Determines if a given value is a member of a set
#### ```sismember key member```

```
127.0.0.1:6379> sismember fruits lichi
(integer) 0
127.0.0.1:6379> sismember fruits mango
(integer) 1
```

## SREM
### Removes one or more members from a set
#### ```srem key member [member ...]```

```
127.0.0.1:6379> sadd fruits apple orange
(integer) 2
127.0.0.1:6379> smembers fruits
1) "orange"
2) "apple"
3) "mango"
127.0.0.1:6379> srem fruits apple
(integer) 1
127.0.0.1:6379> smembers fruits
1) "orange"
2) "mango"
```

## SUNION
### Adds multiple sets
#### ```sunion key [key ...]```

```
127.0.0.1:6379> smembers fruits
1) "orange"
2) "mango"
127.0.0.1:6379> sadd bigfruits watermelon dragonfruit
(integer) 2
127.0.0.1:6379> sunion fruits bigfruits
1) "orange"
2) "dragonfruit"
3) "watermelon"
4) "mango"
```

## SDIFF
### Subtracts multiple sets
#### ```sdiff key [key ...]```

```
127.0.0.1:6379> sadd odd 1 3 5 7 9
(integer) 5
127.0.0.1:6379> sadd num 1 2 3 4
(integer) 4
127.0.0.1:6379> sdiff odd num
1) "5"
2) "7"
3) "9"
127.0.0.1:6379> sdiff num odd
1) "2"
2) "4"
```

## SINTER
### Intersects multiple sets
#### ```sdiff key [key ...]```

```
127.0.0.1:6379> sinter num odd
1) "1"
2) "3"
127.0.0.1:6379> sinter odd num
1) "1"
2) "3"
```