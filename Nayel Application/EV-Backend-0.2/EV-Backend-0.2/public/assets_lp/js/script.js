// Array of predefined questions and answers
const faq = [
  {
    question: "How fast can an electric bike go?",
    answer: "The speed of an E-Bike depends on the model and the motor it is equipped with. Generally, E-Bikes can go up to 30 kph or more, depending on the laws in your area. Nayel 3.8E can go up to 100 kph."
  },
  {
    question: "How long does the battery last?",
    answer: "The range of an E-Bike varies depending on the model and how much you use the motor. On average, a fully charged battery can last between 30 to 60 kms. Nayel 3.8E goes 100 km on a single charge (conditions apply)."
  },
  {
    question: "Is license required for electric bikes?",
    answer: "Yes, a valid license is required for electric bikes in Pakistan."
  },
  {
    question: "For further assistant, click here",
    answer: "Feel free to contact us on contact@aim-motors.com for further queries."
  }

];



  // DOM elements
const chatIcon = document.querySelector('.chat-icon');
const chatBadge = document.querySelector('#chat-badge');
const chatBox = document.querySelector('#chat-box');
const chatHeader = document.querySelector('#chat-header');
const chatBody = document.querySelector('#chat-body');
const chatInput = document.querySelector('#chat-input');
const sendBtn = document.querySelector('#send-btn');
const closeBtn = document.querySelector('#close-btn');

  // Default message
// const defaultMessage = document.querySelector('#default-message').textContent;


  
// Generate Question List
function generateQuestionsList() {
  const container = document.createElement("div");
  const questionsContainer = document.createElement("div");
  const questionsList = document.createElement("ul");
  questionsList.classList.add("questions-list"); // add the CSS class to the list

  faq.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.question;
    listItem.classList.add("faq-question"); // add CSS class to question li elements
    listItem.addEventListener("click", () => {
      // When a question is clicked, send the question to the chat window
      sendMessage(item.question);
    });
    questionsList.appendChild(listItem);
  });

  // Set the height and overflow properties on the questions container
  questionsContainer.appendChild(questionsList);
  container.appendChild(questionsContainer);

  // Conditionally set the overflowY property based on the number of questions
  if (faq.length > 4) {
    questionsContainer.style.height = "150px";
    questionsContainer.style.overflowY = "scroll";
  }

  return container;
}





  // Hide chat box and clear chat history
closeBtn.addEventListener('click', () => {
    chatBox.style.display = 'none';
    // chatBody.innerHTML = '';
    chatBadge.style.display = 'none';
    chatBadge.textContent = '';
});

 
  // Send message by clicking the send button
// sendBtn.addEventListener('click', () => {
//     sendMessage();
// });
  
  // Send message by pressing the enter key
// chatInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//       sendMessage();
//       event.preventDefault();
//     }
// });
  
// Send message function
// function sendMessage() {
//   const question = chatInput.value.trim();
//   if (question === '') return;
//   addMessage(question, 'question');
//   showTypingIndicator();
//   setTimeout(() => {
//       const answer = getAnswer(question);
//       addMessage(answer, 'answer');
//       hideTypingIndicator();

//       // Save chat messages to local storage
//       const chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
//       chatHistory.push({ question, answer });
//       localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
//   }, 2000);
//   chatInput.value = '';
//   chatInput.focus();
  
// }

function sendMessage(question) {
  addMessage(question, 'question');
  // showTypingIndicator();
  setTimeout(() => {
      const answer = getAnswer(question);
      addMessage(answer, 'answer');
      // hideTypingIndicator();

      // Save chat messages to local storage
      const chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
      chatHistory.push({ question, answer });
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, 1000);
}



  // Get answer
function getAnswer(question) {
    for (const message of faq) {
      if (message.question.toLowerCase() === question.toLowerCase()) {
        return message.answer;
      }
    }
    return "I'm sorry, I don't understand. Please try asking a different question.";
}
  
   // Add message
function addMessage(message, type) {
  const msgElem = document.createElement('div');
  msgElem.classList.add('message', type);
  msgElem.textContent = message;
  if (type === 'question') {
    msgElem.classList.add('user-message');
  } else if (type === 'answer') {
    msgElem.classList.add('bot-message');
  }
  chatBody.appendChild(msgElem);
  chatBody.scrollTop = chatBody.scrollHeight;
  if (type === 'answer') {
    chatBadge.style.display = 'block';
    chatBadge.textContent = parseInt(chatBadge.textContent) + 1;
  }
  if (chatBadge.textContent === '99+') {
    chatBadge.textContent = '99+';
  }


}


// chatIcon.addEventListener('click', () => {
//     chatIcon.style.display = 'none';
//     chatBox.style.display = 'block';
// });



// When the chat icon is clicked, display the chat window with the list of questions
const questionsList = generateQuestionsList();
chatIcon.addEventListener("click",  () => {
  // Hide the chat icon
  chatIcon.style.display = "none";
  // Show the chat box
  chatBox.style.display = "block";
  chatBox.appendChild(questionsList);
  chatBox.style.display = "block";
});


// Function to hide the chat box
function hideChatBox() {
  // Show the chat icon
  chatIcon.style.display = "block";
  // Hide the chat box
  chatBox.style.display = "none";
}


// closeBtn.addEventListener('click', () => {
//     chatIcon.style.display = 'block';
//     chatBox.style.display = 'none';
// });


// Add a click event listener to the close button to hide the chat box
closeBtn.addEventListener("click", hideChatBox);


window.onload = function() {
  localStorage.removeItem('chatHistory');
}





