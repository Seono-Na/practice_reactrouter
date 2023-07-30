import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Mypage() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/mypage/${text}`);
  };
  return (
    <div>
      MyPage
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Id : "
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
