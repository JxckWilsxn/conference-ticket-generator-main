const ticketForm = document.querySelector('form');

const fullName = document.getElementById('full-name-input');
const emailInput = document.getElementById('email-input');
const githubInput = document.getElementById('github-username-input');

const submit = document.getElementById('submitBtn');
const emailVal = document.getElementById('email-validation');

const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/*
let generatedTicket = 
    `  
    <div id="ticket" class="relative">
        <img src="assets/images/pattern-ticket.svg" alt="ticket background" class="absolute">
        <div class="p-5">
            <img src="assets/images/logo-mark.svg" class="float-left p-2 pr-5">
            <h1 class="text-[35px] font-bold mt-[px]">Coding Conf</h1>
            <p class="pl-15 text-[17.5px]">Jan 31, 2025 / Austin, TX</p>
        
            <div class="profile relative">
                <img id="Avatar" src="assets/images/image-avatar.jpg" class="float-left absolute rounded-xl w-20 top-20">
                <h1 class="pl-24 pt-21 text-[26.5px]">${account.name}</h1>
                <div class="ticket-info flex pl-24">
                <img src="assets/images/icon-github.svg" class="pr-2">
                <h2 class="pt-0.5 text-[18px]">@${account.github}</h2>
                </div>
            </div>

            <h1 id="reference-code" class="absolute left-126 top-30 text-[28px] rotate-90">#01609</h1>
        </div>
    </div>
  `
;
*/

ticketForm.addEventListener('submit', ticketValidation = (e) => {
    e.preventDefault();

    if (fullName.value.trim() === "") {
        fullName.classList.remove('border-[#4b486a]')
        fullName.classList.add('border-[#e16151]');
    } else {
        fullName.classList.add('border-[#4b486a]')
        fullName.classList.remove('border-[#e16151]');
    }

    if (githubInput.value.trim() === "") {
        githubInput.classList.remove('border-[#4b486a]')
        githubInput.classList.add('border-[#e16151]');
    } else {
        githubInput.classList.add('border-[#4b486a]')
        githubInput.classList.remove('border-[#e16151]');
    }

    if (validEmail.test(emailInput.value.trim())) {
        emailVal.innerHTML = "";
        emailInput.classList.remove('border-[#e16151]');
        emailInput.classList.add('border-[#4b486a]')
    } else {
        emailInput.classList.remove('border-[#4b486a]')
        emailInput.classList.add('border-[#e16151]');
        emailVal.innerHTML = `<img src="assets/images/icon-info.svg" class="mr-2" alt="info icon"> Please enter a valid email address.`;
    }

    if (fullName.value.trim() && githubInput.value.trim() != "" && validEmail.test(emailInput.value.trim())) {
        console.log('form submitted');
    }
});