import { Ui } from "./ui.module.js";

export class Details {
    constructor(id){
        document.getElementById('btnClose').addEventListener('click',()=>{
            document.getElementById('details').classList.add('d-none');
            document.getElementById('game').classList.remove('d-none');
        });

        this.loading = document.querySelector('.loading');


        this.getDetails(id);
    }

   async getDetails(id){

this.loading.classList.remove('d-none');
    const options = {
        method: "GET",
        headers: {
            'x-rapidapi-key': 'd284b7c941msh605890cc83c23c6p1fdb78jsn86b572b243ed',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        },
    };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const response = await api.json();

        this.loading.classList.add('d-none');


        console.log(response);

        new Ui().displayDetails(response);
    }
}