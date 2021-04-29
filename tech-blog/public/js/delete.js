

const deleteComment = async (event) => {
    const id =event.target.getAttribute("data-store");
    const response = await fetch(`/api/comments/deleteComment/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({"id": id }),
      headers:  {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/user');
      
    } else {
      alert('Failed to delete comment');
    }  
    
  }

const deletePost = async (event) => {
    const id =event.target.getAttribute("data-store");
    console.log(`sending delete!`)
    const response = await fetch(`/api/posts/deletePost/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({"id": id }),
      headers:  {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/user');
      
    } else {
      alert('Failed to delete post');
    }  
    
  }
  var deletePostButtons = document.querySelectorAll(".postDelete");
  deletePostButtons.forEach(button =>{
    button.addEventListener("click", deletePost);
});

var deleteCommentButtons = document.querySelectorAll(".commentDelete");
deleteCommentButtons.forEach(button =>{
    button.addEventListener("click", deleteComment);
});