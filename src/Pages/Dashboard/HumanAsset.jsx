
const HumanAsset = () => {
    return (
        <div>
            <div>
                <h4 className="text-xl font-bold">Add New Member</h4>
            </div>
            <div className="bg-white p-5">
                <form className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="col-span-2 grid md:grid-cols-7 grid-cols-1 gap-2 items-center justify-between">
                        <div className="col-span-3">
                            <label>Prefix</label><br />
                            <input type="text" className="border-2 w-full" name="" id="" />
                        </div>
                        <div className="col-span-3">
                            <label>1.Name<span className="text-red-500">*</span></label><br />
                            <input type="text" className="border-2 w-full" name="" id="" />
                        </div>
                        <div className="md:ml-3">
                            <label></label><br />
                            <div className="flex gap-2 items-center text-center">
                                <input type="checkbox" name="" className="w-5 h-5" id="" />
                                <label>Is Alive</label>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <label>Unit<span className="text-red-500">*</span></label><br />
                            <input type="text" className="border-2 w-full" name="" id="" />
                        </div>
                        <div className="col-span-4">
                            <label>Affiliated Upazila</label><br />
                            <input type="text" className="border-2 w-full" name="" id="" />
                        </div>


                        <div className="col-span-7 grid items-center justify-between md:grid-cols-8 grid-cols-1">
                            <div className="col-span-3">
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" name="" className="w-5 h-5" id="" />
                                    <label>Managing Board Member</label>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" name="" className="w-5 h-5" id="" />
                                    <label>Unit Executive Committee Member</label>
                                </div>
                            </div>
                            <div>
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" name="" className="w-5 h-5" id="" />
                                    <label>Chairman</label>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-7 grid items-center justify-between md:grid-cols-8 grid-cols-1 gap-4">
                            <div className="col-span-4">
                                <label>Member Id Card<span className="text-red-500">*</span></label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Enrollment Date</label><br />
                                <input type="date" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Enrollment Date</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Birth Date</label><br />
                                <input type="date" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Email</label><br />
                                <input type="email" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Blood Group</label><br />
                                <input type="email" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Religion</label><br />
                                <input type="email" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Mother's Name</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Spouse's Name</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Permanent Address<span className="text-red-500">*</span></label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Occupation</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Birth Certificate No</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Passport No </label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Member Form Serial </label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Money Receipt No.</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                            <div className="col-span-4">
                                <label>Emergency Contact No</label><br />
                                <input type="text" className="border-2 w-full" name="" id="" />
                            </div>
                        </div>




                    </div>
                    <div>
                        d
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HumanAsset;