import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import Topbar1 from '../components/Topbar1';
import Footer from '../components/Footer';
import '../Assets/css/Feedback.css'

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      experience: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, e.g., submit to a server
    console.log('Form data:', this.state);

  
  };

  render() {
    return (
        <div>
            <Topbar1/>
        
      <div className="feedback-form">
        <h2>Feedback Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="experience">Experience:</label>
            <textarea
              id="experience"
              name="experience"
              value={this.state.experience}
              onChange={this.handleInputChange}
              rows="5" // You can adjust the number of rows as needed
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default FeedbackForm;
