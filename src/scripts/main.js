/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/

getUsers()
.then(data => {
    console.log("User Data", data)
})

// Can you explain what is being imported here?
import { getPosts, getUsers } from "./data/DataManager.js"
import { PostList } from "./feed/PostList.js"
import { NavBar } from "./nav/NavBar.js";

const showNavBar = () => {
    //Get a reference to the location on the DOM where the list will display
    const navElement = document.querySelector("nav");
        navElement.innerHTML = NavBar();
}

const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

const startGiffyGram = () => {
	showPostList();
}

startGiffyGram();


const startGiffyGram = () => {
    const postElement = document.querySelector(".postList");
	postElement.innerHTML = "Hello Cohort 55"
}
// Are you defining the function here or invoking it?
startGiffyGram();

applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__cancel") {
        //clear the input fields
    }
  })
  
  applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
    //collect the input values into an object to post to the DB
      const title = document.querySelector("input[name='postTitle']").value
      const url = document.querySelector("input[name='postURL']").value
      const description = document.querySelector("textarea[name='postDescription']").value
      //we have not created a user yet - for now, we will hard code `1`.
      //we can add the current time as well
      const postObject = {
          title: title,
          imageURL: url,
          description: description,
          userId: 1,
          timestamp: Date.now()
      }
  
    // be sure to import from the DataManager
        createPost(postObject)
    }
  })

  const showPostEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".entryForm");
    entryElement.innerHTML = PostEntry();
  }