let jobContainer = document.getElementById("jobContainer");

// Function that fetches job-API-information and writes it out
function writeJobs(){
    fetch(restURLJobs)
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(job => {
            let startdate= job.startdate.substring(0, 7).split('-')
            let enddate= job.enddate.substring(0, 7).split('-')
            startdate = startdate[0] + '/' + startdate[1];
            enddate = enddate[0] + '/' + enddate[1];
            if (enddate.substring(0,1)== "0"){
                enddate = ""
            }
            jobContainer.innerHTML = jobContainer.innerHTML + `
            <li> 
                <div class="infoContainer">
                    <h4> ${job.title}</h4> 
                    <p>${job.workplace}</p>
                    <p>${startdate} - ${enddate}</p>
                </div>
            </li>`
        });
    })
};

writeJobs();