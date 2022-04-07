import React from "react";

const Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
      <br />
    </div>
  );
};

export default class FormElement extends React.Component {
  state = {
    name: "",
    phonenumber: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    phonenumberError: "",
  };

  validate = () => {
    let nameError = "";
    let phonenumberError = "";
    let emailError = "";
    let passwordError = "";

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(this.state.email).toLowerCase())) {
      emailError = "Invalid email!";
    }

    if (!this.state.password) {
      passwordError = "Password cannot be empty!";
    } else if (this.state.password.length < 8) {
      passwordError = "Password minimum 8 characters!";
    }

    if (!this.state.name) {
      nameError = "Name cannot be empty!";
    }

    if (!this.state.phonenumber) {
      phonenumberError = "Phone number cannot be empty!";
    }

    if (!this.state.email) {
      emailError = "Email cannot be empty!";
    }
    if (phonenumberError || emailError || nameError || passwordError) {
      this.setState({ phonenumberError, emailError, nameError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      alert(`
      Name: ${this.state.name}
      Phone Number: ${this.state.phonenumber}
      Email: ${this.state.email}
      Password: ${this.state.password}
      `);
      this.setState(
        {
          nameError: "",
          emailError: "",
          passwordError: "",
          phonenumberError: "",
        },
        () => console.log("Click recorded!")
      );
      this.formDini.reset();
    }
  };

  render() {
    const style = {
      width: "400px",
      margin: "100px auto 0",
      border: "1px solid black",
      padding: "10px",
    };
    return (
      <div style={style}>
        <h4 style={{ textAlign: "center" }}>Form Registration</h4>
        <div style={{ fontSize: 14, color: "red" }}>*Wajib diisi</div>
        <br />
        <form ref={(el) => (this.formDini = el)} onSubmit={this.handleSubmit}>
          <Input type="text" name="nama" label="Name" onChange={(value) => this.setState({ name: value })} />
          <div style={{ fontSize: 14, color: "red" }}>*{this.state.nameError}</div>
          <Input type="text" name="phonenumber" label="Phone Number" onChange={(value) => this.setState({ phonenumber: value })} />
          <div style={{ fontSize: 14, color: "red" }}>*{this.state.phonenumberError}</div>
          <Input type="email" name="email" label="Email" onChange={(value) => this.setState({ email: value })} />
          <div style={{ fontSize: 14, color: "red" }}>*{this.state.emailError}</div>
          <Input type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
          <div style={{ fontSize: 14, color: "red" }}>*{this.state.passwordError}</div>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
