import React from "react";
import { Accordion, AccordionDetails, AccordionSummary,FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    MenuItem, } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../State/Cart/Action";

const demo = [
    {
      category: "GoldenAge",
      ingredients: ["14k","18k","24k"],
    },
    {
      category: "Size",
      ingredients: ["21","22", "23","24", "25"],
    },
  ];

const MenuCart = ({item}) => {

    const dispatch = useDispatch();
    const handleCheckBoxChange=(value)=>{
        console.log("value")
      }
      const handleAddItemToCart =(e)=>{
        e.preventDefault()
     const reqData = {
      jwt : localStorage.getItem("jwt"),
      cartItem:{
      jewelryId :item.id,
      quanity:1 ,
      }
    }
    dispatch(addItemToCart(reqData))
    console.log("req Data",reqData)
  }


  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src={item.images[0]}
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2x1">
              <p className="font-semibold text-x1">{item.name}</p>
              <p>{item.price} USD</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
      <form>
          <div className="flex gap-5 flex-wrap">
            {demo.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((item) => (
                    <FormControlLabel
                      control={<Checkbox onChange={()=>handleCheckBoxChange(item)} />}
                      label={item}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <Button onClick={handleAddItemToCart} variant="contained" 
            disabled={false} type="submit">{true?"Add to Cart":"Out of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCart;
