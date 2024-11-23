
const express = require("express")
const router = express.Router()
const employeecontroller = require("../controllers/employeecontroller")
const Employee = require("../models/Employee")

//get, post, put/patch, delete using these methods we defining the routes

router.post('/addemp', employeecontroller.createEmployee)

router.get('/allemployees', employeecontroller.getEmployees)

router.get('/singleemployee/:id', employeecontroller.singleEmployee)

router.put('/updateemployee/:id', employeecontroller.updateemployee)

router.delete('/deleteemp/:id', employeecontroller.deleteemployee)

module.exports = router
