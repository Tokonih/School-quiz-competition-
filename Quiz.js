let studentDetail = document.getElementById("studentDetail");
let getStudent = localStorage.getItem("participant");
let storedstudent = JSON.parse(getStudent);
console.log(storedstudent);
let popup = document.getElementById("popup")
let close = document.getElementById("close")    
// for (let i = 0; i < storedstudent.length; i++) {
// console.log(storedstudent)
let nav = `
   <div>
   <strong>Name: </strong><p>${storedstudent.Name}</p>
</div>
<div>
   <strong>School:</strong><p>${storedstudent.school}</p>
</div>
   `;
studentDetail.innerHTML = nav;
// }

let questionsArr = [
  {
    ques: "When did Nigeria gain independence",
    options: ["1999", "1970", "1960"],
    ans: "1960",
  },
  {
    ques: "What year did NYSC start in Nigeria",
    options: ["1991", "1973", "2021"],
    ans: "1973",
  },
  {
    ques: "what is the full meaning of NDLEA",
    options: [
      "Nigerian Drug Legal Employment Agency",
      "National Drug Law Enforcement Agency",
      "Niegerian Debuging Legal enterpreneurship Agency",
    ],
    ans: "National Drug Law Enforcement Agency",
  },
  {
    ques: "what is the name of CBN governor",
    options: ["Buhari", "Peter Obi", "Godwin Emefiele "],
    ans: "Godwin Emefiele ",
  },
  {
    ques: "which country colonied Nigeria",
    options: ["Great Britain", "Unitesd States of America", "Ghana"],
    ans: "Great Britain",
  },
  {
    ques: "what is the name of the vice president of Nigeria",
    options: ["Peter Obi", "Prof Yemi Osinbajo", "Bola Ahmed Tinibu"],
    ans: "Prof Yemi Osinbajo",
  },
  {
    ques: "when did Nigeria gain her Democracy",
    options: ["1999", "2018", "1960"],
    ans: "1999",
  },
  {
    ques: "who was the first milliatry head of state in Nigeria",
    options: [
      "ALHAJI ABUBAKAR TAFAWA BALEWA",
      "Muhammad Buhari",
      "Bola Amhed Tinibu",
    ],
    ans: "ALHAJI ABUBAKAR TAFAWA BALEWA",
  },
  {
    ques: "when did rework start",
    options: ["2022", "2020", "2010"],
    ans: "2022",
  },
  {
    ques: "what is the name of the minister of FCT",
    options: [
      "Bala Abdulkadir Mohammed",
      "Mohammed Musa Bello",
      "Festus Keyamu",
    ],
    ans: "Mohammed Musa Bello",
  },
  {
    ques: "which country won the last world cup",
    options: ["Agentina", "France", "Nigeria"],
    ans: "Agentina",
  },
];

let index = 0;
let point = 0;
let quizContainer = document.getElementById("ansBtn");

function generateQuestion() {
  let quizQuestion = `<h2 class="questions">${questionsArr[index].ques}</h2>`;
  quizContainer.innerHTML += quizQuestion;
  questionsArr[index].options.forEach((answer) => {
    let btns = `
      <button class="answers" type="button">${answer}</button>
      `;
    quizContainer.innerHTML += btns;
  });
}
generateQuestion();

quizContainer.addEventListener("click", (e) => {
  if (e.target.className === "answers") {
    if (e.target.innerHTML === questionsArr[index].ans) {
      point++;
      console.log(point);
    }
    index++;

    quizContainer.innerHTML = "";

    if (index < questionsArr.length) {
      generateQuestion();
    } else {
      popup.classList.add("open-popup")
      document.querySelector(".score").innerHTML = "Score: "+ point 
      // alert("Game over");
      // alert(point);
      setInterval(()=>{

        window.location.href = "index.html"
      }, 1000)

      index = questionsArr.length - 1;
    }
  }
});

if(close){
  close.onclick =()=>{
      popup.classList.remove("open-popup")

  }
}
// quizContainer.addEventListener("click", (e) => {
//   if (e.target.className == "answers") {
//     if (e.target.innerHTML == questionsArr[index].ans) {
//       index++;

//       quizContainer.innerHTML = "";
//       generateQuestion();

//       if (index == questionsArr.length) {
//         alert("game over");
//         index = questionsArr.length - 1;
//       }
//     } else {
//       index++;
//       // alert("wrong answer");
//     }
//   }
// });
