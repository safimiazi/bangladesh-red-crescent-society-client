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