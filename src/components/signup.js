import React from 'react'
import styles from './signup.module.css'
// import { navigate } from 'gatsby'
import { push } from 'gatsby-link'
import { createSubscriber } from '../services'
import className from 'classnames'

function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}
export default class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      email: '',
      error: null,
      loading: false,
    }
  }

  validateEmail = email => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value, error: null })
  }

  handleSignup = event => {
    event.preventDefault()

    if (this.state.email == '') {
      return
    }

    if (!this.validateEmail(this.state.email)) {
      this.setState({ error: 'That doesn\'t look like a valid email address' })
      return
    }

    this.setState({ loading: true })

    // createSubscriber(this.state.email).then(data => {
    //   if (!data.metadata.success) {
    //     this.setState({ error: data.metadata.message, loading: false })
    //     return
    //   } else {
    //     push('/signup-success')
    //   }
    // })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name,
      }),
    })
      .then(() => push("/signup-success/"))
      .catch((error) => alert(error));
  }

  render() {
    let btnClass = className('btn', 'btn-primary', 'input-group-btn', 'btn-lg', {
      'loading': this.state.loading
    })
    let groupClass = className('form-group', {
      'has-error': this.state.error
    })

    return (
      <div className={styles.root}>
        <p>Get on the waiting list</p>
        <form className={groupClass} data-netlify="true" name="signup" method="post" onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="signup" />
          <div className="input-group">
            <input className="form-input input-lg" name="email" placeholder="Your email address" type="text" value={this.state.email} onChange={this.handleEmailChange} />
            <button className={btnClass} type="button" onClick={this.handleSignup}>Signup</button>
            {/* <button className={btnClass} type="button">Signup</button> */}
          </div>
          { this.state.error ? <p className="form-input-hint">{this.state.error}</p> : null }
        </form>
      </div>
    )
  }
}
