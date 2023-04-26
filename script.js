let sectionOneCards = document.querySelector(".section_1_cards")
let popularMovie = document.querySelector("#popular_movie")
let imagePath="https://image.tmdb.org/t/p/w500"
let leftIconOne=document.querySelector(".left_icon_one")
let rightIconOne=document.querySelector(".right_icon_one")
let leftIconTwo=document.querySelector(".left_icon_two")
let rightIconTwo=document.querySelector(".right_icon_two")
let bestComedies=document.querySelector("#best_comedies")
let leftIcon3=document.querySelector(".left_icon_3")
let rightIcon3=document.querySelector(".right_icon_3")
let logName=document.querySelector(".log_name")
let logOut=document.querySelector(".log_out")
let action=document.querySelector("#action")

if (!localStorage.getItem('loggedInUser')) {
window.location.href='/entrance/entrance.html'
}


fetch("./api/api.json")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        data.forEach(x => {
            sectionOneCards.innerHTML += `<div class="section_1_cards_1">
        <div class="card_image">
        <video controls src="${x.video}"></video>
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.5971 35.5261L34.2985 24.5L19.5971 13.4739V35.5261ZM24.5 0C10.9746 0 0 10.9765 0 24.5C0 38.0253 10.9765 49 24.5 49C38.0253 49 49 38.0235 49 24.5C49 10.9746 38.0235 0 24.5 0ZM24.5 44.1044C13.6963 44.1044 4.89559 35.3019 4.89559 24.5C4.89559 13.6963 13.6981 4.89559 24.5 4.89559C35.3037 4.89559 44.1044 13.6981 44.1044 24.5C44.1044 35.3037 35.3019 44.1044 24.5 44.1044Z"
                    fill="white" />
            </svg>
        </div>
        <p>"${x.text}"</p>
    </div>`
        })
    })


fetch("https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard%27;")
    .then(resp => resp.json())
    .then(data => {console.log(data.results);
        data.results.forEach(slider => {
            popularMovie.innerHTML += `
     <div class="slider_card">
        <img src="${imagePath+slider.poster_path}" alt="">
        <p>${slider.title}</p>
    </div>`
        })
    })






  let count=0;  
function slider (){
    for (let i=0;i<popularMovie.children.length;i++) {
        popularMovie.children[i].style.transform=`translateX(${-310*count}px)`

    }

}


setInterval(() => {
    if (count<popularMovie.children.length-4){
        count++
        slider ()
    }
    else {count=0
        slider()
    }
}, 3000);

rightIconOne.addEventListener("click",()=>{
    if (count<popularMovie.children.length-4){
        count++
        slider ()
    }
    else {count=0
        slider()
    }
})

leftIconOne.addEventListener("click",()=>{
if(count>0){
    count--
    slider()
}else {
    count=0
}

})

let getUser=JSON.parse(localStorage.getItem("loggedInUser"))
logName.innerHTML=getUser.name 

logOut.addEventListener("click", ()=>{
window.location.href='./entrance/entrance.html'
localStorage.removeItem("loggedInUser")
})


fetch("https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=comedy%27;")
    .then(resp => resp.json())
    .then(data => {console.log(data.results);
        data.results.forEach(slider => {
            bestComedies.innerHTML += `
     <div class="slider_card">
        <img src="${imagePath+slider.poster_path}" alt="">
        <p>${slider.title}</p>
    </div>`
        })
    })

    
  let countSec2=0;  
  function slider2 (){
      for (let i=0;i<bestComedies.children.length;i++) {
          bestComedies.children[i].style.transform=`translateX(${-310*countSec2}px)`
  
      }
  
  }
  
  
  setInterval(() => {
      if (countSec2<bestComedies.children.length-4){
          countSec2++
          slider2 ()
      }
      else {
        countSec2=0
          slider2()
      }
  }, 3000);
  
  rightIconTwo.addEventListener("click",()=>{
      if (countSec2<bestComedies.children.length-4){
          countSec2++
          slider2()
      }
      else {countSec2=0
          slider2()
      }
  })
  
  leftIconTwo.addEventListener("click",()=>{
  if(countSec2>0){
      countSec2--
      slider2()
  }else {
      countSec2=0
  }
  
  })




  fetch("https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=action%27;")
  .then(resp => resp.json())
  .then(data => {console.log(data.results);
      data.results.forEach(slider => {
          action.innerHTML += `
   <div class="slider_card">
      <img src="${imagePath+slider.poster_path}" alt="">
      <p>${slider.title}</p>
  </div>`
      })
  })


  let countSec3=0;  
  function slider3 (){
      for (let i=0;i<action.children.length;i++) {
          action.children[i].style.transform=`translateX(${-310*countSec3}px)`
  
      }
  
  }
  
  
  setInterval(() => {
      if (countSec3<action.children.length-4){
          countSec3++
          slider3 ()
      }
      else {
        countSec3=0
          slider3()
      }
  }, 3000);
  
  rightIcon3.addEventListener("click",()=>{
      if (countSec3<action.children.length-4){
          countSec3++
          slider3()
      }
      else {countSec3=0
          slider3()
      }
  })
  
  leftIcon3.addEventListener("click",()=>{
  if(countSec3>0){
      countSec3--
      slider3()
  }else {
      countSec3=0
  }
  
  })

    