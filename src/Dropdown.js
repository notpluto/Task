import React from "react";

class Dropdown extends React.Component {
  state = {
    displayMenu: false
  };

  showDropdownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  };

  render() {
    return (
      <div
        className="dropdown"
        style={{ borderLeft: "1px solid lightgray", width: "200px" }}
      >
        <div className="button profile" onClick={this.showDropdownMenu}>
          {" "}
          <img
            src="https://api.adorable.io/avatars/50"
            alt="profile"
            width="25px"
          />
          <p style={{ marginLeft: "10px" }}>Alex Tonorio</p>{" "}
        </div>
        {this.state.displayMenu ? (
          <ul className="drop-menu">
            <li>
              <a href="#">Setting</a>
            </li>
            <li>
              <a href="#">Log Out</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
