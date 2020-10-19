const options = require("./config")
const Queue = require('bee-queue');

const cookQueue = new Queue('cook', options);
const serveQueue = new Queue('serve', options);

const placeOrder = (order) => {
    return cookQueue.createJob(order).save(); // task publisher
};

serveQueue.process((job, done) => { // task consumer
    console.log(`🧾 ${job.data.qty}x ${job.data.dish} ready to be served 😋`);
    // Notify the client via push notification, web socket or email etc.
    done();
})


module.exports = placeOrder;