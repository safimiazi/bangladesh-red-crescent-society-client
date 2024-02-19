import axoissecure from "../../../Hooks/Axoissecure";





// membertype
export const getMemberType = async () => {

    const{data} = await axoissecure.get(`/member-type`)
    console.log("data", data);
   return data
}

// prefix
export const getPrefix = async () => {

    const{data} = await axoissecure.get(`/prefix`)
    console.log("data", data);
   return data
}


// religion

export const getReligion = async () => {

    const{data} = await axoissecure.get(`/religion`)
    console.log("data", data);
   return data
}


// unit

export const getUnit = async () => {

    const{data} = await axoissecure.get(`/unit`)
    console.log("data", data);
   return data
}

// upazila

export const getUpazila = async () => {

    const{data} = await axoissecure.get(`/upazila`)
    console.log("data", data);
   return data
}

//BloodGroup
export const getBloodGroup = async () => {

    const{data} = await axoissecure.get(`/blood-group`)
    console.log("data", data);
   return data
}

// volunteer Form Selectot----------------------------------------

//VolunteerPosition 
export const getVolunteerPosition = async () => {

    const{data} = await axoissecure.get(`/volunteerposition`)
    console.log("data", data);
   return data
}


//VolunteerType
export const getVolunteerType = async () => {

    const{data} = await axoissecure.get(`/volunteertype`)
    console.log("data", data);
   return data
}




