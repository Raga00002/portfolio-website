// import { ContactPageJS } from "./contactPage.js";

const homePageDetails =
{
    mainHeadingH1_Text: `Hi, I'm <span>Raghav Goel</span>`,
    mainHeadingH2_Text: 'Embedded Engineer',
    para1_Text: `Embedded Systems Engineer with experience in developing hardware-software integrated solutions using microcontrollers, sensors, and PCB design. Skilled in circuit design, and IoT applications. Focused on building efficient, reliable, and user-friendly embedded systems for real-world applications.`,
    divRectangularButton_Button1_Text: 'Hire me',
    divRectangularButton_Button2_Text: `Let's talk`,
    imagePath: `./assets/Raghav_Photo.jpeg`,
    facebookPath: `https://www.facebook.com/raghav.goel.9461`,
    linkedInPath: `https://www.linkedin.com/in/raghav-goel-74b077238/`,
    gmailPath: "mailto:raghavgoel2002@gmail.com",
    resumePath: "./assets/Resume.pdf",
};

export function HomePageJS() {
    const homePage = document.querySelector('.home');
    if (homePage != null) {

        // Created all the elements
        let divMainParent = document.createElement('div');
        let divLeft = document.createElement('div');
        let mainHeadingH1 = document.createElement('h1');
        let mainHeadingH2 = document.createElement('h2');
        let para1 = document.createElement('p');
        let divRectangularButton = document.createElement('div');
        let divRectangularButton_Button1 = document.createElement('button');
        let divRectangularButton_Button2 = document.createElement('button');
        let divCircularButton = document.createElement('div');
        let divCircularButton_Button1 = document.createElement('button');
        let divCircularButton_Button1_i1 = document.createElement('i');
        let divCircularButton_Button2 = document.createElement('button');
        let divCircularButton_Button2_i2 = document.createElement('i');
        let divCircularButton_Button3 = document.createElement('button');
        let divCircularButton_Button3_i3 = document.createElement('i');
        let divRight = document.createElement('div');
        let img1 = document.createElement('img');

        // Adding Class to all the elements
        divMainParent.classList.add('content');
        divLeft.classList.add('column');
        divLeft.classList.add('gap20');
        mainHeadingH1.classList.add('highlightedLimeText');
        mainHeadingH2.classList.add('animatedText');
        divRectangularButton.classList.add('buttons');
        divRectangularButton.classList.add('row');
        divRectangularButton_Button1.classList.add('ColoredRectangularButton');
        divRectangularButton_Button2.classList.add('transparentRectangularButton');
        divCircularButton.classList.add('icons');
        divCircularButton_Button1.classList.add('transparentCircularButton');
        divCircularButton_Button1_i1.classList.add('fa-brands');
        divCircularButton_Button1_i1.classList.add('fa-facebook-f');
        divCircularButton_Button2.classList.add('transparentCircularButton');
        divCircularButton_Button2_i2.classList.add('fa-brands');
        divCircularButton_Button2_i2.classList.add('fa-linkedin');
        divCircularButton_Button3.classList.add('transparentCircularButton');
        divCircularButton_Button3_i3.classList.add('fa-solid');
        divCircularButton_Button3_i3.classList.add('fa-envelope');
        divRight.classList.add('right');

        // Adding Values or text
        mainHeadingH1.innerHTML = homePageDetails.mainHeadingH1_Text;
        mainHeadingH2.innerText = homePageDetails.mainHeadingH2_Text;
        para1.innerText = homePageDetails.para1_Text;
        divRectangularButton_Button1.innerText = homePageDetails.divRectangularButton_Button1_Text;
        divRectangularButton_Button2.innerText = homePageDetails.divRectangularButton_Button2_Text;
        img1.src = homePageDetails.imagePath;

        // Appending Children 
        divCircularButton_Button3.appendChild(divCircularButton_Button3_i3);
        divCircularButton_Button2.appendChild(divCircularButton_Button2_i2);
        divCircularButton_Button1.appendChild(divCircularButton_Button1_i1);
        divCircularButton.appendChild(divCircularButton_Button1);
        divCircularButton.appendChild(divCircularButton_Button2);
        divCircularButton.appendChild(divCircularButton_Button3);
        divRectangularButton.appendChild(divRectangularButton_Button1);
        divRectangularButton.appendChild(divRectangularButton_Button2);
        divLeft.appendChild(mainHeadingH1);
        divLeft.appendChild(mainHeadingH2);
        divLeft.appendChild(para1);
        divLeft.appendChild(divRectangularButton);
        divLeft.appendChild(divCircularButton);
        divRight.appendChild(img1)
        divMainParent.appendChild(divLeft);
        divMainParent.appendChild(divRight);
        homePage.append(divMainParent);

        // Features
        divCircularButton_Button1.addEventListener(
            'click', (e) => {
                window.open(homePageDetails.facebookPath, "_blank");
            }
        )

        divCircularButton_Button2.addEventListener(
            'click', (e) => {
                window.open(homePageDetails.linkedInPath, "_blank");
            }
        )

        divCircularButton_Button3.addEventListener(
            'click', (e) => {
                window.location.href = homePageDetails.gmailPath;
            }
        )

        divRectangularButton_Button1.addEventListener(
            'click', (e) => {
                window.open(homePageDetails.resumePath, '_blank');
            }
        )

        divRectangularButton_Button2.addEventListener(
            'click', (e) => {
                // const mainContent = document.querySelector('.mainContent');
                // fetch(`./HTML/contact.html`)
                //     .then(response => {
                //         if (!response.ok) throw new Error("Page not found");
                //         return response.text();
                //     }).then(html => {
                //         mainContent.innerHTML = html;
                //     })
                // ContactPageJS();
            }
        )


    }
};