import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const demo = [
  {
    category: "Nuts & seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protein",
    ingredients: ["Ground beef", "Bacon strips"],
  },
];

const MenuCard = () => {
  const handleCheckBoxChange=(value)=>{
    console.log("value")
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
              src="https://cdn.pnj.io/images/detailed/204/sp-gnct00y000078-nhan-nam-vang-18k-dinh-da-citrine-pnj-1.png"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Nhan</p>
              <p>499</p>
              <p>nice food</p>
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
            <Button variant="contained" disabled={false} type="submit">{true?"Add to Cart":"Out of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
