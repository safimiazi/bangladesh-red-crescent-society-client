import { useState } from "react";
import before_image from "../../assets/before_image.png"
import MemberTypeSelect from "./MemberTypeSelect";
import Prefix from "./Prefix";
import Unit from "./Unit";
import Upazila from "./Upazila";
import Blood from "./Blood";
import Religion from "./Religion";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useRef } from "react";
import axios from "axios";
import Swal from 'sweetalert2'



const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    memberIdCard: Yup.string().required('Member ID Card is required'),
    enrollmentDate: Yup.date().nullable().required('Enrollment Date is required'),
    birthDate: Yup.date().nullable().required('Birth Date is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    motherName: Yup.string().required('Mother\'s Name is required'),
    spouseName: Yup.string(),
    permanentAddress: Yup.string().required('Permanent Address is required'),
    Occupation: Yup.string(),
    birthCertificateNo: Yup.string(),
    passportNo: Yup.string(),
    memberFormSerial: Yup.string(),
    moneyReceiptNo: Yup.string(),
    emergencyContactNo: Yup.string(),
    contactNo: Yup.string(),
    fatherName: Yup.string().required('Father\'s Name is required'),
    presentAddress: Yup.string(),
    nationalId: Yup.string(),
    education: Yup.string(),
    projectActivities: Yup.string(),
});

