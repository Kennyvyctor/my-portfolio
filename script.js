function scrollToTop () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function addComment() {
    // Get input values
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('messageInput').value;

    // Check if inputs are empty
    if (message.trim() === '') {
    alert('Please enter a comment before submitting.');
    return;
    } 

    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('recommendation-container');

    // Create elements for name and message
    const nameElement = document.createElement('b');
    nameElement.textContent = name;

    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    
    // Append elements to the comment
    newComment.appendChild(nameElement);
    newComment.appendChild(messageElement);

    // Append the comment to the container
    const commentContainer = document.getElementById('recommendation-wrapper');
    commentContainer.appendChild(newComment)

    // Clear input fields 
    nameInput.value = '';
    messageInput.value = '';
    
}




// function submit() {
//     // Get the input elements and their values
//     const commentName = document.getElementById('name').value;
//     const commentText = document.getElementById('message').value;

//     // Create new paragraph & name elements for the comment & add their inputs
//     const newComment = document.createElement('p');
//     newComment.textContent = commentText;

//     const newName = document.createElement('b');
//     newName.textContent = commentName;
    
//     // Create a new recommendation-container for recommendation
//     const newContainer = document.createElement('div');
//     newContainer.className = 'recommendation-container';
    
//     // Append the created paragrah & name elements to the newContainer
//     newContainer.appendChild(newComment);
//     newContainer.appendChild(newName);


//     // Append the new container to the recommendation-wrapper
//     const recommendationWrapper = document.getElementById("recommendation-wrapper");
//     recommendationWrapper.appendChild(newContainer);

//     // Clear the input field
//     commentName.value = '';
//     commentText.value = '';
    
// }





// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('submit').addEventListener('click', () => {
//             // Get the value of the two inputs
//             const commentName = document.getElementById('name').value.trim();
//             const commentText = document.getElementById('message').value.trim();

//             // Check if the inputs are empty
//             if (commentText.trim() === '') {
//                 alert('Please enter a comment before submitting.');
//                 return;
//             }

//             // Create a new div element for the comment
//             const newDiv = document.createElement('div');
//             newDiv.className = 'recommendation-container';

//             // Create new paragraph element for the div & add input
//             const paragrah = document.createElement('p');
//             paragrah.textContent = commentName;

//             // Create new bold element for the div & add input
//             const bold = document.createElement('b');
//             bold.textContent = commentText;

//             // Add paragrapgh & bold to parent comment div
//             newComment.appendChild(bold);
//             // document.getElementById('latent-container').appendChild(bold);
//             newComment.appendChild(paragrah);
//             // document.getElementById('latent-container').appendChild(paragrah);
//             // Add the div to the parent wrapper
//             document.getElementById('recommendation-wrapper').appendChild(newDiv);


//             // Clear the input
//             document.getElementById('name').value = '';
//             document.getElementById('message').value = '';

//         });
// });