let sms = document.querySelector("#text")
let charcount = document.querySelector("#charcount")
sms.addEventListener("keyup",function(){
    let entered_characters = sms.value.length
    charcount.innerText = entered_characters

})