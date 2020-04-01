function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = Math.pow(config.width, 2);
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'skyblue', width: 5 });
var aSquare = createSquare({ color: 'black' });
console.log(mySquare);
