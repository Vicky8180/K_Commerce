import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useDispatch } from "react-redux";
import { productArray } from "../../../action";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const names = props.names;
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const [data, setData] = useState([]);

  console.log(personName);
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

  function filterProductsByCategory(products, selectedCategory) {
    const filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
    // console.log(products)
    if (selectedCategory === "undefined") {
      return products;
    } else {
      return filteredProducts;
    }
  }
  var filteredProducts;
  if (personName.length === 0) {
    filteredProducts = data;
  } else {
    filteredProducts = filterProductsByCategory(data, personName[0]);
  }
  dispatch(productArray(filteredProducts));

  return (
    <div>
      <FormControl sx={{ m: 1, width: 350, mt: 3 }}>
        <Select
          single
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em></em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
