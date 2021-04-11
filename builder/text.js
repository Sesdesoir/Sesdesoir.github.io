function text(manager, engineer, intern) {
var managerCard = 
`<div class="card" style="padding: 0 0 0 0; width: 18rem; margin: 1rem .5rem 1rem .5rem; border: .5vh; box-shadow: .2vh .5vh gray;">
  <div class= "card-header" style="background-color: rgb(32, 130, 221);" >
    <h5 style="color: floralwhite;">${manager[0].name.replace(/\"/g, '')}</h5>
    <h6 style="color: floralwhite;"><i class="fas fa-mug-hot"></i> Manager<h6>
  </div>
 <div class="card-body">
  <p class="card-text">ID: ${manager[0].id.replace(/\"/g, '')}</p>
  <p class="card-text">Office: ${manager[0].office.replace(/\"/g, '')}</p>
  <p class="card-text">Email: <a href="mailto: ${manager[0].email.replace(/\"/g, '')}" class="card-link">${manager[0].email.replace(/\"/g, '')}</a></p>
  </div>
  </div>`

var engineercard= "";
if (engineer.length >=1){
engineer.forEach(element => {
  if(!element){
    engineercard+= "";
  }
    engineercard += `
    <div class="card" style="padding: 0 0 0 0; width: 18rem; margin: 1rem .5rem 1rem .5rem; border: .5vh; box-shadow: .2vh .5vh gray;">
    <div class= "card-header" style="background-color: rgb(32, 130, 221);" >
        <h5 style="color: floralwhite;">${element.name.replace(/\"/g, '')}</h5>
        <h6 style="color: floralwhite;"><i class="fas fa-cogs"></i> Engineer<h6>
    </div>
    <div class="card-body">
      <p class="card-text">ID: ${element.id.replace(/\"/g, '')}</p>
     <p class="card-text">Email: <a href="mailto: ${element.email.replace(/\"/g, '')}" class="card-link">${element.email.replace(/\"/g, '')}</a></p>
     <p class="card-text">Username: <a href="https://github.com/${element.username.replace(/\"/g, '')}" class="card-link">${element.username.replace(/\"/g, '')}</a></p>
    </div>
  </div>`;    
    });
  }
var interncard= "";
if (intern.length >=1){
intern.forEach(element =>{
  if(!element){
    interncard += "";
  }
  interncard += `
  <div class="card" style="padding: 0 0 0 0; width: 18rem; margin: 1rem .5rem 1rem .5rem; border: .5vh; box-shadow: .2vh .5vh gray;">
    <div class= "card-header" style="background-color: rgb(32, 130, 221);" >
    <h5 style="color: floralwhite;">${element.name.replace(/\"/g, '')}</h5>
    <h6 style="color: floralwhite;"><i class="fas fa-school"></i> Intern<h6>
    </div>
  <div class="card-body">
      <p class="card-text">ID: ${element.id.replace(/\"/g, '')}</p>
      <p class="card-text">School: ${element.school.replace(/\"/g, '')}</p>
      <p class="card-text">Email: <a href="mailto: ${element.email.replace(/\"/g, '')}" class="card-link">${element.email.replace(/\"/g, '')}</a></p>
    </div>
  </div>`
})
}
    const html =`  
    <!DOCTYPE html>
   
    <html>
    <head>
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/cd88eeaab7.js" crossorigin="anonymous"></script>
    </head>
    <body>
    <header style="background-color: crimson; color: floralwhite; text-align: center; padding:2.5rem 0 2.5rem 0;">My Team</header>
    <div class="container">
      <div class="row">
    ${managerCard}\n
    ${engineercard}\n
    ${interncard}
      
  </div>
    </body>
    </html>`
    return html;
  };

module.exports={text};