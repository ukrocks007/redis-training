# Hashes

## HMSET
### Sets multiple hash fields to multiple values
#### ```hmset key field value [field value ...]```
```
127.0.0.1:6379> hmset user name utkarsh training Redis company TechHut
OK
```

## HGETALL
### Gets all the fields and values stored in a hash at the specified key
#### ```hgetall key```
```
127.0.0.1:6379> hgetall user
1) "name"
2) "utkarsh"
3) "training"
4) "Redis"
5) "company"
6) "TechHut"
```

## HSET
### Sets the string value of a hash field
#### ```hset key field value [field value ...]```
```
127.0.0.1:6379> hset user year 2021
(integer) 1
127.0.0.1:6379> hgetall user
1) "name"
2) "utkarsh"
3) "training"
4) "Redis"
5) "company"
6) "TechHut"
7) "year"
8) "2021"
```

## HGET
### Gets the value of a hash field stored at the specified key
#### ```hget key field```
```
127.0.0.1:6379> hget user company
"TechHut"
```

## HVALS
### Gets all the values in a hash
#### ```hvals key```
```
127.0.0.1:6379> hvals user
1) "utkarsh"
2) "Redis"
3) "TechHut"
4) "2021"
```

## HKEYS
### Gets all the fields in a hash
#### ```hkeys key```
```
127.0.0.1:6379> hkeys user
1) "name"
2) "training"
3) "company"
4) "year"
```

## HLEN
### Gets the number of fields in a hash
#### ```hlen key```
```
127.0.0.1:6379> hlen user
(integer) 4
```