import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";
import { MaterialCard } from "../../common/materialUI";

const SkeletonList = () => {
  return (
    <div className="recipeCard">
      <MaterialCard.Card
        className="recipeCard__cards skeleton__wrapper"
        sx={{ width: 340, height: 393 }}
      >
        <MaterialCard.CardHeader
          sx={{ textAlign: "center" }}
          title={<SkeletonElement type="title" />}
          subheader={<SkeletonElement type="title" />}
        />
        <SkeletonElement type="pic" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <Shimmer />
      </MaterialCard.Card>
    </div>
  );
};

export default SkeletonList;
