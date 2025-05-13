const codingSkills = [
    {
        skillName: 'HTML',
        skillKnowledge: '80%'
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

export function skillsJS() {
    const skills = document.querySelector('.skills');
    if (skills != null) {
        let headingPage = document.createElement('h1');
        headingPage.classList.add('highlightedLimeText');
        headingPage.innerHTML = `My <span>Skills</span>`;

        let divMainParentChild = document.createElement('div');
        divMainParentChild.classList.add('row')

        let divParentChild1 = document.createElement('div');
        let divParentChild2 = document.createElement('div');
        divParentChild1.classList.add('column');
        divParentChild1.classList.add('gap20');
        divParentChild2.classList.add('column');
        divParentChild2.classList.add('gap20');

        let h2ParentChild1 = document.createElement('h2');
        let h2ParentChild2 = document.createElement('h2');
        h2ParentChild1.innerText='Coding Skills';
        h2ParentChild2.innerText='Technical Skills';

        let divChildParent1 = document.createElement('div');
        divChildParent1.classList.add('boxDivision')
        divChildParent1.classList.add('width500')
        divChildParent1.classList.add('column')
        divChildParent1.classList.add('gap20')

        codingSkills.forEach(function (elem) {
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
            divChildParent1.appendChild(divParent);
        })
        divParentChild1.appendChild(h2ParentChild1);
        divParentChild1.appendChild(divChildParent1);
        divMainParentChild.appendChild(divParentChild1);

        let divChildParent2 = document.createElement('div');
        divChildParent2.classList.add('boxDivision')
        divChildParent2.classList.add('width500')
        divChildParent2.classList.add('column')
        divChildParent2.classList.add('gap20')

         
        technicalSkills.forEach(function (elem) {
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
            divChildParent2.appendChild(divParent);
        })
        divParentChild2.appendChild(h2ParentChild2);
        divParentChild2.appendChild(divChildParent2);
        divMainParentChild.appendChild(divParentChild2);

        skills.append(headingPage);
        skills.append(divMainParentChild);
    }
    
        
    
}