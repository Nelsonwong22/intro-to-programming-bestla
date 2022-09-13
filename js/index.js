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