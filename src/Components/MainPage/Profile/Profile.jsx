import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="flex flex-col justify-center max-w-[100%] p-6 shadow-md rounded-xl sm:px-12 text-gray-100">
        <img
          src="https://source.unsplash.com/150x150/?portrait?3"
          alt=""
          className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
            <div className="justify-start">
              <p className="px-5 text-xs sm:text-base text-gray-100">
               <span className="text-xl font-bold text-slate-200">ffffffff :</span> 555555
              </p>
              <p className="px-5 text-xs sm:text-base text-gray-100">
                 <span className="text-xl font-bold text-slate-200">ffffffff :</span> Full-stack
              </p>
              <p className="px-5 text-xs sm:text-base text-gray-100">
                <span className="text-xl font-bold text-slate-200">ffffffff :</span> Full-stack 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
