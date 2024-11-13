import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children; 
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      errors: {
        name: '',
        email: '',
      },
    };
  }

  validateForm = () => {
    const { name, email } = this.state;
    let valid = true;
    const errors = {
      name: '',
      email: '',
    };

    if (name.trim() === '') {
      errors.name = 'Name is required';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.email = 'Invalid email address';
      valid = false;
    }

    this.setState({ errors });
    return valid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      alert('Form submitted successfully!');
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, errors } = this.state;
    return (
      <div>
        <h1>Sign Up Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default function WrappedApp() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
