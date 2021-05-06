// https://merakilearn.org/api/courses

import React, { Component } from 'react';
import Nav from "../Navbar/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import axios from "axios";



class API extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("https://merakilearn.org/api/courses")
            .then(response => {
                this.setState({ posts: response.data.availableCourses })
                // console.log(this.state.posts);
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        const { posts } = this.state
        // console.log(this.state);
        return (
            <div className="App">

                <Nav />

                {
                    posts.map(post => <div key={post.id}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 py-2">
                                    <div className="card">
                                        <img src={post.logo} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{post.name}</h5>
                                            <p className="card-text">{post.short_description}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default API;