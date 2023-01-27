
function generatePage(team){
    console.log(team)
    for(let member in team) {
        console.log(member.name)
        
    };
//     fs.writeFile('index.html', `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="./src/style.css">
//         <title> Team Page</title>
//     </head>
//     <body>
//         <h1>Meet The Team</h1>
//         <section class="teamCard">
//         </section>
//     </body>
//     </html>`, (err) => {
//         if (err)
//           console.log(err)})
//     team.forEach(el => {
//        fs.appendFile('index.html', `<div class="card">
//        <h2 class="card header">${el.getName}</h2>
//        <h4 class="card role">${el.getRole}</h4>
//        <p class="id">ID number: ${el.id}</p>
//        <div class="email">Email: ${el.email}</div>
// </div>`, (err) => {
//     if (err)
//       console.log(err)})

        
//     })

};
