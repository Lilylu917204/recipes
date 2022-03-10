import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const SkeletonList = () => {
  return (
    <div className="recipeDetail">
      <Card className="recipeDetail__left">
        <div className="info">
          <SkeletonElement type="title2" />
          <SkeletonElement type="title2" />
          <div className="skeleton-info">
            <div>
              <SkeletonElement type="pic2" />
            </div>
            <div>
              <SkeletonElement type="text" />
              <SkeletonElement type="text" />
              <SkeletonElement type="text" />
            </div>
          </div>
        </div>
      </Card>

      <Card className="recipeDetail__right">
        <CardContent>
          <SkeletonElement type="title2" />
          <div className="skeleton-ingredient">
            <div>
              <SkeletonElement type="avatar" />
            </div>
            <div>
              <SkeletonElement type="text" />
              <SkeletonElement type="text" />
              <SkeletonElement type="text" />
            </div>
          </div>
          <div className="skeleton-ingredient">
            <div>
              <SkeletonElement type="avatar" />
            </div>
            <div>
              <SkeletonElement type="text" />
              <SkeletonElement type="text" />
              <SkeletonElement type="text" />
            </div>
          </div>
          <div className="skeleton-ingredient">
            <div>
              <SkeletonElement type="avatar" />
            </div>
            <div>
              <SkeletonElement type="text" />
              <SkeletonElement type="text" />
              <SkeletonElement type="text" />
            </div>
          </div>
          <div className="skeleton-ingredient">
            <div>
              <SkeletonElement type="avatar" />
            </div>
            <div>
              <SkeletonElement type="text" />
              <SkeletonElement type="text" />
              <SkeletonElement type="text" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Shimmer />
    </div>
  );
};

export default SkeletonList;
