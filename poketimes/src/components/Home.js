import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Home extends Component {

    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/posts/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No posts yet</div>
            )

        return (
            <div className="container" >
                <h4 className="center"> Home </h4>
                {postList}
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem impedit dolore corrupti, eius ex quo explicabo odit nisi, quidem nulla? Non velit voluptatem dolor magnam esse et impedit ex?</p>
            </div>
        )
    }
}


export default Home