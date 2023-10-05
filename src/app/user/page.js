import React from "react";

const User = () => {
  return (
    <div>
      <h1>user page</h1>
    </div>
  );
};

export function generateMetadata({ params }) {
  return {
    title: "user page titile",
    description: "user page discription",
  };
}

export default User;
