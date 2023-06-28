// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// Create an object  
let theSpaceship = {
  crew: { 
  captain: {  
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': {  
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') }  
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// for...in loop 
for (let memberCrew in theSpaceship.crew) {
console.log(`${memberCrew} : ${theSpaceship.crew[memberCrew].name}`); 
}

for (let crewMember in theSpaceship.crew) {
console.log(`${theSpaceship.crew[crewMember].name} : ${theSpaceship.crew[crewMember].degree}`); 
}

//  OUTPUT 
/** 
 * 
  Sortir:
  captain : Lily
  chief officer : Dan
  medic : Clementine
  translator : Shauna
  Lily : Computer Engineering
  Dan : Aerospace Engineering
  Clementine : Physics
  Shauna : Conservation Science
 */