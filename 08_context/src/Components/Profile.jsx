import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

export default function Profile() {
    
    const { user } = useContext(UserContext);
    if (!user) return(<h1> No data </h1>)
  return (
    <>
      <h1>Profile Page</h1>
      <h2>Name:{user.username}</h2>
    </>
  );
}
