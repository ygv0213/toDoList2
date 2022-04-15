window.addEventListener('load', (e)=>{

    window.addEventListener("click", (e)=>{
        //add function to add button
        if(e.target.id == "addbtn"){
            let search = document.querySelector("#search");
            let text = document.querySelector("#addtext").value;
            
            //chack if word is longer then 20 letters if yes do speration after the 10 letter
            let words = Array.from(text.split(" "));
            words.forEach((w, i)=>{
                let word = '';
                if(w.length > 20){
                    for(let i=0;i<w.length;i++){
                        if(i % 10 == 0 && i != 0){
                            word += " - ";
                        }
                        word += w[i];
                    }
                    words[i] = word;
                }
                
            });

            text = words.join(' ');
            //clean the search bar before add a new item to list
            search.value = '';
    
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
    let search = document.querySelector("#search");
    search.addEventListener('keyup', (e)=>{
        //chacks if the key presed inside the search bar
        if(e.target.id == 'search'){
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
    
    
    //this event listen to the keyboard to see if enter was pressed 
    //if enter was pressed and input bar is not empty add the mission to the list
    window.addEventListener('keypress', (e)=>{
        const text = document.querySelector("#addtext").value;
        if(e.code == 'Enter' && text != ''){
    
            let search = document.querySelector("#search");
    
            //clean the search bar before add a new item to list
            search.value = '';
    
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
    });
});