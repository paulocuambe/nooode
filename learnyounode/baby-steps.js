let sum = 0;

process.argv.slice(2).forEach((value, index)=>{
    sum += Number(value)
})

console.log(sum)