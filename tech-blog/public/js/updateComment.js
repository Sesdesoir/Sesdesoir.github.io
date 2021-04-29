const updateComment = async (event) => {
    const id =event.target.getAttribute("data-store");
    const commentBody = document.querySelector(`#updateComment${id}`).value.trim();
    const response = await fetch(`/api/comments/updateComment/${id}`, {
      method: 'PUT',
      body: JSON.stringify({"comment_body": commentBody, "id": id }),
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
  
    if (response.ok) {
        document.location.replace('/user');
    } else {
      alert('Failed to update comment');
    }  
  }

let updateCommentButton = document.querySelectorAll(".updateCommentButton");
updateCommentButton.forEach(button =>{
    button.addEventListener("click", updateComment);
});
    