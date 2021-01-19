const db = require("../models");

// Defining methods for the bookController
module.exports = {
    create: function(req, res) {
        console.log(req);

        db.Contact.create(req.body)
            .then(dbContact => res.json(dbContact))
            .catch(err => res.status(422).json(err));
    }
};
