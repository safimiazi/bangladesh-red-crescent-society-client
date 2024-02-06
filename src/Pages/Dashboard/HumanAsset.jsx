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







    //handle Form
    const handleForm = (event) => {
        event.preventDefault()
        console.log(selectedMemberType, selectedPrefixType, selectedUnitType, selectedUpazilaType, selectedBloodType, selectedReligionType);
    }
    return (
        <div>
            <div>
                <h4 className="text-[#878FA7] text-[20px] pb-4">Add New Member</h4>
            </div>
            <div className="bg-white p-5">
                <form onSubmit={handleForm} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-2 grid md:grid-cols-7 grid-cols-1 gap-2 items-center justify-between">
                        <Prefix onPrefixChange={handlePrefixTypeChange} />
                        <div className="col-span-3">
                            <label className="text-[#777] text-[18px] font-normal">1. Name<span className="text-red-500">*</span></label><br />
                            <input type="text" className="border-2 w-full" name="" id="" />
                        </div>
                        <div className="md:ml-3">
                            <label></label><br />
                            <div className="flex gap-2 items-center text-center">
                                <input type="checkbox" name="" className="w-5 h-5" id="" />
                                <label className="text-[#777] text-[18px] font-normal">Is Alive</label>
                            </div>
                        </div>
                        <Unit onUnitChange={handleUnitTypeChange} />
                        <Upazila onUpazilaChange={handleUpazilaChange} />


                        <div className="col-span-7 grid items-center justify-between md:grid-cols-8 grid-cols-1">
                            <div className="col-span-3">
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" name="" className="w-5 h-5" id="" />
                                    <label className="text-[#777] text-[18px] font-normal">Managing Board Member</label>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" name="" className="w-5 h-5" id="" />
                                    <label className="text-[#777] text-[18px] font-normal">Unit Executive Committee Member</label>
                                </div>
                            </div>
                            <div>
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" name="" className="w-5 h-5" id="" />
                                    <label className="text-[#777] text-[18px] font-normal">Chairman</label>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-7 grid items-center justify-between md:grid-cols-8 grid-cols-1 gap-4">
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">5. Member Id Card<span className="text-red-500">*</span></label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">6. Enrollment Date</label><br />
                                <input type="date" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal"> 8. Enrollment Date</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">9. Birth Date</label><br />
                                <input type="date" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">11. Email</label><br />
                                <input type="email" className="border-2 w-full" name="" id="" />
                            </div>
                            <Blood onBloodChange={handleBloodChange} />
                            <Religion onReligionChange={handleReligionChange} />
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">15. Mother's Name</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">17. Spouse's Name</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">18. Permanent Address<span className="text-red-500">*</span></label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">19. Occupation</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">20. Birth Certificate No</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">22. Passport No </label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">23. Member Form Serial </label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">25. Money Receipt No.</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label className="text-[#777] text-[18px] font-normal">26. Emergency Contact No</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                        </div>




                    </div>
                    <div className="gap-2">
                        <MemberTypeSelect onMemberTypeChange={handleMemberTypeChange} />

                        <div className="mb-4">
                            <label className="text-[#777] text-[18px] font-normal">4. Photo</label><br />
                            <div className=" border-2 grid md:grid-cols-2 grid-cols-1 md:gap-20 items-center justify-center p-2">
                                <div>
                                    <input type="file" name="" id="" className="text-[#777]" />
                                    <p className="text-[#777] text-[16px]  font-normal">*Maximum allowed image size is 2 MB</p>
                                </div>
                                <div className="w-32 h-32">
                                    <img src={before_image} className="rounded-full border-2 w-full h-full" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="text-[#777] text-[18px] font-normal">7. Contact No</label><br />
                            <input type="text" className="border-2 w-full" name="" id="" />
                        </div>
                        <div className="mb-4">
                            <label className="text-[#777] text-[18px] font-normal">10. Gender<span className="text-red-500">*</span></label>
                            <div className=" grid items-center justify-between md:grid-cols-8 grid-cols-1">

                                <div className="col-span-4">
                                    <label></label><br />
                                    <div className="flex gap-2 items-center text-center">
                                        <input type="checkbox" name="" className="w-5 h-5" id="" />
                                        <label className="text-[#777] text-[18px] font-normal">Male</label>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <label></label><br />
                                    <div className="flex gap-2 items-center text-center">
                                        <input type="checkbox" name="" className="w-5 h-5" id="" />
                                        <label className="text-[#777] text-[18px] font-normal">Female</label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="text-[#777] text-[18px] font-normal">13. Father's Name</label><br />
                            <input type="text" className="border-2 w-full" name="" id="" />
                        </div>
                        <div className="mb-6">
                            <label className="text-[#777] text-[18px] font-normal">16. Present Address</label><br />
                            <input type="text" className="border-2 w-full" name="" id="" />
                        </div>
                        <div className="mb-6">
                            <label className="text-[#777] text-[18px] font-normal">18. National ID</label><br />
                            <input type="text" className="border-2 w-full" name="" id="" />
                        </div>
                        <div className="mb-6">
                            <label className="text-[#777] text-[18px] font-normal">21. Education</label><br />
                            <input type="text" className="border-2 w-full" name="" id="" />
                        </div>
                        <div className="mb-6">
                            <label className="text-[#777] text-[18px] font-normal">24. Project Activities in Last 10 years</label><br />
                            <input type="text" className="border-2 w-full" name="" id="" />
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