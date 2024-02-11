/* eslint-disable react/prop-types */
import { useState } from 'react';
import Select from 'react-select';

const Religion = ({ onReligionChange }) => {
    const options = [
        { value: 'muslim', label: 'muslim' },
        { value: 'hindu', label: 'hindu' },
        // Add more options as needed
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onReligionChange(selectedOption); // Call the function from props to send the value to the parent
    };

    return (

        <div className="col-span-4">
            <label className='text-[#777] text-[18px]font-normal '>12. Religion</label><br />
            <Select
                options={options}
                isSearchable={true}
                placeholder="Select Religion"
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

export default Religion;
