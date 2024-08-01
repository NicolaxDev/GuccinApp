import React, { useState } from 'react';
import CheckBox from '../components/CheckBox';

export default function Personalizacion() {
  const [checkedItems, setCheckedItems] = useState({
    Japonesa: false,
    Italiana: false,
    Mexicana: false,
    Asiatica: false,
  });

  const handleCheck = (foodType) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [foodType]: !prevState[foodType],
    }));
  };

  const getCheckedItems = () => {
    return Object.keys(checkedItems).filter(key => checkedItems[key]);
  };

  return (
    <main className='bg-black w-full font-outfit text-white flex flex-col items-center justify-center'>
      <h2 className='text-green text-4xl font-bold'>Personaliza tu experiencia en GuccinApp</h2>
      <form action="" className='flex'>
        {Object.keys(checkedItems).map(foodType => (
          <CheckBox
            key={foodType}
            foodType={foodType}
            isChecked={checkedItems[foodType]}
            handleCheck={() => handleCheck(foodType)}
          />
        ))}
      </form>
    </main>
  );
}