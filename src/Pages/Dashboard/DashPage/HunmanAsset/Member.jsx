
import { Controller, useForm } from "react-hook-form";
import "../../../../CustomCSS/HumanAssets.css";
import Select, { components } from "react-select";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {
    getBloodGroup,
    getMemberType,
    getPrefix,
    getReligion,
    getUnit,
    getUpazila,
} from "../../../../Api/HumanAsset/Selector/HumanAssetSelector";
import axoissecure from "../../../../Hooks/Axoissecure";


// use state
const Member = () => {
    const [memberTypeData, setMemberTypeData] = useState();
    const [PrefixData, setPrefixData] = useState();
    const [Religion, setReligion] = useState();
    const [upazila, setUpazila] = useState();
    const [Unit, setUnit] = useState();
    const [Blood, setBlood] = useState();
    const [gender, setGender] = useState(null);
    // const [isImageSelected, setIsImageSelected] = useState(false);


    const schema = yup.object().shape({
        Prefix: yup.string(),
        Name: yup.string().required('Name Address is required'),
        Is_Alive: yup.boolean(),
        MemberType: yup.string().required('MemberType Address is required'),
        Unit: yup.string(),
        Upazila: yup.string(),
        memberIdCard: yup.string().required('Member ID Card is required'),
        enrollmentDate: yup.date().nullable(),
        contactNumber: yup.string(),
        birthDate: yup.date().nullable(),
        email: yup.string().email('Invalid email address'),
        BloodGroup: yup.string(),
        Religion: yup.string(),
        FatherName: yup.string(),
        MotherName: yup.string(),
        SpouseName: yup.string(),
        PresentAddress: yup.string(),


        PermanentAddress: yup.string().required('Permanent Address is required'),
        Occupation: yup.string(),
        NID: yup.string(),
        birth_certificate_number: yup.string(),
        passport_num: yup.string(),
        education: yup.string(),
        member_form_serial: yup.string(),
        member_receipt_no: yup.string(),
        Activities: yup.string(),
        emergency_contact: yup.string(),
    });

    const methods = useForm({
        resolver: yupResolver(schema),

    });

    const { register, setError, handleSubmit, setValue, control, formState: { errors } } = methods;

    const onSubmit = async (data) => {

        console.log(data.image);

        // const formData = new FormData();
        // formData.append('image', data?.image);

        // console.log('form data',formData);

        try {
            //submit data to backend
            const Memberinfo = {
                name: data.Name,
                memberIdCard: data.memberIdCard,
                enrollmentDate: data.enrollmentDate || null,
                birthDate: data.birthDate || null,
                email: data.email,
                motherName: data.MotherName || null,
                spouseName: data.SpouseName || null,
                permanentAddress: data.PermanentAddress,
                Occupation: data.Occupation || null,
                birthCertificateNo: data.birth_certificate_number || null,
                passportNo: data.passport_num || null,
                memberFormSerial: data.member_form_serial || null,
                moneyReceiptNo: data.member_receipt_no || null,
                emergencyContactNo: data.emergency_contact || null,
                contactNo: data.contactNumber || null,
                fatherName: data.FatherName || null,
                presentAddress: data.PresentAddress || null,
                nationalId: data.NID || null,
                education: data.education || null,
                projectActivities: data.Activities || null,
                isAlive: data?.Is_Alive || null,
                isMale: gender === "male" ? true : false,
                isFemale: gender === "female" ? true : false,
                upazilaTable: {
                    id: parseInt(data.Upazila) || null,
                },
                memberType: {
                    id: parseInt(data.MemberType),
                },
                prefix: {
                    id: parseInt(data.Prefix) || null,
                },
                unit: {
                    id: parseInt(data.Unit) || null,
                },
                religion: {
                    id: parseInt(data.Religion) || null,
                },
                bloodGroupTable: {
                    id: parseInt(data.BloodGroup) || null,
                },
                memberRoleTable: [
                    data.managingBoardMember && {
                        id: 1
                    },
                    data.unitExecutiveCommitteMemberr && {
                        id: 2
                    },
                    data.chairman && {
                        id: 3
                    }
                ].filter(Boolean),
                image: data.image,
            }

            console.log(Memberinfo);

            const response = await axoissecure.post(`/members`, Memberinfo, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            if (response.status === 201) {
                console.log('Data successfully submitted to the server');
            } else {
                console.error('Failed to submit data to the server');
            }
        }
        catch (error) {
            console.log(error.message);
            setError("afterSubmit", {
                ...error,
                message: error.message,
            })
        }
    }




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

    // get membertype
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMemberType();
                setMemberTypeData(data.memberTypes);
            } catch (error) {
                console.error("Error fetching member types:", error);
            }
        };

        fetchData();
    }, []);

    const MemberTypeOption =
        (memberTypeData &&
            memberTypeData.map((singleData) => ({
                value: singleData.id,
                label: singleData.name,
            }))) ||
        [];

    // getReligion
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getReligion();
                setReligion(data.religionType);
                console.log("data", data);
            } catch (error) {
                console.error("Error fetching member types:", error);
            }
        };

        fetchData();
    }, []);

    const ReligionOption =
        (Religion &&
            Religion.map((singleData) => ({
                value: singleData.id,
                label: singleData.name,
            }))) ||
        [];

    // get Unit
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUnit();
                setUnit(data.uitType);
                console.log(data);
            } catch (error) {
                console.error("Error fetching Prefix:", error);
            }
        };

        fetchData();
    }, []);

    const unitOption =
        (Unit &&
            Unit.map((singleData) => ({
                value: singleData.id,
                label: singleData.name,
            }))) ||
        [];

    //   prefix
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPrefix();
                setPrefixData(data.prefixType);
                console.log(data);
            } catch (error) {
                console.error("Error fetching Unit:", error);
            }
        };

        fetchData();
    }, []);

    const prefixOption =
        (PrefixData &&
            PrefixData.map((singleData) => ({
                value: singleData.id,
                label: singleData.name,
            }))) ||
        [];

    //upazilaOption

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUpazila();
                setUpazila(data.upazila);
            } catch (error) {
                console.error("Error fetching upazila:", error);
            }
        };

        fetchData();
    }, []);

    const upazilaOption =
        (upazila &&
            upazila.map((singleData) => ({
                value: singleData.id,
                label: singleData.name,
            }))) ||
        [];


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBloodGroup();
                setBlood(data.bloodGroup);
                console.log(data);
            } catch (error) {
                console.error("Error fetching bloodGroup:", error);
            }
        };

        fetchData();
    }, []);

    const bgOption =
        (Blood &&
            Blood?.map((singleData) => ({
                value: singleData.id,
                label: singleData.name,
            }))) ||
        [];


    const imgInp = useRef(null);

    // For getting the value of the file input
    useEffect(() => {
        if (imgInp.current) {
            imgInp.current.onchange = () => {
                const [file] = imgInp.current.files;
                if (file) {
                    inputImgPreview.src = URL.createObjectURL(file);
                    setValue("image", file);
                }
            };
        }
    }, [setValue]);

    const handleGenderChange = (gender) => {
        setGender(gender)
    }

    return (
        <>
            <div>
                <Helmet>
                    <title>BDRCS | Member </title>
                </Helmet>
                <div>
                    <p className="text-[20px] text-[#5C5C5C] ml-[26px] py-3">
                        Add New Member
                    </p>
                </div>
                <div>
                    <form encType="multipart/form-data"
                        className="bg-white max-w-screen-2xl xl:mx-auto p-4 pb-24 mb-8 rounded-[5px] ml-5 mr-5 "
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* First row of desktop view */}
                        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 ">
                            {/* Prefix select */}
                            <div className="md:col-span-3">
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    Prefix
                                </p>
                                <Controller
                                    name="Prefix"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className="custom-select w-full  h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                            components={{ DropdownIndicator }}
                                            options={prefixOption}
                                            placeholder="Select Prefix"
                                            {...register("Prefix")}
                                            styles={customStyles}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            {/* Name field */}
                            <div className="md:col-span-3">
                                <div className="relative w-full 2xl:w-[460px]  lg:w-[340px]">
                                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                        1. Name
                                    </p>
                                    <span className="text-[20px] text-[#FF000A] absolute -top-1 left-[58px]">
                                        *
                                    </span>
                                </div>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    placeholder="Name"
                                    {...register("Name")}
                                />
                                <p className="text-red-500 text-sm">{errors.Name?.message}</p>
                            </div>
                            {/* Is Alive checkbox */}
                            <div className="flex lg:pt-6 items-center md:col-span-2 justify-start h-[41px] ">
                                <label className="b-contain">
                                    <input
                                        className=""
                                        type="checkbox"
                                        placeholder="Is Alive"
                                        {...register("Is_Alive", {})}
                                    />
                                    <div className="b-input min-w-[20.93px] min-h-[20.96px]"></div>
                                </label>
                                <span className="text-[#777777] text-[14px] ml-8 mt-2">
                                    Is Alive
                                </span>
                            </div>
                            {/* Member type select area */}

                            <div className="md:col-span-4">
                                <div className="relative w-full lg:w-[340px]">
                                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                        2. Member Type
                                    </p>
                                    <span className="text-[20px] text-[#FF000A] absolute -top-1 left-[110px]">
                                        *
                                    </span>
                                </div>
                                <Controller
                                    name="MemberType"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className="custom-select w-full  h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                            components={{ DropdownIndicator }}
                                            options={MemberTypeOption}
                                            {...register("MemberType")}
                                            placeholder="Select Member Type"
                                            styles={customStyles}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                            }}
                                        />

                                    )}
                                />
                                <p className="text-red-500 text-sm">{errors.Member_Type?.message}</p>
                            </div>
                        </div>

                        {/* mohibulla */}
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-6">
                            <div className="">
                                <div className="relative w-fit">
                                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                        3. Unit
                                    </p>
                                    <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                                        *
                                    </span>
                                </div>
                                <Controller
                                    name="Unit"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className="custom-select w-full border border-[#E6E6E6] rounded-[3px]"
                                            components={{ DropdownIndicator }}
                                            options={unitOption}
                                            placeholder="Select Unit"
                                            {...register("Unit")}
                                            styles={customStyles}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                            }}
                                        />
                                    )}
                                />
                                <p className="text-red-500 text-sm">{errors.Unit?.message}</p>
                            </div>
                            <div className="md:flex md:flex-row flex-col items-center gap-[2px] lg:pt-5 ">
                                <h3 className="text-[#444444] text-[16px]">
                                    Affiliated Upazila
                                </h3>
                                <Controller
                                    name="Upazila"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className="custom-select lg:w-[230px] border border-[#E6E6E6] rounded-[3px]"
                                            components={{ DropdownIndicator }}
                                            options={upazilaOption}
                                            {...register("Upazila")}
                                            placeholder="Select Upazila"
                                            styles={customStyles}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div className="md:row-span-2">
                                <div className="w-full p-2">
                                    <div className="relative w-fit ">
                                        <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                            4. Photo
                                        </p>

                                    </div>
                                    <div className="w-full border border-[#E6E6E6] rounded-[3px] flex flex-col xl:flex-row items-center justify-center p-5 xl:p-2">
                                        <div>
                                            <input
                                                accept="image/*"
                                                type="file"
                                                {...register("image")} // Pass only the name of the input field
                                                ref={(e) => {
                                                    imgInp.current = e; // Assign the input element to imgInp ref
                                                }}
                                                className="file-input w-full max-w-xs pl-0 mb-4"
                                            />
                                            <p className="text-red-500 text-sm">{errors.image?.message}</p>
                                            {/* <input accept="image/*" type='file' ref={imgInp} className="file-input w-full max-w-xs pl-0 mb-4" /> */}
                                            <p className="text-[#BFBFBF] text-[13px]">
                                                *Maximum allowed image size is 2 MB
                                            </p>
                                        </div>
                                        <div className="w-20 h-20 rounded-full bg-[#EFEFEF] mt-3 xl:mt-0">
                                            {/* Preview image */}
                                            <img
                                                className="min-w-full min-h-full rounded-full"
                                                id="inputImgPreview"
                                                src="#"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex flex-col md:flex-row items-center col-span-2 gap-20">
                                <div className="flex items-center">
                                    <label className="b-contain">
                                        <input
                                            className=""
                                            type="checkbox"
                                            placeholder="managingBoardMember"
                                            {...register("managingBoardMember", {})}
                                        />
                                        <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                    </label>
                                    <span className="text-[#777777] text-[16px] ml-9 mt-2">
                                        Managing Board Member
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <label className="b-contain">
                                        <input
                                            className=""
                                            type="checkbox"
                                            placeholder="unitExecutiveCommitteMemberr"
                                            {...register("unitExecutiveCommitteMemberr", {})}
                                        />
                                        <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                    </label>
                                    <span className="text-[#777777] text-[16px] ml-9 mt-2">
                                        Unit Executive Committee Member
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <label className="b-contain">
                                        <input
                                            className=""
                                            type="checkbox"
                                            placeholder="chairman"
                                            {...register("chairman", {})}
                                        />
                                        <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                    </label>
                                    <span className="text-[#777777] text-[16px] ml-9 mt-2">
                                        Chairman
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* mohibulla */}

                        {/* grid section starts here */}
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6 gap-x-5 mt-5">
                            {/* 5. Member ID Card */}
                            <div>
                                <div className="relative w-fit">
                                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                        5. Member Id Card
                                    </p>
                                    <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                                        *
                                    </span>
                                </div>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("memberIdCard")}
                                />
                                <p className="text-red-500 text-sm">{errors.memberIdCard?.message}</p>
                            </div>
                            {/* 6. Enrollment date */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    6. Enrollment Date
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="date"
                                    {...register("enrollmentDate")}
                                />
                                <p className="text-red-500 text-sm">{errors.enrollmentDate?.message}</p>
                            </div>
                            {/* 7. Contact Number */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    7. Contact No
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("contactNumber")}
                                />
                                <p className="text-red-500">{errors.contactNumber?.message}</p>
                            </div>
                            {/*8. Birth date */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    8. Birth Date
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="date"
                                    {...register("birthDate")}
                                />
                            </div>
                            {/*9. Email Address */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    9. Email
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="email"
                                    {...register("email")}
                                />
                                <p className="text-red-500 text-sm">{errors.email?.message}</p>
                            </div>
                            {/*10. Gender checkbox*/}
                            <div>
                                <div className="">


                                    <div className="">
                                        <div className="relative w-fit">
                                            <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                                7. Gender
                                            </p>
                                            <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                                                *
                                            </span>
                                        </div>
                                        <div className="flex gap-16 justify-start">
                                            <div className="flex items-center h-[41px]">
                                                <div className="form-control">
                                                    <label className="label cursor-pointer">
                                                        <input
                                                            {...register("female")}
                                                            type="radio"
                                                            name="radio-10"
                                                            value={"female"}
                                                            className="radio checked:bg-[#2AA778]  checked:min-w-[26.93px] rounded-lg bg-slate-200 min-h-[24.96px]"
                                                            checked={gender === "female"}
                                                            onChange={() => handleGenderChange('female')}
                                                        />

                                                        <span className="text-[#777777] text-[16px] ml-2">
                                                            Female
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="flex items-center h-[41px]">
                                                <div className="form-control">
                                                    <label className="label cursor-pointer">
                                                        <input
                                                            {...register("male")}
                                                            type="radio"
                                                            name="radio-10"
                                                            value={"male"}
                                                            className="radio checked:bg-[#2AA778]  checked:min-w-[26.93px] rounded-lg bg-slate-200 min-h-[24.96px]"
                                                            checked={gender === "male"}
                                                            onChange={() => handleGenderChange('male')}
                                                        />

                                                        <span className="text-[#777777] text-[16px] ml-2">
                                                            Male
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            {/* 11. Blood Group */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    11. BloodGroup
                                </p>
                                <Controller
                                    name="BloodGroup"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className="custom-select  w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                            components={{ DropdownIndicator }}


                                            {...register("BloodGroup")}

                                            options={bgOption}

                                            placeholder="Select Blood Group"
                                            styles={customStyles}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            {/* 12. Religion */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    12. Religion
                                </p>
                                <Controller
                                    name="Religion"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className="custom-select  w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                            components={{ DropdownIndicator }}
                                            options={ReligionOption}
                                            {...register("Religion")}
                                            placeholder="Select Religion"
                                            styles={customStyles}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            {/* 13. Father's Name */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    13. Father's Name
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("FatherName")}
                                />
                            </div>
                            {/* 14. Mother's Name */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    14. Mother's Name
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("MotherName")}
                                />
                            </div>
                            {/* 15. Spouse's Name */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    15. Spouse's Name
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("SpouseName")}
                                />
                            </div>
                            {/* 16. Present Address */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    16. Present Address
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("PresentAddress")}
                                />
                            </div>
                            {/* 17. Permanent Address Required */}
                            <div>
                                <div className="relative w-fit">
                                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                        17. Permanent Addressd
                                    </p>
                                    <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                                        *
                                    </span>
                                </div>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("PermanentAddress")}
                                />
                                <p className="text-red-500 text-sm">{errors.PresentAddress?.message}</p>
                            </div>
                            {/* 18. Occupation */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    18. Occupation
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("Occupation")}
                                />
                            </div>
                            {/* 19. National ID */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    19. National ID
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("NID")}
                                />
                                <p className="text-red-500 text-sm">{errors.NID?.message}</p>
                            </div>
                            {/* 20. Birth Certificate No */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    20. Birth Certificate No
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("birth_certificate_number")}
                                />
                                <p className="text-red-500 text-sm">{errors.birth_certificate_number?.message}</p>
                            </div>
                            {/* 21. Passport No */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    21. Passport No
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("passport_num")}
                                />
                                <p className="text-red-500 text-sm">{errors.passport_num?.message}</p>
                            </div>
                            {/* 22. Education */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    22. Education
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("education")}
                                />
                            </div>
                            {/* 23. Member Form Serial */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    23. Member Form Serial
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("member_form_serial")}
                                />
                                <p className="text-red-500 text-sm">{errors.member_form_serial?.message}</p>
                            </div>
                            {/* 24. Money Receipt No. */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    24. Money Receipt No.
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("member_receipt_no")}
                                />
                                <p className="text-red-500 text-sm">{errors.member_receipt_no?.message}</p>
                            </div>
                            {/* 25. Project Activities in Last 10 years */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    25. Project Activities in Last 10 years
                                </p>
                                <input
                                    className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("Activities")}
                                />
                            </div>
                        </div>
                        {/* last row with flex */}
                        <div className="flex flex-col xl:flex-row justify-between mt-6">
                            {/* 26. Emergency Contact No */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                                    26. Emergency Contact No
                                </p>
                                <input
                                    className="w-full xl:w-[476px] h-[40px] border border-[#E6E6E6] rounded-[3px]"
                                    type="text"
                                    {...register("emergency_contact")}
                                />
                                <p className="text-red-500 text-sm">{errors.emergency_contact?.message}</p>
                            </div>
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

export default Member;
