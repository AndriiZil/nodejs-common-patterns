process.nextTick(() => {
    process.nextTick(() => {
        console.log('Step 1');
    })

    process.nextTick(() => {
        process.nextTick(() => { console.log('Step 3') })
        process.nextTick(() => { console.log('Step 4') })
        console.log('Step 2');
    })
})

console.log('Step 0');

setTimeout(() => {
    console.log('Timeout!');
}, 0)

console.log('Step 0.5');

// Step 0, Step 0.5, Step 1, Step 2, Step 3, Step 4, Timeout!
