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
