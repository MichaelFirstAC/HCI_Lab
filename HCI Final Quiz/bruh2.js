function getTopStudents(students) {
    // Filter students who scored above 75
    const topStudents = students.filter(student => student.score > 75);
    
    // Extract the names of the top students
    const topStudentNames = topStudents.map(student => student.name);
    
    // Sort the names in alphabetical order
    topStudentNames.sort();
    
    return topStudentNames;
}

// Example input
const students = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 70 },
    { name: 'Charlie', score: 85 }
];

// Example output
console.log(getTopStudents(students)); 
// Output: ['Alice', 'Charlie']