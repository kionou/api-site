let resulblague = document.querySelector('.affblague')
let pays = document.querySelector('.affpays')
let input = document.querySelector('form')

console.log(input);

function afficheblague() {
    
fetch ( `https://api.blablagues.net/?rub=blagues` )
.then(res  => res.json() )
.then (blague => {
    let blagues = blague.data
    console.log(blague.data);
    resulblague.innerHTML =  `
       <div class="card" style="width: 20rem;">
         <div class="card-body">
            <h3 class="card-title">Blague</h3>
            <h4 class="card-subtitle mb-2 text-muted">${blagues.categorie}</h4>
            <p class="card-text"> ${blagues.content.text_head} </p>
            <p class="card-text">  ${blagues.content.text_hidden || blagues.content.text  } </p> <br>
            <input class="btn btn-primary " type = "reset" onclick =" afficheblague( 'blagues' ) "   value="Reset">
        </div>
</div>
        ` ;
    });
}

afficheblague();








    fetch(`https://restcountries.com/v3.1/all `)
    .then(res => res.json())
    .then( monde => {
      // console.log(afrique);
      affiche(monde)

    }) 
    
 function affiche(monde) {
   results = monde
    console.log(results);
    for (let i = 0; i < results.length; i++) {
        const element = results[i];
        pays.innerHTML +=`
<div class="row">
  <div class="col-sm-6">
    <div class="drap"  >
     <img src="${  results[i].flags.png}"  class="card-img-top">
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body infop">
        <h3 class="card-title">Pays: ${results[i].name.common}</h3>
        <h5 class="card-text">capitale: ${ results[i].capital  || ''}</h5>
        <h5>Superficie: ${nombreespace( results[i].area)} km²</h5>
        <h5>Polulation: ${ nombreespace(results[i].population) }</h5>
      
      </div>
      <button id="plus" class="btn btn-outline-info ">Info</button>
    </div>
  </div>
</div>    
        `
        
      }
      if(document.querySelector('#plus')) {
        plusinfo();
      }
    
}

let chercher =' ';
input.addEventListener('input' ,(e)  => {
e.preventDefault();
 chercher = e.target.value
 console.log(chercher);

 fetch(`https://restcountries.com/v3.1/name/${chercher} `)
    .then(res => res.json())
    .then( monde => {
      // console.log(afrique);
      pays.innerHTML = '';
      affiche(monde)

    }) 


});


function plusinfo() {
  let info = document.querySelector('#plus')

  info.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e.target.classList);
    let reponse = e.target.parentElement.parentElement;
    // pays.innerHTML = '';
    // pays.innerHTML = `
    //       <div class="rep"> 
    //         ${reponse}
    //       </div>

    // `

    console.log(e.target.parentElement.parentElement);
    
  })
  
}



function nombreespace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
}
    
    // <img class="card-img-top" src="${blagues.thumbnail}" alt="Card image cap">
    // <h5 class="card-title">${blagues.content.text_head} </h5>
    // <h5 class="card-title"> reponse: ${blagues.content.text_hidden || blagues.content.text  }  </h5>
              
// <li class="afrique-item">
//     <img src="${  results[i].flags.png}" />
//      <h2>Capitale: ${ results[i].capital}</h2>
//       <h3>Pays: ${ results[i].name.common}</h3>
//       <h3>Superficie:${ results[i].area} km²</h3>
//      <h3>Momaie: ${ results[i].languages}</h3>

// </li > 
        