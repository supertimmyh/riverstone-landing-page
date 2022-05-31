import React from 'react'
import styles from './signup.module.css'
import { push } from 'gatsby-link'
import { createSubscriber } from '../services'
import className from 'classnames'
// import axios from "axios"
// import * as qs from "query-string"

export default class Signup extends React.Component {

constructor(props) {
    super(props)
    this.state = {
      email: '',
    }
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }


  render() {
    let btnClass = className('btn', 'btn-primary', 'input-group-btn', 'btn-lg', {

    })

    return (
      <div className={styles.root}>
        <p>Get on the waiting list</p>
        <form name="signup" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name ="bot-field" />
          <input type="hidden" name="form-name" value="signup" />
          <div className="input-group">
            <input className="form-input input-lg" name="email" placeholder="Your email address" type="email" value={this.state.email} onChange={this.handleEmailChange} />
            <button className={btnClass} type="button">Signup</button>
          </div>
        </form>
      </div>
    )
  }
}
