let info = document.querySelectorAll('.info')
let schBtn = document.getElementById('schBtn')
let school = document.getElementById('school')
let state = document.getElementById('state')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let address = document.getElementById('address')
let password = document.getElementById('password')

function validation() {
    for (let i = 0; i < info.length; i++) {
        if (info[i].value == "" || info[i].value == null) {
            info[i].nextElementSibling.innerHTML = info[i].previousElementSibling.innerHTML + " is required"
        }
    }


    if (!school.value || !state.value || !email.value || !phone.value || !address.value || !password.value) {
        return
    } else {
        alert('School registration successful')
        // window.location.href = 'Register student.html'
    }

    let obj = {
        school: school.value,
        state: state.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        password: password.value
    }
   

    let schData = localStorage.getItem('schools')
    let infocontent = schData ? JSON.parse(schData) : []
    infocontent.push(obj)
    localStorage.setItem('Schools',JSON.stringify(infocontent))

}

if (schBtn) {
    schBtn.onclick = (e) => {
        e.preventDefault()
        validation()
    }
}


