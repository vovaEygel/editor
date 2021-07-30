const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getNavbar, addNavbar, getNavbars, deleteNavbar, updateNavbar } = require('./navbar.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getNavbars)
router.get('/:id', getNavbar)
router.post('/', addNavbar);
router.put('/:id', requireAuth, updateNavbar)
    // router.delete('/:id', requireAuth, deleteNavbar)
router.delete('/:id', deleteNavbar)

module.exports = router