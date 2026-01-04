use("CRUD")

console.log(db)

db.createCollection("courses")

db.courses.insertOne({
    name: "jivan web dev course",
    price: 0,
    assignments: 12,
    project: 12
})


db.courses.insertMany([
    {
        name: "Jivan Web Development Course",
        price: 0,
        assignments: 12,
        project: 12
    },
    {
        name: "MERN Stack Development",
        price: 300,
        assignments: 15,
        project: 6
    },
    {
        name: "JavaScript Mastery",
        price: 150,
        assignments: 10,
        project: 5
    },
    {
        name: "React.js Complete Course",
        price: 180,
        assignments: 14,
        project: 7
    },
    {
        name: "Node.js & Express",
        price: 200,
        assignments: 11,
        project: 6
    },
    {
        name: "UI/UX Design Basics",
        price: 120,
        assignments: 8,
        project: 4
    },
    {
        name: "Graphic Design Essentials",
        price: 100,
        assignments: 9,
        project: 3
    },
    {
        name: "SEO & Digital Marketing",
        price: 130,
        assignments: 10,
        project: 4
    },
    {
        name: "MongoDB Database Course",
        price: 140,
        assignments: 12,
        project: 5
    },
    {
        name: "Full Stack Web Bootcamp",
        price: 350,
        assignments: 20,
        project: 10
    }
])

let b = db.courses.findOne({ price: 0 })

console.log(b)

db.courses.updateOne({ price: 0 }, {$set:{ price: 12000 }})

db.courses.updateMany({ price: 0 }, {$set:{ price: 1232000 }})


db.courses.deleteMany({price:12000})
