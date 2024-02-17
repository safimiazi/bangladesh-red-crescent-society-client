/* eslint-disable react/prop-types */
import { useState } from 'react';
import Select from 'react-select';

const Unit = ({ onUnitChange }) => {
    const options = [
        { value: 'a', label: 'a' },
        { value: 'b', label: 'b' },
        { value: 'c', label: 'c' },
        // Add more options as needed
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onUnitChange(selectedOption); // Call the function from props to send the value to the parent
    };

    return (

        <div className="col-span-3">
                    <label className='text-[#777] text-[18px]font-normal '>3. Unit<span className="text-red-500">*</span></label><br />

            <Select
                options={options}
                isSearchable={true}
                placeholder="Select Unit"
                value={selectedOption}
                onChange={handleSelectChange}
                required
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

export default Unit;