let numberOfQuestions = document.querySelectorAll(".question").length;
let numberOfAnswers = document.querySelectorAll(".answer").length;

const faqQuestions = document.querySelectorAll(".question");
const faqAnswers = document.querySelectorAll(".answer");

for (let i = 0; i < numberOfQuestions; i++) {
    
    faqQuestions[i].addEventListener("click", function () {

        faqAnswers[i].classList.toggle("hidden");

        for (let a = 0; a < numberOfAnswers; a++) {
            if (a != i) {
                faqAnswers[a].classList.add("hidden");
                faqQuestions[a].classList.remove("bold")
                faqQuestions[i].classList.add("bold");
                document.querySelectorAll(".arrow")[i].classList.remove("arrow0");
                document.querySelectorAll(".arrow")[i].classList.add("arrow180");


                if (faqAnswers[i].classList.contains("hidden")) {
                    faqQuestions[i].classList.remove("bold");
                    document.querySelectorAll(".arrow")[i].classList.remove("arrow180");
                    document.querySelectorAll(".arrow")[i].classList.add("arrow0");

                };
            };
        };
    });  
};
