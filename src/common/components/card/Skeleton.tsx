import React from "react";
import styled, { keyframes } from "styled-components";

export const Skeleton = () => {
  return (
  <StyledSkeletonCard>
    <SkeletonImage />
    <SkeletonInfo>
      <SkeletonText width="60%" />
      <SkeletonText width="40%" />
      <SkeletonText width="80%" />
    </SkeletonInfo>
  </StyledSkeletonCard>

  );
};

const loading = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 200px 0;
    }
`;

const SkeletonBlock = styled.div`
    background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
    background-size: 200% 100%;
    animation: ${loading} 1.5s infinite;
    border-radius: 4px;
`;

const StyledSkeletonCard = styled.div`
  border-radius: 8px;
  border: 2px solid #ddd;
  max-width: 220px;
  width: 100%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
`;

const SkeletonImage = styled(SkeletonBlock)`
  width: 100%;
  height: 250px;
  border-radius: 6px 6px 0 0;
`;

const SkeletonInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkeletonText = styled(SkeletonBlock)<{ width: string }>`
  height: 18px;
  width: ${(props) => props.width};
`;

