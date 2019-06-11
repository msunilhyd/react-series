import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {

    render() {
        console.log('this.props is : ' + this.props);
        console.log('this.props.post is : ' + this.props.post);

        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
                <div className="center">Loading ...</div>
            )
        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => parseInt(post.id) == id)
    }
}

export default connect(mapStateToProps)(Post)