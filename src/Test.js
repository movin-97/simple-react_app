import React, { useEffect, useState } from "react";
import {
  // ConsoleLog,
  // AlertFun,
  // Counter,
  Dividers, UserDatelis,
  // RedButton,
} from "./GlobleFile";
// import { roundUpNumers } from "./Utils/utils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FatchUserData } from "./Feature/ExtraReducers";

const Test = () => {
  // const [val, setVal] = useState(true);
  // const [count, setCount] = useState("Back End");
  const [btnClick, setBtnClick] = useState(true);
  const data = useSelector((store) => store.userData.userData);

  const dispatch = useDispatch();

  const fatchApiData = () => {
    setBtnClick(!btnClick);
  };
  useEffect(() => {
    dispatch(FatchUserData());
    return () => {
      fatchApiData();
    };
  }, []);

  // let num = 1467.384975843729752687687358723625;
  return (
    <div className="">
    <div className="row">
      <div className="col-md-3 col-6"></div>
    </div>
      {/* <div className="row">
        <h1>Counter : {count}</h1>
        <h1>{}</h1>
        <button className="btn btn-info" type="button" onClick={ConsoleLog}>
          Console
        </button>
        <button className="btn btn-info mt-2" type="button" onClick={AlertFun}>
          Alert
        </button>
        <button
          className="btn btn-info mt-2"
          type="button"
          onClick={() => Counter(val, setVal, setCount)}
        >
          {!val ? "Change" : "No Change"}
        </button>
        <button
          className="btn btn-info mt-2"
          type="button"
          onClick={(e)=> Math.round(num)}
        >
          {num}
        </button>
      </div> */}
      <div className="">
        <h1 style={{ textAlign: "center" }}>Hello</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Dividers px={"300px"} />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <button type="button" onClick={fatchApiData}>
            Show UserData
          </button>
        </div>
        <div>
          {btnClick &&  <UserDatelis user={data}/>}
        </div>
       
      </div>
    </div>
  );
};

export default Test;
