const names = ["Alice", "Bob", "Smart", "David", "Digi", "Aice", "Alic"];
console.log(names);

// ForEach
names.forEach((values) => {
  //   console.log(values);
});

// Map -----> return is must
let newarr = names.map((values) => {
  // return 1;
  return values + " Ji";
});

/*
 Difference Between ForEach and Map 

 Map ------> returns new Array while,
 Filter ---> Only Loop the Array...
 */

// Filter ------> return is must
let filteredNames = names.filter((values) => {
  return values.startsWith("A");
});

// Spread And Rest ---> ... (Dotted 😂😂)
// let copyNames = names; // Aise copy nii hota ---> reference pass ho jta (copyNames m kux change kroge to names m change ho jyga)

// let copyNames = [...names]; // aise hota a copy

// we can also do it with objects

// We can also merge the arrays with the help of spread operator...
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9];

arr3 = [...arr1, ...arr2];
// console.log(arr3);


// Group an array of objects on specific property...
let users = [
  { name: "dev", role: "admin" },
  { name: "deev", role: "user" },
  { name: "fev", role: "admin" },
  { name: "sev", role: "admin" },
  { name: "rev", role: "user" },
];

let obj = {};

users.forEach((user)=>{
  if (obj[user.role]) {
    obj[user.role].push(user)
    
  } else {
    obj[user.role]=[]
    obj[user.role].push(user)
    
  }
})
