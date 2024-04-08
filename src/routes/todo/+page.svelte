<script>
    let todos = ["göra app"]
    let done = []
    let newTask = ""

    function addTask(){
        if (newTask != "")
        todos.push(newTask)
        todos = todos
    }
    function taskCompleted(i){
        let donetask = todos.splice(i,1)[0]
        done.push(donetask)
        todos = todos
        done = done
    }
    function removeTask(i){
        done.splice(i,1)
        done = done
    }
</script>

<div class="container">
    <h1>TODO LIST</h1>
    <label>Ny uppgift
        <input bind:value={newTask}>
    </label>
    <button on:click={addTask}>Lägg till uppgift</button>
    <div class="layout">
        <div>
            <h1>NEW</h1>
            <ol>
                {#each todos as todo,i}
                    <li>
                        {todo}
                        <button on:click={()=>taskCompleted(i)}>Completed</button>
                    </li>
                    
                {/each}
            </ol>
            </div>
            <div style="display:grid">
            <h1>COMPLETED</h1>
            <ol>
                {#each done  as klart,i}
                    <li>
                        {klart}
                        <button on:click={removeTask}>Remove</button>
                    </li>
        
                {/each}
            </ol>
            </div>
    </div>
</div>

<style>
    .container{
        width: 80vw;
        height: 70vh;
        background-color: aliceblue;
        border-width: 10px;
        border-style:dashed;
        border-color:blue;
        border-radius: 0%;
        padding-top: 10px;   
    }
    .layout{
        display:grid;
        width:100%;
        grid-template-columns: 50% 50%;
    }
    ol{
        list-style-type: decimal;
    }
</style>

