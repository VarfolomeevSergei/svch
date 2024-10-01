
import { Component } from "react";
import Button from "./Button/Button.js";
import './header.css'
import Logo from "./Logo/Logo.js";

class Header extends Component {
  render() {
    return (
      <header>
      <div className="header-container flex-box-between">
        <Logo></Logo>
        <Button></Button>
        <div>
          <div className="header-information flex-box-between">
            <a className="lng-home1" href="">HOME</a>
            <a className="lng-abo" href="about/about.html">ABOUT</a>
            <a className="lng-WORK" href="registration/registration.html">WORK WITH US</a>
            <a className="lng-CLIENT" href="client/client.html">CLIENT WINS</a>
            <a className="lng-EMPLOYERS" href="employers/employers.html">EMPLOYERS</a>
            <a className="profile123" href="profile/profile.html">👤</a>
          </div>
        </div>
      </div>
    </header>
    );
  }
}
export default Header;