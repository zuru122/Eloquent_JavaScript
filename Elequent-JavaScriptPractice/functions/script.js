// NESTED SCOPE
const humus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount  * factor;
        if(ingredientAmount  >  1){
            unit += "s"
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    }

    ingredient(1, "can",  "chickenpeas")
}

console.log(humus(1));
// const hello =  document.querySelector(".hello")

// const btn = document.querySelector(".btn")


// const sayHello = function(){
//     hello.textContent =  "Hello Diamond"
//     hello.style="color:red";
// }

// btn.addEventListener("click", ()=>{
//     sayHello();
// })
