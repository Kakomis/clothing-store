import React, { FC } from "react";
import { BackgroundImage, Body, DirectoryContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { DirectoryCategory } from '../Directories'

type DirectoryProps = {
  category: DirectoryCategory
}

const Directory: FC<DirectoryProps> = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate();

  const handleNavigation = () => navigate(route);

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
