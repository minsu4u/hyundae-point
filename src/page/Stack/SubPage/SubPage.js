import React from "react";
import { useParams } from "react-router-dom";

function SubPage() {
  const subname = useParams().subname;
  return <div>{subname}</div>;
}

export default SubPage;
