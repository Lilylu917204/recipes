import React from "react";
import SkeletonElement from "components/skeletons/SkeletonElement";
import Shimmer from "components/skeletons/Shimmer";
import { MaterialCard } from "common/materialUI";

const SkeletonList = () => {
  return (
    <div className="recipeDetail">
      <MaterialCard.Card className="recipeDetail__left">
        <MaterialCard.CardContent className="info">
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
        </MaterialCard.CardContent>
      </MaterialCard.Card>

      <MaterialCard.Card className="recipeDetail__right">
        <MaterialCard.CardContent>
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
        </MaterialCard.CardContent>
      </MaterialCard.Card>
      <Shimmer />
    </div>
  );
};

export default SkeletonList;
