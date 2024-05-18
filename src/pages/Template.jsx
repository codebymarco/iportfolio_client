import { useState } from "react";
import { useParams } from "react-router-dom";

const Template = () => {
  const [template, setTemplate] = useState(`ONE`);
  const { username } = useParams();

  return (
    <div className="template">
      {template}
      {username}
      <h1>template page</h1>
    </div>
  );
};

export default Template;
