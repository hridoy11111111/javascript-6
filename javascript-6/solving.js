const number =  = element;
        }
    }
    return min;
}
const result = smallestNumber(number);
console.log(result);
 [45, 50, 40, 20, 12, 5, 55]

function smallestNumber(arrayDatas) {
    console.log(arrayDatas);
    for (i = 0; i < arrayDatas.length; i++) {
        console.log(i);
    }              
}

smallestNumber(number)


const number  = [10, 25, 40, 5]

function smallestNumber(arrays){
    console.log(arrays);
}
smallestNumber(number)


const number = [20, 15, 45, 50, 5]
function smallestNumber(arrayDatas){
    let min = arrayDatas [0]
    for (i =0; i < arrayDatas.length; i++) {
        const element = arrayDatas[i];
        if(element < min) {
            min

const number =[30, 5,12,2,454,321,65]
function smallestNumber(arrayDatas){
    let min = arrayDatas[0]
    for(i=0; i<arrayDatas.length;i++) {
        const element =arrayDatas[i];
        if(element < min) {
            min = element;
        }
    }
    return min;
}
const result =  smallestNumber(number);
console.log(result);

const people = ['rohim','korim','mina','mitho','naymer','rohim','mina','korim','naymer','rohim','mina',];
function removeDuplicate(names) {
    let unique =[];
    for(const item of names){
        // console.log(item);
        if(unique.indexOf(item)== -1)
        unique.push(item)
    }
    return unique
}

const output = removeDuplicate(people)
console.log(output);


const letters = 'hello how are you';


function reverseLetter(text){
    let reverse = '';
    for(const letter of text) {
        console.log(letter);
        reverse = letter + reverse
    }
    return reverse
}

const result = reverseLetter(letters);
console.log(result);



function addToNumber (one,two){
    const total = one + two;
    return total
}

const resulti = addToNumber(15,14+6);
console.log(resulti);


for(i=0;i<=50;i++){
     if(i % 3 == 0 && i % 5 == 0) {
        console.log("foobar");
    }
    else if(i % 3 == 0){
        console.log("foo");
    }
    else if(i % 5 == 0) {
        console.log("bar");
    }
    
    else{
        console.log(i);
    }
}

 function calcution (one,two){
    const intial = 100;
    const multiply = one * two;
    if(intial > multiply) {
        console.log(true);
    }
    else if(intial<=multiply){
        console.log(false);
    }
    else{
        console.log("something error!!");
    }
 }

 calcution(10,1354)