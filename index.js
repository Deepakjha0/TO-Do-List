var inputElement = document.getElementById("input")
var orderListElement = document.getElementById("orderList")
var formElement = document.getElementById("form1")

inputElement.addEventListener("keydown",function(e){
    console.log(e)
    if(e.key == "Enter"){
        if(e.target.value == ""){
            alert("Space is empty")
        }
        else{
            var liElement = document.createElement("li");
            liElement.innerText = e.target.value
            var deletebtn = document.createElement("button")
            deletebtn.innerText = "Delete item";
            liElement.appendChild(deletebtn)
            deletebtn.addEventListener("click", function(){
                liElement.remove();
            })
            orderListElement.appendChild(liElement)
            e.target.value = ""
        }
       
    }
})