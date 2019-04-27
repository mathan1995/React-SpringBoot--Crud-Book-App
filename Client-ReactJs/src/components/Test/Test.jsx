import React from "react";
import Alert from "react-s-alert";

class Home extends React.Component {
  handleClick1(e) {
    e.preventDefault();
    Alert.warning("<h1>Test message 1</h1>", {
      position: "top-right",
      effect: "scale",
      onShow: function() {
        console.log("aye!");
      },
      beep: false,
      timeout: "none",
      offset: 100
    });
  }
  handleClick2(e) {
    e.preventDefault();
    Alert.info("Test message 2", {
      position: "bottom-left",
      effect: "bouncyflip",
      timeout: "none"
    });
  }
  handleClick3(e) {
    e.preventDefault();
    Alert.error("Test message 3", {
      position: "bottom-right",
      effect: "slide",
      timeout: "none"
    });
  }
  handleCloseAll(e) {
    e.preventDefault();
    Alert.closeAll();
  }
  render() {
    return (
      <div>
        <div>
          <a href="#" onClick={this.handleClick1}>
            Click 1
          </a>{" "}
          |
          <a href="#" onClick={this.handleClick2}>
            Click 2
          </a>{" "}
          |
          <a href="#" onClick={this.handleClick3}>
            Click 3
          </a>{" "}
          |
          <a href="#" onClick={this.handleCloseAll}>
            Close All
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
