function projectss(){
    fetch('./project.json')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
projectss();

function displayUsers(data){
    const seeDetails = document.getElementById('projectss')
 for(const users of data){
    const div =document.createElement('div');
    div.innerHTML=`
    <img src="${users.images}"/>
    <h3>${users.Name}</h3>
    <p>${users.Skill}</p>
    <a href="${users.github}"><button>See Detiles</button></a>
   
    `;
    div.classList.add('projects')
    seeDetails.appendChild(div);
 
 console.log(users);
 
 }
}











// ----------------------------form strat------------------

const form = document.querySelector('form');
const yourName = document.querySelector('#name');
const email = document.querySelector('#email');
const textarea = document.querySelector('#text');
const NumBer = document.querySelector('#numberr');


form.addEventListener('submit', formhandler);

function formhandler(e){
    e.preventDefault();

    const formInfo = {
        Name:yourName.value,
        Email:email.value,
        Textarea:textarea.value,
        Number:NumBer.value
    }
    console.log(formInfo);

    yourName.value = '',
    email.value = '',
    textarea.value = ''
    NumBer.value = ''

}
