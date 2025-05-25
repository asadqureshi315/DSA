let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
//get keys
console.log(Object.keys(student));

// delete a key
delete student.rollno;
console.log(student);

// length of object
console.log(Object.keys(student).length);

const obj = {
  a: 1,
  b: 2,
  a: 3,
};
console.log(obj);
