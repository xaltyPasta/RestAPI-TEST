const express = require("express");
const controller=require('./controller');

const {Router} =require('express');

const router =Router();

router.get("/",controller.getStudents);
router.post("/",controller.addStudents);
router.get("/:id",controller.getStudentsByID);
router.delete("/:id",controller.removeStudents);


module.exports=router;