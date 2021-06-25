function submitData(name, email){
    let formData = {
       name: name,
       email: email
    }

    let configObj = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            let newText = document.createElement("h1")
            newText.innerHTML = object.id
            document.body.append(newText)
            console.log(object)
        })
        .catch(function(error){
            let errText = document.createElement("h4")
            errText.innerHTML = error.message
            document.body.append(errText)
            console.log(error.message)
        })
}
