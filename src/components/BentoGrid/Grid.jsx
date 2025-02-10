import LineGrid from "./LineGird";

const Grid = () => {
  return (
    <div className="space-y-20 py-28">
      <LineGrid
        title="Branding"
        number={1}
        leftWidth="w-1/3"
        rightWidth="flex-1"
        imageSrc="/bento-grid/1.png"
        imageClassName="right-44 -top-16 rotate-[-15deg] w-44 animate-swing"
      />
      <LineGrid
        title="UI/UX"
        number={2}
        leftWidth="w-1/9"
        rightWidth="flex-1"
      />

      <LineGrid
        title="Animation"
        number={3}
        leftWidth="w-5/7"
        rightWidth="w-1/4"
        underline
      />
      <LineGrid
        title="WEB3"
        number={4}
        leftWidth="w-1/3"
        rightWidth="flex-1"
      />
      <LineGrid
        title="Illustration"
        number={5}
        leftWidth="w-1/8"
        rightWidth="flex-1"
      />
    </div>
  );
};

export default Grid;
