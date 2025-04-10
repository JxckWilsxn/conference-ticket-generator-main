const ticketForm = document.querySelector('form');
const formContainer = document.getElementById('form-container');

const fileUploader = document.getElementById('file-uploader');

const imageVal = document.getElementById('image-upload-sub-header');
const fileUploadPara = document.getElementById('file-upload-para');

const profilePicture = document.getElementById('profile-picture');
const fullName = document.getElementById('full-name-input');
const emailInput = document.getElementById('email-input');
const githubInput = document.getElementById('github-username-input');

const submit = document.getElementById('submitBtn');

const emailVal = document.getElementById('email-validation');
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ticketContainer = document.getElementById('ticket-container');
const ticketHeaders = document.getElementById('ticket-headers');
const body = document.querySelector('body');

fileUploader.addEventListener('change', upload = () => {
    const image = fileUploader.files[0];

    if (!image) return;

    if (!image.type.includes('image')) {
        imageVal.innerHTML = '';
        imageVal.classList.remove('text-[#8784a4]')
        imageVal.classList.add('text-[#e16151]');
        imageVal.innerHTML = `<img src="assets/images/icon-info.svg" class="mr-2" alt="info icon">Please upload a valid image file.`
        return;
    }

    if (image.size > 500 * 1024) {
        imageVal.innerHTML = '';
        imageVal.classList.remove('text-[#8784a4]')
        imageVal.classList.add('text-[#e16151]');
        imageVal.innerHTML = `<img src="assets/images/icon-info.svg" class="mr-2" alt="info icon">File too large. Please upload a photo under 500KB.`
        return;
    }


    profilePicture.classList.remove('p-2');
    profilePicture.src = URL.createObjectURL(image);

   
    fileUploadPara.innerHTML = 
    `
    <p class="text-[#d2d1d6] text-center text-[14px] z-10">
        <button type="button" id="imageRemoveBtn" class="cursor-pointer bg-[#4b486ac7] w-[105px] p-0.5 rounded-md underline m-0.5">Remove image</button>
        <button type="button" id="imageChangeBtn" class="cursor-pointer bg-[#4b486ac7] w-[105px] p-0.5 rounded-md m-0.5">Change image</input>
    </p>
    `;

    fileUploader.style.display = "none";
    fileUploader.classList.remove('cursor-pointer');

    const removeImage = document.getElementById('imageRemoveBtn');
    const changeImage = document.getElementById('imageChangeBtn');

    removeImage.addEventListener('click', (e) => {
        e.preventDefault();

        profilePicture.src = 'assets/images/icon-upload.svg';
        profilePicture.classList.add('p-2');
    })

    changeImage.addEventListener('click', (e) => {
        e.preventDefault();
        fileUploader.click(); 
      
    })

})

const generateTicket = () => {
    let account = {
        img: profilePicture.src,
        name: fullName.value,
        email: emailInput.value,
        github: githubInput.value
    }

    formContainer.classList.add('hidden');

    body.innerHTML +=  
    `  
    <div id="ticket-headers">
        <div class="ticket-message text-center text-[28px] leading-[1.1] font-bold pt-5 pb-7.5 lg:text-[60px] md:w-100 lg:w-210 m-auto">
            <h1>Congrats, <span class="bg-linear-to-r from-[#f37362] to-[#ffffff] bg-clip-text text-transparent">${account.name}!</span> Your ticket is ready.</h1>
        </div>
      
      <p class="w-[350px] m-auto text-center text-[18px] leading-[1.3] text-[#d1cdcd] mb-2 lg:text-[24px] lg:mb-2 lg:w-[500px]">We've emailed your ticket to <span class="text-[#f57261]">${account.email}</span> and will send updates in the run up to the event.</p>
    </div>

    <div id="ticket-container" class="flex justify-center mt-[72px] lg:mt-[120px]">
      <div id="ticket" class="relative w-full max-w-[600px] md:w-[500px] lg:w-full lg:max-w-[600px] ">
          <img src="assets/images/pattern-ticket.svg" alt="ticket background" class="absolute p-4 backdrop-blur-sm lg:p-0">
          <div class="p-5 relative mb-[40px] md:mb-[56px] lg:mb-[64px]">
              <img src="assets/images/logo-mark.svg" class="float-left p-4 pr-4 w-[60px] md:w-[64px] lg:p-3 lg:pr-5 lg:w-[68px]">
              <h1 class="text-[24px] font-bold mt-[10px] md:text-[30px] lg:text-[36px] lg:mt-0">Coding Conf</h1>
              <p class="text-[#8784a4] text-[13px] md:text-[15px] lg:pl-[60px] lg:text-[17.5px]">Jan 31, 2025 / Austin, TX</p>

              <div class="profile relative">
                  <div class="avatar-container absolute left-[12px] top-[24px] w-[50px] h-[50px] overflow-hidden rounded-xl md:top-[55px] md:w-[64px] md:h-[64px] lg:left-0 lg:top-[80px] lg:w-[80px] lg:h-[80px]">
                  <img id="Avatar" src="${account.img}" class="w-full h-full object-cover object-center">
                  </div>

                  <h1 class="pl-[72px] pt-[28px] text-[18px] md:pl-[90px] md:pt-[62px] md:text-[22px] lg:pl-[96px] lg:pt-[84px] lg:text-[28px]">${account.name}</h1>

                  <div class="ticket-info flex pl-[72px] md:pl-[90px] lg:pl-[96px]">
                  <img src="assets/images/icon-github.svg" class="pr-2 w-[25px] lg:w-[30px]">
                  <h2 class="text-[12px] lg:pt-[2px] lg:text-[18px]">${account.github}</h2>
                  </div>
              </div>

              <h1 id="reference-code" class="absolute text-[#8784a4] top-[80px] right-[15px] text-[20px] rotate-90 md:top-[100px] md:text-[28px] md:right-[12px] lg:top-[120px] lg:text-[28px]">#01609</h1>
          </div>
      </div>
  </div>
    `;
};


ticketForm.addEventListener('submit', ticketValidation = (e) => {
    e.preventDefault();

    if (profilePicture.src.includes('icon-upload.svg')) {
      
        imageVal.classList.remove('text-[#8784a4]')
        imageVal.classList.add('text-[#e16151]');
        imageVal.innerHTML = `<img src="assets/images/icon-info.svg" class="mr-2" alt="info icon">Please upload an avatar.`

        return;
    }

    const emptyInputValidation = (input) => {
        if (input.value.trim() === '') {
            input.classList.remove('border-[#4b486a]')
            input.classList.add('border-[#e16151]');
        } else {
            input.classList.add('border-[#4b486a]')
            input.classList.remove('border-[#e16151]');
        }
    }

    emptyInputValidation(fullName);
    emptyInputValidation(githubInput);

    if (validEmail.test(emailInput.value.trim())) {
        emailVal.innerHTML = '';
        emailInput.classList.remove('border-[#e16151]');
        emailInput.classList.add('border-[#4b486a]')
    } else {
        emailInput.classList.remove('border-[#4b486a]')
        emailInput.classList.add('border-[#e16151]');
        emailVal.innerHTML = `<img src="assets/images/icon-info.svg" class="mr-2" alt="info icon"> Please enter a valid email address.`;
    }

    if (profilePicture.src.includes('icon-upload.svg') || fullName.value.trim() === '' || githubInput.value.trim() === '' || !validEmail.test(emailInput.value.trim())) {
        return;
    }

    generateTicket();
});