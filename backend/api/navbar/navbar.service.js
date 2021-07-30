const dbService = require("../../services/db.service");

module.exports = {
    query,
    getById,
    remove,
    update,
    add
};

async function query() {
    console.log(q)
    try {
        // try connection to db
    } catch (err) {
        console.log("ERROR: cannot find navbars");
        throw err;
    }
}

async function getById(navbarId) {
    // const collection = await dbService.getCollection("navbar");
    try {
        return navbar;
    } catch (err) {
        console.log(`ERROR: while finding navbar ${navbarId}`);
        throw err;
    }
}

async function remove(navbarId) {
    console.log(navbarId);
    // const collection = await dbService.getCollection("navbar");
    try {} catch (err) {
        console.log(`ERROR: cannot remove navbar ${navbarId}`);
        throw err;
    }
}

async function update(navbar) {
    console.log(navbar)
    navbar.updatedAt = Date.now();
    // const collection = await dbService.getCollection("navbar");
    try {} catch (err) {
        console.log(`ERROR: cannot update navbar ${navbar._id}`);
        throw err;
    }
}

async function add(navbar) {
    console.log(navbar)
}

function _randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}