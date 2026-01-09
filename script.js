const welcome= document.getElementById("welcome")
const text= document.getElementById("text")
const name= document.getElementById("name")
const buttonEl= document.getElementById("button-el")
const outPut= document.getElementById("out-put")



let messages = []

buttonEl.addEventListener("click", function(){
    if(text.value===""){
        alert("uwezi kupata uduma bila kujaza")
        return;
    }if(name.value===""){
        alert("andika jina")
        return;
    }

     pushItem()
    
})


function pushItem(){
     messages.push(text.value)
     messages.push(name.value)
     console.log(messages)
     welcome.textContent = name.value

     
    const liEl = document.createElement("li")
    liEl.innerText = `UME NUNUA:  ${text.value.toLowerCase()}`
    outPut.appendChild(liEl)
    text.value = "";
    name.value = "";
   
}

