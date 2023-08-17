import React from "react";
import BannerCard from "./BannerCard";


const Slidebanners = ({ slidebanners }: { slidebanners: any }) => {
  return (
    <>
      <div className="flex flex-col flex-wrap mb-6 mt-6">
      
        <div className="grid grid-cols-4 gap-4">
          {slidebanners ? (
            slidebanners
              .slice(0, 6)
              .map((banner: any) => (
                <BannerCard key={banner?.id} banner={banner} />
              ))
          ) : (
            <p>Loading banners...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Slidebanners;
