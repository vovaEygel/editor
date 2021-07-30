const navbarService = require('./navbar.service')

async function getNavbar(req, res) {
    const navbar = await navbarService.getById(req.params.id)
    res.send(navbar)
}

async function getNavbars(req, res) {
    const navbars = await navbarService.query(req.query)
    res.send(navbars)
}
async function addNavbar(req, res) {
    const navbar = await navbarService.add(req.body)
    res.send(navbar)
}

async function deleteNavbar(req, res) {
    await navbarService.remove(req.params.id)
    res.end()
}

async function updateNavbar(req, res) {
    const navbar = req.body;
    await navbarService.update(navbar)
    res.send(navbar)
}

module.exports = {
    getNavbar,
    getNavbars,
    addNavbar,
    deleteNavbar,
    updateNavbar
}