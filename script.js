var istatus = document.querySelector("h5")
var btn = document.querySelector(".add")
// var removeFriend = document.querySelector(".remove")
var check = 0

btn.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "#c71e19"
         btn.innerHTML = "Add Friend"
        check = 0
    }
})