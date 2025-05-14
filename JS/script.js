import { educationJS }  from "./education.js";
import { skillsJS } from "./skills.js";


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



const navItems = document.querySelectorAll('nav .link li');
const mainContent = document.querySelector('.mainContent');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const selected = item.getAttribute('data-content');
    navItems.forEach(item => {
      item.removeAttribute("id");
    });
    item.setAttribute("id", "navColor");
    fetch(`./HTML/${selected}.html`)
      .then(response => {
        if (!response.ok) throw new Error("Page not found");
        return response.text();
      })
      .then(html => {
        mainContent.innerHTML = html;
        
        
        skillsJS();
        educationJS();
        
        // 
        // const experience = document.querySelector('.experience');
        
        // if(experience!=null){
        //   companyDetails.forEach(function(elem){
        //     let divMainParent = document.createElement('div');
        //     let divParent = document.createElement('div');
        //     let divChild1 = document.createElement('div');
        //     let i = document.createElement('i');
        //     let first_h4 = document.createElement('h4');
        //     let h3 = document.createElement('h3');
        //     let p = document.createElement('p');
            
        //     first_h4.innerText = `${elem.startYear} - ${elem.endYear}`;
        //     h3.innerText = `${elem.role} - ${elem.name}`;
        //     p.innerText = `${elem.content}`;

        //     divMainParent.classList.add('boxDivision')
        //     divChild1.classList.add('firstLine');
        //     i.classList.add('fa');
        //     i.classList.add('fa-calendar');
        //     divParent.classList.add('column');
        //     divParent.classList.add('gap5');
            
        //     divChild1.appendChild(i);
        //     divChild1.appendChild(first_h4);
        //     divParent.appendChild(divChild1);
        //     divParent.appendChild(h3);
        //     divParent.appendChild(p);
        //     divMainParent.appendChild(divParent);
        //     experience.append(divMainParent);
        //   })
        // }
          
      })
      .catch(error => {
        mainContent.innerHTML = "<p>Content not found</p>";
        console.error(error);
      });
  });
});



