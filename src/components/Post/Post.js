import React, { Component } from "react";
import parser from "html-react-parser";
// import "Feed.js"

class Post extends Component {
    constructor (props) {
        super(props)
        this.postId = 0;
        this.song = "Lazy Song";
        this.likes = [];
        this.comments = ["1", "2", "3"];

        this.updateGlobalPostId = function () {
            this.postId = this.postId + 1;
          }
        

    }

    like() {
        this.likes.append(1);
    }

    comment(comment) {
        this.comments.append(comment);
    }

    toString() {
        return 'song: ' + this.song + "\nnumber of likes: " + this.likes.length + "\ncomments: " + this.comments;  
    }

    displayComments() {
        let text = "<ul>"
        for (let i = 0; i < this.comments.length; i++) {
            text += "<li>" + this.comments[i] + "</li>";
        }
        text += "</ul>";
        return text;
    }

    render() {
        
        return (
            <div>
                <h1 className = "header"> Song of post: {this.song} </h1>
                <div>
                    
                    <p> Likes of post: {this.likes.length} </p>
                    <p> Comments of post: {parser(this.displayComments())} </p>
                    <button id="likeButton" onclick={() => this.likes.append(1)}>like</button>
                </div>
                </div>
        );
      }
  }

  export default Post;