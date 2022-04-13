window.addEventListener("click", (e)=>{
    if(e.target.id == "addbtn"){
        const text = document.querySelector("#addtext").value;
        if(text != ""){
            let ul = document.querySelector("#list");
    
            let li = document.createElement("li");
            let span = document.createElement("span");
            let btn = document.createElement("button");
    
            span.classList.add = "text";
            span.textContent = text;
            btn.id = "delete";
            btn.textContent = "Delete";
    
            li.className = "li";
    
            li.appendChild(span);
            li.appendChild(btn);
    
            ul.appendChild(li);

            document.querySelector("#addtext").value = "";
        }
    }
    if(e.target.id == "delete"){
        const ul = document.querySelector("#list");

        ul.removeChild(e.target.parentNode);
    }
});

