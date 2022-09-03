import React from "react";
import { BackgroundImage, Body, DirectoryContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const Directory = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(route);
  };

  return (
    <DirectoryContainer onClick={handleNavigation}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryContainer>
  );
};

export { Directory };
