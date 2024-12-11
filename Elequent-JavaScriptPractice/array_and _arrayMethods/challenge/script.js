const dogs = [
 { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
 { weight: 8, curFood: 200, owners: ['Matilda'] },
 { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
 { weight: 32, curFood: 340, owners: ['Michael'] },
 ];
// console.log(dogs)
// Task1
 dogs.forEach((dog) => {
    dog.recommendedFood = Math.trunc(dog.weight **0.75 * 28);
   
 });

 console.log(dogs)

//  Task2
const dogSarah = dogs.find(dog =>dog.owners.includes('Sarah'))
console.log(dogSarah)
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ?'much' : 'little'}`);

// Task3
let ownersEatTooMuch = [];
let owwnersEatTooLitle = [];

// dogs.forEach((dog)=>dog.owners)


// Testing some codes
const user = { name: 'bob' }
console.log(user && user.name); // bob