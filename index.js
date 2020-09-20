// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(arr1, arr2){
 let newArr = [];

 for (let x = 0; x < arr1.length; x++){
    newArr.push(`${arr1[x]} plays ${arr2[x]}`);
 }
 return newArr
}

const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];

function johnLennonFacts(facts){
    let newFacts = [];
    let i = 0;

    while (i < facts.length){
        newFacts.push(`${facts[i]}!!!`);
        i = i + 1;
    }
    return newFacts
}

function iLoveTheBeatles(number){
    let newLove = [];
    let y = 0

    if (number >= 15){
        newLove.push(`I love the Beatles!`);
    } else {
        do {
            newLove.push(`I love the Beatles!`);
            y = y+1;
        } while (y < number);
    }
    return newLove
}
