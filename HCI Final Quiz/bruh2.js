function getTopStudents(students) {
    // Filter students who got top scores = 75+
    const topStudents = students.filter(student => student.score > 75);
    
    // Get the names of students
    const topStudentNames = topStudents.map(student => student.name);
    
    // Sort the names in order (Alphabetic)
    topStudentNames.sort();
    
    return topStudentNames;
}

// Input
const students = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 70 },
    { name: 'Charlie', score: 85 }
];

console.log(getTopStudents(students)); 
// Output: ['Alice', 'Charlie']