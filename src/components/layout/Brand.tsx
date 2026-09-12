type BrandProps = {
  onClick?: () => void;
};

function Brand({ onClick }: BrandProps) {
  return (
    <button className="brand brand-button" onClick={onClick} aria-label="Dennis Machio home">
      {/* <span className="brand-mark">D</span> */}
      <span>
        <strong>DENNIS MACHIO</strong>
        <small>DENCAST GLOBAL</small>
      </span>
    </button>
  );
}

export default Brand;
