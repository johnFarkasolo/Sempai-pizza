import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="140" cy="140" r="140" />
      <rect x="0" y="292" rx="3" ry="3" width="280" height="30" />
      <rect x="0" y="330" rx="3" ry="3" width="280" height="80" />
      <rect x="1" y="423" rx="3" ry="3" width="80" height="28" />
      <rect x="170" y="420" rx="20" ry="20" width="110" height="36" />
    </ContentLoader>
  );
}

export default LoadingBlock;
