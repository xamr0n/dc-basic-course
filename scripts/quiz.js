const allQuestions = [
  {
    question: "What is the primary responsibility of a Project Document Controller?",
    answers: [
      { text: "Managing project finances", correct: false},
      { text: "Coordinating project meetings", correct: false},
      { text: "Ensuring proper documentation control", correct: true},
      { text: "Handling construction equipment", correct: false},
    ]
  },
  {
    question: "Which document is typically used to record decisions made during project meetings?",
    answers: [
      { text: "Change Order", correct: false},
      { text: "Meeting Minutes", correct: true},
      { text: "Project Schedule", correct: false},
      { text: "Request for Information (RFI)", correct: false},
    ]
  },
  {
    question: "What does the acronym BIM stand for in the context of project documentation?",
    answers: [
      { text: "Building Information Modeling", correct: true},
      { text: "Budgetary Item Management", correct: false},
      { text: "Baseline Inspection Method", correct: false},
      { text: "Business Information Module", correct: false},
    ]
  },
  {
    question: "How does a Project Document Controller contribute to quality assurance?",
    answers: [
      { text: "Conducting financial audits", correct: false},
      { text: "Ensuring compliance with industry standards", correct: true},
      { text: "Managing project schedules", correct: false},
      { text: "Handling procurement activities", correct: false},
    ]
  },
  {
    question: "What is the purpose of a transmittal in project document control?",
    answers: [
      { text: "Requesting project bids", correct: false},
      { text: "Issuing project invoices", correct: false},
      { text: "Transferring project ownership", correct: false},
      { text: "Formally transmitting project documents", correct: true},
    ]
  },
  {
    question: "In the context of project documentation, what does the term 'RFQ' stand for?",
    answers: [
      { text: "Request for Quotation", correct: true},
      { text: "Request for Quality", correct: false},
      { text: "Revised Final Quote", correct: false},
      { text: "Record of Final Questions", correct: false},
    ]
  },
  {
    question: "What role does version control play in project document management?",
    answers: [
      { text: "Ensuring project security", correct: false},
      { text: "Managing project finances", correct: false},
      { text: "Tracking document changes", correct: true},
      { text: "Generating project reports", correct: false},
    ]
  },
  {
    question: "How does a Project Document Controller handle confidential information?",
    answers: [
      { text: "Share it openly with the entire project team", correct: false},
      { text: "Encrypt it for additional security", correct: true},
      { text: "Avoid documenting confidential information", correct: false},
      { text: "Store it in an unsecured location", correct: false},
    ]
  },
  {
    question: "What is the primary purpose of a Document Control Plan in project management?",
    answers: [
      { text: "Creating project schedules", correct: false},
      { text: "Ensuring document security", correct: true},
      { text: "Defining project goals", correct: false},
      { text: "Requesting project approvals", correct: false},
    ]
  },
  {
    question: "Which of the following documents typically outlines the roles and responsibilities of project team members?",
    answers: [
      { text: "Change Order", correct: false},
      { text: "Project Charter", correct: true},
      { text: "Submittal", correct: false},
      { text: "Bill of Quantities (BOQ)", correct: false},
    ]
  },
  {
    question: "What term is used to describe the documents that outline the legal relationship between the project owner and the contractor?",
    answers: [
      { text: "Memorandum of Understanding (MOU)", correct: false},
      { text: "Contract Documents", correct: true},
      { text: "Scope of Work", correct: false},
      { text: "Project Specifications", correct: false},
    ]
  },
  {
    question: "In project document control, what is the purpose of a Request for Information (RFI)?",
    answers: [
      { text: "To request additional budget", correct: false},
      { text: "To seek clarification on project details", correct: true},
      { text: "To initiate a change order", correct: false},
      { text: "To submit a project proposal", correct: false},
    ]
  },
  {
    question: "Which document type provides a detailed breakdown of the project timeline, including start and end dates for each activity?",
    answers: [
      { text: "Request for Proposal (RFP)", correct: false},
      { text: "Project Charter", correct: false},
      { text: "Project Schedule", correct: true},
      { text: "Change Order", correct: false},
    ]
  },
  {
    question: "What is the primary purpose of a Submittal in project document control?",
    answers: [
      { text: "To request project bids", correct: false},
      { text: "To submit project progress reports", correct: false},
      { text: "To seek approval for materials and equipment", correct: true},
      { text: "To initiate a project review", correct: false},
    ]
  },
  {
    question: "How would a Project Document Controller ensure effective communication among project team members regarding project documents?",
    answers: [
      { text: "Restrict access to project documents", correct: false},
      { text: "Use a centralized communication platform", correct: true},
      { text: "Avoid documentation updates", correct: false},
      { text: "Share documents via email only", correct: false},
    ]
  },
  {
    question: "What is the purpose of a Bill of Quantities (BOQ) in project document control?",
    answers: [
      { text: "Documenting project milestones", correct: false},
      { text: "Estimating project costs", correct: true},
      { text: "Specifying construction methods", correct: false},
      { text: "Tracking project risks", correct: false},
    ]
  },
  {
    question: "Explain the difference between 'as-built' drawings and 'record drawings' in project document control.",
    answers: [
      { text: "'As-built' drawings show the original design, while 'record drawings' depict changes during construction.", correct: true },
      { text: "'Record drawings' represent the original design, while 'as-built' drawings include post-construction changes.", correct: false },
      { text: "Both terms refer to the same type of drawings.", correct: false },
      { text: "Neither term is related to project documentation.", correct: false },
    ]
  },
  {
    question: "What role does a Project Document Controller play in change management?",
    answers: [
      { text: "Initiating all project changes", correct: false},
      { text: "Assessing the impact of changes on project timelines and budgets", correct: true},
      { text: "Rejecting all change requests", correct: false},
      { text: "Ignoring change requests to maintain document consistency", correct: false},
    ]
  },
  {
    question: "In the context of project document control, what is the purpose of a Document Control Log?",
    answers: [
      { text: "Tracking changes in project personnel", correct: false},
      { text: "Maintaining a record of project risks", correct: false},
      { text: "Monitoring document revisions and approvals", correct: true},
      { text: "Managing project finances", correct: false},
    ]
  },
  {
    question: "How does a Project Document Controller handle discrepancies or inconsistencies identified during a document audit?",
    answers: [
      { text: "Ignore the discrepancies", correct: false},
      { text: "Report the discrepancies and document corrective actions", correct: true},
      { text: "Submit a change order", correct: false},
      { text: "Request additional funding", correct: false},
    ]
  },
  {
    question: "What are the key features of an effective Electronic Document Management System (EDMS) used in project document control?",
    answers: [
      { text: "Real-time collaboration and access restrictions", correct: true},
      { text: "Project budgeting tools and graphic design capabilities", correct: false},
      { text: "Social media integration and public document sharing", correct: false},
      { text: "Email-based document distribution", correct: false},
    ]
  },
  {
    question: "How can a Project Document Controller ensure version control within a document management system?",
    answers: [
      { text: "Regularly change document names", correct: false},
      { text: "Implement access restrictions and track document changes", correct: true},
      { text: "Share documents via public links for easy access", correct: false},
      { text: "Ignore version control for simplicity", correct: false},
    ]
  },
  {
    question: "What is the typical process for managing changes to construction documents in a project?",
    answers: [
      { text: "Accept all changes without review", correct: false},
      { text: "Review changes but avoid communication with stakeholders", correct: false},
      { text: "Assess the impact on the project timeline, budget, and scope, and communicate changes to relevant stakeholders", correct: true},
      { text: "Reject all change requests to maintain project consistency", correct: false},
    ]
  },
  {
    question: "In the context of project document control, how would you prioritize and implement approved changes?",
    answers: [
      { text: "Prioritize changes based on document names", correct: false},
      { text: "Implement changes randomly to maintain flexibility", correct: false},
      { text: "Prioritize changes based on project complexity and implement systematically", correct: true},
      { text: "Ignore approved changes to avoid disruptions", correct: false},
    ]
  },
  {
    question: "How does a Project Document Controller facilitate communication and collaboration among project team members regarding project documents?",
    answers: [
      { text: "Restrict document access to minimize collaboration", correct: false},
      { text: "Use a centralized communication platform for document discussions", correct: true},
      { text: "Avoid sharing documents to prevent confusion", correct: false},
      { text: "Share documents via email only for simplicity", correct: false},
    ]
  },
  {
    question: "In a situation where conflicting information arises among stakeholders, how would a Project Document Controller mediate and resolve disputes to ensure alignment on project documents?",
    answers: [
      { text: "Make unilateral decisions to resolve conflicts quickly", correct: false},
      { text: "Document the conflict, notify project management, and facilitate resolution discussions", correct: true},
      { text: "Share conflicting information with all stakeholders without intervention", correct: false},
      { text: "Request additional information from the conflicting parties but avoid mediation", correct: false},
    ]
  },
  {
    question: "What is the purpose of a Request for Proposal (RFP) in project document control?",
    answers: [
      { text: "Requesting project bids from contractors", correct: true},
      { text: "Documenting project progress and achievements", correct: false},
      { text: "Seeking approval for materials and equipment", correct: false},
      { text: "Initiating a project review process", correct: false},
    ]
  },
  {
    question: "Which document contains a detailed breakdown of the project timeline, including start and end dates for each activity?",
    answers: [
      { text: "Request for Proposal (RFP)", correct: false},
      { text: "Project Charter", correct: false},
      { text: "Project Schedule", correct: true},
      { text: "Change Order", correct: false},
    ]
  },
  {
    question: "What is the term used to describe documents that outline the legal relationship between the project owner and the contractor, including terms and conditions?",
    answers: [
      { text: "Memorandum of Understanding (MOU)", correct: false},
      { text: "Contract Documents", correct: true},
      { text: "Scope of Work", correct: false},
      { text: "Project Specifications", correct: false},
    ]
  },
  {
    question: "In project document control, how would you handle the archiving of project documents at the end of a project?",
    answers: [
      { text: "Delete all documents to save storage space", correct: false},
      { text: "Archive documents systematically for future reference", correct: true},
      { text: "Share all documents publicly for transparency", correct: false},
      { text: "Avoid archiving to maintain simplicity", correct: false},
    ]
  }
];

