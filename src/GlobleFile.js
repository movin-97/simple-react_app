import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FatchUserData } from "./Feature/ExtraReducers";
import axios from 'axios';

export function ConsoleLog() {
  console.log("value");
}

export const AlertFun = () => {
  alert("Hii this Is working");
};

export const Count = (count) => {
  if (count === 0) {
    if (count === 3) {
      console.log("Count Is 3");
    } else {
      console.log("Count Is 0 ");
    }
  }
};

// export const Counter = (count,setCount) => {
//     setCount(count+1);
//     console.log("Work");
// }

export const Counter = (val, setVal, setCount) => {
  setVal(!val);
  if (val === true) {
    setCount("Front End");
  } else {
    setCount("Back End");
  }
  console.log("Work");
};

export const Plus = (a, b) => {
  let c = a + b;
  console.log(c);
};

export const Dividers = ({ px }) => {
  return (
    <label
      className=""
      style={{
        borderBottom: "8px solid green",
        width: px,
        borderRadius: "0 0 10px 10px",
      }}
    ></label>
  );
};

const style = {
  buttonStyle: {
    backgroundColor: "green",
    color: "white",
    borderRadius: 5,
    border: "none",
    outline: "none",
    padding: 10,
  },
};

export const RedButton = () => {
  const [btnClick, setBtnClick] = useState(true);

  const dispatch = useDispatch();

  const fatchApiData = () => {
    setBtnClick(false);
    dispatch(FatchUserData());
  };
  useEffect(() => {
    fatchApiData();
    return () => {
      fatchApiData();
    };
  }, [btnClick]);

  return (
    <button
      type="button"
      className=""
      style={style.buttonStyle}
      onClick={fatchApiData}
    >
      Red Button
    </button>
  );
};

export const UserDatelis = ({ user }) => {
  console.log(user);
  return (
    <>
      {user.map((item) => {
        return (
          <div className="" key={item.id}>
            <div className="">{item.name}</div>
          </div>
        );
      })}
    </>
  );
};

