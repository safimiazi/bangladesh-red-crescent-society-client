import axoissecure from "../../../Hooks/Axoissecure"


export const getMemberType = async () => {

    const{data} = await axoissecure.get(`/member-type`)
    console.log("data", data);
   return data
}