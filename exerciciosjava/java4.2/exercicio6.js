let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado=0;
let impar=0;
for (let index = 0; index < numbers.length; index+=1) {
    resultado = numbers[index] % 2;
    if (resultado > 0) {
      impar+=1;
      console.log("o valor:", numbers[index] ,"é impar");
        
    }
    
}
console.log("existem :", impar, "números impar");