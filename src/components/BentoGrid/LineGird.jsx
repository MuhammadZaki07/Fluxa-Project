import PropTypes from "prop-types";
const LineGrid = ({
  title,
  number,
  leftWidth,
  rightWidth,
  underline,
  imageSrc,
  imageClassName,
}) => {
  return (
    <div className="relative flex items-center justify-between">
      <div className={`border-t-2 border-gray-200 ${leftWidth}`}></div>
      <h2
        className={`text-6xl font-initial font-bold mx-4 text-white whitespace-nowrap ${
          underline ? "underline" : ""
        }`}
      >
        {title} <span className="text-xs align-top ml-1">[0{number}]</span>
      </h2>
      <div className={`border-t-2 border-gray-200 ${rightWidth}`}></div>

      {number === 1 && imageSrc && (
        <img
          src={imageSrc}
          alt={`${title} Example`}
          className={`absolute ${imageClassName} shadow-lg`}
        />
      )}
    </div>
  );
};

LineGrid.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  leftWidth: PropTypes.string.isRequired,
  rightWidth: PropTypes.string.isRequired,
  underline: PropTypes.bool,
  imageSrc: PropTypes.string,
  imageClassName: PropTypes.string,
};

export default LineGrid;
