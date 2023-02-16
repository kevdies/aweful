import React, { useState } from "react";
import { Alert, Form, FormGroup, Input, Button } from "reactstrap";

function UserSignUpForm({ currentUser, setCurrentUser, handleLogOut }) {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        {/* <Label for="email">email</Label> */}
        <Input
          id="email"
          name="email"
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           style={{backgroundColor: "#c6bcdb"}}
        />
      </FormGroup>
      <FormGroup>
        {/* <Label for="password">password</Label> */}
        <Input
          id="password"
          name="password"
          placeholder="enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           style={{backgroundColor: "#c6bcdb"}}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="password_confirmation"
          name="password_confirmation"
          placeholder="enter password again"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
           style={{backgroundColor: "#c6bcdb"}}
        />
      </FormGroup>

      <Button
        size="lg"
        style={{
          backgroundColor: "#583d59",
          borderColor: "#583d59",
          color: "#c6bcdb",
          borderRadius: "0",
        }}
        type="submit"
      >
        {isLoading ? "Loading..." : "Sign Up"}
      </Button>

      {errors ? errors.map((e) => <Alert color="danger">{e}</Alert>) : null}
    </Form>
  );
}

export default UserSignUpForm;
