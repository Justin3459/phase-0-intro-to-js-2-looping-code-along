// Code your solutions in this file
/*for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old.Happy birthday to me!`);
}

const gifts =["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
}
wrapGifts(gifts)*/


//const name = []
function writeCards(name, type){
    const greeting = []
    for ( let i =0; i < name.length; i ++){
        const greetingMessage = `Thank you, ${name[i]}, for the wonderful ${type} gift!`
        greeting.push(greetingMessage)
        debugger;
    }
  return (greeting)
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")


//CountDown
function countDown(){
    let fromTen = 10
    while (fromTen >= 0){
        console.log(fromTen--)
        //fromTen--
    }

}
countDown()