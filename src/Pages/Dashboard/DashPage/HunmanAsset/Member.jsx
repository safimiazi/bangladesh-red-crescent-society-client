
import { Controller, useForm } from 'react-hook-form';
import '../../../../CustomCSS/HumanAssets.css'
import Select, { components } from 'react-select'
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';


const Member = () => {
    // const [isImageSelected, setIsImageSelected] = useState(false);
    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm();
    const onSubmit = data => {

        
        const Memberinfo = {


            prefix: data.prefix,
            name : data.name,
            is_alive : data.is_alive,
            membertype : data.membertype,
            unit: data.unit,
            upazila: data.affiliated-upazila,
            photo : data.photo,
            managingboardmember : data.managingBoardMember,
            unitexecutivecommitteemember :  data.unitExecutiveCommitteMemberr,
            chairman : data.chairman,
            memberidcard : data.memberIdCard,
            enrollmentdate : data.enrollmentDate,
            contactno : data.contactNumber,
            birthdate : data.birthDate,
            email :  data.email,
            male :  data.male,
            female : data.female,
            bloodgroup :  data.bloodGroup,
            religion :  data.religion,
            fathername : data.fatherName,
            mothername : data.motherName,
            spousesname : data.spousesName,
            presentaddress :  data.presentAddress,
            permanentaddressd : data.permanentAddressd,
            occupation :  data.Occupation,
            nationalid : data.NID,
            birthvertificateno : data.birth_certificate_number,
            passport : data.passport_num  ,
            education : data.education,
            memberformserial : data.member_form_serial,
            moneyreceiptno : data.money_receiptno,
            projectactivities : data.projecta_ctivities,
            emergencycontactno : data.emergency_contactno






            
    
         }
         console.log(Memberinfo)
    };
    console.log(errors);

    // Select field arrow svg replacement style
    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <svg className='dropSVG' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            border: 'none',
            boxShadow: state.isFocused ? null : null, // Remove the box shadow on focus
            outline: state.isFocused ? '1px solid #2AA778' : null, // Change the color here
            '&:hover': {
                outline: '1px solid #2AA778', // Change the color on hover
            },
            '&:hover .dropSVG path': {
                fill: '#2AA778'
            },
        }),
        menu: (provided) => ({
            ...provided,
            padding: "5px",
        }),

        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#2AA778' : 'inherit', //  background color for selected option
            color: state.isSelected ? 'white' : '#777777E5', // text color for selected option
            fontSize: '13px',
            fontWeight: state.isSelected ? '700' : '600',
            borderRadius: '5px',
            marginTop: '2px',
            '&:hover': {
                backgroundColor: state.isSelected ? '#2AA778' : '#2AA778',
                color: 'white' // background color on hover
            },
        }),

        placeholder: (provided) => ({
            ...provided,
            fontSize: '13px',
            color: 'rgba(119, 119, 119, 0.63)'
        }),

        singleValue: (provided) => ({
            ...provided,
            color: '#777777A1', // Change the color of the single value
            fontSize: '14px', // Change the font size of the single value
        }),
    };

    // React Select filed provided options there
    const prefixOption = [
        { value: 'Prefix Demo 1', label: 'Prefix Demo 1' },
        { value: 'Prefix Demo 2', label: 'Prefix Demo 2' },
        { value: 'Prefix Demo 3', label: 'Prefix Demo 3' }
    ]

    const MemberTypeOption = [
        { value: 'Life Member', label: 'Life Member' },
        { value: 'Annual Member', label: 'Annual Member' },
        { value: 'Honorary Member', label: 'Honorary Member' },
        { value: 'Institutional Member', label: 'Institutional Member' },
        { value: 'Patron Member', label: 'Patron Member' }
    ]

    const unitOption = [
        { value: 'National Headquarters', label: 'National Headquarters' },
        { value: 'Narayanganj RC Unit', label: 'Narayanganj RC Unit' },
        { value: 'Narsingdi RC Unit', label: 'Narsingdi RC Unit' },
        { value: 'Madaripur RC Unit', label: 'Madaripur RC Unit' },
    ]

    const upazilaOption = [
        { value: 'O+', label: 'Upazila Demo 1' },
        { value: 'Upazila Demo 2', label: 'Upazila Demo 2' },
    ]

    const BloodGroupOption = [
        { value: 'O positive', label: 'O positive' },
        { value: 'O negative', label: 'O negative' },
        { value: 'A positive', label: 'A positive' },
        { value: 'A negative', label: 'A negative' },
        { value: 'B positive', label: 'B positive' },
        { value: 'B negative', label: 'B negative' },
        { value: 'AB positive', label: 'AB positive' },
        { value: 'AB negative', label: 'AB negative' },
    ]

    const ReligionOption = [
        { value: 'Islam', label: 'Islam' },
        { value: 'Hindu', label: 'Hindu' },
        { value: 'Christian', label: 'Christian' },
        { value: 'Buddhism', label: 'Buddhism' },
    ]
    const imgInp = useRef(null);

    // For getting the value of the file input
    useEffect(() => {
        if (imgInp.current) {
            imgInp.current.onchange = evt => {
                const [file] = imgInp.current.files;
                if (file) {
                    inputImgPreview.src = URL.createObjectURL(file);
                    setValue("image", file); // Register and set the value of "image" field in React Hook Form
                }
            };
        }
    }, [setValue]);

    return (
        <>
            <div>
                <Helmet>
                    <title>BDRCS | Member </title>
                </Helmet>
                <div>
                    <p className='text-[20px] text-[#5C5C5C] ml-[26px] py-3'>Add New Member</p>
                </div>
                <div>
                    <form className='bg-white max-w-screen-2xl xl:mx-auto p-4 pb-24 mb-8 rounded-[5px] ml-5 mr-5 ' onSubmit={handleSubmit(onSubmit)}>
                        {/* First row of desktop view */}
                        <div className='flex justify-between lg:items-center flex-col lg:flex-row gap-3'>
                            {/* Prefix select */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>Prefix</p>
                                <Controller
                                    name="Prefix"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className='custom-select w-full lg:w-[340px]  h-[40px] border border-[#E6E6E6] rounded-[3px]'
                                            components={{ DropdownIndicator }}
                                            options={prefixOption}
                                            placeholder="Select Prefix"
                                            styles={customStyles}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            {/* Name field */}
                            <div>
                                <div className='relative w-full lg:w-[340px]'>
                                    <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>1. Name</p>
                                    <span className='text-[20px] text-[#FF000A] absolute -top-1 left-[58px]'>*</span>
                                </div>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" placeholder="Name" {...register("Name", { required: true })} />
                            </div>
                            {/* Is Alive checkbox */}
                            <div className='flex lg:pt-6 items-center justify-start h-[41px] '>
                                <label className="b-contain">
                                    <input className='' type="checkbox" placeholder="Is Alive" {...register("Is_Alive", {})} />
                                    <div className="b-input min-w-[20.93px] min-h-[20.96px]"></div>
                                </label>
                                <span className='text-[#777777] text-[14px] ml-8 mt-2'>Is Alive</span>
                            </div>
                            {/* Member type select area */}
                            <div>
                                <div className='relative w-full lg:w-[340px]'>
                                    <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>2. Member Type</p>
                                    <span className='text-[20px] text-[#FF000A] absolute -top-1 left-[110px]'>*</span>
                                </div>
                                <Controller
                                    name="MemberType"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className='custom-select w-full  h-[40px] border border-[#E6E6E6] rounded-[3px]'
                                            components={{ DropdownIndicator }}
                                            options={MemberTypeOption}
                                            placeholder="Select Member Type"
                                            styles={customStyles}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </div>


                        {/* mohibulla */}
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mt-6'>
                            <div className=''>
                                <div className='relative w-fit'>
                                    <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>3. Unit</p>
                                    <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                                </div>
                                <Controller
                                    name="unit"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className='custom-select w-full border border-[#E6E6E6] rounded-[3px]'
                                            components={{ DropdownIndicator }}
                                            options={unitOption}
                                            placeholder="Select Unit"
                                            styles={customStyles}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div className='flex items-center gap-[2px] lg:pt-5 '>
                                <h3 className='text-[#444444] text-[16px]'>Affiliated Upazila</h3>
                                <Controller
                                    name="affiliated_upazila"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className='custom-select lg:w-[230px] border border-[#E6E6E6] rounded-[3px]'
                                            components={{ DropdownIndicator }}
                                            options={upazilaOption}
                                            placeholder="Select Upazila"
                                            styles={customStyles}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div className='row-span-2'>
                                <div className='w-full p-2'>
                                    <div className='relative w-fit '>
                                        <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>4. Photo</p>
                                        <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                                    </div>
                                    <div className='w-full border border-[#E6E6E6] rounded-[3px] flex flex-col xl:flex-row items-center justify-center p-5 xl:p-2'>
                                        <div>
                                            <input
                                                accept="image/*"
                                                type='file'
                                                {...register("image")} // Pass only the name of the input field
                                                ref={(e) => {
                                                    imgInp.current = e; // Assign the input element to imgInp ref
                                                }}
                                                className="file-input w-full max-w-xs pl-0 mb-4"
                                            />
                                            {/* <input accept="image/*" type='file' ref={imgInp} className="file-input w-full max-w-xs pl-0 mb-4" /> */}
                                            <p className='text-[#BFBFBF] text-[13px]'>*Maximum allowed image size is 2 MB</p>
                                        </div>
                                        <div className='w-20 h-20 rounded-full bg-[#EFEFEF] mt-3 xl:mt-0'>
                                            {/* Preview image */}
                                            <img className='min-w-full min-h-full rounded-full' id="inputImgPreview" src="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center col-span-2 gap-20'>
                                <div className='flex items-center'>
                                    <label className="b-contain">
                                        <input className='' type="checkbox" placeholder="Is Alive" {...register("managingBoardMember", {})} />
                                        <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                    </label>
                                    <span className='text-[#777777] text-[16px] ml-9 mt-2'>Managing Board Member</span>
                                </div>
                                <div className='flex items-center'>
                                    <label className="b-contain">
                                        <input className='' type="checkbox" placeholder="Is Alive" {...register("unitExecutiveCommitteMemberr", {})} />
                                        <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                    </label>
                                    <span className='text-[#777777] text-[16px] ml-9 mt-2'>Unit Executive Committee Member</span>
                                </div>
                                <div className='flex items-center'>
                                        <label className="b-contain">
                                            <input className='' type="checkbox" placeholder="Is Alive" {...register("chairman", {})} />
                                            <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                        </label>
                                        <span className='text-[#777777] text-[16px] ml-9 mt-2'>Chairman</span>
                                    </div>
                            </div>
                        </div>

                        {/* mohibulla */}






















                        {/* grid section starts here */}
                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-y-6 gap-x-5 mt-5'>
                            {/* 5. Member ID Card */}
                            <div>
                                <div className='relative w-fit'>
                                    <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>5. Member Id Card</p>
                                    <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                                </div>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("memberIdCard", { required: true })} />
                            </div>
                            {/* 6. Enrollment date */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>6. Enrollment Date</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="date" {...register("enrollmentDate")} />
                            </div>
                            {/* 7. Contact Number */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>7. Contact No</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("contactNumber")} />
                            </div>
                            {/*8. Birth date */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>8. Birth Date</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="date" {...register("birthDate")} />
                            </div>
                            {/*9. Email Address */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>9. Email</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="email" {...register("email")} />
                            </div>
                            {/*10. Gender checkbox*/}
                            <div>
                                <div className='relative w-fit'>
                                    <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>10. Gender</p>
                                    <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                                </div>
                                <div className='flex gap-16'>
                                    <div className='flex items-center h-[41px]'>
                                        <label className="b-contain">
                                            <input className='' type="checkbox"  {...register("male", {})} />
                                            <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                        </label>
                                        <span className='text-[#777777] text-[16px] ml-9 mt-2'>Male</span>
                                    </div>
                                    <div className='flex items-center h-[41px]'>
                                        <label className="b-contain">
                                            <input className='' type="checkbox" {...register("female", {})} />
                                            <div className="b-input min-w-[26.93px] min-h-[27.96px]"></div>
                                        </label>
                                        <span className='text-[#777777] text-[16px] ml-9 mt-2'>Female</span>
                                    </div>
                                </div>
                            </div>
                            {/* 11. Blood Group */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>11. BloodGroup</p>
                                <Controller
                                    name="BloodGroup"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className='custom-select  w-full h-[40px] border border-[#E6E6E6] rounded-[3px]'
                                            components={{ DropdownIndicator }}
                                            options={BloodGroupOption}
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
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>12. Religion</p>
                                <Controller
                                    name="Religion"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className='custom-select  w-full h-[40px] border border-[#E6E6E6] rounded-[3px]'
                                            components={{ DropdownIndicator }}
                                            options={ReligionOption}
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
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>13. Father's Name</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("FatherName")} />
                            </div>
                            {/* 14. Mother's Name */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>14. Mother's Name</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("MotherName")} />
                            </div>
                            {/* 15. Spouse's Name */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>15. Spouse's Name</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("SpouseName")} />
                            </div>
                            {/* 16. Present Address */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>16. Present Address</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("PresentAddress")} />
                            </div>
                            {/* 17. Permanent Address Required */}
                            <div>
                                <div className='relative w-fit'>
                                    <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>17. Permanent Addressd</p>
                                    <span className='text-[20px] text-[#FF000A] absolute -top-1 -right-3'>*</span>
                                </div>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("PermanentAddress", { required: true })} />
                            </div>
                            {/* 18. Occupation */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>18. Occupation</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("Occupation")} />
                            </div>
                            {/* 19. National ID */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>19. National ID</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("NID")} />
                            </div>
                            {/* 20. Birth Certificate No */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>20. Birth Certificate No</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("birth_certificate_number")} />
                            </div>
                            {/* 21. Passport No */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>21. Passport No</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("passport_num")} />
                            </div>
                            {/* 22. Education */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>22. Education</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("education")} />
                            </div>
                            {/* 23. Member Form Serial */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>23. Member Form Serial</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("member_form_serial")} />
                            </div>
                            {/* 24. Money Receipt No. */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>24. Money Receipt No.</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("member_form_serial")} />
                            </div>
                            {/* 25. Project Activities in Last 10 years */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>25. Project Activities in Last 10 years</p>
                                <input className='w-full h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("member_form_serial")} />
                            </div>
                        </div>
                        {/* last row with flex */}
                        <div className='flex flex-col xl:flex-row justify-between mt-6'>
                            {/* 26. Emergency Contact No */}
                            <div>
                                <p className='text-[15px] text-[#777777] mb-1 ml-[2px]'>26. Emergency Contact No</p>
                                <input className='w-full xl:w-[476px] h-[40px] border border-[#E6E6E6] rounded-[3px]' type="text" {...register("emergency_contact")} />
                            </div>
                            <div className='flex gap-6 mt-8 xl:mt-3'>
                                <button className='bg-[#2AA778] w-[132px] h-[36px] rounded-[3px]'>
                                    <input className='px-0 text-[15px] font-bold text-white' value='Save' type="submit" />
                                </button>
                                <button className='bg-[#878FA7] w-[132px] h-[36px] rounded-[3px]'>
                                    <input className='px-0 text-[15px] font-bold text-white' value='Cancel' type="reset" />
                                </button>
                            </div>
                        </div>
                    </form>

                </div >
            </div >
        </>
    );
};

export default Member;