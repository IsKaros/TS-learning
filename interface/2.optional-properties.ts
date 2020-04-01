interface SquareConfig {
  color?: string, 
  width?: number,
}
function createSquare(config:SquareConfig):{color:string; area: number} {
  let newSquare = {color: 'white',area: 100}
  if(config.color){
    newSquare.color = config.color
  }
  if(config.width){
    newSquare.area = Math.pow(config.width,2)
  }
  return newSquare
}

let mySquare = createSquare({color:'skyblue',width:5})
let aSquare = createSquare({color:'black'})
console.log(mySquare);
