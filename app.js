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
      "to write a blog post",
      "to summarize an article",
      "to write Python code",
      "to compose an email",
      "to draft a business plan",
      "to create marketing copy",
      "to devise a recipe",
      "to generate a report summary",
      "to review a product",
      "to form interview questions",
      "to plan a workout routine",
      "to explain a complex concept",
      "to translate text",
      "to solve a math problem",
      "to organize a travel itinerary",
      "to outline a presentation",
      "to come up with a story idea",
      "to propose a project",
      "to create a study guide",
      "to analyze data",
      "to write a cover letter",
      "to edit for clarity",
      "to craft a social media update",
      "to brainstorm business names",
      "to design a survey",
      "to summarize a news article",
      "to compose a poem",
      "to write song lyrics"
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
