export function colorCodeGenerator(colors){
  for(let i = 0; i<5; i++){
    let color = "#";
    for(let j = 0; j<6; j++){
      const rand = Math.floor(Math.random() * 16);
      color += rand.toString(16).toUpperCase();
    }
    colors.push(color);
  }
}
