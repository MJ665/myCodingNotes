## MongoDB Notes


mongoDb is a document database designed for ease of development and scaling
it is easy and easy to use NoSQL database
available as community and enterprice edition
however community edition is itself very powerfull

mongo is a command line shell that connects to a specific instances in a mongod
mongod mongo daemon is basically host process for the database

```
sql terms/concepts      ------->      MongoDB terms/concepts
database                ------->      database
tables                  ------->      collections
rows                    ------->      documents(BSON)
columns                 ------->      fields
key --->value           ------->      fields ---> value
primary key             ------->      ObjectId

```

show dbs to list all data bases



CRUD
C - creat
R - read
U - update
D - delete

```
https://youtu.be/J6mDkcqU_ZE

https://youtu.be/oSIv-E60NiU

https://www.mongodb.com/basics/crud

https://www.codewithharry.com/blogpost/mongodb-cheatsheet/

https://www.mongodb.com/docs/manual/core/aggregation-pipeline/

```



Command Line Notes
```
use employee ->to switch to employee dbs


db.manager.insertOne({
    name:'vishal',
    std:"3",
    age:"23",
})



db.manager.insertMany([{
    name:'vishal',
    std:"3",
    age:"23",
},{
    name:'vishal',
    std:"3",
    age:"23",
},{
    name:'vishal',
    std:"3",
    age:"23",
},{
    name:'vishal',
    std:"3",
    age:"23",
}])







db.manager.find()-----> to fetch all the document in  
db.manager.find({name:"vishal"})-----> to fetch all the document in  
db.manager.find({name:"vishal"})-----> to fetch all the document in  


OR

db.inventory.find( { status: { $in: [ "A", "D" ] } } )--------->The following example retrieves all documents from the inventory collection where status equals either "A" or "D":

The operation uses a filter predicate of { status: { $in: [ "A", "D" ] } }, which corresponds to the following SQL statement:
`



AND

db.inventory.find( { status: "A", qty: { $lt: 30 } } )----->A compound query can specify conditions for more than one field in the collection's documents. Implicitly, a logical AND conjunction connects the clauses of a compound query so that the query selects the documents in the collection that match all the conditions.

The following example retrieves all documents in the inventory collection where the status equals "A" and qty is less than ($lt) 30:
here $lt means < less than symbol


OR


```



## Cheat Sheet by Code With Harry

```

this is copy of mongodb cheat sheet blog of codewithharry


All MongoDb commands you will ever need (MongoDb Cheatsheet)
In this post, we will see a comprehensive list of all the MongoDB commands you will ever need as a MongoDB beginner. This list covers almost all the most used commands in MongoDB.

I will assume that you are working inside a collection named 'comments' on a MongoDB database of your choice

1. Database Commands
View all databases
show dbs
Create a new or switch databases 
use dbName
View current Database
db
Delete Database 
db.dropDatabase()
2. Collection Commands
Show Collections
show collections
Create a collection named 'comments'
db.createCollection('comments')
Drop a collection named 'comments'
db.comments.drop()
3. Row(Document) Commands
Show all Rows in a Collection 
db.comments.find()
Show all Rows in a Collection (Prettified)
db.comments.find().pretty()
Find the first row matching the object
db.comments.findOne({name: 'Harry'})
Insert One Row
db.comments.insert({
    'name': 'Harry',
    'lang': 'JavaScript',
    'member_since': 5
 })
Insert many Rows
db.comments.insertMany([{
    'name': 'Harry',
    'lang': 'JavaScript',
    'member_since': 5
    }, 
    {'name': 'Rohan',
    'lang': 'Python',
    'member_since': 3
    },
    {'name': 'Lovish',
    'lang': 'Java',
    'member_since': 4
}])

Search in a MongoDb Database
db.comments.find({lang:'Python'})
Limit the number of rows in output
db.comments.find().limit(2)
Count the number of rows in the output
db.comments.find().count()
Update a row
db.comments.updateOne({name: 'Shubham'},
{$set: {'name': 'Harry',
    'lang': 'JavaScript',
    'member_since': 51
}}, {upsert: true})
Mongodb Increment Operator
db.comments.update({name: 'Rohan'},
{$inc:{
    member_since: 2
}})
Mongodb Rename Operator
db.comments.update({name: 'Rohan'},
{$rename:{
    member_since: 'member'
}})
Delete Row 
db.comments.remove({name: 'Harry'})
Less than/Greater than/ Less than or Eq/Greater than or Eq
db.comments.find({member_since: {$lt: 90}})
db.comments.find({member_since: {$lte: 90}})
db.comments.find({member_since: {$gt: 90}})
db.comments.find({member_since: {$gte: 90}})
```