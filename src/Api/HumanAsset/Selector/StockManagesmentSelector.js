


// Add Items form---------------------------------------------

//ItemGroup
export const getItemGroup = async () => {

    const{data} = await axoissecure.get(`/item`)
    console.log("data", data);
   return data
}
