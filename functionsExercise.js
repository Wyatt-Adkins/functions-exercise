const b = '='.repeat(25);

// 1
function fozziebear(){
    console.log(`Wocka Wocka!`);
}
fozziebear();

console.log(b);

// 2
function beaker(speak){
    console.log(speak.repeat(4));
}

beaker(`meep`);

// 3
function muppetshow (a,b){
    if (a === 'muppet' && b=== 'show'){
    console.log(`${a} ${b} It's time to play the music. It's time to light the lights.`);
} }
muppetshow(`muppet`, `show`);

console.log(b);
// 4
function kermit(){
    return `Kermit The Frog`;
}
kermit()
console.log(kermit());

console.log(b);

// 5

function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true
    } else {
        return false
    }
}

console.log(muppetShowSeasons(5));

console.log(b);
// 6
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet`);
}
manOrMuppet();

// 7
rainbowConnections = () => console.log("Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me");

rainbowConnections();
// 8 no

// 9 yes

// 10a 
const newMuppetMovies = [
    'the muppets',
    'muppets: most wanted'
];
// 10b
const uppermovies= newMuppetMovies.map(movies => movies.toUpperCase());
console.log(uppermovies)

// 11a

const oldmuppetmovies = [
    'the muppet movie',
    'the muppets take manhattan',
    'the great muppet caper',
    'the muppet christmas carol',
    'muppet treasure island',
    'muppets from space'

]

// 11b
const twomovies = oldmuppetmovies.filter(a => a.length === 22);
console.log(twomovies);

// 12a
const charactersone = [
    'statler',
    'waldorf',
]

// 12b
const characterstwo = [
    'the swedish chef',
    'Animal',
    'rowlf'
]

// 12c
randommuppet = (characters) => {
    console.log(`${characters[Math.floor(Math.random()* characters.length)]}`
    )};

// 12d
randommuppet(charactersone);

randommuppet (characterstwo);

// 13
caps = (string) => {
let newstring = ``;
for (i=0;i < string.length; i++){if (i % 2 ===0) { newstring += string[i].toUpperCase();}
else {
    newstring += string[i].toLowerCase();
}
}
return newstring
}

console.log (caps('Hello World'));



// EXTRA


caps = (string) => { let count = 0;
let newstring = ``;
for (i=0;i < string.length; i++){
    if (string[i] === ` `){
    newstring += ` `;
} else if (count % 2 === 0){
        newstring += string[i].toUppercase();
    } else {
        newstring += string[i].tolowercase();
        count++;
    }
}
return newstring += ` `;

} 

console.log (caps('hello world'));