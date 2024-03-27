import React from "react";
import Navbar from "../componets/Navbar";
import Breadcrukms from "../componets/Breadcrukms";
import Card from "../componets/Card";
import ExploreDropDown from "../componets/ExploreDropDown";

import courseImg1 from "../assets/imges/Rectangle 1761.png";

import courseImg2 from "../assets/imges/Rectangle 1762.png";
import courseImg3 from "../assets/imges/Rectangle 1763.png";
import courseImg4 from "../assets/imges/Rectangle 1764.png";
import courseImg5 from "../assets/imges/Rectangle 1771.png";
import SortByButton from "../componets/SortByButton";
function Home() {
  return (
    <div>
      <Navbar />
      <hr className="bg-[#DBE5F5] h-1" />
      <Breadcrukms />
      <hr className="bg-[#DBE5F5] " />
      <div className="flex justify-center mt-5 ">
        <div className="flex w-[70%] justify-between ">
          <ExploreDropDown />
          <SortByButton />
        </div>
      </div>
      <div className="flex justify-center mt-5 w-full">
        <div className="flex flex-wrap gap-10 w-[70%] ">
          <Card
            isLatest={true}
            image={courseImg1}
            heading={"The Guide to Computer Programming in Java"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            }
            type={"by codeblu"}
          />
          <Card
            isLatest={true}
            image={courseImg2}
            heading={"The Complete Bootstrap Beginners Course With 100+ ..."}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            }
            type={"by client"}
          />
          <Card
            isLatest={true}
            image={courseImg3}
            heading={"The Guide to Computer Programming in Java"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            }
            type={"by client"}
          />
          <Card
            image={courseImg4}
            heading={"The Guide to Computer Programming in Java"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            }
            type={"by codeblu"}
          />
          <Card
            image={courseImg5}
            heading={"The Guide to Computer Programming in Java"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            }
            type={"by codeblu"}
          />
          <Card
            image={courseImg1}
            heading={"The Guide to Computer Programming in Java"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            }
            type={"by codeblu"}
          />
          <Card
            image={courseImg1}
            heading={"The Guide to Computer Programming in Java"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            }
            type={"by codeblu"}
          />
          <Card
            image={courseImg1}
            heading={"The Guide to Computer Programming in Java"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            }
            type={"by codeblu"}
          />
          <Card
            image={courseImg1}
            heading={"The Guide to Computer Programming in Java"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            }
            type={"by codeblu"}
          />
          <Card
            image={courseImg1}
            heading={"The Guide to Computer Programming in Java"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            }
            type={"by codeblu"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
