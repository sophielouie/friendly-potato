import React, { Component } from "react";
import reactDOM from "react-dom";
// import "Feed.js"

var globalPostId = 0;

class Post extends Component {
    constructor (song) {
        this.postId = globalPostId;
        this.song = song;
        this.likes = [];
        this.comments = [];

        this.updateGlobalPostId = function () {
            globalPostId = globalPostId + 1;
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

    render() {
        for (let i = 0; i < this.comments.length, text = "<UL>"; i++) {
            text += "<LI>" + this.comments[i]
        }
        text += "</UL>"
        return (
            <div>
                <h1 className = "header"> Song of post: {this.song} </h1>
                <p> Likes of post: {this.likes.length} </p>
                <p> Comments of post: {text}</p>
            </div>
        );
      }
  }