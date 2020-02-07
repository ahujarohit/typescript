function array8() {
    var nums:string[] = disp() 
    for(var i in nums) { 
       console.log(nums[i]) 
    }
}

function disp():string[] { 
    return new Array("Mary","Tom","Jack","Jill") 
 } 
 
array8()