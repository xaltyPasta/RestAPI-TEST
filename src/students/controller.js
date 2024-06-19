const pool = require('../../db');
const queries = require('./queries');


const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentsByID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsByID, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudents = (req, res) => {
    const { name, email, age, dob } = req.body;
    //check if the email exists
    pool.query(queries.checkEmailExists,[email],(error,results)=>{
        if(results.rows.length) {
            res.send("Email Already Exists");
        }
        //add students to database
        pool.query(queries.addStudents,
            [name,email,age,dob],(error,results)=>{
                if(error) throw error;
                res.status(201).send("Student Added Successfully");

        })
    });
};


const removeStudents=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.removeStudents,[id],(error,results)=>{
        const noStudentsFound=!results.row.length;
        if(noStudentsFound){
            res.send("Student does not exists in database");
        }
        pool.query(queries.removeStudents,[id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Student removed Successfully");
        });
    });
};

// const updateStudent=(req,res)=>{
//     const id =parseInt(req.params.id);
//     const {name}=req.body;
//     pool.query(queries.getStudentsByID,[id],(error,results)=>{
//         const noStudentsFound=!results.row.length;
//         if(noStudentsFound){
//             res.send("Student does not exists in database");
//         }
//         pool.query(queries.updateStudent,[name,id],(error,results)=>{
//             if(error) throw error;
//             res.status(200).send("Student Updated  Successfully");
//         });
//     });
// };


module.exports = {
    getStudents,
    getStudentsByID,
    addStudents,
    removeStudents,
    // updateStudent,
};