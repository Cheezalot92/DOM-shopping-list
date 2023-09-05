import "./styles.css";


document.addEventListener('DOMContentLoaded', function (){

const submitItem = document.getElementById('#submitItem');

function {
    const input1 = document.getElementById("Item1").value;
    const input2 = document.getElementById("Item2").value;
    const input3 = document.getElementById("Item3").value;
    const input4 = document.getElementById("Item4").value;



    document.getElementById("textarea").textContent = textareaUno;

    const textareaUno = `On this visit to the grocery store I need , ${input1} , ${input2} , ${input3} , & ${input4} .`
}
})
submitItem.addEventListener('click' , function(event){
    event.preventDefault()
    const itemInput = document.querySelector("[class=input]:checked");
    const myList = document.querySelector("myList");
    const itemValue = itemInput.value;
    myList.innerHTML= itemInput.value;
    
})