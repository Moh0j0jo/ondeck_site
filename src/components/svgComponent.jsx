

const SvgComponent = ({ width, height, url }) => {
  
  return (
    <>
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <image href={url} width="100%" height="100%" />
      </svg>
    </>
  );
};

export default SvgComponent;
