import React from "react";

const ImageRest = ({ src, name, width, height }) => {
  return <img width={width} src={src} alt={name} height={height} />;
};

export const RestaurantCard = ({ data }) => {
  const {
    name,
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods: { cash, card },
    rating,
    votes,
    reviews,
    src,
  } = data;
  return (
    <div
      style={{
        border: "5px solid silver",
        width: "550px",
        margin: "auto",
        marginTop: "30px",
        marginBottom: "30px",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "columns",
          padding: "25px",
          paddingBottom: "0px",
        }}
      >
        <div style={{ flex: 1, alignSelf: "center", marginRight: "45px" }}>
          <ImageRest src={src} alt={name} width={"160px"} height={"120px"} />
        </div>
        <div style={{ textAlign: "left", flex: 2 }}>
          <h3> {name} </h3>
          {/* <p> {cuisine.join(", ")}</p> */}
          <p> Cost: ₹{costForTwo} </p>
          <p>
            Min: ₹{minOrder} - Upto {deliveryTime} min
          </p>
          <p>
            Accepts: {cash && card ? "Cash and Card" : card ? "Card" : "Cash"}
          </p>
        </div>
        <div
          style={{
            textAlign: "right",
            flex: 0.8,
            paddingTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              width: "40px",
              backgroundColor: "lightcoral",
              textAlign: "center",
              marginBottom: "10px",
              padding: "10px",
              color: "white",
              fontSize: "large",
            }}
          >
            {" "}
            {rating}{" "}
          </div>
          <div> {votes} votes </div>
          <div> {reviews} reviews </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "right",
          padding: 15,
          // borderTop: "1px solid black"
        }}
      ></div>
    </div>
  );
};