
const express = require ('express')
const fs = require('fs')

const app = express()
const port = 3000;

// app.get('/user/:userID', (req, res) => {
//     const userId = req.params.userID;
//     const users = JSON.parse(fs.readFileSync(`${process.cwd()}/users.json`))
//     let result = users.filter(user => user.id.toString() === userId.toString());
//     if(result.length){ res.send(result) }
//     else{ res.send('Not Found!')}
//     res.end();
// })

// app.get('/category', (req, res)=>{
//     category  =  req.query.category;

//     const foods = JSON.parse(fs.readFileSync(`${process.cwd()}/foods.json`))
//     let result = foods.filter(food=> food.category.includes(category) );

//     if(result.length){ res.send(result) }
//     else{ res.send('Not Found!')}
//     res.end();
// })
//     .post('/category', (req, res)=>{
//         category  =  req.query.category;
    
//         const foods = JSON.parse(fs.readFileSync(`${process.cwd()}/foods.json`))
//         let result = foods.filter(food=> food.category.includes(category) );
    
//         if(result.length){ res.send(result) }
//         else{ res.send('Not Found!')}
//         res.end();
//     })

const profile = {
    name: "Temuulen",
    age: 31,
    profession: "Fullstack Developer",
    description: "Building simple adn beautiful things for complex interfaces is what I enjoy most about my work. I am also interested in crafting beautiful minimal products and exploring new worlds."
}

function middleware(route){
    switch(route){
        case "name":
            return profile.name;
            break;
        case "profession":
            return profile.profession;
            break;
        case "age":
            return "31";
            break;
        case "description":
            return profile.description;
            break;
        case "profile":
            return profile;
            break;    
        default:
            return "Not Found";  
    }
}

app.use(express.static("public"))

app.get("/", (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.send(middleware(req.query.request));
})

app.listen(port, ()=>{
    console.log (`app listening at:  ${port}`)
})

