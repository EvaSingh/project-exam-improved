//Next launch

fetch("https://api.spacexdata.com/v4/launches/next")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        displayNextLaunch(json);
});


function displayNextLaunch(launch) {
    let launchDate = new Date(launch.date_local).toLocaleString();
    const container = document.querySelector("#next-launch-container");

    container.innerHTML = `<div>
                              <h2 class="display-3">Next launch:</h2>
                              <h3>${launch.name}</h3>
                              <p>${launchDate}</p>
                              <a href="launches.html" class="btn">More launches</a>
                         </div>`;
}


//People in space

fetch("http://api.open-notify.org/astros.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        displayPeople(json);
});


function displayPeople(json) {

    const people = json.people;

    const peopleDetails = document.querySelector("#people-container");
    
    peopleDetails.innerHTML = `<div>
                                   <h2 class="display-3">People in space</h2>
                                   <p>There are ${people.length} people in space right now.</p>
                                   <p>Want to be an astronaut and wonder what it takes?</p>
                                   <a href="https://www.youtube.com/watch?v=4fXsAvv96Gw&feature=youtu.be" class="btn" target="_blank">Find out</a>     
                               </div>`;
}










