/* eslint-disable react/prop-types */
import { useState } from 'react';
import Select from 'react-select';

const Upazila = ({ onUpazilaChange }) => {
    const options = [
        { value: 'Cumilla', label: 'Cumilla' },
        { value: 'Barisal', label: 'Barisal' },
        { value: 'Dhaka', label: 'Dhaka' },
        // Add more options as needed
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onUpazilaChange(selectedOption); // Call the function from props to send the value to the parent
    };

    return (


        <div className="col-span-4">
        <label className='text-[#777] text-[18px]font-normal '>Affiliated Upazila</label><br />
        <Select
                options={options}
                isSearchable={true}
                placeholder="Select Upazila"
                value={selectedOption}
                onChange={handleSelectChange}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 2,
                    colors: {
                      ...theme.colors,
                      primary25: 'white',
                      primary: '#2AA778',
                    },
                  })}
            />
    </div>
     

       


    );
};

export default Upazila;