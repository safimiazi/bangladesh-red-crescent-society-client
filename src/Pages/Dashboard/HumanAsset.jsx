import { useState } from "react";
import before_image from "../../assets/before_image.png"
import MemberTypeSelect from "./MemberTypeSelect";
import Prefix from "./Prefix";
import Unit from "./Unit";
import Upazila from "./Upazila";
import Blood from "./Blood";
import Religion from "./Religion";
const HumanAsset = () => {



    //all selected input value
    const [selectedMemberType, setSelectedMemberType] = useState(null);
    const [selectedPrefixType, setSelectedPrefixType] = useState(null);
    const [selectedUnitType, setSelectedUnitType] = useState(null);
    const [selectedUpazilaType, setSelectedUpazilaType] = useState(null);
    const [selectedBloodType, setSelectedBloodType] = useState(null);
    const [selectedReligionType, setSelectedReligionType] = useState(null);


    //checked related  state:


    //all selected input functions
    const handleMemberTypeChange = (selectedOption) => {
        setSelectedMemberType(selectedOption);
    };
    const handlePrefixTypeChange = (selectedOption) => {
        setSelectedPrefixType(selectedOption)
    }
    const handleUnitTypeChange = (selectedOption) => {
        setSelectedUnitType(selectedOption)
    }
    const handleUpazilaChange = (selectedOption) => {
        setSelectedUpazilaType(selectedOption)
    }
    const handleBloodChange = (selectedOption) => {
        setSelectedBloodType(selectedOption)
    }
    const handleReligionChange = (selectedOption) => {
        setSelectedReligionType(selectedOption)
    }


    // Checked state variables
    const [isAlive, setIsAlive] = useState(false);
    const [isManagingBoardMember, setIsManagingBoardMember] = useState(false);
    const [isUnitExecutiveCommitteeMember, setIsUnitExecutiveCommitteeMember] = useState(false);
    const [isChairman, setIsChairman] = useState(false);
    const [isMale, setIsMale] = useState(false);
    const [isFemale, setIsFemale] = useState(false);





    //handle Form
    const handleForm = (event) => {
        event.preventDefault()
        const form = event?.target;
        const name = form.name.value;
        const memberIdCard = form.memberIdCard.value;
        const enrollmentDate = form.enrollmentDate.value;
        const birthDate = form.birthDate.value;
        const email = form.email.value;
        const motherName = form.motherName.value;
        const spouseName = form.spouseName.value;
        const permanentAddress = form.permanentAddress.value;
        const Occupation = form.Occupation.value;
        const birthCertificateNo = form.birthCertificateNo.value;
        const passportNo = form.passportNo.value;
        const memberFormSerial = form.memberFormSerial.value;
        const moneyReceiptNo = form.moneyReceiptNo.value;
        const emergencyContactNo = form.emergencyContactNo.value;
        const contactNo = form.contactNo.value;
        const fatherName = form.fatherName.value;
        const presentAddress = form.presentAddress.value;
        const nationalId = form.nationalId.value;
        const education = form.education.value;
        const projectActivities = form.projectActivities.value;

        console.log(name, memberFormSerial, memberIdCard, enrollmentDate, birthDate, email, motherName, spouseName, presentAddress, permanentAddress, Occupation, 
           birthCertificateNo, passportNo, moneyReceiptNo, emergencyContactNo, contactNo, fatherName, nationalId, education, projectActivities );

        // Accessing checked values
        // console.log("Is Alive:", isAlive);
        // console.log("Managing Board Member:", isManagingBoardMember);
        // console.log("Unit Executive Committee Member:", isUnitExecutiveCommitteeMember);
        // console.log("Chairman:", isChairman);
        // console.log("Male:", isMale);
        // console.log("Female:", isFemale);
        // console.log(selectedMemberType, selectedPrefixType, selectedUnitType, selectedUpazilaType, selectedBloodType, selectedReligionType);
    }
    return (
        <div>
            <div>
                <h4 className="text-xl font-bold">Add New Member</h4>
            </div>
            <div className="bg-white p-5">
                <form onSubmit={handleForm} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-2 grid md:grid-cols-7 grid-cols-1 gap-2 items-center justify-between">
                        <Prefix onPrefixChange={handlePrefixTypeChange} />
                        <div className="col-span-3">
                            <label>Name<span className="text-red-500">*</span></label><br />
                            <input name="name" type="text" className="border-2 w-full" id="" />
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
                                <label>Is Alive</label>
                            </div>
                        </div>
                        <Unit onUnitChange={handleUnitTypeChange} />
                        <Upazila onUpazilaChange={handleUpazilaChange} />


                        <div className="col-span-7 grid items-center justify-between md:grid-cols-8 grid-cols-1">
                            <div className="col-span-3">
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" name="isManagingBoardMember" id="isManagingBoardMember" checked={isManagingBoardMember} onChange={() => setIsManagingBoardMember(!isManagingBoardMember)} className="w-5 h-5" />
                                    <label>Managing Board Member</label>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" name="isUnitExecutiveCommitteeMember" checked={isUnitExecutiveCommitteeMember} onChange={() => setIsUnitExecutiveCommitteeMember(!isUnitExecutiveCommitteeMember)} className="w-5 h-5" id="isUnitExecutiveCommitteeMember" />
                                    <label>Unit Executive Committee Member</label>
                                </div>
                            </div>
                            <div>
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" name="isChairman" checked={isChairman} onChange={() => setIsChairman(!isChairman)} className="w-5 h-5" id="isChairman" />
                                    <label>Chairman</label>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-7 grid items-center justify-between md:grid-cols-8 grid-cols-1 gap-4">
                            <div className="col-span-4">
                                <label>Member Id Card<span className="text-red-500">*</span></label><br />
                                <input type="text" className="border-2 w-full" name="memberIdCard" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Enrollment Date</label><br />
                                <input type="date" className="border-2 w-full" name="enrollmentDate" id="" />
                            </div>

                            <div className="col-span-4">
                                <label>Birth Date</label><br />
                                <input type="date" className="border-2 w-full" name="birthDate" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Email</label><br />
                                <input type="email" className="border-2 w-full" name="email" id="" />
                            </div>
                            <Blood onBloodChange={handleBloodChange} />
                            <Religion onReligionChange={handleReligionChange} />
                            <div className="col-span-4">
                                <label>Mother's Name</label><br />
                                <input type="text" className="border-2 w-full" name="motherName" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Spouse's Name</label><br />
                                <input type="text" className="border-2 w-full" name="spouseName" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Permanent Address<span className="text-red-500">*</span></label><br />
                                <input type="text" className="border-2 w-full" name="permanentAddress" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Occupation</label><br />
                                <input type="text" className="border-2 w-full" name="Occupation" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Birth Certificate No</label><br />
                                <input type="text" className="border-2 w-full" name="birthCertificateNo" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Passport No </label><br />
                                <input type="text" className="border-2 w-full" name="passportNo" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Member Form Serial </label><br />
                                <input type="text" className="border-2 w-full" name="memberFormSerial" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Money Receipt No.</label><br />
                                <input type="text" className="border-2 w-full" name="moneyReceiptNo" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Emergency Contact No</label><br />
                                <input type="text" className="border-2 w-full" name="emergencyContactNo" id="" />
                            </div>
                        </div>




                    </div>
                    <div className="gap-2">
                        <MemberTypeSelect onMemberTypeChange={handleMemberTypeChange} />

                        <div className="mb-4">
                            <label>Photo</label><br />
                            <div className=" border-2 grid md:grid-cols-2 grid-cols-1 md:gap-20 items-center justify-center p-2">
                                <div>
                                    <input type="file" name="" id="" />
                                    <p>*Maximum allowed image size is 2 MB</p>
                                </div>
                                <div className="w-32 h-32">
                                    <img src={before_image} className="rounded-full border-2 w-full h-full" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label>Contact No</label><br />
                            <input type="text" className="border-2 w-full" name="contactNo" id="" />
                        </div>
                        <div className="mb-4">
                            <label>Gender<span className="text-red-500">*</span></label>
                            <div className=" grid items-center justify-between md:grid-cols-8 grid-cols-1">

                                <div className="col-span-4">
                                    <label></label><br />
                                    <div className="flex gap-2 items-center text-center">
                                        <input type="checkbox" name="isMale" checked={isMale} onChange={() => setIsMale(!isMale)} className="w-5 h-5" id="isMale" />
                                        <label>Male</label>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <label></label><br />
                                    <div className="flex gap-2 items-center text-center">
                                        <input type="checkbox" name="isFemale" checked={isFemale} onChange={() => setIsFemale(!isFemale)} className="w-5 h-5" id="isFemale" />
                                        <label>Female</label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mb-6">
                            <label>Father's Name</label><br />
                            <input type="text" className="border-2 w-full" name="fatherName" id="" />
                        </div>
                        <div className="mb-6">
                            <label>Present Address</label><br />
                            <input type="text" className="border-2 w-full" name="presentAddress" id="" />
                        </div>
                        <div className="mb-6">
                            <label>National ID</label><br />
                            <input type="text" className="border-2 w-full" name="nationalId" id="" />
                        </div>
                        <div className="mb-6">
                            <label>Education</label><br />
                            <input type="text" className="border-2 w-full" name="education" id="" />
                        </div>
                        <div className="mb-6">
                            <label>Project Activities in Last 10 years</label><br />
                            <input type="text" className="border-2 w-full" name="projectActivities" id="" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-2">
                            <button type="submit" className="px-1 py-4 bg-green-400">Save</button>
                            <button className="px-1 py-4 bg-slate-500">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HumanAsset;