import React, {Component} from "react";
import {Button} from "semantic-ui-react";
import "./index.scss";
class Contact extends Component {
  render() {
    return (
      <>
        <h2 className="contact">Contact</h2>
        <div className="sns_buttons">
          <Button inverted color="red">
            Wantedly
          </Button>
          <Button inverted color="blue">
            facebook
          </Button>
          <Button inverted color="green">
            Qiita
          </Button>
          <Button inverted color="black">
            github
          </Button>
        </div>
        <div className="email">
          <p>Email: nareto1125@gmail.com</p>
        </div>
      </>
    );
  }
}

export default Contact;
