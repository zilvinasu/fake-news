import React, { Component } from 'react';
import { api } from '../services';
import Post from './Post';

class Posts extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const posts = await api.Posts.all();
    this.setState({ posts });
  }

  render() {
    return this.state.posts.map(post => <Post key={post.id} post={post} />);
  }
}

export default Posts;
