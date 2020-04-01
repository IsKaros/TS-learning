var num;
(function (num) {
    num[num["red"] = 0] = "red";
    num[num["blue"] = 1] = "blue";
    num[num["green"] = 2] = "green";
})(num || (num = {}));
console.log(red, blue, green);
