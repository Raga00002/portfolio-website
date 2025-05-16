const contactDetails = {
    heading: `Contact <span>Me!</span>`,
    type1: "text",
    type2: "email",
    type3: "submit",
    placeholder1:"Full Name",
    placeholder2:"Email Address",
    placeholder3:"Mobile Number",
    placeholder4:"Email Subject",
    placeholder5:"Your Message",
    buttonText: "Submit",
};

export function ContactPageJS(){
    const contact = document.querySelector('.contact');
    if(contact != null){
        // Creating the element
        let mainHeadingH1 = document.createElement('h1');
        let mainForm = document.createElement('form');
        let divLine1 = document.createElement('div');
        let divLine1_input1 = document.createElement('input');
        let divLine1_input2 = document.createElement('input');
        let divLine2 = document.createElement('div');
        let divLine2_input1 = document.createElement('input');
        let divLine2_input2 = document.createElement('input');
        let textArea1 = document.createElement('textarea');
        let divButton = document.createElement('div');
        let divButton_Button1 = document.createElement('button');

        // Adding classes
        mainHeadingH1.classList.add('highlightedLimeText');
        mainForm.classList.add('column');
        mainForm.classList.add('gap20');
        divLine1.classList.add('row');
        divLine2.classList.add('row');
        divButton.classList.add('positionContactButton');
        divButton_Button1.classList.add('ColoredRectangularButton');

        // Giving the values
        mainHeadingH1.innerHTML = contactDetails.heading;
        divLine1_input1.type = contactDetails.type1;
        divLine1_input1.placeholder = contactDetails.placeholder1;
        divLine1_input2.type = contactDetails.type2;
        divLine1_input2.placeholder = contactDetails.placeholder2;
        divLine2_input1.type = contactDetails.type1;
        divLine2_input1.placeholder = contactDetails.placeholder3;
        divLine2_input2.type = contactDetails.type1;
        divLine2_input2.placeholder = contactDetails.placeholder4;
        textArea1.placeholder = contactDetails.placeholder5;
        divButton_Button1.type = contactDetails.type3;
        divButton_Button1.innerText = contactDetails.buttonText;


        // Appending the child
        divLine1.appendChild(divLine1_input1);
        divLine1.appendChild(divLine1_input2);
        divLine2.appendChild(divLine2_input1);
        divLine2.appendChild(divLine2_input2);
        divButton.appendChild(divButton_Button1);
        mainForm.appendChild(divLine1); 
        mainForm.appendChild(divLine2); 
        mainForm.appendChild(textArea1); 
        mainForm.appendChild(divButton);
        contact.append(mainHeadingH1); 
        contact.append(mainForm);
    }
}