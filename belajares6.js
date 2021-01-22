// tes 1
const golden = () => {
    return 'dadadadad'
}

console.log(golden());

// tugas 2
const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName: function(){
        console.log( `${firstName} ${lastName}` )
      }
    }
  }
   
  //Driver Code 
  newFunction("bambang", "pamungkas").fullName() 

// tugas 3
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

let { firstName, lastName, destination, occupation } = newObject;

console.log(firstName, lastName, destination, occupation)

// tugas 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east];

console.log(combined)

// tugas 5
const view = "glass";
var before = 'Lorem ';
const planet = 'earth';

const tes = `earth ${view} ${before} ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam` 
 // Driver Code console.log(before) 
console.log(tes);