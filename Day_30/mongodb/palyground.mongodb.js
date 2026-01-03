
// Select the database to use.
use('SigmaWebDevelopment');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    {
        courseName: "Full Stack Web Development",
        coursePrice: 250,
        startDate: new Date("2024-01-10T09:00:00Z"),
        endDate: new Date("2024-06-10T09:00:00Z"),
        lecturerName: "Prabesh Ghimire",
        providedBy: "Unex-Agency",
        durationMonths: 5,
        mode: "Online",
        level: "Beginner to Advanced"
    },
    {
        courseName: "MERN Stack Development",
        coursePrice: 300,
        startDate: new Date("2024-02-01T09:00:00Z"),
        endDate: new Date("2024-07-01T09:00:00Z"),
        lecturerName: "Jivan Sharma",
        providedBy: "Unex-Agency",
        durationMonths: 5,
        mode: "Online",
        level: "Intermediate"
    },
    {
        courseName: "UI/UX Design",
        coursePrice: 180,
        startDate: new Date("2024-03-05T09:00:00Z"),
        endDate: new Date("2024-05-05T09:00:00Z"),
        lecturerName: "Anisha Thapa",
        providedBy: "Design Nepal",
        durationMonths: 2,
        mode: "Online",
        level: "Beginner"
    },
    {
        courseName: "Graphic Design Masterclass",
        coursePrice: 200,
        startDate: new Date("2024-01-20T09:00:00Z"),
        endDate: new Date("2024-04-20T09:00:00Z"),
        lecturerName: "Suman Karki",
        providedBy: "Creative Hub",
        durationMonths: 3,
        mode: "Offline",
        level: "Beginner to Intermediate"
    },
    {
        courseName: "Digital Marketing",
        coursePrice: 220,
        startDate: new Date("2024-04-01T09:00:00Z"),
        endDate: new Date("2024-06-30T09:00:00Z"),
        lecturerName: "Ramesh Adhikari",
        providedBy: "Marketing Pro Nepal",
        durationMonths: 3,
        mode: "Online",
        level: "Intermediate"
    },
    {
        courseName: "SEO Optimization",
        coursePrice: 150,
        startDate: new Date("2024-02-15T09:00:00Z"),
        endDate: new Date("2024-04-15T09:00:00Z"),
        lecturerName: "Prabesh Ghimire",
        providedBy: "SEO Nepal",
        durationMonths: 2,
        mode: "Online",
        level: "Beginner"
    },
    {
        courseName: "JavaScript Advanced Concepts",
        coursePrice: 190,
        startDate: new Date("2024-05-01T09:00:00Z"),
        endDate: new Date("2024-07-01T09:00:00Z"),
        lecturerName: "Aayush Bista",
        providedBy: "Code Academy Nepal",
        durationMonths: 2,
        mode: "Online",
        level: "Advanced"
    },
    {
        courseName: "React.js Development",
        coursePrice: 210,
        startDate: new Date("2024-03-10T09:00:00Z"),
        endDate: new Date("2024-05-10T09:00:00Z"),
        lecturerName: "Nischal Shrestha",
        providedBy: "React Nepal",
        durationMonths: 2,
        mode: "Online",
        level: "Intermediate"
    },
    {
        courseName: "Node.js & Express",
        coursePrice: 230,
        startDate: new Date("2024-06-01T09:00:00Z"),
        endDate: new Date("2024-08-01T09:00:00Z"),
        lecturerName: "Jivan Sharma",
        providedBy: "Unex-Agency",
        durationMonths: 2,
        mode: "Online",
        level: "Intermediate"
    },
    {
        courseName: "Database Design with MongoDB",
        coursePrice: 170,
        startDate: new Date("2024-04-20T09:00:00Z"),
        endDate: new Date("2024-06-20T09:00:00Z"),
        lecturerName: "Bikash Rana",
        providedBy: "Database School Nepal",
        durationMonths: 2,
        mode: "Online",
        level: "Beginner to Intermediate"
    }
]);



// Print a message to the output window.
console.log(`Done inserting data.`);
