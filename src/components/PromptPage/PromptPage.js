import React, { Component } from "react";
import parser from "html-react-parser";
// import "Feed.js"

class PromptPage extends Component {
    constructor (props) {
        super(props)
        this.prompt = "What song did you listen to last?";
        this.input = ""
        //Timer
    }

    createPost() {
        console.log("hehe")

    }

    // like() {
    //     console.log(this.likes);
    //     this.likes = this.likes.concat(1);
    //     document.getElementById("likes").innerHTML = this.likes.length;
    // }

    // comment() {
    //     var comment = document.getElementById("cmt").value;
    //     document.getElementById("cmtList").innerHTML = this.displayComments;
    //     this.comments = this.comments.concat(comment);
    // }

    // toString() {
    //     return 'song: ' + this.song + "\nnumber of likes: " + this.likes.length + "\ncomments: " + this.comments;  
    // }

    // displayComments() {
    //     let text = ""
    //     for (let i = 0; i < this.comments.length; i++) {
    //         text += "<li>" + this.comments[i] + "</li>";
    //     }
    //     return text;
    // }

    render() {
        
        return (
            <div>
                <h1 className = "header"> Today's Prompt: {this.prompt} </h1>
                <div>
                    <input type="text" id="ans" name="answer"/>
                    <button id="submitB" onClick={() => this.createPost()}>Submit</button>        
                </div>
                </div>
        );
      }
  }

  export default PromptPage;



//   <div>
//                 <h1 className = "header"> Song of post: {this.song} </h1>
//                 <div>
//                     <button id="likeButton" onClick={() => this.like()}>like</button>
//                     <p> Likes of post:</p> <p id="likes"> {this.likes.length} </p>
//                     <input type="text" id="cmt" name="comment"/>
//                     <button id="cmtB" onClick={() => this.comment()}>Comment</button>
//                     <p> Comments of post: </p>
//                     <ul id="cmtList">{parser(this.displayComments())} </ul>
                    
                    
                    
//                 </div>
//                 </div>