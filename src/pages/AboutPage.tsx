import React from "react";
import PageTitleSction from "../components/PageTitleSection";
import styled from "styled-components";
import AboutUsTitleImage from "../assets/aboutustitle.png";
const Spacer = styled.div`
  height: 7rem;
`;

const WhiteBackground = styled.div`
  background-color: white;
`;

const DummyPage: React.FC = () => {
  return (
    <div>
      <Spacer />
      <PageTitleSction title="About Us" leftImagePath={AboutUsTitleImage} rightImagePath={AboutUsTitleImage}/>
      <WhiteBackground>
      <h1>Dummy Page</h1>
      <p>This is a placeholder for a future about page.</p>
      </WhiteBackground>  
    </div>
  );
};

export default DummyPage;
