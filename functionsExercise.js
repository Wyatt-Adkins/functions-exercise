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
rainbowConnection = () =>
    'someday we\'ll find it. The Rainbow Connection the lovers the dreamers and me'
  ;
  
  console.log(rainbowConnection.map(rainbowConnection => rainbowConnection.length));

// 8 no

// 9 yes

// do not commit yet, finish in morning
