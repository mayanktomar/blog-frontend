import axios from 'axios';
import React, { Component } from 'react'

export class BlogsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInterests: '',
      blogsData: ''
    }
  }

  componentDidMount = async () => {
    const authToken = localStorage.getItem('authToken');
    const interests = localStorage.getItem('interests');
    const interestsArray = interests.split(',');
    this.setState({
      userInterests: interestsArray
    });
    console.log("Interests............",interestsArray);
    const headers = {
      authorization: authToken
    }
    const data = {
      interests: interestsArray
    }
    try {
      const blogApiReponse = await axios.post('http://localhost:5000/api/getBlogsByInterests',data,{
        headers: headers
      });
      console.log("blog api response....",blogApiReponse);
    } catch (err) {
      console.log("errrrr..........",err);
    }

  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogsView