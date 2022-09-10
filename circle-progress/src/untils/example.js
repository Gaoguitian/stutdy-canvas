setTimeout(() => {
    console.log(1)
})
console.log(2)
new Promise((resolved, rejected) => {
    console.log(3)
    resolved()
    console.log(4)
    setTimeout(() => {
        console.log(5)
    })
}).then(() => {
    console.log(6)
}).catch(() => {
    console.log(7)
}).then(() => {
    console.log(8)
})
console.log(9)