import React, {Component} from "react";
import { ReactDOM } from "react";
import Post from '../../components/Post/Post';
import parser from "html-react-parser";




//Feed class contains a collection of posts
class Feed extends Component {
    constructor (props) {
        // const Post = ({"The Lazy Song"}) => {

        // }
        super(props)
        const post1 = new Post("Shake My Hair Back and Forth - Willow Smith", 12)
        const post2 = new Post("Hard Times - Paramore")
        this.posts = [post1, post2];
    }

    //compares posts by how many likes they have
    // comparePosts(a, b) {
    //     return a.likes - b.likes;
    // }

    //add post to posts
    add_post(post) {
        this.posts.append(post);
    }

    // sort_feed() {
    //     this.posts.sort(comparePosts());
    // }


    render() {
        return (
            <div>
            <h1 className = "header"> Feed </h1>
            <div>
                <ul id="feedList"> {this.posts.map(i => {return <li> {i.render()} </li>})} </ul>
            </div>
            </div>
        )
      }
  }

  export default Feed