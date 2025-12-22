async function sleep() {
 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(34)
        },2000)
    })
}

(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)

    let [x,y,...rest] = [2,3,4,3,5,3,7,5,6,]
    console.log(x , y)
    console.log(rest)
})()