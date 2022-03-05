import React, { Component } from "react";
import reactDOM from "react-dom";

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
        return (
            <div>
                <h1 className = "header"> Post Id: {this.postId} </h1>
                <p> Song of post: {this.song} </p>
                <p> Likes of post: {this.likes.length} </p>
                <p> Comments of post: {this.comments} </p>
            </div>
        );
      }
  }