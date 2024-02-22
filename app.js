// Update Width to Input Length
document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.prompt-input');
    
    function updateInputWidth(input) {
        // Create a temporary span element to measure text width
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.whiteSpace = 'pre';
        tempSpan.textContent = input.value || input.placeholder;

        // Apply font styles from input to span for accurate measurement
        tempSpan.style.font = window.getComputedStyle(input).font;

        // Add the span to the body to measure it
        document.body.appendChild(tempSpan);
        
        // Calculate width and apply it to the input, adding a little extra space
        const padding = 20;
        const paddingRight = 75;
        const width = tempSpan.offsetWidth + padding + paddingRight;
        
        // Apply calculated width to input, with a minimum width
        input.style.width = `${Math.max(width, 100)}px`;
        input.style.paddingRight = '1rem';

        // Remove the temporary span element
        document.body.removeChild(tempSpan);
    }

    // Initialize inputs with correct width and setup event listener
    inputs.forEach(input => {
        updateInputWidth(input);

        // Update width on input
        input.addEventListener('input', function () {
            updateInputWidth(input);
        });
    });
});

//Copy Prompt Button
document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyPromptButton');

    copyButton.addEventListener('click', function() {
        let fullPrompt = '';
        const elements = document.querySelectorAll('.prompt-wrapper .prompt-text, .prompt-wrapper .prompt-input');

        elements.forEach(el => {
            let text = '';
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                // Use input value if present; otherwise, use the placeholder text
                text = el.value.trim() !== '' ? el.value : el.placeholder;
            } else {
                text = el.textContent;
            }
            fullPrompt += `${text} `;
        });

        // Clean the fullPrompt string by replacing multiple spaces with a single space
        const cleanedPrompt = fullPrompt.replace(/\s+/g, ' ').trim();

        // Attempt to copy the cleaned prompt to the clipboard
        navigator.clipboard.writeText(cleanedPrompt).then(() => {
            alert('Prompt copied successfully!');
        }).catch(err => {
            console.error('Error copying text: ', err);
            // Fallback method for older browsers or in case of an error
            const textarea = document.createElement('textarea');
            textarea.value = cleanedPrompt;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy'); // Execute the copy command
            document.body.removeChild(textarea); // Remove the temporary element
            alert('Prompt copied successfully (fallback method)!');
        });
    });
});

// replace Role Options
document.addEventListener('DOMContentLoaded', function () {
    // The roles string
    const rolesString = "Expert Accountant;Skilled Software Developer;Seasoned Teacher;Accomplished Sales Representative;Competent Project Manager;Proficient Lawyer;Qualified Engineer;Experienced Architect;Competent Marketing Manager;Knowledgeable Financial Analyst;Creative Graphic Designer;Seasoned Human Resources Manager;Trusted Consultant;Skilled Doctor;Licensed Psychologist;Dedicated Researcher;Analytical Data Analyst;Astute Economist;Journalistic Reporter;Professional Pharmacist;Compassionate Social Worker;Tech-savvy IT Specialist;Insightful Business Analyst;Seasoned Operations Manager;Strategic Event Planner;Expert Real Estate Agent;Seasoned Investment Banker;Proficient Web Developer;Certified Fitness Trainer;Professional Executive Coach;Agile Scrum Master;Cyber Security Analyst;User Experience (UX) Researcher;Blockchain Developer;Artificial Intelligence (AI) Engineer;Environmental Consultant;Data Privacy Officer;Virtual Reality (VR) Developer;Ethical Hacker";

    // Split the string into an array of roles
    const rolesArray = rolesString.split(';');

    // Get the datalist element
    const rolesDatalist = document.getElementById('role-options');

    // Clear existing options
    rolesDatalist.innerHTML = '';

    // Create a new option element for each role and append it to the datalist
    rolesArray.forEach(role => {
        const option = document.createElement('option');
        option.value = role.trim(); // Trim to remove any accidental whitespace
        rolesDatalist.appendChild(option);
    });
});

//replace task options list
document.addEventListener('DOMContentLoaded', function () {
    // Define the new options in simple, plain language formatted as actions
    const optionsList = [
        "to make things work better",
        "to look closely at details",
        "to set up automatic systems",
        "to figure out numbers",
        "to sort things into groups",
        "to work together with a team",
        "to change one format to another",
        "to make things fit specific needs",
        "to fix errors in a system",
        "to plan a visual layout",
        "to find problems that need solutions",
        "to figure out the cause of issues",
        "to find new and innovative ideas",
        "to make something better or more attractive",
        "to help a process run smoothly",
        "to choose what's important from a lot of data",
        "to create new content or ideas",
        "to pick out key details from information",
        "to make improvements to a service",
        "to make a system work the best it can",
        "to adjust something to someone's preferences",
        "to guess what will happen in the future",
        "to put things in a meaningful order",
        "to notice important details",
        "to give advice on the best choice",
        "to imitate real-life situations in a model",
        "to make a process simpler and more efficient",
        "to give a brief summary of a large topic",
        "to keep track of progress or changes",
        "to change information into another language",
        "to check if something is correct or works well"
    ];

    // Get the datalist element
    const needsDatalist = document.getElementById('need-options');

    // Clear existing options
    needsDatalist.innerHTML = '';

    // Create a new option element for each option and append it to the datalist
    optionsList.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText; // Set the value to the simple, plain language action phrase
        needsDatalist.appendChild(option);
    });
});
