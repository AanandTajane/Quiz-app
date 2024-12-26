import React, { useState } from 'react'
import QuestionList from './QuestionList';
import   QuizCss from './Quiz.css';

export default function Quiz() {
    // Array Of Questions
     const questions = [
       {
         question: "What is React?",
         options: [
           "CSS Framework",
           "React Library",
           "Javascipt Framewok",
           "Testing Tools",
         ],
         answer: "Javascipt Framework",
       },
       {
         question: "What is Java?",
         options: [
           "CSS Framework",
           "React Library",
           "Javascipt Framewok",
           "Programming Language",
         ],
         answer: "Programming Language",
       },
     ];
    

      const [currquestindex, setCurrquesindex]= useState(0);
       const [currAns, setCurrAns] = useState(null);
       const[score,setScore] =useState(0);

       const handleClick =(option) => {
          setCurrAns(option)
          if(option === questions[currquestindex].answer){
            setScore(score + 1)
          }
       }
       const handleNextQuestion =() =>{
        setCurrquesindex(currquestindex + 1)
         setCurrAns(null)
       }
         const handlePreviousQuestion =() => {
             if (currquestindex > 0) {
             setCurrquesindex(currquestindex - 1);
            setCurrAns(null); // Reset for the previous question
        
             }
            }; 
     return (
  <div>
    {currquestindex < questions.length ? (
      <div>
        <QuestionList
          question={questions[currquestindex].question}
          options={questions[currquestindex].options}
          handleClick={handleClick}
          currentAnswer={currAns}
        />
        <button
          disabled={currquestindex === 0}
          className={currquestindex === 0 ? 'button-disable' : 'button'}
          onClick={handlePreviousQuestion}
        >
          Previous Question
        </button>
        <button
          disabled={currAns === null}
          className={currAns === null ? 'button-disable' : 'button'}
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      </div>
    ) : (
      <div>
        Your score is {score}
      </div>
    )}
    </div> 
  )};
