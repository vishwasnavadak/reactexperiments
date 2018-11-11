import React, { Component } from 'react'
import PostListItem from './post-list-items';

export default class PostList extends Component {
constructor(props){
    super(props);

    this.state = {
        posts:[]
    }
}
fetchPosts(posts){
    this.setState({posts});
}
componentDidMount(){
    fetch('http://vishwas.tech/blog/feed.json')
    .then(result => result.json())
    .then(data => this.fetchPosts(data.items))
}
render() {
return (
    <div>
        <h1>Blog Posts fetched from <span>vishwas.tech/blog</span></h1>
        <br/>
        <ul className="post-list" >
        {this.state.posts.map((post) => {
            return <PostListItem key={post.id} post={post}/>
        })}
        </ul>
    </div>
)
}
}
