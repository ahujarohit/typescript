function array2() {
    var arr_names:number[] = new Array(4)  
    for(var i = 0;i<arr_names.length;i++) { 
        arr_names[i] = i * 2 
        console.log(arr_names[i]) 
    }
}

function array3() {
    var names:string[] = new Array("Mary","Tom","Jack","Jill") 

    for(var i = 0;i<names.length;i++) { 
        console.log(names[i]) 
    }
}

array2()
array3()
