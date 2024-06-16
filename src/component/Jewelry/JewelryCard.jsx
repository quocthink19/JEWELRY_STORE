import React from "react";
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const JewelryCard = () => {
  return (
    <Card className="m-5 w-[18rem]">
      <div className={`${true ? "cursor-pointer" : "cursor-not-allowed"}
       relative`}>
        <img
          className="w-full h-[10rem] rounded-t-md object-cover "
          src="https://cdn.pnj.io/images/promo/210/kimcuong-sub-t5-nhan.jpg"
          alt=""
        />
        <Chip
         size="small"
         className="absolute top-2 left-2"
         color={true?"success":"error"}
         label={true?"open":"closed"}
         />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
            <p className="font-semibold text-lg">Jewelry</p>
            <p className="text-gray-500 text-sm">Craving it all? Dive into our global fla..</p>
        </div>
        <div>
            <IconButton>{false?<FavoriteIcon/>:<FavoriteBorderIcon/>}</IconButton>
        </div>
      </div>
    </Card>
  );
};

export default JewelryCard;
