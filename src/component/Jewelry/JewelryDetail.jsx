import React, { useEffect, useState } from "react";
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
import {useNavigate, useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { store } from "../State/store";
import { getAreaById } from "../State/Area/Action";
import { getMenuItemsByJewelryId } from "../State/Menu/Action";
import { getAllCategory } from "../State/Categories/Action";


const jewelryTypes = [
  { label: "ALL", value: "all" },
  { label: "Gold", value: "Gold" },
  { label: "Platinum", value: "Platinum" },
  { label: "Sliver", value: "Silver" },
];

const JewelryDetails = () => {
  const [jewelryType, setJewelryType] = useState("all");
  const navigate = useNavigate()
  const dispatch= useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth,area,category,menu}= useSelector(store=>store)
  const {SelectedCaterogy,setSelectedCaterogy} = useState("");

  const {id} = useParams();


  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  const handleFilterCategory = (e,value) => {
    console.log(e.target.value, e.target.name,value);
  };


  console.log("area" ,area);
  console.log("category",category)
  console.log("menu", menu)

 useEffect(()=>{
  dispatch(getAreaById({jwt,areaId:id}))
  dispatch(getAllCategory({jwt}))
},[])

 useEffect(() => {
  dispatch(getMenuItemsByJewelryId({jwt
  }));
 },[SelectedCaterogy])

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
                src={area.area?.images[0]}
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
          <h1 className="text-4x1 font-semibold">{area.area?.name}</h1>
          <p className="text-gray-500 mt-1"> {area.area?.description}</p>

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
                  onChange={handleFilterCategory}
                  name="jewelry_type"
                  value={setSelectedCaterogy}
                >
                  {category.categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w[80%] lg:pl-10">
          {menu.menuItems.map((item)=><MenuCard item={item }/>)}
        </div>
      </section>
    </div>
  );
};

export default JewelryDetails;