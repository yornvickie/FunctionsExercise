// 1
function fozzieBear(){
    console.log("Wocka Wocka!");
};

fozzieBear();

// 2
function beaker(speak){
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
};

beaker(`Meep`);

// 3
function muppetShow(a, b){
    if (a === `Muppet` && b === `Show`) {
        console.log(`It's time to play the music. It's time to light the lights`); 
    }
};

muppetShow(`Muppet`, `Show`);

// 4
function kermit() {
    return "Kermit The Frog";
};

console.log(kermit()); 

// 5
function muppetShowSeasons(seasons) {
    if (seasons === 5) {
        return true;
    }
    return false;
};

console.log(muppetShowSeasons(5));

// 6
const manOrMuppet = function () {
    console.log(`Am I a man or am I a Muppet?`);
}

manOrMuppet();

// 7
rainbowConnection = () => console.log(`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`);

rainbowConnection();

// 8
// no

// 9
// yes

// BONUS
// 10
const newMuppetMovies = ["The Muppets", "Muppets Most wanted"];


const upperMovies = newMuppetMovies.map(movie => {
    return movie.toUpperCase();
});

console.log(upperMovies);

// 11

const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan", 
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
];

const twoMovies = oldMuppetMovies.filter(a => {
    return a.length === 22;
});

console.log(twoMovies);

// 12
const charactersOne = [
    "Statler",
    "Waldorf"
];

const charactersTwo = [
    "The Swedish Chef",
    "Animal",
    "Rowlf"
];

randomMuppet = (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`);
    
};

randomMuppet(charactersOne);
randomMuppet(charactersTwo);

// 13
// caps = string => {
//     let chars = string.toLowerCase().split("");
//     for (i = 0; i < chars.length; i += 2) {
//         chars[i] = chars[i].toUpperCase();
//     }
//     console.log(chars.join(""));
// }

// caps("hello world");

// OR
// caps = (string) => {
//     return string.split(``).map((v, i)) => i % 2 ? v.toLowerCase() : v.toUpperCase()).join(``);
// }

// console.log(`Hello World`);

// OR
// caps = (string) => {
//     let newString = ``;
//     for (i = 0; i < string.length; i++){
//         if (i % 2 === 0){
//             newString += string[i].toUpperCase();
//         } else {
//             newString += string[i].toLowerCase();
//         }
//     }
//     return newString;
// }

// console.log(caps(`Hello World`));

// 13 EXTRA
caps = string => {
    let count = 0;
    let newString = ``;
    for (i = 0; i < string.length; i++){
        if (string[i] === ` `){
            newString += ` `;
        } else if (count % 2 === 0) {
            newString += string[i].toUpperCase();
            count++;
        } else {
            newString += string[i].toLowerCase();
            count++;
        }
    }
    return newString;
}

console.log(caps(`Hello World`));