const HumanAsset = () => {

   


    // Checked state variables
    const [isAlive, setIsAlive] = useState(false);
    const [isManagingBoardMember, setIsManagingBoardMember] = useState(false);
    const [isUnitExecutiveCommitteeMember, setIsUnitExecutiveCommitteeMember] = useState(false);
    const [isChairman, setIsChairman] = useState(false);
    const [isMale, setIsMale] = useState(false);
    const [isFemale, setIsFemale] = useState(false);


        //all selected input value
        const [selectedMemberType, setSelectedMemberType] = useState(null);
        const [selectedPrefixType, setSelectedPrefixType] = useState(null);
        const [selectedUnitType, setSelectedUnitType] = useState(null);
        const [selectedUpazilaType, setSelectedUpazilaType] = useState(null);
        const [selectedBloodType, setSelectedBloodType] = useState(null);
        const [selectedReligionType, setSelectedReligionType] = useState(null);
    
    //photo upload related state
    const inputRef = useRef(null);
    const [image, setImage] = useState()

    //photo upload related function:
    const handleImageClick = () => {
        inputRef.current.click();
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file)
    };


    //all selected input functions
    const handleMemberTypeChange = (selectedOption) => {
        setSelectedMemberType(selectedOption.label);
    };
    const handlePrefixTypeChange = (selectedOption) => {
        setSelectedPrefixType(selectedOption.label)
    }
    const handleUnitTypeChange = (selectedOption) => {
        setSelectedUnitType(selectedOption.label)
    }
    const handleUpazilaChange = (selectedOption) => {
        setSelectedUpazilaType(selectedOption.label)
    }
    const handleBloodChange = (selectedOption) => {
        setSelectedBloodType(selectedOption.label)
    }
    const handleReligionChange = (selectedOption) => {
        setSelectedReligionType(selectedOption.label)
    }




    const formik = useFormik({
        
        initialValues: {
            name: '',
            // ... other form fields
        
        },
        
        validationSchema,
        onSubmit: async(values) => {
            const formData = {
                ...values,
                isAlive,
                isManagingBoardMember,
                isUnitExecutiveCommitteeMember,
                isChairman,
                isMale,
                isFemale,
                selectedMemberType,
                selectedPrefixType,
                selectedUnitType,
                selectedUpazilaType,
                selectedBloodType,
                selectedReligionType,
                image,
            };

           

            try {
                // Make a POST request to your server
                const response = await axios.post('http://localhost:3000/users', formData);

                // Handle the response as needed
                console.log('Server Response:', response.statusText);
                if(response.statusText === "Created"){
                    Swal.fire({
                        title: "Good job!",
                        text: "successfully user created!",
                        icon: "success"
                      });
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                      });
                }
            } catch (error) {
                // Handle errors
                console.error('Error submitting data:', error);
            }


        }
    });

    const { values, handleBlur, handleChange, handleSubmit, errors } = formik;

    return (
        <div className="z-10">
            <div>
                <h4 className="text-[#878FA7] text-[20px] pb-4">Add New Member</h4>
            </div>
            <div className="bg-white p-5">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-2 grid md:grid-cols-7 grid-cols-1 gap-2 items-center justify-between">
                        <Prefix onPrefixChange={handlePrefixTypeChange} />
                        <div className="col-span-3">
                            <label className='text-[#777] text-[18px]font-normal '>1. Name<span className="text-red-500">*</span></label><br />
                            <input name="name" onBlur={handleBlur} onChange={handleChange} type="text" className="border-2 w-full" id="" />
                            {errors.name && <small className="text-red-600">{errors?.name}</small>}
                        </div>
                        <div className="md:ml-3">
                            <label></label><br />
                            <div className="flex gap-2 items-center text-center">
                                <input
                                    type="checkbox"
                                    name="isAlive"
                                    className="w-5 h-5"
                                    id="isAlive"
                                    checked={isAlive}
                                    onChange={() => setIsAlive(!isAlive)}
                                />
                                <label className='text-[#777] text-[18px]font-normal '>Is Alive</label>
                            </div>
                        </div>
                        <Unit onUnitChange={handleUnitTypeChange} />
                        <Upazila onUpazilaChange={handleUpazilaChange} />


                        <div className="col-span-7 grid items-center justify-between md:grid-cols-8 grid-cols-1">
                            <div className="col-span-3">
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" onBlur={handleBlur} onChange={handleChange} name="isManagingBoardMember" id="isManagingBoardMember" checked={isManagingBoardMember} onChange={() => setIsManagingBoardMember(!isManagingBoardMember)} className="w-5 h-5" />
                                    <label className='text-[#777] text-[18px]font-normal '>Managing Board Member</label>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" onBlur={handleBlur} onChange={handleChange} name="isUnitExecutiveCommitteeMember" checked={isUnitExecutiveCommitteeMember} onChange={() => setIsUnitExecutiveCommitteeMember(!isUnitExecutiveCommitteeMember)} className="w-5 h-5" id="isUnitExecutiveCommitteeMember" />
                                    <label className='text-[#777] text-[18px]font-normal '>Unit Executive Committee Member</label>
                                </div>
                            </div>
                            <div>
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" onBlur={handleBlur} onChange={handleChange} name="isChairman" checked={isChairman} onChange={() => setIsChairman(!isChairman)} className="w-5 h-5" id="isChairman" />
                                    <label className='text-[#777] text-[18px]font-normal '>Chairman</label>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-7 grid items-center justify-between md:grid-cols-8 grid-cols-1 gap-4">
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>5. Member Id Card<span className="text-red-500">*</span></label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="memberIdCard" id="" />
                                {errors.memberIdCard && <small className="text-red-600">{errors?.memberIdCard}</small>}

                            </div>
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>6. Enrollment Date</label><br />
                                <input type="date" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="enrollmentDate" id="" />
                                {errors.enrollmentDate && <small className="text-red-600">{errors?.enrollmentDate}</small>}

                            </div>

                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>8. Birth Date</label><br />
                                <input type="date" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="birthDate" id="" />
                                {errors.birthDate && <small className="text-red-600">{errors?.birthDate}</small>}

                            </div>
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>9. Email</label><br />
                                <input type="email" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="email" id="" />
                                {errors.email && <small className="text-red-600">{errors?.email}</small>}

                            </div>
                            <Blood onBloodChange={handleBloodChange} />
                            <Religion onReligionChange={handleReligionChange} />
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>14. Mother's Name</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="motherName" id="" />
                                {errors.motherName && <small className="text-red-600">{errors?.motherName}</small>}

                            </div>
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>15. Spouse's Name</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="spouseName" id="" />
                                {errors.spouseName && <small className="text-red-600">{errors?.spouseName}</small>}

                            </div>
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>17. Permanent Address<span className="text-red-500">*</span></label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="permanentAddress" id="" />
                                {errors.permanentAddress && <small className="text-red-600">{errors?.permanentAddress}</small>}

                            </div>
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>18. Occupation</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="Occupation" id="" />
                                {errors.Occupation && <small className="text-red-600">{errors?.Occupation}</small>}

                            </div>
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>20. Birth Certificate No</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="birthCertificateNo" id="" />
                                {errors.birthCertificateNo && <small className="text-red-600">{errors?.birthCertificateNo}</small>}

                            </div>
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>21. Passport No </label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="passportNo" id="" />
                                {errors.passportNo && <small className="text-red-600">{errors?.passportNo}</small>}

                            </div>
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>23. Member Form Serial </label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="memberFormSerial" id="" />
                                {errors.memberFormSerial && <small className="text-red-600">{errors?.memberFormSerial}</small>}

                            </div>
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>24. Money Receipt No.</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="moneyReceiptNo" id="" />
                                {errors.moneyReceiptNo && <small className="text-red-600">{errors?.moneyReceiptNo}</small>}

                            </div>
                            <div className="col-span-4">
                                <label className='text-[#777] text-[18px]font-normal '>26. Emergency Contact No</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="emergencyContactNo" id="" />
                                {errors.emergencyContactNo && <small className="text-red-600">{errors?.emergencyContactNo}</small>}

                            </div>
                        </div>




                    </div>
                    <div className="gap-2">
                        <MemberTypeSelect onMemberTypeChange={handleMemberTypeChange} />

                        <div className="mb-4">
                            <label className='text-[#777] text-[18px]font-normal '>4. Photo</label><br />
                            <div onClick={handleImageClick} className=" border-2 grid md:grid-cols-2 grid-cols-1 md:gap-20 items-center justify-center p-2">
                                <div>
                                    <input type="file" ref={inputRef} onChange={handleImageChange} name="" id="" />
                                    <p className='text-[#777] text-[14px]font-normal '>*Maximum allowed image size is 2 MB</p>
                                </div>
                                <div className="w-28 h-28">
                                    {image ? (
                                        <img src={URL.createObjectURL(image)} className="rounded-full border-2 w-full h-full" alt="" />

                                    ) : (
                                        <img src={before_image} className="rounded-full border-2 w-full h-full" alt="" />

                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className='text-[#777] text-[18px]font-normal '>7. Contact No</label><br />
                            <input type="text" className="border-2 w-full" name="contactNo" id="" />
                        </div>
                        <div className="mb-4">
                            <label className='text-[#777] text-[18px]font-normal '>10. Gender<span className="text-red-500">*</span></label>
                            <div className=" grid items-center justify-between md:grid-cols-8 grid-cols-1">

                                <div className="col-span-4">
                                    <label></label><br />
                                    <div className="flex gap-2 items-center text-center">
                                        <input type="checkbox" name="isMale" checked={isMale} onChange={() => setIsMale(!isMale)} className="w-5 h-5" id="isMale" />
                                        <label className='text-[#777] text-[18px]font-normal '>Male</label>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <label></label><br />
                                    <div className="flex gap-2 items-center text-center">
                                        <input type="checkbox" name="isFemale" checked={isFemale} onChange={() => setIsFemale(!isFemale)} className="w-5 h-5" id="isFemale" />
                                        <label className='text-[#777] text-[18px]font-normal '>Female</label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mb-6">
                            <label className='text-[#777] text-[18px]font-normal '>13. Father's Name</label><br />
                            <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="fatherName" id="" />
                            {errors.fatherName && <small className="text-red-600">{errors?.fatherName}</small>}

                        </div>
                        <div className="mb-6">
                            <label className='text-[#777] text-[18px]font-normal '>16. Present Address</label><br />
                            <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="presentAddress" id="" />
                            {errors.presentAddress && <small className="text-red-600">{errors?.presentAddress}</small>}

                        </div>
                        <div className="mb-6">
                            <label className='text-[#777] text-[18px]font-normal '>19. National ID</label><br />
                            <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="nationalId" id="" />
                            {errors.nationalId && <small className="text-red-600">{errors?.nationalId}</small>}

                        </div>
                        <div className="mb-6">
                            <label className='text-[#777] text-[18px]font-normal '>22. Education</label><br />
                            <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="education" id="" />
                            {errors.education && <small className="text-red-600">{errors?.education}</small>}

                        </div>
                        <div className="mb-6">
                            <label className='text-[#777] text-[18px]font-normal '>25. Project Activities in Last 10 years</label><br />
                            <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="projectActivities" id="" />
                            {errors.projectActivities && <small className="text-red-600">{errors?.projectActivities}</small>}

                        </div>
                        <div className="grid md:grid-cols-2 gap-2">
                            <button type="submit" className="px-1 py-2 text-white font-semibold rounded-lg bg-[#2AA778]">Save</button>
                            <button className="px-1 py-2 rounded-lg text-white font-semibold  bg-[#878FA7]">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HumanAsset;