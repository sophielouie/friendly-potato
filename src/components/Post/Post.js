import React, { Component } from "react";
import parser from "html-react-parser";
// import "Feed.js"

class Post extends Component {
    constructor (props) {
        super(props)
        this.postId = 0;
        this.song =  this.props;
        this.likes = [];
        this.comments = ["1", "2", "3"];

        this.updateGlobalPostId = function () {
            this.postId = this.postId + 1;
          }
        

    }

    like() {
        console.log(this.likes);
        this.likes = this.likes.concat(1);
        document.getElementById("likes").innerHTML = this.likes.length;
    }

    comment() {
        var comment = document.getElementById("cmt").value;
<<<<<<< HEAD
        document.getElementById("cmtList").innerHTML = this.displayComments();
=======
>>>>>>> f40b650d573993ad7e7216a42820a13f2cc8b066
        this.comments = this.comments.concat(comment);
        document.getElementById("cmtList").innerHTML = this.displayComments();
    }

    toString() {
        return 'song: ' + this.song + "\nnumber of likes: " + this.likes.length + "\ncomments: " + this.comments;  
    }

    displayComments() {
        let text = ""
        for (let i = 0; i < this.comments.length; i++) {
            text += "<li>" + this.comments[i] + "</li>";
        }
        return text;
    }

    render() {
        
        return (
            <div>
                <h1 className = "header"> Song of post: {this.song} </h1>
                <div>
                    <button id="likeButton" onClick={() => this.like()}>like</button>
                    <p> Likes of post:</p> <p id="likes"> {this.likes.length} </p>
                    <input type="text" id="cmt" name="comment"/>
                    <button id="cmtB" onClick={() => this.comment()}>Comment</button>
                    <p> Comments of post: </p>
                    <ul id="cmtList">{parser(this.displayComments())} </ul>
                    
                    
                    
                </div>
                </div>
        );
      }
  }

  export default Post;