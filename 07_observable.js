const util = require('util');

const Job = () => {
    this.process = () => {
        job.emit('done', { completedOn: new Date() })
    }
}

util.inherits(Job, require('events').EventEmitter)

module.exports = Job;
