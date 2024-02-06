import { useState } from 'react';
import Select from 'react-select';

const MemberTypeSelect = ({ onMemberTypeChange }) => {
  const options = [
    { value: 'Life Member', label: 'Life Member' },
    { value: 'Honorary Member', label: 'Honorary Member' },
    { value: 'Institutional Member', label: 'Institutional Member' },
    // Add more options as needed
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onMemberTypeChange(selectedOption); // Call the function from props to send the value to the parent
  };

  return (

    <div className="mb-2">
      <label className="text-[#777] text-[18px] font-normal">2. Member Type<span className="text-red-500">*</span></label><br />
      <Select
        options={options}
        isSearchable={true}
        placeholder="Select Member Type"
        value={selectedOption}
        onChange={handleSelectChange}
        required
      />
     
    </div>
  );
};

export default MemberTypeSelect;
