let user: [number, string] = [1, 'Mumu'];

let message; //type any

message ="abc"; //still type any

//using <> we specify the type
//then we can use the properties e.g. endsWith
let endsWithC = (<string>message).endsWith('c');

//Simple function

let log = function(mess)
{
    console.log(mess)
}

//Arrow function 
//The same as the simple function
let doLog = (mess) => 
{
    console.log(mess);
}
//Shorter version of arrow function
//if it has only one line of code in the block
let doLog_shorter = (mess) => console.log(mess);

//Interface - purely for declarations, can't include functions
//Problem: lack of cohesion
/*
interface Point
{
    x:number,
    y:number
}

let drawPoint = (point:Point) =>
{

}

drawPoint
({
    x:1,
    y:2
})
*/

//Class

class Point
{   
    //fields
    //private x: number;
    //private y: number;
    //methods
    draw()
    {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }

    getDistance(another:Point)
    {

    }

    //constructor
    // _x to not clash with the get and set methods
    constructor (private _x: number, private y:number)
    {
       //this.x = x;
       // this.y = y;
       //redundant now that x and y are inside the constructor
    }

    get x()
    {
        return this.x;
    }

    set x(value)
    {
        if (value<0)
        throw new Error('Value cant be less than 0.')
        this.x=value;
    }
}
//We must allocate new memory for a custom type
let point = new Point(1, 2);
/*
If we have 10 points, its very long
We must use constructors
point.x = 1;
point.y = 2;
*/

let x = point.x; //x is now a property, not a fields
//a property looks like a field from outside
//but internally its just a method(get/set) in the class
point.x = 10;

point.draw();