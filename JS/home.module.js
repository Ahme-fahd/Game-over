import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home{


    constructor(){
        document.querySelectorAll('.nav-link').forEach(link =>{
            link.addEventListener('click', () =>{
             this.changeActive(link);

             const category = link.dataset.category
            
             this.getGames(category)
            });
        });

        this.loading = document.querySelector('.loading');
        this.details = document.getElementById('details');
        this.game = document.getElementById('game');

        this.ui = new Ui();

      

        this.getGames('MMORPG')
    }

 changeActive(link){
    document.querySelector('.navbar-nav .active').classList.remove("active");
    link.classList.add("active");

}

   async getGames(categ){

    this.loading.classList.remove("d-none")

const options = {

    method: "GET",
    headers: {
        'x-rapidapi-key': 'd284b7c941msh605890cc83c23c6p1fdb78jsn86b572b243ed',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
}


const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categ}` , options )
const response = await api.json();


this.loading.classList.add("d-none")

console.log(response);

this.ui.display(response);


document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click', () =>{
this.details.classList.remove('d-none');
this.game.classList.add('d-none');

new Details(card.dataset.id);
    })

})

    }

}