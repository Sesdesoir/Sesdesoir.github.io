
const newComment = async (event) => {
    const PostID = event.target.title;
    const commentBody = document.querySelector(`#newComment${PostID}`).value.trim();
  
    const response = await fetch(`/api/posts/comment`, {
      method: 'POST',
      body: JSON.stringify({"post_id": PostID, "comment_body": commentBody }),
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to post comment');
    }  
  }

let submitButtons = document.querySelectorAll(".newCommentSubmit");
for (let i =0; i<submitButtons.length; i++){
    submitButtons[i].addEventListener("click", newComment);
}
