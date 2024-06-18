import React, { useState } from "react";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from './MenuCard'

const categories = [
  "Ring",
  "Necklace",
  "Earring",
  "Shake",
  "Neck Strap",
  "Stirrups",
  "Pendant",
];
const jewelryTypes = [
  { label: "ALL", value: "all" },
  { label: "Gold", value: "Gold" },
  { label: "Platinum", value: "Platinum" },
  { label: "Sliver", value: "Silver" },
];

const menu=[1,1,1,1,1,1]
const JewelryDetails = () => {
  const [jewelryType, setJewelryType] = useState("all");
  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/jewelry/jewelry product
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pnj.io/images/promo/211/hello-kitty-10-lp_gia_dinh-1200x450CTA.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pnj.io/images/promo/206/Banner_BST_Sakura-1200x450_CTA.png"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pnj.io/images/promo/202/hello-apple-1200x450_CTA_.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4x1 font-semibold">Yewelry product</h1>
          <p className="text-gray-500 mt-1"> ProductDescription</p>

          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>ThaoDien, District 2, HCM city</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>9:00AM to 8:30PM</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28 d">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Jewelry Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="jewelry_type"
                  value={jewelryType}
                >
                  {jewelryTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Jewelry Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="jewelry_type"
                  value={jewelryTypes}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w[80%] lg:pl-10">
          {menu.map((item)=><MenuCard/>)}
        </div>
      </section>
    </div>
  );
};

export default JewelryDetails;
