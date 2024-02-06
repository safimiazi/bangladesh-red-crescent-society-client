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
            <label>Religion</label><br />
            <Select
                options={options}
                isSearchable={true}
                placeholder="Select Religion"
                value={selectedOption}
                onChange={handleSelectChange}

            />   
             </div>




    );
};

export default Religion;
