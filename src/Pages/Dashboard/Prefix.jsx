import { useState } from 'react';
import Select from 'react-select';

const Prefix = ({ onPrefixChange }) => {
    const options = [
        { value: 'option1', label: 'option 1' },
        { value: 'option2', label: 'option 2' },
        { value: 'option3', label: 'option 3' },
        // Add more options as needed
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onPrefixChange(selectedOption); // Call the function from props to send the value to the parent
    };

    return (
        <div className="col-span-3">
            <label className='text-[#777] text-[18px] font-normal '>Prefix</label><br />
        <Select
                options={options}
                isSearchable={true}
                placeholder="Select Prefix"
                value={selectedOption}
                onChange={handleSelectChange}
               
                
                
            />
    </div>

       


    );
};

export default Prefix;
