import React, { useEffect, useState } from "react";
import "./Mens.css";
import {
  Button,
  Center,
  Checkbox,
  Select,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { Like } from "../Components/Like";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Mens = () => {
  let [data, setdata] = useState([]);
  let [filter, setfilter] = useState([]);
  let [rating, setrating] = useState([]);
  let [brand, setbrand] = useState([]);
  let [sortby, setsortby] = useState([]);
  let navigate = useNavigate();
  let handlefilter = (e) => {
    if (filter.includes(e.target.value)) {
      setfilter([]);
    } else {
      setfilter([e.target.value]);
    }
  };
  let handlerating = (e) => {
    if (rating.includes(e.target.value)) {
      setrating([]);
    } else {
      setrating([e.target.value]);
    }
  };
  let handlebrand = (e) => {
    if (brand.includes(e.target.value)) {
      setbrand([]);
    } else {
      setbrand([e.target.value]);
    }
  };
  let handlesort = (e) => {
    setsortby([e.target.value]);
  };
  let resetall = (e) => {
    setfilter([]);
    setrating([]);
    setbrand([]);
    setsortby([]);
  };
  let handlesingleproduct = (id) => {
    localStorage.setItem("Productid", JSON.stringify(id));
    navigate("/SingleProduct");
  };

  if (filter.length > 0) {
    data = data.filter((e) => e.category == filter[0]);
  }
  if (rating.length > 0) {
    data = data.filter((e) => e.rating >= Number(rating[0]));
  }
  if (brand.length > 0) {
    data = data.filter((e) => e.brand == brand[0]);
  }
  if (sortby.length > 0) {
    if (sortby[0] == "") {
      setsortby([]);
    }
    if (sortby[0] == "ascending") {
      data = data.sort((a, b) => a.price - b.price);
    }
    if (sortby[0] == "descending") {
      data = data.sort((a, b) => b.price - a.price);
    }
    if (sortby[0] == "new") {
      data = data.filter((e) => e.id % 3 == 0);
    }
    if (sortby[0] == "ratingsort") {
      data = data.filter((e) => e.rating >= Number(4));
    }
  }

  useEffect(() => {
    if (data.length == 0) {
      axios
        .get("https://kind-teal-swordfish-slip.cyclic.app/data")
        .then((r) => setdata(r.data))
        .catch((e) => console.log(e));
    }
  }, [filter, rating, brand, sortby]);

  return (
    <div className="Productpage-main">
      <div className="Productpage-top">
        <h1>Mens Clothing ({data.length})</h1>
        {/* <p>{JSON.stringify(sortby)}</p> */}
        <div className="Productpage-top-sorting">
          <Select onChange={handlesort} size="xs" placeholder="Featured">
            <option value="ascending">Price : low to high</option>
            <option value="descending">Price : High to low</option>
            <option value="ratingsort">Avg customer Rating </option>
            <option value="new">Newest Arrivals</option>
          </Select>
        </div>
      </div>
      <div className="Productpage-body">
        <div className="Productpage-body-left">
          <div className="Product-brand">
            <h5>FILTERS</h5>
            <Button onClick={resetall} size="xs">
              ResetAll
            </Button>
          </div>
          <div className="Product-brand">
            <h5>CATEGORIES</h5>
          </div>
          <Checkbox
            value="T-shirt"
            isChecked={filter.includes("T-shirt")}
            onChange={handlefilter}
          >
            T-Shirt
          </Checkbox>
          <br />
          <Checkbox
            value="shirt"
            isChecked={!filter.includes("T") && filter.includes("shirt")}
            onChange={handlefilter}
          >
            Shirt
          </Checkbox>
          <br />
          <Checkbox
            value="hoodies"
            isChecked={filter.includes("hoodies")}
            onChange={handlefilter}
          >
            Hoodies
          </Checkbox>
          <br />
          <Checkbox
            value="track__pant"
            isChecked={filter.includes("track__pant")}
            onChange={handlefilter}
          >
            Track Pant
          </Checkbox>
          <br />
          <Checkbox
            value="joggers"
            isChecked={filter.includes("joggers")}
            onChange={handlefilter}
          >
            joggers
          </Checkbox>
          <br />
          <Checkbox
            value="boxer"
            isChecked={filter.includes("boxer")}
            onChange={handlefilter}
          >
            boxer
          </Checkbox>
          <br />
          <Checkbox
            value="kurta"
            isChecked={filter.includes("kurta")}
            onChange={handlefilter}
          >
            kurta
          </Checkbox>
          <br />
          <Checkbox
            value="denim"
            isChecked={filter.includes("denim")}
            onChange={handlefilter}
          >
            denim
          </Checkbox>
          <br />
          <br />
          <div className="Product-brand">
            <h5>RATING</h5>
          </div>
          <Checkbox
            value="5"
            isChecked={rating.includes("5")}
            onChange={handlerating}
          >
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 5 ? "rgb(255,164,28)" : "grey"} />
              ))}
          </Checkbox>
          <br />
          <Checkbox
            value="4"
            isChecked={rating.includes("4")}
            onChange={handlerating}
          >
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 4 ? "rgb(255,164,28)" : "grey"} />
              ))}{" "}
            & up
          </Checkbox>
          <br />
          <Checkbox
            value="3"
            isChecked={rating.includes("3")}
            onChange={handlerating}
          >
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 3 ? "rgb(255,164,28)" : "grey"} />
              ))}{" "}
            & up
          </Checkbox>
          <br />
          <Checkbox
            value="2"
            isChecked={rating.includes("2")}
            onChange={handlerating}
          >
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  outline="black"
                  key={i}
                  color={i < 2 ? "rgb(255,164,28)" : "grey"}
                />
              ))}{" "}
            & up
          </Checkbox>
          <br />
          <Checkbox
            onChange={handlerating}
            value="1"
            isChecked={rating.includes("1")}
          >
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 1 ? "rgb(255,164,28)" : "grey"} />
              ))}{" "}
            & up
          </Checkbox>
          <br />
          <br />
          <div className="Product-brand">
            <h5>BRAND</h5>
          </div>
          <Checkbox
            value="tyga"
            isChecked={brand.includes("tyga")}
            onChange={handlebrand}
          >
            Tyga
          </Checkbox>
          <br />
          <Checkbox
            value="elegant"
            isChecked={brand.includes("elegant")}
            onChange={handlebrand}
          >
            Elegant
          </Checkbox>
          <br />
          <Checkbox
            value="Bewakoof"
            isChecked={brand.includes("Bewakoof")}
            onChange={handlebrand}
          >
            Bewakoof
          </Checkbox>
          <br />
          <Checkbox
            value="Chkokko"
            isChecked={brand.includes("Chkokko")}
            onChange={handlebrand}
          >
            Chkokko
          </Checkbox>
          <br />
          <Checkbox
            value="Blue Tyga"
            isChecked={brand.includes("Blue Tyga")}
            onChange={handlebrand}
          >
            Blue Tyga
          </Checkbox>
          <br />
          <Checkbox
            value="Snitch"
            isChecked={brand.includes("Snitch")}
            onChange={handlebrand}
          >
            Snitch
          </Checkbox>
          <br />
          <Checkbox
            value="FUGAZEE"
            isChecked={brand.includes("FUGAZEE")}
            onChange={handlebrand}
          >
            FUGAZEE
          </Checkbox>
          <br />
        </div>
        {data.length > 0 && (
          <div className="Productpage-body-right">
            {data.map((e, i) => (
              <div key={i} onClick={() => handlesingleproduct(e.id)}>
                {<img width="100%" src={e.image} alt={e.id} />}
                <div className="Product-brand">
                  <h5>{e.brand.toUpperCase()}</h5>
                  <Like />
                </div>
                <p className="Product-name">{e.name}</p>

                <p>
                  <span className="Product-price">₹{e.price}</span>
                  <span className="Product-dprice">₹{e.discount_price}</span>
                </p>

                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < e.rating ? "rgb(255,164,28)" : "grey"}
                    />
                  ))}
                <br />
                <br />
                <Button border="none" p={5}>
                  <h5>{e.offer}</h5>
                </Button>
                <br />
              </div>
            ))}
          </div>
        )}
        {data.length == 0 && (
          <div className="Productpage-body-right-spinner">
            <Stack direction="row" spacing={4}>
              <Spinner size="xl" />
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
};
