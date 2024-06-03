<script>

let recipies = [{name:"Chokladbollar", image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_240269/cf_259/chokladbollar.jpg",
            time:"Under 60", recept:[{enhet:"gram",mangd: 50/10, ingrediens:"smör"},{enhet:"dl", mangd: 0.5/10,ingrediens:"strösocker"},{enhet:"msk",mangd: 0.5/10,ingrediens:"vaniljsocker"},{enhet:"msk",mangd: 1.5/10,ingrediens:"kakao"},
            {enhet:"dl",mangd: 1.5/10,ingrediens:"havregryn"},{enhet:"msk",mangd: 1.5/10,ingrediens:"kallt starkt kaffe"},{ingrediens:"pärlsocker kokos eller strössel"}], instruktioner: [{inst:"Smält smöret och låt puttra 1 minut.", done:false},
            {inst:"Blanda socker, vaniljsocker, kakao, havregryn, kaffe och smör med en elvisp.", done:false},{inst:"Ställ in i kylskåp så att smeten stelnar lite, ca 40 minuter.", done:false},
            {inst:"Forma bollar. Rulla i pärlsocker, kokos eller strössel.", done:false}],hemsida: "https://www.ica.se/recept/chokladbollar-5058/", antal: 10},
            {name:"Blåbärsmuffins", image:"https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_243358/cf_259/blabarsmuffins.jpg",
            time:"Under 30",recept: [{enhet:"dl",mangd:4/12,ingrediens:"vetemjöl"},{enhet:"dl",mangd:2/12,ingrediens:"strösocker"},{enhet:"krm",mangd:2/12,ingrediens:"salt"},{enhet:"tsk",mangd:2/12,ingrediens:"bakpulver"},
            {enhet:"gram",mangd:100/12,ingrediens:"smält smör eller margarin"},{enhet:"dl",mangd:1/12,ingrediens:"mjölk"},{enhet:"st",mangd:2/12,ingrediens:"ägg"},{enhet:"dl",mangd:2/12,ingrediens:"frysta, otinade blåbär"},{ingrediens:"lite socker"}], 
            instruktioner: [{inst:"Sätt ugnen på 200°C.", done:false},{inst:"Blanda mjöl, socker, salt och bakpulver i en skål. Tillsätt det smälta matfettet.", done:false},
            {inst:"Vispa ihop mjölk och ägg och rör ner i smeten. Vänd försiktigt i blåbären (spara några till garnering).",done:false},{inst:"Ställ muffinsformarna i en muffinsplåt och fördela smeten i formarna.", done:false},
            {inst:"Strö några lättsockrade blåbär på toppen. Grädda i 20 minuter.", done:false}], hemsida:"https://www.ica.se/recept/blabarsmuffins-2549/", antal: 12},
            
            {name:"Glutenfria chokladbollar", image: "https://files-aller-blogger-platform.aws.aller.com/uploads/sites/86/2023/02/Glutenfria_nougatbollar.jpg?w=850&fit=max&fm=webp",
            time:"60", recept:[{enhet:"g",mangd:75/30,ingrediens:"rumsvarmt smör"},{enhet:"g",mangd:60/30,ingrediens:"florsocker"},{enhet:"g",mangd:150/30,ingrediens:"nougat"},
            {enhet:"msk",mangd:1/30,ingrediens:"vaniljsocker"},{enhet:"msk",mangd:1/30,ingrediens:"kakao"},{enhet:"dl",mangd:1.5/30,ingrediens:"kokos"},{enhet:"g",mangd:120/30,ingrediens:"glutenfria havregryn"},{enhet:"msk",mangd:1/30,ingrediens:"vatten"},
            {ingrediens:"kokos till garnering"}], instruktioner: [{inst:"Rör eller vispa ihop rumsvarmt smör och florsocker i en bunke.", done:false},{inst:"Smält nougaten i mikrovågsugnen eller vattenbad och rör ner den i smörblandningen.", done:false},
            {inst:"Tillsätt resterande ingredienser och rör ihop till en jämn smet.", done:false},{inst:"Ställ smeten kallt en stund så går det lättare att rulla.", done:false},{inst:"Forma smeten till bollar och rulla i kokos.",done:false}],
            hemsida: "https://glutenfriagodsaker.allas.se/baka-glutenfritt/glutenfria-nougatbollar/",antal: 10}, 
            {name:"Glutenfria blåbärsmuffins", image:"https://www.glutenfriakoket.se/wp-content/uploads/2019/07/img_20190708_040833_3811935214214671159497-1140x1140.jpg",time:"Under 45",
            recept: [{enhet:"g",mangd:100/12,ingrediens:"smör, rumsvarmt"},{enhet:"st",mangd:2/12,ingrediens:"ägg"},{enhet:"dl",mangd:2.5/12,ingrediens:"glutenfri mjölmix"},{enhet:"dl",mangd:1.5/12,ingrediens:"strösocker"},
            {enhet:"tsk",mangd:1/12,ingrediens:"bakpulver"},{enhet:"tsk",mangd:1/12,ingrediens:"vaniljsocker"},{enhet:"tsk",mangd:0.5/12,ingrediens:"Fiberhusk"},{enhet:"dl",mangd:2/12,ingrediens:"blåbär"},{enhet:"g",mangd:25/12,ingrediens:"vitchoklad"}],
            instruktioner:[{inst:"Sätt ugnen på 200°C.", done:false},{inst:"Vispa smör och socker luftigt och tillsätt ett ägg i taget och fortsätt vispa en minut till.", done:false},
            {inst:"Mät upp alla torra ingredienser i en bunke och häll ner i smörblandningen, rör till en jämn smet.", done:false},{inst:"Hacka chokladen grovt och rör ner i smeten.",done:false},
            {inst:"Häll upp smeten i muffinsformar, fyll dem till drygt hälften.",done:false},{inst:"Lägg på blåbär, och grädda mitt i ugnen i ca 12 min.",done:false}], 
            hemsida:"https://www.glutenfriakoket.se/glutenfria-blabarsmuffins-med-vit-choklad/", antal: 12},
            
            {name: "Veganska chokladbollar", image: "https://undertian.com/wp-content/uploads/2018/06/veganska-chokladbollar-654x654.jpg",time:"Under 60", 
            recept:[{enhet:"dl",mangd:1/12,ingrediens:"solroskärnor"},{enhet:"dl",mangd:1/12,ingrediens:"kokos"},{enhet:"msk",mangd:3/12,ingrediens:"kakao"},{enhet:"krm",mangd:1/12,ingrediens:"salt"},{enhet:"krm",mangd:1/12,ingrediens:"vaniljpulver"},
            {enhet:"st",mangd:10/12,ingrediens:"dadlar, färska urkärnade"},{enhet:"msk",mangd:1/12,ingrediens:"kaffe, kallt"},{enhet:"dl",mangd:1/12,ingrediens:"havregryn"},{ingrediens:"Kokos att rulla i"}],
            instruktioner:[{inst:"Mixa all ingredienser utom havregrynen till en slät smet.",done:false},{inst:"Blanda slutligen i havregrynen, utan att mixa dem.",done:false},{inst:"Rulla till bollar.",done:false},{inst:"Rulla i kokos eller annan topping.",done:false},
            {inst:"Förvara i kyl eller frys",done:false}],hemsida:"https://undertian.com/recept/veganska-och-cheap-chokladbollar/",antal:12}, 
            {name:"Veganska blåbärsmuffins", image:"https://cdn2.cdnme.se/4456206/6-3/img_1490_-_version_2_546a155a2a6b22362f0288d4.jpg",time:"Under 30",
            recept: [{enhet:"dl",mangd:4/12,ingrediens:"vetemjöl"},{enhet:"dl",mangd:2/12,ingrediens:"strösocker"},{enhet:"tsk",mangd:3/12,ingrediens:"bakpulver"},{enhet:"tsk",mangd:2/12,ingrediens:"vaniljsocker"},{enhet:"tsk",mangd:0.75/12,ingrediens:"kardemumma"},
            {enhet:"dl",mangd:2/12,ingrediens:"vatten"},{enhet:"dl",mangd:0.5/12,ingrediens:"rapsolja"},{enhet:"dl",mangd:2/12,ingrediens:"blåbär"}],instruktioner:[{inst:"Blanda alla torra ingredienser.",done:false},{inst:"Tillsätt sedan vatten och olja.",dona:false},
            {inst:"Rör försiktigt ner blåbären, men inte för länge då smeten blir lila av blåbären.",done:false},{inst:"Fyll formar till 3/4.",done:false},{inst:"Grädda i ugnen i 175°C ca 15 min."}],
            hemsida:"https://dromrecept.blogg.se/2014/november/blabarsmuffins-vegan-2.html",antal:12}]
 
