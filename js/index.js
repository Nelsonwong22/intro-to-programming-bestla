const today = new Date ();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Nelson Wong, ${thisYear}`;
footer.appendChild(copyright);

let skills = ['JavaScript', 'HTML', 'C++','SQL'];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i ++) {
 let skill = document.createElement('li');  
 skill.innerText = skills[i];
 skillsList.appendChild(skill);
}





let messageForm = document.getElementsByName("leave_message")[0];
let messageSection = document.getElementById('messages');

    messageSection.hidden = true;
    messageForm.addEventListener("submit", submitForm);
    
    function submitForm(event){
        event.preventDefault();
    
        let name = event.target.name.value;
        let email = event.target.email.value;
        let message = event.target.message.value;
        console.log(name, email, message);
        
        let messageList = messageSection.querySelector('ul');
        let newMessage = document.createElement('li'); 
        newMessage.innerHTML = `<a href="mailto: ${email}"> ${name}</a> wrote: <span>${message}</span>`;

        const removeButton = document.createElement('button');
        removeButton.innerText = "remove";
        removeButton.type = "button";
        removeButton.addEventListener("click", removeMessage);
    
        function removeMessage(){
            let entry = removeButton.parentNode;
            entry.remove();    
    }

        newMessage.appendChild(removeButton); 
        messageList.appendChild(newMessage);
        messageSection.hidden = false;    
        event.target.reset();
    
        //hide message list
        if(messageList== 0) {
            document.getElementById("messages").style.display = "none";
        }
    };