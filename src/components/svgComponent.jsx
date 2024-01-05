

const SvgComponent = ({ width, height, url }) => {
  
  if (width === 100) {
      width = window.innerWidth * 0.34
  } 

  return (
    <>
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <image href={url} width="100%" height="100%" />
      </svg>
    </>
  );
};

export default SvgComponent;
