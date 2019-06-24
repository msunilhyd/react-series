import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost, addPost } from '../actions/postActions'

class Post extends Component {


    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    handleClickAddPost = () => {
        this.props.addPost(this.props.post);
        this.props.history.push('/');
    }

    render() {

        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                    <button className="btn grey" onClick={this.handleClickAddPost}>
                        Add Post
                    </button>
                </div>
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
        post: state.posts.find(post => parseInt(post.id, 10) == id)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) },
        addPost: (post) => { dispatch(addPost(post)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)