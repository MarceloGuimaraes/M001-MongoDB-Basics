# M001: MongoDB-Basics
![Imgur](https://i.imgur.com/QMupvon.png)

M001: MongoDB Basics course | MongoDB University (https://university.mongodb.com/courses/M001/about) 

MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with flexible schema.

## Download Compass and connect to the course database

Hostname: cluster0-shard-00-00-jxeqq.mongodb.net

Username: m001-student

Password: m001-mongodb-basics

Replica Set Name: Cluster0-shard-0

Read Preference: Primary Preferred

SSL: System CA / Atlas Deployment


## Connect to Atlas cluster
mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/test?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basics



