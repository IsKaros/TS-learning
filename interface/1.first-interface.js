function printLabel(labeledObj) {
    // ts类型检测只会检测对象里面的这个数据的存在性和类型。
    // ts不会判断，这个对象是否只有这个属性
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
