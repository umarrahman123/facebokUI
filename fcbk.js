// Example JavaScript for handling comment submission
const commentInput = document.querySelector('.comment-input input');
const commentButton = document.querySelector('.comment-btn');
const commentsSection = document.querySelector('.comments-section');

commentButton.addEventListener('click', function() {
    const commentText = commentInput.value.trim();
    
    if (commentText !== '') {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <img src="person-logo.png" alt="Person Logo">
            <p>${commentText}</p>
        `;
        
        commentsSection.appendChild(commentDiv);
        commentInput.value = ''; // Clear the input field
    }
});
