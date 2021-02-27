//Astronomy picture of the day

fetch("https://api.nasa.gov/planetary/apod?api_key=SE0EI5G7B2vjIeO25iSjGFpTfpH0Kid63Hx9fXc5")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        displayAPOD(json);
    
});


function displayAPOD(apod) {
    
    const container = document.querySelector("#apod-container");

    container.innerHTML = `<div>
                            <img  class="img-fluid"  src="${apod.url}"></img>       
                           </div>`;
}