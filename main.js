window.addEventListener("click", (e)=>{
    //add function to add button
    if(e.target.id == "addbtn"){
        let search = document.querySelector("#search");
        const text = document.querySelector("#addtext").value;

        //clean the search bar before add a new item to list
        search.value = "";

        if(text != ""){
            let ul = document.querySelector("#list");
    
            let li = document.createElement("li");
            let span = document.createElement("span");
            let btn = document.createElement("button");

            span.className = "text";
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
    //add function to delete button
    if(e.target.id == "delete"){
        const ul = document.querySelector("#list");

        ul.removeChild(e.target.parentNode);
    }
});

//handle search bar
window.addEventListener('keyup', (e)=>{
    //chacks if the key presed inside the search bar
    if(e.target.id == 'search'){
        let search = document.querySelector("#search");
        const list = document.getElementsByClassName('li');
        let arr = Array.from(list);
        arr.forEach((li)=>{
            if(!String(li.childNodes[0].textContent).toLowerCase().includes(String(e.target.value).toLowerCase())){
                li.style.display = 'none';
            }else{
                li.style.display = 'block';
            }
        });
    }
});
