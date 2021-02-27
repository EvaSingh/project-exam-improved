fetch("https://api.spacexdata.com/v4/launches/upcoming")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loopThroughLaunches(json);
        console.log(json);
});

function loopThroughLaunches(launches) {
    let newHTML = "";
    
    launches.forEach(function(launch) {
         
        newHTML += `<div class="mb-5">
                        <h3>${launch.name}</h3>
                            <p class="mb-0">Launch time: ${launch.date_local}</p>
                            <a class="mb-4" href="${launch.links.reddit.campaign}" target="_blank">More &rarr;</a>
                    </div>`;
    });

    const container = document.querySelector("#launch-container");
    container.innerHTML = newHTML;
}