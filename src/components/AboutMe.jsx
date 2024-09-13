//import personal_photo from '../public/images/personal_photo'

import React from 'react';

const AboutMe = () => {
  return (
    <div className="p-4 bg-blue-500 text-white">
      <div className="grid items-center h-full ">
      <img
            className="object-contain md:object-scale-down md:w-full w-60 h-auto"
            src={"/images/personal_photo.jpg"}
            alt="personal photo"
        />
      </div>
      <h1 className="text-xl">Khushi Chaudhari</h1>
    </div>
  );
};

export default AboutMe;
