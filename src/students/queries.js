const getStudents="SELECT * FROM students";
const getStudentsByID="SELECT * FROM students WHERE id=$1";
const checkEmailExists="SELECT s from students s WHERE s.email=$1";
const addStudents="INSERT INTO students (name ,email,age,dob) VALUES ($1,$2,$3,$4)";
const removeStudents="DELETE FROM students WHERE id=$1";
// const updateStudent="UPDATE students SET name=$1 WHERE id=$2";


module.exports={
    getStudents,
    getStudentsByID,
    checkEmailExists,
    addStudents,
    // updateStudent,
};