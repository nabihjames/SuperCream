AOS.init();
var mixer = mixitup('.container');

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
      500: {
          slidesPerView:2,
          spaceBetweenSlides: 30
      },
      700: {
          slidesPerView: 3,
          spaceBetweenSlides: 40
      }
  } ,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper_next",
    prevEl: ".swiper_prev",
  },
});


let menu = document.querySelector("#menu")
let bars = document.querySelector("#bars")

bars.addEventListener("click", ()=>{
  menu.classList.toggle("show")
})



  let navbar = document.querySelector("#navbar")
  window.addEventListener("scroll",()=>{
      if(window.scrollY > 10)
      {
        navbar.classList.add("bgnav")
      }
      else{
        navbar.classList.remove("bgnav")
      }
  })

document.addEventListener('DOMContentLoaded', () => {
  const questions = [{
    question: 'Which factor is critical in determining the final quality of ice cream?',
    options: ['Amount of food coloring used', ' Speed of cooling', 'Ingredient proportions and mixing techniques', 'Type of packaging'],
      answer: 3
    },
    {
      question: 'Which of the following is often used to enhance the flavor of pistachio cream?',
      options: ['Hazelnut extract', ' Pistachio paste', 'Mint leaves', 'Orange juice'],
      answer: 2
    },
    {
      question: 'Chewing gum-flavored cream is popular for its:',
      options: ['Savory taste', 'Unique and playful flavor', 'Spicy undertones', 'Herbal notes'],
      answer: 2
    },
    {
      question: 'What is the primary goal of food quality assurance?',
      options: ['To increase production speed', 'To ensure the safety and consistency of food products', ' To reduce ingredient costs', 'To enhance packaging design'],
      answer: 2
    },
    {
      question: 'Which method is commonly used for pasteurizing dairy products?',
      options: ['Deep freezing', 'Boiling', 'High-temperature short-time (HTST) treatment', 'Sun drying'],
      answer: 3
    },
    {
      question: 'Which ingredient is essential for providing the creamy texture in ice cream?',
      options: ['Water', 'Vegetable oil', 'Milk fat', 'Corn syrup'],
      answer: 3
    },
    {
      question: 'What is a crucial factor in maintaining the quality of frozen consumable creams?',
      options: ['Constantly fluctuating temperatures', 'Maintaining a stable, low temperature', 'Exposing them to direct sunlight', 'Storing at room temperature'],
      answer: 2
    },
    {
      question: 'What is the main function of stabilizers in ice cream?',
      options: [' To prevent ice crystals from forming', 'To add flavor', 'To increase volume', 'To change color'],
      answer: 1
    },
  ];

  let currentQuestionIndex = 0;

  const questionText = document.getElementById('question-text');
  const optionButtons = document.querySelectorAll('.option-btn');
  const nextButton = document.getElementById('next-btn');

  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
      button.classList.remove('correct', 'incorrect');
      button.disabled = false;
    });
  }

  function handleOptionClick(event) {
    const selectedOption = event.target;
    const selectedAnswer = parseInt(selectedOption.dataset.answer);
    const currentQuestion = questions[currentQuestionIndex];

    optionButtons.forEach(button => {
      const buttonAnswer = parseInt(button.dataset.answer);
      if (buttonAnswer === currentQuestion.answer) {
        button.classList.add('correct');
      } else if (buttonAnswer === selectedAnswer) {
        button.classList.add('incorrect');
      }
      button.disabled = true;
    });
  }

  function handleNextButtonClick() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert('Quiz Completed!');
      currentQuestionIndex = 0;
      loadQuestion();
    }
  }

  optionButtons.forEach(button => {
    button.addEventListener('click', handleOptionClick);
  });

  nextButton.addEventListener('click', handleNextButtonClick);

  loadQuestion();
});
