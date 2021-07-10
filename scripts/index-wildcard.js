// membuat wildcard index
db.customers.createIndex({
    "customFields.$**" : 1
});

// Insert many customers
db.customers.insertMany([
    {
        _id: "ipang",
        full_name: "ipang",
        customFields: {
            hobby: "Gaming",
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "rifkan",
        full_name: "rifkan",
        customFields: {
            ipk: 3.2,
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "ipat",
        full_name: "ipat",
        customFields: {
            motherName: "Tini",
            passion: "Entepreneur"
        }
    }
])

// Debug wildcard index
db.customers.find({
    "customFields.passion": "Enterpreneur"
}).explain();
db.customers.find({
    "customFields.ipk": 3.2
}).explain();
db.customers.find({
    "customFields.hobby": "Gaming"
}).explain();