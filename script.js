const ticketForm = document.querySelector('form');
const formContainer = document.getElementById('form-container');

const fullName = document.getElementById('full-name-input');
const emailInput = document.getElementById('email-input');
const githubInput = document.getElementById('github-username-input');

const submit = document.getElementById('submitBtn');

const emailVal = document.getElementById('email-validation');
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ticketContainer = document.getElementById('ticket-container');
const ticketHeaders = document.getElementById('ticket-headers');
const body = document.querySelector('body');

let account = {
    name: fullName.value,
    email: emailInput.value,
    github: githubInput.value
}

const generateTicket = () => {
    formContainer.classList.add('hidden');

    body.innerHTML +=  
    `  
    <div id="ticket-headers">
        <div class="ticket-message text-center text-[28px] leading-[1.1] font-bold pt-2.5 pb-7.5 lg:text-[60px] lg:w-210 m-auto">
            <h1>Congrats, <span class="bg-linear-to-r from-[#f37362] to-[#ffffff] bg-clip-text text-transparent">${account.name}!</span> <br> Your ticket is ready.</h1>
        </div>
      
      <p class="w-[500px] m-auto text-center text-[18px] leading-[1.3] text-[#d1cdcd] mb-2 lg:text-[24px] lg:mb-2">We've emailed your ticket to <span class="text-[#f57261]">${account.email}</span> and will send updates in the run up to the event.</p>
    </div>

    <div id="ticket-container" class="flex justify-center mt-25 md:mt-15">
        <div id="ticket" class="relative w-[600px]">
            <img src="assets/images/pattern-ticket.svg" alt="ticket background" class="absolute backdrop-blur-sm">
            <div class="p-5 relative">
                <img src="assets/images/logo-mark.svg" class="float-left p-2 pr-5">
                <h1 class="text-[35px] font-bold mt-[px]">Coding Conf</h1>
                <p class="pl-15 text-[17.5px]">Jan 31, 2025 / Austin, TX</p>
            
                <div class="profile relative">
                    <img id="Avatar" src="assets/images/image-avatar.jpg" class="float-left absolute rounded-xl w-20 top-20">
                    <h1 class="pl-24 pt-21 text-[26.5px]">${account.name}</h1>
                    <div class="ticket-info flex pl-24">
                    <img src="assets/images/icon-github.svg" class="pr-2">
                    <h2 class="pt-0.5 text-[18px]">${account.github}</h2>
                    </div>
                </div>

                <h1 id="reference-code" class="absolute left-126 top-30 text-[28px] rotate-90">#01609</h1>
            </div>
        </div>
    </div>
    `;
};


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
        generateTicket();
    }
});