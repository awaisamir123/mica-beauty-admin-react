import React from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { user, isAuthenticated } = useAuth0();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    alert("You clicked the button");
  };
  const { email, password } = formData;
  return (
    <div className="text-center">
      <input
        type="email"
        id="login"
        className="fadeIn second"
        value={email}
        name="email"
        onChange={onChange}
        placeholder="email"
      />
      <input
        type="password"
        id="login"
        className="fadeIn second"
        value={password}
        name="password"
        onChange={onChange}
        placeholder="password"
      />
      <div className="form-group">
        <input
          type="submit"
          name="submit"
          className="btn btn-primary btn-md"
          value="submit"
          onClick={() => onSubmit()}
        />
      </div>
      {isAuthenticated && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <img src={user.picture} />
        </div>
      )}
    </div>
  );
};
