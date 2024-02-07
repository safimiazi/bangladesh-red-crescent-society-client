import { useState } from 'react';
import Select from 'react-select';

const Blood = ({ onBloodChange }) => {
    const options = [
        { value: 'A', label: 'A' },
        { value: 'B+', label: 'B+' },
        { value: 'O+', label: 'O+' },
        // Add more options as needed
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onBloodChange(selectedOption); // Call the function from props to send the value to the parent
    };

    return (


        <div className="col-span-4">
        <label className='text-[#777] text-[18px]font-normal '>11. Blood Group</label><br />
        <Select
                options={options}
                isSearchable={true}
                placeholder="Select Blood"
                value={selectedOption}
                onChange={handleSelectChange}
                
            />
    </div>
     

       


    );
};

export default Blood;
