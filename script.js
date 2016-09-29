// to get the like to count up by 1
// get content of the span
// turn it into a number
// add 1
// put the result back in the span

// Form: when the user submits the form, event listener
// grab form, add event listener
// in the function take value of the box (a string), create a new element such as a div (give it a class
//   set the text content of that div to the variable that had the text content
//   then append it
// queryselector for parent, then append child
// for twitter wanted to create a new tweet but the 4th one was auto added on page load.
// so do the same thing for this. get a comment to appear first.
// write javascript to get the comment to appearin the right place
// then move that code into the event handler
// for everythng yuor program touches, make a variable for it first var form = documentqueryselector
// kknow need text area so var textarea
// know need parent so var comments parent documentqueryselector
// need link so same
// same for span
// so need 5 queryselectors
// make the create comment and reset form as functions
// createComment("foo...")
// or could have it be createComment() -> this woul have to go retrieve the text

var newlike = document.querySelector("a.like-link");
function handlelinkClick(event){
  event.preventDefault();
  var likespan = document.querySelector(".like-count").textContent;
  var newlike = parseInt(likespan);
  document.querySelector(".like-count").textContent = newlike+1;
  console.log(event);
}
newlike.addEventListener("click", handlelinkClick);

//create new comment

var newComment = document.querySelector("button");

newComment.addEventListener("click", createComment);

function createComment(event){
  event.preventDefault();
  var parent = document.querySelector("#comments");

  var newCommentBody = document.createElement("div");
  newCommentBody.classList.add("comment");
  newCommentBody.textContent = document.querySelector("#new-comment-body").value;
  comments.appendChild(newCommentBody);

  var clearCommentBody = document.querySelector("#new-comment-body");
  clearCommentBody.value = null;
}
