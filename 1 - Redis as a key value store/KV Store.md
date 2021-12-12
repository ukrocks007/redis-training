# Redis As A Key Value Store

## Setting a key
```
127.0.0.1:6379> SET message "Hello, World!"
OK
```

## Getting a value from key
```
127.0.0.1:6379> GET message
"Hello, World!"
```

# NX/XX parameters

## Setting data if the key done not exists
```
127.0.0.1:6379> set counter 5 nx

127.0.0.1:6379> set counter 5 xx
```

```
NX -- Only set the key if it does not already exist.
XX -- Only set the key if it already exist.
```

# Increment & Decrement

## Increment
```
127.0.0.1:6379> set counter 10
OK
127.0.0.1:6379> incr counter
(integer) 11
127.0.0.1:6379> get counter
"11"
```

## Increment By
```
127.0.0.1:6379> incrby counter 9
(integer) 20
127.0.0.1:6379> get counter
"20"
```

## Decrement
```
127.0.0.1:6379> decr counter
(integer) 19
127.0.0.1:6379> get counter
"19"
```

## Decrement By
```
127.0.0.1:6379> decrby counter 4
(integer) 15
127.0.0.1:6379> get counter
"15"
```

# Multiple GET & SET operations

## MSET
```
127.0.0.1:6379> mset a 2 b 3 c 4
OK
```

## MGET
```
127.0.0.1:6379> mget a b c
1) "2"
2) "3"
3) "4"
```

# Key related options

## EXISTS
```
127.0.0.1:6379> exists counter
(integer) 1
127.0.0.1:6379> exists abcd
(integer) 0
```

## TYPE
```
127.0.0.1:6379> type counter
string
```

## DEL
```
127.0.0.1:6379> del counter
(integer) 1
```