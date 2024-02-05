import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ProductsBox from "../Elements/ProductsBox";
import FullButton from "../Buttons/FullButton";

// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Products() {
  return (
    <>
      <Wrapper id="latest">
        <div className="lightBg" style={{ padding: "50px 0" }}>
          <div className="container">
            <ClientSlider />
          </div>
        </div>
        <div className="whiteBg" style={{ padding: "60px 0" }}>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Latest Products</h1>
            </HeaderInfo>
            <ProductsBoxRow className="flex">
            <ProductsBoxWrapper>
              <ProductsBox
                icon="manor" // icons ( needs to be changed)
                title="MURDERS AT KARLOV MANOR"
                subtitle="There’s been a string of high-profile murders on Ravnica involving some of its most powerful citizens. It's up to you to crack the case!"
              />
            </ProductsBoxWrapper>
            <ProductsBoxWrapper>
              <ProductsBox
                icon="ixalan"
                title="THE LOST CAVERNS OF IXALAN"
                subtitle="Dig into Magic’s Mesoamerican inspired set with untold treasures beyond anything you’ve ever seen before. With massive dinosaurs, mysterious secrets, and adventure around every corner it's an adventure worth braving!"
              />
            </ProductsBoxWrapper>
            <ProductsBoxWrapper>
              <ProductsBox
                icon="eldraine"
                title="WILDS OF ELDRAINE"
                subtitle="Get lost in the Wilds of Eldraine like an enchanting storybook. Discover fantastical creatures, unbelievable settings, and beloved characters with a unique twist. Craft your own fairy tale with Magic’s immersive gameplay, art, and storytelling."
              />
            </ProductsBoxWrapper>
            <ProductsBoxWrapper>
              <ProductsBox icon="cm" title="Commander Masters" subtitle="Commander Masters is the first Masters set made for Magic’s most popular format. Upgrade your favorite decks or build something new with all the power and collectability players expect from the Masters name." />
            </ProductsBoxWrapper>
          </ProductsBoxRow>
          </div>
        </div>
      </Wrapper>

      <Wrapper id="special">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Special Products</h1>
          </HeaderInfo>
          <ProductsBoxRow className="flex">
            <ProductsBoxWrapper>
              <ProductsBox
                icon="ravnic"
                title="RAVNICA REMASTERED"
                subtitle="Return to Ravnica with this supercharged set! Join your favorite characters and revisit the guilds in all of their splendor."
              />
            </ProductsBoxWrapper>
            <ProductsBoxWrapper>
              <ProductsBox
                icon="drwho"
                title="DOCTOR WHO"
                subtitle="Explore all of time and space in this wibbly wobbly set! Meet companions, defeat foes, and travel in the TARDIS through the universe!"
              />
            </ProductsBoxWrapper>
            <ProductsBoxWrapper>
              <ProductsBox
                icon="mma"
                title="MARCH OF THE MACHINE THE AFTERMATH"
                subtitle="The battle may be won, but the Multiverse will never be the same again. Many surviving heroes have lost their powers. Lead the rebuilding effort with regular and Showcase versions of all 50 cards."
              />
            </ProductsBoxWrapper>
            <ProductsBoxWrapper>
              <ProductsBox icon="phyr" title="PHYREXIA: ALL WILL BE ONE" subtitle="Each Set Booster contains 12 Magic cards, 1 Art Card, and 1 token/ad card or card from “The List” (a list of special cards from Magic’s history and mechanically identical versions of cards originally printed in Secret Lair x Street Fighter featuring Magic-themed art—1 in 25% of packs)." />
            </ProductsBoxWrapper>
          </ProductsBoxRow>
        </div>
      </Wrapper>
    </>
  );
}


const Wrapper = styled.section`
  width: 100%;
`;
const ProductsBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ProductsBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;