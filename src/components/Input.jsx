import React from "react";
const style = {
  label: "font-bold flex",
  input: "border p-1 border-2",
};

const Input = ({
  title,
  name,
  value,
  type,
  handleClick,
  male,
  female,
  isEditing,
}) => {
  return (
    <>
      {type === "radio" ? (
        <div>
          <label className={style.label} htmlFor={name}>
            {title}
          </label>
          <input
            className="mr-2"
            type={type}
            name={name}
            id={male}
            value={male}
            defaultChecked={isEditing && value === "Male"}
            onChange={handleClick}
          />
          {male}
          <input
            className="mx-2"
            type={type}
            name={name}
            id={female}
            value={female}
            defaultChecked={isEditing && value === "Female"}
            onChange={handleClick}
          />
          {female}
        </div>
      ) : type === "checkbox" ? (
        <div>
          <input
            type={type}
            name={name}
            defaultChecked={isEditing && value === "Checked"}
            onChange={handleClick}
          />
          <label htmlFor={name}> {title}</label>
        </div>
      ) : (
        <div className="name my-1">
          <label className={style.label} htmlFor={name}>
            {title + ":"}
          </label>

          <input
            className={style.input}
            type={type}
            name={name}
            id={name}
            defaultValue={isEditing && value}
            onChange={handleClick}
          />
        </div>
      )}
    </>
  );
};

export default Input;
