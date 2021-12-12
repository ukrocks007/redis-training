# Lists

## LPUSH RPUSH 
### Push data on the left and right of list
#### ```lpush key element [element ...]```
#### ```rpush key element [element ...]```
```
127.0.0.1:6379> lpush nums 1
(integer) 1
127.0.0.1:6379> lpush nums 2
(integer) 2
127.0.0.1:6379> rpush nums 0
(integer) 3
```

## LRANGE
### Get list and print data
#### ```lrange key start stop```
```
127.0.0.1:6379> lrange nums 0 3
1) "2"
2) "1"
3) "0"
```

## LLEN
### Print the length of list
#### ```llen key```
```
127.0.0.1:6379> llen nums
(integer) 3
```

## LINDEX
### Get the element from the list using index
#### ```lindex key index```
```
127.0.0.1:6379> lindex nums 0
"2"
127.0.0.1:6379> lindex nums 1
"1"
```

## LREM
### Removes element/elements from list
#### ```lrem key count element```
```
127.0.0.1:6379> lrange nums 0 3
1) "3"
2) "2"
3) "1"
4) "0"
127.0.0.1:6379> lrem nums 1 2
(integer) 1
127.0.0.1:6379> lrange nums 0 3
1) "3"
2) "1"
3) "0"
```