function getRandomQuestions(numQuestions) {
const questions = [];
const allQuestionsCopy = [...allQuestions];

for (let i = 0; i < numQuestions; i++) {
  const index = Math.floor(Math.random() * allQuestionsCopy.length);
  const question = allQuestionsCopy.splice(index, 1)[0];
  questions.push(question);
}

return questions;
}

let quiz = getRandomQuestions(5);
let container = document.querySelector(".container");
let questionEl = document.getElementById("question");
let answerEl = document.getElementById("answers");
let submitBtn = document.getElementById("submit");
let scoreEl = document.getElementById("score");
let resetBtn = document.createElement("button");

let currentQuestion = 0;
let score = 0;

function showQuestion(question) {
questionEl.innerText = question.question;

for (let i = 0; i < question.answers.length; i++) {
  const answer = question.answers[i];
  const label = document.createElement("label");
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "answer";
  radio.value = answer.text;
  label.appendChild(radio);
  label.appendChild(document.createTextNode(answer.text));
  answerEl.appendChild(label);
}

submitBtn.style.display = "block"; // Show submit button
}

function resetQuestion() {
questionEl.innerText = "";
answerEl.innerHTML = "";
}

function showScore() {
let scoreText;
let scoreColor;
if (score < 3) {
  scoreText = "FAILED";
  scoreColor = "red";
} else if (score < 5) {
  scoreText = "PASSED";
  scoreColor = "green";
} else {
  scoreText = "PERFECT. CONGRATULATIONS!";
  scoreColor = "blue";
}
scoreEl.innerHTML = `<span style="color: #666; font-family: Impact; font-size: 30px">YOUR SCORE IS <br></span><span style="font-family: Impact; font-size: 50px">${score}</span><span style="color: #666; font-family: Impact; font-size: 30px">   OUT OF   </span><span style="color: #666; font-family: Impact; font-size: 50px">${quiz.length}</span><br><br><span style="font-family: Impact; font-size: 50px;"><span style="font-family: Ravie; font-size: 50px; color: ${scoreColor}">${scoreText}</span></span>`;
submitBtn.style.display = "none"; // Hide submit button

resetBtn.innerText = "Reset";
resetBtn.addEventListener("click", () => {
  resetQuiz();
});
container.appendChild(resetBtn);

submitBtn.style.display = "none"; // Hide submit button
}

function resetQuiz() {
currentQuestion = 0;
score = 0;
resetQuestion();
quiz = getRandomQuestions(5);
showQuestion(quiz[currentQuestion]);
resetBtn.remove();
scoreEl.innerText = "";
}

function submitAnswer() {
const selected = answerEl.querySelector("input:checked");
if (!selected) return;

const answer = selected.value;
const currentQuiz = quiz[currentQuestion];

if (answer === currentQuiz.answers.find(a => a.correct).text) {
  score++;
}

currentQuestion++;

if (currentQuestion >= quiz.length) {
  resetQuestion();
  showScore();
} else {
  resetQuestion();
  showQuestion(quiz[currentQuestion]);
}
}

showQuestion(quiz[currentQuestion]);
submitBtn.addEventListener("click", submitAnswer);