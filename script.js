let arr = [
    "pic-2.jpg",
    "pic-4.jpg",
    "pic-3.jpg",
    "pic-5.jpg",
    "pic-6.jpg",
    "profile-pic2.png"
    
]
let userProfiles = document.querySelector(".users-profile")
let list = ""
for(let img of arr){
    console.log(img)
    list = `
        <div style = "background-image : url(./images/${img}), linear-gradient(0deg, #000000a6, transparent)" 
        class = "users-profile-info">
            <img src = "./images/${img}" alt = "Lanre's picture" class = "users-profile-pic"/>
            <div class = "users-profile-details">
                <p class = "users-profile-name">Lanre</p>
                <p class = "users-profile-username">@larex</p>
            </div>
        </div>
    `
    userProfiles.innerHTML += list
}
let userProfilesPic = document.querySelectorAll(".users-profile-pic")
let searchInput = document.querySelector(".search-input")
let postBtn = document.querySelector(".create-post-btn")

function openFullScreen(elem){
    if(elem.requestFullscreen){
        elem.requestFullscreen()
        elem.style.border = "none"
        elem.style.borderRadius = "0px"

    }
}

function closeFullScreen(elem){
    if(document.fullscreenElement){
        document.exitFullscreen()
        setTimeout(()=> {
            elem.style.border = "3px solid #7409e8"
            elem.style.borderRadius = "50%"
        })
    }
}

// for(let pic of userProfilesPic){
//     pic.addEventListener("click", (e) => {
//         console.log(e)
//         openFullScreen(e.target)
//     })

//     pic.addEventListener("dblclick", (e) => {
//         console.log("hi there")
//         closeFullScreen(e.target)
//     })

// }

// document.addEventListener("click", (e)=>{
// console.log(e)
//     let img = e.target.closest("img")
//     if(!img){
//         console.log("got it")
//     }
// })

let tabLinks = document.querySelectorAll(".tab-link")
let tabContents = document.querySelectorAll(".tab-content")

for (let i = 0; i < tabLinks.length; i++){
    tabLinks[i].onclick = function (e){
        e.preventDefault()
        tabContents.forEach(elem => {
            elem.style.display = "none"
        })

        document.querySelector(`#${this.dataset.toggle}`).style.display = "block"
    }
}

let speechBtn = document.querySelector(".speech-btn")
speechBtn.addEventListener("click", ()=> {
   let action = document.querySelector("#request > h2")
   let output = document.querySelector("#request > p")
   let recognition = new webkitSpeechRecognition()

   recognition.onstart = () => {
    action.innerHTML = "Loading..."
   }

   recognition.onresult = (event) => {
    let transcript = event.results[0][0].transcript
    action.innerHTML = "This is the result"
    output.innerHTML = transcript

   }

   recognition.onnomatch = () => {
    action.innerHTML = ""
    output.innerHTML = "Sorry no match was found!"
   }

   recognition.onerror = (event) => {
    action.innerHTML = "There was an error"
    output.innerHTML = `<p style = "color : red">${(event.error).toUpperCase()} ERROR</p>`
   }

   recognition.start()

})




                    /* Code that takes a url link and downloads the file */

                    // try{
                    //     if(searchInput.value == ""){
                    //         return;
                    //     }
                    //     let response = await fetch(searchInput.value)
                    //     let file = await response.blob()
                    //     let link = document.createElement("a")
                    //     link.href = URL.createObjectURL(file)
                    //     link.download = new Date().getTime()
                    //     link.click()
                    //     searchInput.value = ""
                    // }catch(err){
                    //     if(err.TypeError == "failed to fetch"){
                    //         console.log("No internet connection")
                    //     }
                    //     // alert(`There was an error: ${err}`)
                    // }
