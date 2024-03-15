var mycontent = document.getElementById("mycontent");

async function getpost(){
    try{
        var res = await fetch("https://jsonplaceholder.typicode.com/posts");
        var data = await res.json();
        displaypost(data);

        if(!res.ok){
            throw error("failed to load.........")
        }
    }
    catch(error){
        console.log("ERROR:"+error)
        mycontent.innerHTML = "failed to fetch the data..........";
    }
}

console.log("hello");



function displaypost(data){
    var clutter = "";
    data.forEach(post => {
      clutter += ` <div class = "box">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`
    });
    mycontent.innerHTML = clutter;
}


async function gettodos(){
    try{
        var res = await fetch("https://jsonplaceholder.typicode.com/todos");
        var data = await res.json();
        displaytodos(data);

        if(!res.ok){
            throw error("failed to load.........")
        }
    }
    catch(error){
        mycontent.innerHTML = "failed to fetch the data..........";
    }
}

console.log("hello");



function displaytodos(data){
    var clutter = "";
    data.forEach(post => {
      clutter += ` <div class = "box">
            <h2>${post.title}</h2>
            <p>${post.completed}</p>
        </div>`
       
    });
    mycontent.innerHTML = clutter;
}





var pbtn = document.getElementById("p");
var todo = document.getElementById("to");
pbtn.addEventListener("click",getpost);
todo.addEventListener("click",gettodos);



