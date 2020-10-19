require("../kitchen")
const placeOrder = require("../waiter")

exports.order = (req, res) => {
    let order = {
        dish: req.body.dish,
        qty: req.body.qty,
        orderNo: Date.now().toString(36)
    }

    if (order.dish && order.qty) {
        placeOrder(order)
            .then(() => res.json({ done: true, message: "Your order will be ready in a while" }))
            .catch(() => res.json({ done: false, message: "Your order could not be placed" }));
    } else {
        res.status(422);
    }
}) 
}