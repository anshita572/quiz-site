const quiz=[{
    question: "Q1. Who is the President of India ?",
    a:"Ram Nath Kovind",
    b:"Pratibha Patil",
    c:"Draupadi Murmu",
    d:"Pranab Mukherjee",
    ans:"ans3"
},
{question: "Q2. Which is the largest continent ?",
    a:"Africa",
    b:"Asia",
    c:"North America",
    d:"Antarctica",
    ans:"ans2"
},
{question: "Q3. When did Quit India Movement start ?",
    a:"1942",
    b:"1937",
    c:"1919",
    d:"1940",
    ans:"ans1"
},
{question: "Q4. When does summer solistice occur in Northern Hemisphere ?",
    a:"15th May",
    b:"10th June",
    c:"1st April",
    d:"21st June",
    ans:"ans4"
},
{question: "Q5. Which is the largest mammal ?",
    a:"Rhino",
    b:"Blue Whale",
    c:"Elephant",
    d:"Lion",
    ans:"ans2"
}
];
const randomQues=[];
let quesIndex=0; //question quesIndex
function generateRandomQues(){
const randomNo=Math.floor(Math.random()*quiz.length);
let hitDuplicate=0;
if(randomQues.length==0)
{quesIndex=randomNo;}
else{
    for (let index = 0; index < randomQues.length; index++) {
       if(randomNo===randomQues[index])
       {hitDuplicate=1;}
    }
    if(hitDuplicate==1)
{generateRandomQues();}
else
{quesIndex=randomNo;}
}
randomQues.push(randomNo);
}

const ques=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const ans=document.querySelectorAll(".answers");

let score=0;
function loadQues(){
// console.log(quiz[0].question);
 ques.innerText=quiz[quesIndex].question;
 option1.innerText=quiz[quesIndex].a;
 option2.innerText=quiz[quesIndex].b;
 option3.innerText=quiz[quesIndex].c;
 option4.innerText=quiz[quesIndex].d;
}
loadQues();
function getMarkedAns()
{let markedAns;
    ans.forEach((currAns) => {
        if(currAns.checked)
        {markedAns=currAns.id;}
        
    });
    return markedAns;
}
function deselect()
{   ans.forEach((currAns) => {
        currAns.checked=false;        
    });
    
}

document.querySelector("#submit-btn").addEventListener("click",function(event){
    const checkedAns=getMarkedAns(); 
    // console.log(checkedAns);
if(checkedAns ===quiz[quesIndex].ans)
{score++;};
quesIndex++; //increment question quesIndex
deselect();
if(quesIndex===quiz.length-1)
{document.querySelector("#submit-btn").innerHTML="Submit";}
if(quesIndex <quiz.length) //move to next ques
{loadQues();}
else //when all ques are done ,show score
{document.querySelector(".inner-div").innerHTML="<div id='score'>You scored : "+score+"/"+quiz.length+" 🙂 </div><button class='reload-btn' onclick='location.reload()'>Play Again</button>";
// document.querySelector("#score").classList.remove("show-score");
}
});
// document.querySelector("#prev-btn").addEventListener("click",function(event){if(quesIndex>0)
// {quesIndex--;
// loadQues();
// getMarkedAns();
// select();}});
