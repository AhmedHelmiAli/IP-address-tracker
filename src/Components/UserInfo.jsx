import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function UserInfo() {
  const { userData, error } = useContext(DataContext);
  const { latitude, longitude } = userData;

  if (!latitude || !longitude || error) return;
  return (
    <div className="relative flex-col mb-[-14rem] md:mb-[-9rem] flex md:flex-row md:justify-between  z-10 w-[92%]  lg:w-4/5   md:px-2 xl:px-10 px-8 pt-5 py-7 mx-auto bg-white rounded-md md:rounded font-semibold sm:gap-x-24 md:gap-x-10 lg:gap-x-16 xl:gap-x-28 ">
      <div className="mb-4 md:mb-0 md:text-left ">
        <h3 className="mb-2 font-sans text-xs uppercase lg:text-md text-slate-500">
          ip address
        </h3>
        <p className="text-xl lg:text-xl">{userData?.ip}</p>
      </div>
      <div className="mb-4 md:mb-0 md:text-left ">
        <h3 className="mb-2 text-xs uppercase lg:text-md text-slate-500">
          location
        </h3>
        <p className="text-xl lg:text-xl">
          <span className="mr-1">{userData?.city}</span>
          <span>{userData?.country}</span>
        </p>
      </div>
      <div className="mb-4 md:mb-0 md:text-left ">
        <h3 className="mb-2 text-xs uppercase lg:text-md text-slate-500">
          timezone
        </h3>
        <p className="text-xl lg:text-xl">{userData?.timezone}</p>
      </div>
      <div className="md:text-left ">
        <h3 className="mb-2 text-xs uppercase lg:text-md text-slate-500">
          isp
        </h3>
        <p className="text-xl lg:text-xl">{userData.org}</p>
      </div>
    </div>
  );
}

export default UserInfo;