let filteredRecipies = [...recipies];

function filterRecipies(filterType) {
    if (filterType === "glutenfri") {
        filteredRecipies = recipies.filter(recept => recept.name.toLowerCase().includes("glutenfri"));
    } else if (filterType === "vegansk") {
        filteredRecipies = recipies.filter(recept => recept.name.toLowerCase().includes("vegansk"));
    } else {
        filteredRecipies = [...recipies];
    }
}

function openPopup(recept) {
        open = true;
        currentRecept = recept;
        factor = currentRecept.antal
}


let open = false;
let factor
let currentRecept


</script>

<h1>Recept</h1>
<hr>
<main>
<div class="filter">
    <h1>Filter:</h1>
    <hr>
    <button class="filterButton" on:click={() => filterRecipies()}><h1>Alla recept</h1></button>
    <button class="filterButton" on:click={() => filterRecipies("glutenfri")}><h1>Glutenfritt</h1></button>
    <button class="filterButton" on:click={() => filterRecipies("vegansk")}><h1>Veganskt</h1></button>
</div>

<div class="recept">
{#each filteredRecipies as recept}
    <div class="card">
        <h2>{recept.name}</h2>
        <div class="card-img">
            <button on:click={()=> {openPopup(recept)} }><img src={recept.image} alt="bild"></button>
        </div>
        <h3>Tid: {recept.time} min</h3>
        <h3>{recept.recept.length} Ingredienser</h3>
    </div>  
    {/each}
</div>

</main>

{#if open}

<div class="popup">
    <h1>{currentRecept.name} {factor} st</h1>
    <div class="popup-layout">
        <div class="popup-left">
        <img src={currentRecept.image} alt="bild">
        {#if currentRecept.antal == 10}
            <button on:click={()=>{factor = 10}}>10 st</button>
            <button on:click={()=>{factor = 15}}>15 st</button>
            <button on:click={()=>{factor = 20}}>20 st</button>
        {:else}
            <button on:click={()=>{factor = 12}}>12 st</button>
            <button on:click={()=>{factor = 18}}>18 st</button>
            <button on:click={()=>{factor = 24}}>24 st</button>       
        {/if}

        <ul>
        {#each currentRecept.recept as recept}
            {#if recept.mangd && recept.enhet}
                <li>{recept.ingrediens}: { (recept.mangd * factor).toFixed(2)%1!=0?(recept.mangd * factor).toFixed(2):(recept.mangd * factor).toFixed(0)} {recept.enhet}</li>
            {:else}
                <li>{recept.ingrediens}</li>
            {/if}
        {/each}
        </ul>
        
        </div> 
        <div class="popup-right">
            <ol>
            {#each currentRecept.instruktioner as instruktion}
            <li class:done={instruktion.done}>
                <input type="checkbox" class="checkbox" bind:checked={instruktion.done}/>
                {instruktion.inst}
            </li>
            {/each}
            </ol>
        </div>
        <button class="close-button" on:click={()=> open=false}>stäng</button>
        <h3 class="hemsida">Receptet taget från: <a href="{currentRecept.hemsida}">{currentRecept.hemsida}</a></h3>
    </div>
</div>
{/if}

<style>

    h1{
        text-align: center;
    }

    main{
        display: grid;
        grid-template-columns: 1fr 5fr;
        background-color:white;
        height: 80vh;
        grid-gap: 20px;  
    }

    main div{
        width: 98%;
        height: 100%;
    }

    .filter{
        background-color:aliceblue;
        text-align: center;
        border-radius: 25px;
    }

    .filterButton{
        background-color: aliceblue;
        border-color: aliceblue;
        width:200px;
        margin: 5px;
        cursor: pointer;
    }

    .recept{
        background-color:darkblue;
        display: flex;
        flex-wrap: wrap;
        padding-left:15px;
        border-radius: 25px;
    }

    .card{
        background-color: aliceblue;
        width: 300px;
        height: 425px;
        margin: 25px;
        padding-top:1px;
        text-align: center;
        border-radius: 2rem;
    }

    .card-img{
        width: 80%;
        height: 60%;    
        margin: auto;
    }

    .card-img img{
        width: 100%;
        height: 100%;
    }

    .card-img button {
        background-color: aliceblue;
        cursor: pointer;
        border: none;
    }

    .popup{
        position: fixed;
        left:15vw;
        top:8vh;
        height: 84vh;
        width: 70vw;
        background-color: lightskyblue;
        border-radius: 25px;   
    }

    .popup-layout{
        display: grid;
        grid-template-columns: 1fr 3fr;    
    }

    .popup-left{
        margin-left: 30px;
    }

    .popup-left img{
        width: 280px;
        height: auto;
    }

    .popup-left ul{
        font-size: large;
        margin-top: 10px;
    }

    .popup-left button{
        background-color: aliceblue;
        width: 50px;
        height: auto;
        margin-top: 5px;
        border-radius: 25px;
        border: none;
        cursor: pointer;
    }

    .popup-right{
        font-weight: bold;
        font-size:x-large;
        max-width: 550px;
        margin-top: 10px;
    }

    .popup-right ol li{
        margin-bottom: 20px;
        list-style: none;
    }
    
    .checkbox {
        width: 20px;
        height: 20px;
    }

    .close-button {
        background-color: aliceblue;
        cursor: pointer;
        border: none;
        position: absolute;
        top: 10px;
        right: 10px;
        width: 70px;
        height: 30px;
        border-radius: 25px;
    }

    .hemsida{
        position: absolute;
        bottom: 10px;
        right: 20px;
    }

</style>