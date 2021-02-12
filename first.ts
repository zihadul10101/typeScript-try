//type
let age: number = 25;
let club: string = 'real madridt';
let isFamous: boolean = false;

function add(num1: any, num2: number | string) {
    return num1 + num2;
}
add(3, 76);
add('adam', 'sand');



//function
function fullName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}
const user = fullName('zihad', 'jasham');

function doubleItAndConsole(num: number): void {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output', output);


let multiply2=(x:number,y:number)=>x*y;
multiply2 =(x,y)=>x*y;

const multiply=(x:number,y:number):number=>x*y;
console.log(multiply(25,6))


//arry and object
const numbers:number[]=[2,3,4,8,12,91,34];
numbers.push(22);

let megaFriends:string='';
const friends:string[]=['George','Jeff','Bill','Abdul'];
for(let i=0; i<friends.length;i++){
    const friend:string=friends[i];
    if(friend.length>megaFriends.length){
     megaFriends=friend;   
    }
}
console.log('Frend with the largest name',megaFriends);



//object
let player:{
    club:string,
    salary:number
}
player={
club:'Real Madrid',
salary:454000,
}






