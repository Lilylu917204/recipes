import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

const SkeletonList = () => {
  return (
    <Card
      className="recipeCard skeleton__wrapper"
      sx={{ width: 340, height: 393 }}
    >
      <CardHeader
        sx={{ textAlign: "center" }}
        avatar={<SkeletonElement type="avatar" />}
        title={<SkeletonElement type="title" />}
        subheader={<SkeletonElement type="title" />}
      />
      <SkeletonElement type="pic" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <Shimmer />
    </Card>
  );
};

export default SkeletonList;
