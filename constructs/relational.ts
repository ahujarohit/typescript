function relational() 
{
    var num1:number = 5;
    var num2:number = 9;
    var result:boolean;
    console.log("Value of num1: "+num1); 
    console.log("Value of num2 :"+num2);
    
    result = num1>num2 
    console.log("num1 greater than num2: "+result)

    result = num1<num2 
    console.log("num1 lesser than num2: "+result)  

    result = num1>=num2 
    console.log("num1 greater than or equal to  num2: "+result)

    result = num1<=num2
    console.log("num1 lesser than or equal to num2: "+result)  

    result = num1==num2 
    console.log("num1 is equal to num2: "+result)  

    result = num1!=num2  
    console.log("num1 is not equal to num2: "+result)
}
relational()