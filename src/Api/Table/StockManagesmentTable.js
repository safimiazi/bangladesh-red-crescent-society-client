

import axoissecure from "../../Hooks/Axoissecure"

// Items table-------------------------------------

// Item List data get
export const getItemList = async () => {

    console.log("email from feed 10 line --->itemlist",)
    const{data} = await axoissecure.post('/items')
    return data

}