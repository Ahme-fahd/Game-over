

export class Ui {
    constructor() {}

    display(data){
        let box =``

for(let i = 0; i<data.length ; i++ ){
    box += `
    <div class="col">
                   <div class="card h-100 bg-transparent" role="button" data-id="${data[i].id}">
                       <div class="card-body">
                           <figure class="position-relative">
                               <img src="${data[i].thumbnail}" class="card-img-top object-fit-cover h-100" alt="game">
                           </figure>

                           <figcaption>
                               <div class="hstack justify-content-between">
                                   <h3 class="h6 small text-secondary">${data[i].title}</h3>
                                   <span class="p-2 text-bg-primary badge">Free</span>
                               </div>

                               <p class="card-text text-white small text-center opacity-50">${data[i].short_description}</p>
                           </figcaption>
                       </div>


                       <footer class="card-footer small hstack justify-content-between">
                           <span class="badge badge-color text-white-50">${data[i].genre}</span>
                           <span class="badge badge-color">${data[i].platform}</span>
                       </footer>
                   </div>
               </div>
   
   `
}
document.getElementById('gameData').innerHTML = box;

       
    }


    displayDetails(data){
       const detailBox = `  
        <div class="col-md-4">
                <img src="${data.thumbnail}" class="w-100" alt="game details">
            </div>
            <div class="col-md-8">
                <h3 class="text-white">Title: ${data.title}</h3>
                <p class="text-white">Category: <span class="badge text-bg-info">${data.genre}</span></p>
                <p class="text-white">Platform: <span class="badge text-bg-info">${data.platform}</span></p>
                <p class="text-white">Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                <p class="text-secondary">${data.description}</p>
                <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
            </div>
            `;

            document.getElementById('detailsContent').innerHTML= detailBox;
        
    }




}


