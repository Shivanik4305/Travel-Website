const express = require('express')
const { getAlltravel, addtravel, updatetravel, deletetravel, getSpecifictravel} = require('../controllers/travelControllers')


const router = express.Router()


router.get('/', getAlltravel)

router.get('/:id',getSpecifictravel)


router.post('/',addtravel)




router.put('/:id', updatetravel)



router.delete('/:id', deletetravel)

module.exports = router

