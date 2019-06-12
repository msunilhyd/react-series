
export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}


export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post: { id: 4, title: "This is Linus Radcliffe, Hello exercitationem repellat qui ipsa sit aut", body: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut" }
    }
}