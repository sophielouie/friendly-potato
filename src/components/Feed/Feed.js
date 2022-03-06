import React from "react";
import { ReactDOM } from "react";
import "Post.js";
import parser from "html-react-parser";




//Feed class contains a collection of posts
class Feed extends Component {
    constructor (posts) {
        // const Post = ({"The Lazy Song"}) => {

        // }
        this.posts = [Post];
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
        return parse(text);
      }
  }

  export default Feed