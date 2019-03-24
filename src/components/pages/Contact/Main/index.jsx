import React, {Component} from "react";

import "./index.scss";
class Contact extends Component {
  render() {
    return (
      <>
        <h2 className="contact">Contact</h2>
        <div className="contact_me">
          <div className="sns_button">
            <a
              href="https://www.wantedly.com/user/profile/edit"
              target="_brank">
              Wantedly
            </a>
          </div>
          <div className="sns_button">
            <a href="https://www.facebook.com/reo.ishiyama" target="_brank">
              facebook
            </a>
          </div>
          <div className="sns_button">
            <a href="https://qiita.com/reoisym" target="_brank">
              Qiita
            </a>
          </div>
          <div className="sns_button">
            <a href="https://github.com/reo777" target="_brank">
              github
            </a>
          </div>

          <div className="email">
            <p>Email: nareto1125@gmail.com</p>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
