let schoolContainer = document.getElementById("schoolContainer");

// Function that fetches schools and writes them out
function writeSchool(){
    fetch(restURLSchool)
    .then((res)=> res.json())
    .then((data)=>{
        for(let i = 0; i < data.length; i++){
            let school = data[i];

            // Rewriting date into year/month format
            let startdate= school.startdate.substring(0, 7).split('-')
            let enddate= school.enddate.substring(0, 7).split('-')
            startdate = startdate[0] + '/' + startdate[1];
            enddate = enddate[0] + '/' + enddate[1];
            if (enddate.substring(0,1)== "0"){
                enddate = ""
            }
            // Writing out the information
            schoolContainer.innerHTML = schoolContainer.innerHTML + 
            `<li>
                <div class="flexContainer"> 
                    <button class="foldingBtn" id="schoolBtn${school.id}"> 
                        <div> 
                            <h4> ${school.schoolname}</h4> 
                            <p>${school.programname}</p>
                            <p>${school.degree}</p>
                        </div>
                        <div>    
                            <p>${startdate} - ${enddate}</p>
                        </div>
                        <i class="fas fa-sort-down mypageArrow"></i>
                    </button> 
                    <div class="foldingText"> 
                        <div id="schoolID${school.id}">
                        </div>
                    </div>
                </div>
            </li>
            `
        };
        buttonFolder()
        writeCourses();
    })
}

writeSchool();

// Function to write courses
function writeCourses(){
    fetch(restURLCourses)
    .then((res)=>res.json())
    .then((data)=>{
        for(let i = 0; i < data.length; i++){
            let course = data[i];
            let startdate= course.startdate.substring(0, 7).split('-')
            let enddate= course.enddate.substring(0, 7).split('-')
            startdate = startdate[0] + '/' + startdate[1];
            enddate = enddate[0] + '/' + enddate[1];
            if (enddate.substring(0,1)== "0"){
                enddate = ""
            }
            let thisSchool = document.getElementById("schoolID"+ course.schoolid);
            thisSchool.innerHTML = thisSchool.innerHTML + `<div class="courseClass" id="courseID${course.id}">
                <h5> ${course.name}</h5>   
                <p>${startdate} - ${enddate}</p>
            </div>
            </li>`
        };
    })
}


// Function that controls the folding button
function buttonFolder(){
    let foldingButtons = document.getElementsByClassName("foldingBtn");

    for (let i = 0; i < foldingButtons.length; i++) {
    
        // adds eventlistener for when folding button is clicked.
        foldingButtons[i].addEventListener("click", function () {
    
            let foldingText = this.nextElementSibling;
    
            // Targets next sibling of the folding button and displays it if it is not
            // displayed now and hides it if it is. 
            if (foldingText.style.display === "block") {
                foldingText.style.display = "none";
    
                foldingText.style.borderBottom = "none";
    
                this.setAttribute("aria-expanded", "false");
    
                this.lastElementChild.classList.remove("fa-sort-up");
                this.lastElementChild.classList.add("fa-sort-down");
    
    
    
            } else {
                foldingText.style.display = "block";
    
                this.setAttribute("aria-expanded", "true");
    
                this.lastElementChild.classList.remove("fa-sort-down");
                this.lastElementChild.classList.add("fa-sort-up");
    
            }
        })
    }
}

