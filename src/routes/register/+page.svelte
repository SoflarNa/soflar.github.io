<h1>Registration Form</h1>

<form  on:submit|preventDefault={handleSubmit}>
    <label for=firstName >First Name:</label>
    <input id="firstName" type="text" bind:value={firstName}/>
    <label for=lastName >Last Name:</label>
    <input id="lastName" type="text"/>
    <label for=Email >Email:</label>
    <input id="Email" type="email"/>
    <label for=phoneNumber >Phone number:</label>
    <input id="phoneNumber" type="tel"/>
    <label for=Password >Password:</label>
    <input id="Password" type="password"/>
    <button type="submit">Register</button>

</form>

<script>
    let firstName = ""
    function handleSubmit() {
        if (firstName!= "")
            console.log("Welcome "+firstName);
    }
    </script>

<style>
    form{
        display:grid;
        width: 60vw;
        max-width: 500px;
        min-width: 300px;
        margin: auto;
        grid-template-columns: repeat(2, minmax(200px, 1fr));
    }

</style>