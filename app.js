const Datastore = require('nedb')
const users = new Datastore('users.db')
users.loadDatabase()

const people = []

const scott = {  
    name: 'Scott Robinson',
    age: 28,
    twitter: '@ScottWRobinson'
}

const elon = {  
    name: 'Elon Musk',
    age: 44,
    twitter: '@elonmusk'
}

const jack = {  
    name: 'Jack Dorsey',
    age: 39,
    twitter: '@jack'
}

people.push(scott, elon, jack)

users.insert(people, function(err, docs) {  
    docs.forEach(function(d) {
        console.log('Saved user:', d.name)
    })
})

users.findOne({ twitter: '@ScottWRobinson' }, function(err, doc) {  
    console.log('Found user:', doc.name)
})
