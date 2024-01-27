import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useState } from "react";

const JoinSearch = () => {
  return (
    <div
      className={
        "py-3 flex flex-row justify-between text-sm px-10 border rounded-md shadow-lg my-5"
      }
    >
      <div>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            <p className="text-base uppercase font-ubuntu text-slate-600">
              what
            </p>
          </InputLabel>
          <NativeSelect
            className={"px-2 text-sm"}
            defaultValue={30}
            inputProps={{
              name: "what",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>All</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            <p className="text-base uppercase font-ubuntu text-slate-600">
              Type
            </p>
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "type",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>All</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            <p className="text-base uppercase font-ubuntu text-slate-600">
              Location
            </p>
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "location",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>All</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div
        onMouseEnter={() => {
          setButtonHover(true);
        }}
        onMouseLeave={() => {
          setButtonHover(false);
        }}
        className={
          "bg-blue-700 cursor-pointer font-semibold mr-2 relative flex flex-row gap-2 py-auto hover:opacity-90 px-5 py-3 h-fit text-[17px] rounded-md text-white"
        }
      >
        Find Job
      </div>
    </div>
  );
};

export default JoinSearch;
