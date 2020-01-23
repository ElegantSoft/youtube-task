/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactElement } from "react";
import "./style.css";

interface Props {
  title: string;
  choices: Array<string>;
}
const Select: React.FC<Props> = ({ title, choices }): ReactElement => {
  return (
    <div className="select">
      <select name="slct" id="slct" defaultValue={title}>
        <option value={title}>{title}</option>
        {choices.map((ch, i) => (
          <option key={i.toString()} value={ch}>
            {ch}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
