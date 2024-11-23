
const Employee = require('../models/Employee')

const createEmployee = async(req, res) => {
    try{
        //properties destructure
        const {name, email, phone, city} = req.body  //it goes to postman body
        const employee = new Employee( {
            name, email, phone, city
        })
        await employee.save()
        res.status(201).json(employee)
    } 
    catch(error) {
        console.log("error in", error)
        res.status(500).json({message: "server error"})
    }
}
//get all employees details
const getEmployees = async(req, res) => {
    try{
        const employees = await Employee.find()
        res.status(200).json(employees)
    } catch(error) {
        res.status(500).json({message: "server error"})
    }
}
//get single employee details
const singleEmployee = async(req, res) => {
    try{
        const employee = await Employee.findById(req.params.id)

        if(!employee) {
            return res.status(404).json({message: "employee id not found"})
        }
        res.status(200).json(employee)
    } catch(error) {
        res.status(500).json({message: "server error"})      
    }
}

const updateemployee = async(req, res) => {
    try{
        const {name, email, phone, city} = req.body
        const updateemp = await Employee.findByIdAndUpdate(req.params.id,
            {name, email, phone, city}
        )
        if(!myemployee) {
            return res.status(404).json({message: "employee not found"})
        }
        res.status(200).json(updateemp)

    } catch(error) {
        res.status(500).json({message: "server error"})
    }
}

const deleteemployee = async(req, res) => {
    try{
        const deleteemp = await Employee.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }catch(error) {
        res.status(500).json({message: "server error"})
    }
 }

module.exports = { createEmployee, getEmployees, singleEmployee, updateemployee, deleteemployee }