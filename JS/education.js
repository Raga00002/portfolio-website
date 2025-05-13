const educationDetails = [
  {
    name:'Vellore Institute of Technology, Chennai',
    startYear: '2020',
    endYear: '2024',
    Percentage: '81.5%',
    degree: `B.Tech ECE`,
  },
  {
    name:'DPS RK Puram, Delhi',
    startYear: '2019',
    endYear: '2020',
    Percentage: '95%',
    degree: `CBSE ( XII )`,
  },
  {
    name:'Genesis Global School, Noida',
    startYear: '2017',
    endYear: '2018',
    Percentage: '88.6%',
    degree: `CBSE ( X )`,
  },
];




export function educationJS() {
    const education = document.querySelector('.education');
    if (education != null) {
        let headingPage = document.createElement('h1');
        headingPage.classList.add('highlightedLimeText');
        headingPage.innerHTML = `My <span>Education</span>`;

        let divMainParentChild = document.createElement('div');
        divMainParentChild.classList.add('boxDivision')
        divMainParentChild.classList.add('column')
        divMainParentChild.classList.add('gap20')

        educationDetails.forEach(function (elem) {
            let divParentChild = document.createElement('div');
            let divChild1 = document.createElement('div');
            let divChild2 = document.createElement('div');
            let divChild3 = document.createElement('div');
            let divChild4 = document.createElement('div');


            divChild1.innerText = `${elem.degree}`;
            divChild2.innerText = `${elem.startYear} - ${elem.endYear}`;
            divChild3.innerText = `${elem.name}`;
            divChild4.innerText = `${elem.Percentage}`;


            divChild1.classList.add('grid-item');
            divChild2.classList.add('grid-item');
            divChild3.classList.add('grid-item');
            divChild4.classList.add('grid-item');
            divParentChild.classList.add('grid-container')

            divParentChild.appendChild(divChild1);
            divParentChild.appendChild(divChild2);
            divParentChild.appendChild(divChild3);
            divParentChild.appendChild(divChild4);

            divMainParentChild.appendChild(divParentChild);
        })

        education.append(headingPage);
        education.append(divMainParentChild);
    }
}

