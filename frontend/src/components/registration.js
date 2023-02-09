import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Registration() {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="s">
          <Box sx={{ bgcolor: "#fffff0", height: "80vh" }}>
            <br />
            <center>
              <div className="bg-neon-800 flex flex-col justify-center w-200">
                <form className="max-w-[600px] w-full mx-auto bg-white-900 p-8 px-8 rounded-lg">
                  <h2 className="text-4xl font-bold text-center text-red-400">
                    <i>Registration Form</i>
                  </h2>
                  <div className="  border-blue-500">
                    <label>Name:</label>

                    <input
                      type="text"
                      className="rounded-lg bg-orange-200 mt-2 p-2 focus:border-blue-500  focus:outline-none"
                    ></input>
                  </div>
                  <div className="border-blue-500">
                    <label>Student ID:</label>
                    <input
                      type="text"
                      className="rounded-lg bg-orange-200 mt-2 p-2 focus:border-red-500  focus:outline-none"
                    ></input>
                  </div>
                  <div className="border-blue-500">
                    <label>Branch:</label>
                    <input
                      type="text"
                      className="rounded-lg bg-orange-200 mt-2 p-2 focus:border-blue-500  focus:outline-none"
                    ></input>
                  </div>
                  <div className="border-blue-500">
                    <label>Email:</label>
                    <input
                      type="text"
                      className="rounded-lg bg-orange-200 mt-2 p-2 focus:border-blue-500  focus:outline-none"
                    ></input>
                  </div>
                  <div className="border-blue-500">
                    <label>Phone No:</label>
                    <input
                      type="text"
                      className="rounded-lg bg-orange-200 mt-2 p-2 focus:border-blue-500  focus:outline-none"
                    ></input>
                  </div>
                  <div className="border-blue-500">
                    <label>Division:</label>
                    <input
                      type="text"
                      className="rounded-lg bg-orange-200 mt-2 p-2 focus:border-blue-500  focus:outline-none"
                    ></input>
                  </div>
                  <br />
                  <center>
                    <button className="w-50 py-2 bg-teal-500 shadow-lg shadow-teal-600/50 hover:shadow-teal-500/40 text-white">
                      Register
                    </button>
                  </center>
                </form>
              </div>
            </center>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default Registration;
