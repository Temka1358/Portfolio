

function getData(){
    

    fetch("http://localhost:3000/?request=name")
    .then((res)=>res.text())
    .then(data =>{
        document.getElementById("name").innerHTML = ` ${data}`
    })  

    fetch("http://localhost:3000/?request=age")
    .then((res)=>res.text())
    .then(data =>{
        document.getElementById("age").innerHTML = ` ${data}`
    }) 

    fetch("http://localhost:3000/?request=profession")
    .then((res)=>res.text())
    .then(data =>{
        document.getElementById("profession").innerHTML =` ${data}`
    }) 

    fetch("http://localhost:3000/?request=description")
    .then((res)=>res.text())
    .then(data =>{
        document.getElementById("description").innerHTML =` ${data}`
    }) 

}
