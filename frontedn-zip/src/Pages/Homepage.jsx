import React, { useEffect, useState } from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { kanchiPuramSilkData, sareePage1 } from "../Data/Saree/page1";
// import { dressPage1 } from "../Data/dress/page1";
// import { gounsPage1 } from "../Data/Gouns/gouns";
// import { kurtaPage1 } from "../Data/Kurta/kurta";
// import { mensShoesPage1 } from "../Data/shoes";
// import { mens_kurta } from "../Data/Men/men_kurta";
// import { lengha_page1 } from "../Data/Women/LenghaCholi";
import { BanarasiSilk, kanchipuramSilk, Saree, SoftSilk } from "../Data/data";

const Homepage = () => {
  const [kanchipuramData, setKanchipuramData] = useState(false);
  const [sareeData, setSareeData] = useState(false);
  const [banarasiData, setBanarasiData] = useState(false);
  const [SoftData, setSoftData] = useState(false);
  const [PochampallyData, setPochampallyData] = useState(false);

  const fetchData = async () => {
    const Kanchidata = await kanchipuramSilk();
    const Sareedata = await Saree();
    if (Sareedata) setSareeData(Sareedata);
    const BanarasiData = await BanarasiSilk();
    if (BanarasiData) setBanarasiData(BanarasiData);
    const SoftData = await SoftSilk();
    if (SoftData) setSoftData(SoftData);
    const PochampallyData = await SoftSilk();
    if (PochampallyData) setPochampallyData(PochampallyData);
    setKanchipuramData(Kanchidata);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        {/* <HomeProductSection data={mens_kurta} section={"Men's Kurta"} /> */}
        {/* <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} /> */}
        {/* <HomeProductSection data={lengha_page1} section={"Lengha Choli"} /> */}
        {/* <HomeProductSection data={sareePage1} section={"Saree"} /> */}
        {/* <HomeProductSection data={sareePage1} section={"Kanchipuram Silk"} /> */}
        {sareeData && <HomeProductSection data={sareeData} section={"Saree"} />}

        {kanchipuramData && (
          <HomeProductSection
            data={kanchipuramData}
            section={"Kanchipuram Silk"}
          />
        )}
        {PochampallyData && (
          <HomeProductSection
            data={PochampallyData}
            section={"Pochampally Silk"}
          />
        )}
        {banarasiData && (
          <HomeProductSection data={banarasiData} section={"Banarasi Silk"} />
        )}
        {SoftData && (
          <HomeProductSection data={SoftData} section={"Soft Silk"} />
        )}

        {/* <HomeProductSection data={dressPage1} section={"Dress"} /> */}
        {/* <HomeProductSection data={gounsPage1} section={"Women's Gouns"} /> */}
        {/* <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} /> */}
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>
    </div>
  );
};

export default Homepage;
