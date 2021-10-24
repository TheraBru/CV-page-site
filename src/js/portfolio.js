let portfolioContainer = document.getElementById("portfolioContainer");

// Function that fetches the websites and writes them out
function portfolioWriter(){
    fetch(restURLWebsites)
    .then((res)=> res.json())
    .then((data)=>{
        data.forEach(website => {
            portfolioContainer.innerHTML = portfolioContainer.innerHTML + `<article> 
            <h3> ${website.title}</h3> 
            <p><b>Beskrivning:</b>${website.description}</p>
            <p><b>Länk: </b><a href="${website.url}">${website.url}</a></p>
            </article>`
        });
    })
}

portfolioWriter();