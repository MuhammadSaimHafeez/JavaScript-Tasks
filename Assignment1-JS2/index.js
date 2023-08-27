
/* Question 1:


Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value
Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

//CODE:

const user={
    name:"John",
    surname:"Smith",
}
console.log(user)

user.name="Pete";

delete user.name;

console.log("After deleting the name property:\n",user)




 /* Question 2:


Check if an object is empty or not
*/


//CODE
const obj={}

if(!Object.keys(obj).length){

    console.log("The object is empty")
}
else
console.log("The object is not empty")



/* Question 3:

We have an object storing salaries
of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum
all salaries and store in the
variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/

//CODE:

let salaries={

  John:100,
  Ann:160,
  Pete:130

}

let size2=Object.keys(salaries).length
let val=Object.values(salaries)
let sum=0;
for(let i=0;i<size2;i++)
{
    sum=sum+val[i]
}
console.log(sum)




/* Question 4:

Create a function multiplyNumeric(obj) that multiplies
all numeric property values of obj by 2.
For instance:
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
Please note that multiplyNumeric
does not need to return
anything. It should modify the object in-place.
P.S. Use typeof to check for a number here.
*/


//CODE:

let menu={
  width:200,
  height:300,
  title:"My menu"
}

let keys=Object.keys(menu)
let size=Object.values(menu).length

function MultipluNumeric(obj)
{
    keys.forEach((val,ind) =>
    {
    let type1=typeof(menu[keys[ind]])
        //console.log(type1)
        if(type1==='number'){
            
            menu[keys[ind]]=menu[keys[ind]]*2
           
        }
        console.log(val)
    })
}

MultipluNumeric(menu)

console.log(menu)





/* Question 5:

Create a parameterised
function inside an object

*/

//CODE:

const obj1={
  addname(name)
  {
    console.log(name)
  }

}

obj1.addname("saim")