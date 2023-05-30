let schName = JSON.parse(localStorage.getItem('schools'))
console.log(schName)
let signinSch = document.getElementById('signinSch')
schName.forEach(
    function schools(data){
        let option = document.createElement('option')
        option.value = data.school;
        option.innerHTML = data.school;
        signinSch.appendChild(option)
    }
)
let info = document.querySelectorAll('.info')

function validation(){
    for( let i=0; i<info.length; i++){
        if (info[i].value == "" || info[i].value == null){
            info[i].nextElementSibling.innerHTML = info[i].previousElementSibling.innerHTML + " is required"
        }else{
            info[i].nextElementSibling.innerHTML = ""
        }
    }
}



let signinEmail = document.getElementById('signinEmail')
let signinPass = document.getElementById('signinPass')
let popup = document.getElementById("popup")
let close = document.getElementById("close")

let signIn = document.getElementById('signIn')
if(signIn){
    signIn.onclick = (e) =>{
        e.preventDefault()
        let getStudent = localStorage.getItem('studentsData')
        let storedstudent = JSON.parse(getStudent)
        if(storedstudent == null){
            alert('no student avaliable')
        }else {
            let getStudent = storedstudent.find((student) =>{
                return(student.school == signinSch.value && student.email == signinEmail.value && student.password == signinPass.value)
            })
            if (getStudent){
                popup.classList.add("open-popup")
                
                // alert('login successful')
                localStorage.setItem('participant', JSON.stringify(getStudent))
                console.log(getStudent)
                
                    window.location.href = "Timer page.html"
                    
            }else{
                alert('invalid login details')
            }
         
        }
        validation()
    }
}

if(close){
    close.onclick =()=>{
        popup.classList.remove("open-popup")

    }
}