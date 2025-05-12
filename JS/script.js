const codingSkills = [
  {
    skillName: 'HTML',
    skillKnowledge: '70%'
  },
  {
    skillName: 'CSS',
    skillKnowledge: '50%'
  },
];
const technicalSkills = [
  {
    skillName: 'Embedded',
    skillKnowledge: '70%',
  },
  {
    skillName: 'PCB',
    skillKnowledge: '40%',
  },
];
const educationDetails = [
  {
    name:'VIT Chennai',
    startYear: '2020',
    endYear: '2024',
    content: 'Completed B.Tech',
    degree: `Bachelor's Degree`,
  },
  {
    name:'DPS RK Puram',
    startYear: '2018',
    endYear: '2020',
    content: 'Completed 12th',
    degree: `12th`,
  },
];
const companyDetails = [
  {
    name:'Caleedo',
    startYear: '2024',
    endYear: '2025',
    role: 'Embedded IOT Engineer',
    content: 'Worked with embedded systems',
  },
  {
    name:'Bosch',
    startYear: '2024',
    endYear: '2024',
    role: 'Mobility Automation Engineer',
    content: 'Worked with python,tkinter',
  },
];



const navItems = document.querySelectorAll('nav .link a');
const mainContent = document.querySelector('.mainContent');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const selected = item.getAttribute('href').slice(1); // Remove the leading #
    navItems.forEach(item => {
      item.removeAttribute("id");
    });
    item.setAttribute("id", "navColor");
    fetch(`${selected}.html`)
      .then(response => {
        if (!response.ok) throw new Error("Page not found");
        return response.text();
      })
      .then(html => {
        mainContent.innerHTML = html;
        
        
        const coding = document.querySelector('.coding');
        const technical = document.querySelector('.technical');
        if(coding!=null){
          codingSkills.forEach(function(elem){
            let divParent = document.createElement('div');
            let divChild1 = document.createElement('div');
            let divChild2 = document.createElement('div');
            let first_h4 = document.createElement('h4');
            let second_h4 = document.createElement('h4');
            first_h4.innerText = elem.skillName;
            second_h4.innerText = elem.skillKnowledge;
            let divGrandChild = document.createElement('div');
            divGrandChild.classList.add('bar1');
            divGrandChild.classList.add('bar');
            divChild2.classList.add('progressBarSkillsDivision');
            divChild1.classList.add('headingSkillsDivision');
            divParent.classList.add('column');
            divParent.classList.add('gap5');
            divChild2.appendChild(divGrandChild);
            divChild1.appendChild(first_h4);
            divChild1.appendChild(second_h4);
            divParent.appendChild(divChild1);
            divParent.appendChild(divChild2);
            coding.append(divParent);
          })
        }
        if(technical!=null){
          technicalSkills.forEach(function(elem){
            let divParent = document.createElement('div');
            let divChild1 = document.createElement('div');
            let divChild2 = document.createElement('div');
            let first_h4 = document.createElement('h4');
            let second_h4 = document.createElement('h4');
            first_h4.innerText = elem.skillName;
            second_h4.innerText = elem.skillKnowledge;
            let divGrandChild = document.createElement('div');
            divGrandChild.classList.add('bar1');
            divGrandChild.classList.add('bar');
            divChild2.classList.add('progressBarSkillsDivision');
            divChild1.classList.add('headingSkillsDivision');
            divParent.classList.add('column');
            divParent.classList.add('gap5');
            divChild2.appendChild(divGrandChild);
            divChild1.appendChild(first_h4);
            divChild1.appendChild(second_h4);
            divParent.appendChild(divChild1);
            divParent.appendChild(divChild2);
            technical.append(divParent);
          })
        }
        
        const education = document.querySelector('.education');
        const experience = document.querySelector('.experience');
        if(education!=null){
          educationDetails.forEach(function(elem){
            let divMainParent = document.createElement('div');
            let divParent = document.createElement('div');
            let divChild1 = document.createElement('div');
            let i = document.createElement('i');
            let first_h4 = document.createElement('h4');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            
            first_h4.innerText = `${elem.startYear} - ${elem.endYear}`;
            h3.innerText = `${elem.degree} - ${elem.name}`;
            p.innerText = `${elem.content}`;

            divMainParent.classList.add('boxDivision')
            divChild1.classList.add('firstLine');
            i.classList.add('fa');
            i.classList.add('fa-calendar');
            divParent.classList.add('column');
            divParent.classList.add('gap5');
            
            divChild1.appendChild(i);
            divChild1.appendChild(first_h4);
            divParent.appendChild(divChild1);
            divParent.appendChild(h3);
            divParent.appendChild(p);
            divMainParent.appendChild(divParent);
            education.append(divMainParent);
          })
        }
        if(experience!=null){
          companyDetails.forEach(function(elem){
            let divMainParent = document.createElement('div');
            let divParent = document.createElement('div');
            let divChild1 = document.createElement('div');
            let i = document.createElement('i');
            let first_h4 = document.createElement('h4');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            
            first_h4.innerText = `${elem.startYear} - ${elem.endYear}`;
            h3.innerText = `${elem.role} - ${elem.name}`;
            p.innerText = `${elem.content}`;

            divMainParent.classList.add('boxDivision')
            divChild1.classList.add('firstLine');
            i.classList.add('fa');
            i.classList.add('fa-calendar');
            divParent.classList.add('column');
            divParent.classList.add('gap5');
            
            divChild1.appendChild(i);
            divChild1.appendChild(first_h4);
            divParent.appendChild(divChild1);
            divParent.appendChild(h3);
            divParent.appendChild(p);
            divMainParent.appendChild(divParent);
            experience.append(divMainParent);
          })
        }
          
      })
      .catch(error => {
        mainContent.innerHTML = "<p>Content not found</p>";
        console.error(error);
      });
  });
});



