import { EmployeeProps } from "./types";
import "./Employee.scss";

export const Employee: React.FC<EmployeeProps> = ({ description, headshot, title, name }) => {
  return (
    <div className="employee-profile">
      <img className="headshot" src={headshot} alt="" />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
