function array8() {
    var nums = disp();
    for (var i in nums) {
        console.log(nums[i]);
    }
}
function disp() {
    return new Array("Mary", "Tom", "Jack", "Jill");
}
array8();
