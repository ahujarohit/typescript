function array_methods() {
    var alpha = ["a", "b", "c"];
    var num = ["1", "2", "3"];
    var alphaNumeric = alpha.concat(num);
    console.log("alphaNumeric : " + alphaNumeric);

    var passed = [12, 15, 18, 130, 44].every(isBigEnough);
    console.log("Test Value : " + passed);

    var passed1 = [12, 5, 8, 130, 44].filter(isBigEnough);
    console.log("Test Value : " + passed1);

    let num1 = [7, 8, 9];
    num1.forEach(function (value) {
        console.log(value);
    });

    var index = [12, 5, 8, 130, 44].indexOf(8);
    console.log("index is : " + index);

    var arr = new Array("First", "Second", "Third");
    var str = arr.join();
    console.log("str : " + str);

    var numbers = [1, 4, 9];
    var roots = numbers.map(Math.sqrt);
    console.log("roots is : " + roots);

    var length = numbers.push(10);
    console.log("new numbers is : " + numbers);
    length = numbers.push(20);
    console.log("new numbers is : " + numbers);

    var element = numbers.pop();
    console.log("element is : " + element);

    var element = numbers.pop();
    console.log("element is : " + element);

    var total = [0, 1, 2, 3].reduce(function (a, b) { return a + b; });
    console.log("total is : " + total);

    var total = [0, 1, 2, 3].reduceRight(function (a, b) { return a + b; });
    console.log("total is : " + total);

    var arr1 = [0, 1, 2, 3].reverse();
    console.log("Reversed array is : " + arr1);

    var arr2 = [10, 1, 2, 3].shift();
    console.log("Shifted value is : " + arr2);

    var arr = ["orange", "mango", "banana", "sugar", "tea"];
    console.log("arr.slice( 1, 2) : " + arr.slice(1, 2));
    console.log("arr.slice( 1, 3) : " + arr.slice(1, 3));

    var retval = [2, 5, 8, 1, 4].some(isBigEnough);
    console.log("Returned value is : " + retval);

    var arr = new Array("orange", "mango", "banana", "sugar");
    var sorted = arr.sort();
    console.log("Returned string is : " + sorted);

    var arr = ["orange", "mango", "banana", "sugar", "tea"];
    var removed = arr.splice(2, 0, "water");
    console.log("After adding 1: " + arr);
    console.log("removed is: " + removed);

    removed = arr.splice(3, 1);
    console.log("After removing 1: " + arr);
    console.log("removed is: " + removed);

    var arr = new Array("orange", "mango", "banana", "sugar");
    var str = arr.toString();
    console.log("Returned string is : " + str);

    var arr = new Array("orange", "mango", "banana", "sugar");
    var length = arr.unshift("water");
    console.log("Returned array is : " + arr);
    console.log("Length of the array is : " + length);
}

function isBigEnough(element) {
    return (element >= 10);
}


array_methods()