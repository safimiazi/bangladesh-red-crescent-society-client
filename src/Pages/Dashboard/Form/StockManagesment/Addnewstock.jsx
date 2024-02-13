import React from "react";
import { LuSaveAll } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import Select, { components } from "react-select";
const Addnewstock = () => {

    // const [isImageSelected, setIsImageSelected] = useState(false);
    const {
      register,
      handleSubmit,
      control,
      setValue,
      formState: { errors },
    } = useForm();
  
    // form data
    const onSubmit = (data) => console.log(data)


    const DropdownIndicator = (props) => {
      return (
        <components.DropdownIndicator {...props}>
          <svg
            className="dropSVG"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 8L0.937823 0.5L13.0622 0.499999L7 8Z" fill="#D9D9D9" />
          </svg>
        </components.DropdownIndicator>
      );
    };
    // React select customization styles
    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        // height: '40px',
        // width: '369px',
        // border: '1px solid #E6E6E6',
        border: "none",
        boxShadow: state.isFocused ? null : null, // Remove the box shadow on focus
        outline: state.isFocused ? "1px solid #2AA778" : null, // Change the color here
        "&:hover": {
          outline: "1px solid #2AA778", // Change the color on hover
        },
        "&:hover .dropSVG path": {
          fill: "#2AA778",
        },
      }),
      menu: (provided) => ({
        ...provided,
        padding: "5px",
      }),
  
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#2AA778" : "inherit", //  background color for selected option
        color: state.isSelected ? "white" : "#777777E5", // text color for selected option
        fontSize: "13px",
        fontWeight: state.isSelected ? "700" : "600",
        borderRadius: "5px",
        marginTop: "2px",
        "&:hover": {
          backgroundColor: state.isSelected ? "#2AA778" : "#2AA778",
          color: "white", // background color on hover
        },
      }),
  
      placeholder: (provided) => ({
        ...provided,
        fontSize: "13px",
        color: "rgba(119, 119, 119, 0.63)",
      }),
  
      singleValue: (provided) => ({
        ...provided,
        color: "#777777A1", // Change the color of the single value
        fontSize: "14px", // Change the font size of the single value
      }),
    };
  
    // React Select filed provided options there
    const prefixOption = [
      { value: "Prefix Demo 1", label: "Prefix Demo 1" },
      { value: "Prefix Demo 2", label: "Prefix Demo 2" },
      { value: "Prefix Demo 3", label: "Prefix Demo 3" },
    ];
  
  return (
    <div>
      <div className="flex justify-between items-center mb-20 lg:flex-row ">
        <div className="flex justify-center items-center gap-2">
          <h1 className=" text-[18px] underline font-medium text-[#2AA778]">
            Add New Stock
          </h1>

          <Link to={"/dashboard/stockinitem"}>
            <div className="flex text-[#3C8DBC] justify-center items-center gap-1">
              <FaArrowLeft className="text-sm" />
              <h1 className="text-sm ">back to list</h1>
            </div>
          </Link>
        </div>

        {/* button */}
        <div className="flex items-center gap-1">
          <button className="bg-[#3C8DBC] lg:px-0 px-3 text-[15px] font-samibold text-white lg:w-[120px] h-[36px] text-center  rounded-[3px]">
            <div className="flex gap-1 items-center justify-center">
              <LuSaveAll /> <h1>Save</h1>
            </div>
          </button>

          <button className="bg-[#DD4B39] lg:px-0 px-3 text-[15px] font-samibold text-white lg:w-[120px] h-[36px] text-center  rounded-[3px]">
            <div className="flex gap-1 items-center justify-center">
              <MdCancel /> <h1>Cancel</h1>
            </div>
          </button>
        </div>
      </div>

      {/* form */}

        <div className="flex bg-[#FFFFFF] p-5  justify-center items-center gap-3 flex-cols-4">
             <div className=" w-[500px]">

             <div className="flex items-center gap-3">
                <p className="text-[18px] font-bold text-[#777777] mb-1 ml-[2px]">
                  Item*
                </p>
                <Controller
                  name="Prefix"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    // eslint-disable-next-line react/jsx-no-undef
                    <Select
                      className="custom-select w-[400px]  h-[40px] border border-[#E6E6E6] rounded-[3px]"
                      components={{ DropdownIndicator }}
                      options={prefixOption}
                      placeholder="Select Prefix"
                      {...register("prefix")}
                      styles={customStyles}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                      }}
                    />
                  )}
                />
             </div>
              </div>
            <div>

           

            </div>

        </div>
    </div>
  );
};

export default Addnewstock;
