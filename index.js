let info = document.querySelectorAll('.info')

function validation(){
    for( let i=0; i<info.length; i++){
        if (info[i].value == "" || info[i].value == null){
            info[i].nextElementSibling.innerHTML = info[i].previousElementSibling.innerHTML + " is required"
        }
    }
}

let schBtn = document.getElementById('schBtn')
if (schBtn){
    schBtn.onclick = (e) => {
        e.preventDefault()
        validation()
    }
}


let studentBtn = document.getElementById('studentBtn')

if(studentBtn){
    studentBtn.onclick = (e) => {
        e.preventDefault()
        validation()
    }
}