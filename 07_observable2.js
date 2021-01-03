const Job = require('./07_observable');

const job = new Job();

job.on('done', (details) => {
    console.log(`Jjb was completed at`, details.completedOn);
    job.removeAllListeners()
})

job.process();
