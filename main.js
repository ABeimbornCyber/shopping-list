//DOM references
const list = document.querySelector("ul");
const userInput = document.querySelector("input");
const submit = document.querySelector("button");
userInput.focus();

submit.addEventListener("click", function (){
    
    let item = userInput.value;
    userInput.value = '';
    userInput.focus();
    let listing = document.createElement("li");
    let span = document.createElement("span");
    let remove = document.createElement("button");
    listing.appendChild(span);
    listing.appendChild(remove);
    span.textContent = item;
    remove.textContent = "Delete";
    list.appendChild(listing);
    remove.addEventListener("click", function (){
        list.removeChild(listing);
    })
});

