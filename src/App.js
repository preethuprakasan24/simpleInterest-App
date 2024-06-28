import TextField from "@mui/material/TextField";
import "./App.css";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const validate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //  console.log(name,value);
    //  console.log(!!value.match(/^[0-9]*$/));
    if (!!value.match(/^[0-9]*$/)) {
      if (name === "principle") {
        setPrinciple(value);
        setIsPrinciple(true);
      } else if (name === "rate") {
        setRate(value);
        setIsRate(true);
      } else {
        setYear(value);
        setIsYear(true);
      }
    } else {
      if (name === "principle") {
        setPrinciple(value);
        setIsPrinciple(false);
      } else if (name === "rate") {
        setRate(value);
        setIsRate(false);
      } else {
        setYear(value);
        setIsYear(false);
      }
    }
  };
  const handleReset = () => {
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setIsPrinciple(true);
    setIsRate(true);
    setIsYear(true);
    setInterest(0)
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (principle == "" || rate == "" || year == "") {
      alert("please fill the form completely");
    } else {
      setInterest((principle * rate * year) / 100);
    }
  };
  return (
    <>
      <div className="main">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 bg-light mt-5 mb-5 p-5 rounded shadow">
            <h1 className="pt-3 text-center">Simple Interest App</h1>
            <p className="text-center">Calculate your simple interest Easily</p>
            <div className="shadow display-flex justify-content-center align-items-center bg-warning pb-3 rounded">
              <h1 className="text-center pt-4 fw-1">₹ {interest}</h1>
              <p className="text-center">Total simple interest</p>
            </div>
            <div className="content d-flex justify-content-center align-items-center">
              <form action="" className="mt-4" onSubmit={handleCalculate}>
                <div className="mb-3">
                  <TextField
                    id="outlined-basic"
                    name="principle"
                    value={principle || ""}
                    label="₹ Principle amount"
                    variant="outlined"
                    onChange={(e) => validate(e)}
                  />
                  {!isPrinciple && (
                    <p className="text-danger">*Invalid Input</p>
                  )}
                </div>
                <div className="mb-3">
                  <TextField
                    id="outlined-basic"
                    name="rate"
                    value={rate || ""}
                    label="Rate of Interest (p.a)%"
                    variant="outlined"
                    onChange={(e) => validate(e)}
                  />
                  {!isRate && <p className="text-danger">*Invalid Input</p>}
                </div>
                <div className="mb-3">
                  <TextField
                    id="outlined-basic"
                    name="year"
                    value={year || ""}
                    label="Year (Yr)"
                    variant="outlined"
                    onChange={(e) => validate(e)}
                  />
                  {!isYear && <p className="text-danger">*Invalid Input</p>}
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    style={{ width: "160px", padding: "15px" }}
                  >
                    Calculate
                  </Button>
                  <Button
                    variant="outlined"
                    className="flex-end"
                    style={{ width: "160px", padding: "15px" }}
                    disabled={isPrinciple && isRate && isYear ? false : true}
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
}

export default App;
