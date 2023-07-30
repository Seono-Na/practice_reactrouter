import React from "react";
import { useParams } from "react-router-dom";

export default function MyPageDetail() {
  const { mypageId } = useParams();
  return <div>MyPageDetail : {mypageId} </div>;
}
