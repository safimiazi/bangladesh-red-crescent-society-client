import { Controller, useForm } from "react-hook-form";
import "../../../../CustomCSS/HumanAssets.css";
import Select, { components } from "react-select";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { MdArrowCircleLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
const Addnewstock = () => {



  // Form data valedetio
const schema = yup.object({
  Item: yup.string().required(),
  Warehouse: yup.string().required(),
  Available: yup.number(),
  Quantitystock: yup.number(),
  Date : yup.date(),
  })



  // const [isImageSelected, setIsImageSelected] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema)});

  // form data
  const onSubmit = (data) => {
    const StockData = {
      item: data.Item,
      warehouse: data.Warehouse,
      available: data.Available,
      quantitystock: data.Quantitystock,
      date: data.Date,
      
    };
    console.log(StockData);
  };
  console.log(errors);

  // Select field arrow svg replacement style
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


  const Item = [
    { value: "School Bag", label: "School Bag" },
    { value: "Blanket", label: "Blanket" },
    { value: "Turkish Tent", label: "Turkish Tent" },
    { value: "Large Sacks", label: "Large Sacks" },
   
  ];

  const Warehouse = [
    { value: "Rangpur BDRCS", label: "Rangpur BDRCS" },
    { value: "Kurigram BDRCS", label: "Kurigram BDRCS" },

  ];


  
  return (
    <>
      <div>
        <Helmet>
          <title>BDRCS | Add New Stock </title>
        </Helmet>
        <div className="flex justify-between">
          <p className="text-[20px] text-[#5C5C5C] ml-[8px] pb-4">
            Add New Stock
          </p>

{/* bcak button */}
         
         
        <Link to={'/dashboard/stockinitem'}>
        <button className="bg-[#3C8DBC] w-[130px] px-0 text-[15px] font-samibold text-white h-[36px] rounded-[3px]">
               
               <div className="flex justify-center items-center gap-1">
                 <MdArrowCircleLeft/>
                <h1> Back To List</h1>
               </div>
              </button>
      
        
        </Link>

        </div>
        <div>
          <form
            className="bg-white max-w-[500px]  p-6  my-8 rounded-[5px] ml-5 mr-5 "
            onSubmit={handleSubmit(onSubmit)}
          >
         

            {/* grid section starts here */}
            <div className="grid grid-cols-1  gap-y-6 gap-x-5 mt-5">

           
              {/* 11. Item G */}
              <div>
              <div className="relative w-fit">
                  <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                    1. Item
                  </p>
                  <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                    *
                  </span>
                </div>
                <Controller
                  name="Item"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      className="custom-select  w-full h-[40px] border border-[#E6E6E6]  rounded-[3px]"
                      components={{ DropdownIndicator }}
                      options={Item}
                      {...register("Item")}
                      placeholder="Select Item"
                      styles={customStyles}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                      }}
                    />
                  )}
                />
                 <p className="text-red-500 text-sm">{errors.Item?.message}</p>
              </div>
              {/* 2. Warehouse */}
              <div>
              <div className="relative w-fit">
                  <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                    2. WareHouse
                  </p>
                  <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                    *
                  </span>
                </div>
                <Controller
                  name="Warehouse"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      className="custom-select  w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                      components={{ DropdownIndicator }}
                      {...register("Warehouse")}
                      options={Warehouse}
                      placeholder="Select Warehouse"
                      styles={customStyles}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                      }}
                    />
                  )}
                />
                 <p className="text-red-500 text-sm">{errors.Warehouse?.message}</p>
              </div>
              {/* 3.Available*/}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  3. Available
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("Available")}
                  placeholder="0"
                />
                  <p className="text-red-500 text-sm">{errors.Available?.message}</p>
              </div>
              {/* 14. Quantity to stock*/}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  4. Quantity to stock
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("Quantitystock")}
                  placeholder="0"
                />
                      <p className="text-red-500 text-sm">{errors.Quantitystock?.message}</p>
              </div>
              {/* 5.Date */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  5.  Date
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="date"
                  {...register("Date")}
                />
              </div>

            
  

            
            </div>
         
          
              <div className="flex mt-5 justify-end">
              <div className="flex gap-6 mt-8 xl:mt-3">
                <button className="bg-[#2AA778] w-[132px] h-[36px] rounded-[3px]">
                  <input
                    className="px-0 text-[15px] font-bold text-white"
                    value="Save"
                    type="submit"
                  />
                </button>
                <button className="bg-[#878FA7] w-[132px] h-[36px] rounded-[3px]">
                  <input
                    className="px-0 text-[15px] font-bold text-white"
                    value="Cancel"
                    type="reset"
                  />
                </button>
              </div>
              </div>
          
          </form>
        </div>
      </div>
    </>
  );
};

export default Addnewstock;
