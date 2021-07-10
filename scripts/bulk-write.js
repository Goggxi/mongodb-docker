db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "ipang",
                full_name: "ipang"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "rifkan",
                full_name: "rifkan"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ["moh", "rifkan", "goggxi"]
                }
            },
            update: {
                $set: {
                    full_name: "Moh Rifkan Goggxi"
                }
            }
        }
    }
])