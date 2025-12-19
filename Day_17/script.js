console.log("Hello World");

setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement('script');
    sc.crc = src;
    sc.onload = callback("Jivan sharma and my goal is to become a successful software developer");
    document.head.append(sc)
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", callback);

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("Promise is rejected");
    } else {
        setTimeout(() => {
            console.log("Promise is being resolved");
            resolve("jivan sharma");
        }, 3000)
    }


})