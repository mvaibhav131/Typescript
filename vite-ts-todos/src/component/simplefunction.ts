
 
 type User={
    id:number,
    name:string,
    age:number,
    salary:number
 }

 function sort(arr:User[],y:keyof User){
   return arr.length
 }

 const userArray:User[]=
 [{
   "id": 1,
   "name": "Barri Jephcote",
   "age": 54,
   "salary": 9111
 }, {
   "id": 2,
   "name": "Brittani Deetlof",
   "age": 72,
   "salary": 4713
 }, {
   "id": 3,
   "name": "Reidar Willis",
   "age": 69,
   "salary": 6000
 }, {
   "id": 4,
   "name": "Raf Shurrock",
   "age": 99,
   "salary": 5203
 }, {
   "id": 5,
   "name": "Armand Harrap",
   "age": 20,
   "salary": 6100
 }]

 sort(userArray,"age")
 
 console.log(userArray)

 