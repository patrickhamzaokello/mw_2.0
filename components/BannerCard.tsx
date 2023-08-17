import React from "react";
import Image from "next/image";

export interface SBannerCard {
    id:number;
    playlistID: string;
    imagepath: string;

}

const BannerCard = ({banner}: {banner: SBannerCard}) =>{
    return (
        <div className="w-full flex flex-col">

            <div className="w-full h-[400px] relative">
                <Image src={banner?.imagepath ?  banner?.imagepath : ""} 
                alt={banner?.playlistID}
                fill={true} />
            </div>

        </div>
    )
}
export default BannerCard;