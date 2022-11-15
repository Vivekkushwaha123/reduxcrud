import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteUser } from "../features/reducer/reducerSlice";

const style = {
  td: "p-1 border border-1 border-stone-900 text-center",
  btn: " px-2 p-1 rounded border-1 border-stone-900 font-bold border text-center",
};

const tHeadArr = [
  "Name",
  "Email",
  "Phone Number",
  "Gender",
  "isEligible",
  "Delete",
  "Edit",
];
const Table = ({ setData }) => {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.reducers.crudReducer.value);
  const handleEdit = (ele) => {
    setData({ ...ele, isEditing: true });
  };
  const handleDelete = (ele) => {
    dispatch(deleteUser(ele));
  };

  return (
    <>
      <div className="flex flex-col justify-center m-3">
        <table>
          <thead>
            <tr>
              {tHeadArr.map((ele, i) => {
                return (
                  <th
                    className="border p-2 border-1 border-stone-900"
                    key={ele + i}
                  >
                    {ele}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {stateData.map((ele, i) => {
              return (
                <tr key={ele.id}>
                  <td className={style.td}>{ele.name}</td>
                  <td className={style.td}>{ele.email}</td>
                  <td className={style.td}>{ele.phoneNumber}</td>
                  <td className={style.td}>{ele.gender}</td>
                  <td className={style.td}>{ele.isEligible}</td>
                  <td className={style.td}>
                    <Button
                      classStyle={style.btn + " bg-zinc-300"}
                      btnName="Edit"
                      handleFunction={() => handleEdit(ele)}
                    />
                  </td>
                  <td className={style.td}>
                    <Button
                      classStyle={style.btn + " bg-red-300"}
                      btnName="Delete"
                      handleFunction={() => handleDelete(ele)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
