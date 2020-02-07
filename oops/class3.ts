class Root { 
    str:string; 
 } 
 
 class Child extends Root {} 
 class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance  
 
 var obj2 = new Leaf(); 
 obj2.str ="hello" 
 console.log(obj2.str)