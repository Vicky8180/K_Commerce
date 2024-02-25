import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import axios from "axios";
import { useDispatch } from "react-redux";
import { productArray } from "../../../action";
const Separator = styled("div")(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
);

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
    label: "2k",
  },
  {
    value: 40,
    label: "4k",
  },
  {
    value: 60,
    label: "6k",
  },
  {
    value: 80,
    label: "8k",
  },
  {
    value: 100,
    label: "10k",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function TrackInvertedSlider() {
  const [value, setValue] = React.useState(40); 
  const [data, setData] = useState([]);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = () => {
      try {
        const response2 = axios
          .get("https://dummyjson.com/products?skip=1&limit=100")
          .then((response) => {
            const data = response.data;

            console.log(data);

            setData([...data.products]);
            return data.products;
          });
      } catch (error) {
        console.log("error in fetching data");
      }
    };
    fetchData();
  }, []);

  const dispatch = useDispatch();

  function filterProductsByCategory(products, selectedCategory) {
    const filteredProducts = products.filter(
      (product) => product.price <= selectedCategory
    );
    // console.log(products)
    if (selectedCategory === "undefined") {
      return products;
    } else {
      return filteredProducts;
    }
  }
  const filteredProducts = filterProductsByCategory(data, value * 10);
  console.log(filteredProducts);
  dispatch(productArray(filteredProducts));

  return (
    <Box sx={{ width: 350 }}>
      <Typography id="track-inverted-slider" gutterBottom>
        Price
      </Typography>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-slider"
        getAriaValueText={valuetext}
        value={value}
        onChange={handleSliderChange}
        marks={marks}
      />
      <Separator />
    </Box>
  );
}
