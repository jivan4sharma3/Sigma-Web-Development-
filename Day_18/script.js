// async function getData() {
//     return new Promise((resolve, resject) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully")
//         }, 6000);
//     })
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await x.json();
    console.log(data)
}

async function fetchData() {
    
    console.log("Loading moduels...");
    
    console.log("do something else");
    
    console.log("Waiting for data...");
    let data = await getData();
    console.log(data);
    
    console.log("process data")
    
    console.log("taks two in processing data");

}
fetchData();