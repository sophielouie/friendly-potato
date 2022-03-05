import React from "react";
import { ReactDOM } from "react";
import "Post.js";




//Feed class contains a collection of posts
class Feed extends Component {
    constructor (posts) {
        this.posts = posts;
    }

    //compares posts by how many likes they have
    comparePosts(a, b) {
        return a.likes - b.likes;
    }

    //add post to posts
    add_post(post) {
        this.posts.append(post);
    }

    sort_feed() {
        this.posts.sort(comparePosts);
    }


    render() {
        for (let i = 0; i < this.posts.length, text = ""; i++) {
            text += this.posts[i].render() + "<br>";
        }
        return (text);
      }
  }