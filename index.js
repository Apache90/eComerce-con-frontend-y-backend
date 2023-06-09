const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const products = [
  {
    id: 1,
    name: "Nike Air Jordan 13",
    image: "/assets/img/H13_airJordan.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 2,
    name: "Nike Air Max 90",
    image: "/assets/img/H90_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 3,
    name: "Nike Air Jordan 3 Retro Cardil Red",
    image: "/assets/img/HcardilRed_AirJordan3Retro.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 4,
    name: "Nike Air Trainer 1 Dark Smoke Grey",
    image: "/assets/img/HdarkSmokeGrey_airTrainer1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 5,
    name: "Nike Dunk High x Soulgoods",
    image: "/assets/img/HhighxSoulgoods_NikeDunk.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 6,
    name: "Nike Dunk Hi Retro",
    image: "/assets/img/HhiRetro_nikeDunk.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 7,
    name: "Nike Lebron IX Low",
    image: "/assets/img/Hlow_nikeLebronIX.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 8,
    name: "Nike Air Force 1 Low Retro QS",
    image: "/assets/img/HLowRetroQS_nikeAirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 9,
    name: "Nike Blazer mid '77 Vintage",
    image: "/assets/img/Hmid'77vintage_nikeBlazer.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 10,
    name: ">Nike Air Jordan Midnight Navy",
    image: "/assets/img/HmidnightNavy_airJordan.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 11,
    name: "Nike Air Max 90 NRG",
    image: "/assets/img/HNRG_airMax90.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 12,
    name: "Nike Air Jordan 12 Retro Play Offs",
    image: "/assets/img/Hplayoffs_AirJordan12Retro.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 13,
    name: "Nike Air Max Plus III",
    image: "/assets/img/HplusIII_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 14,
    name: "Nike Air Force 1 Serena",
    image: "/assets/img/Hserena_AirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 15,
    name: "Jordan Series SE Rui",
    image: "/assets/img/HseRui_jordanSeries.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 16,
    name: "Nike Air Force 1 LXX Swarovski",
    image: "/assets/img/Hswarovski_wAirForce1Lxx.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 17,
    name: "Nike Air Trainer 1",
    image: "/assets/img/HTrainer1_nikeAir.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 18,
    name: "Nike Air Max TW Next Nature",
    image: "/assets/img/HTwNextNature_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 19,
    name: "Nike Air Force 1 '07 UNO",
    image: "/assets/img/Huno_AirForce1_07.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 20,
    name: "Nike Dunk 1985 Yellow Acid Wash",
    image: "/assets/img/HyellowAcidWash_nikeDunk1985.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 21,
    name: "Nike Air Force 1 '07",
    image: "/assets/img/M07__nikeAirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 22,
    name: "Nike Air Max 270",
    image: "/assets/img/M270_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 23,
    name: "Nike Aire Max 90 Futura",
    image: "/assets/img/M90Futura_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 24,
    name: "Nike Aire Max 90 Futura",
    image: "/assets/img/M90Futura_nikeAirMax1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 25,
    name: "Nike Air Max 90 G NGR",
    image: "/assets/img/M90GNGR_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 26,
    name: "Nike Air Force 1 '07",
    image: "/assets/img/M_07_nikeAireForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 27,
    name: "Nike Air Max Bliss",
    image: "/assets/img/Mbliss_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 28,
    name: "Nike Air Max Furyosa",
    image: "/assets/img/Mfuryosa_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 29,
    name: "Nike Dunk High 1985",
    image: "/assets/img/Mhigh1985_nikeDunk.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 30,
    name: "Nike x Billie Eilish High '07",
    image: "/assets/img/MHigh_07_nikeXBillieEilishAirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 31,
    name: "Nike Air Force 1 High Original",
    image: "/assets/img/MhighOriginal_nikeAirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 32,
    name: "Nike Air Force 1 High Utility 2.0",
    image: "/assets/img/MhighUtility2.0_nikeAirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 33,
    name: "Nike Air Force 1 Lover XX",
    image: "/assets/img/MloverXX_nikeAirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 34,
    name: "Nike Dunk Low SE",
    image: "/assets/img/MlowSE_nikeDunk.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 35,
    name: "Nike Air Force 1 LXX",
    image: "/assets/img/MLXX_nikeAirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },

  {
    id: 36,
    name: "Nike Air Force 1 Sculpt",
    image: "/assets/img/Msculpt_nikeAirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 37,
    name: "Nike Air Force 1 Shadow",
    image: "/assets/img/Mshadow_nikeAireForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },

  {
    id: 38,
    name: "Nike Air Force 1 Shadow SE",
    image: "/assets/img/MshadowSE_nikeAirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },

  {
    id: 39,
    name: "Nike Air VaporMax EVO",
    image: "/assets/img/MVaporMaxEVO_nikeAir.png",
    price: 32000,
    size: 42,
    stock: 5,
  },

  {
    id: 40,
    name: "Nike Air Max Pre-Day SE",
    image: "/assets/img/MpreDaySE_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.post("/api/pay", (req, res) => {
  const ids = req.body;
  const procutsCopy = products.map((p) => ({ ...p }));
  ids.forEach((id) => {
    const product = procutsCopy.find((p) => p.id === id);
    if (product.stock > 0) {
      product.stock--;
    } else {
      throw "Sin stock";
    }
  });
  products = procutsCopy;
  res.send(products);
});

app.use("/", express.static("frontEnd"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});