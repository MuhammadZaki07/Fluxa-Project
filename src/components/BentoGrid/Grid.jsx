import LineGrid from "./LineGird";

const Grid = () => {
  return (
    <div className="space-y-20 py-28" data-aos="fade-down">
      <LineGrid
        effect="fade-left"
        title="Branding"
        number={1}
        leftWidth="w-1/3"
        rightWidth="flex-1"
        imageSrc="/bento-grid/1.png"
        imageClassName="right-44 -top-16 rotate-[-15deg] w-44 animate-swing"
      />
      <LineGrid
        effect="fade-right"
        title="UI/UX"
        number={2}
        leftWidth="w-1/9"
        rightWidth="flex-1"
      />

      <LineGrid
        effect="fade-left"
        title="Animation"
        number={3}
        leftWidth="w-5/7"
        rightWidth="w-1/4"
        underline
      />
      <LineGrid
        effect="fade-right"
        title="WEB3"
        number={4}
        leftWidth="w-1/3"
        rightWidth="flex-1"
      />
      <LineGrid
        effect="fade-left"
        title="Illustration"
        number={5}
        leftWidth="w-1/8"
        rightWidth="flex-1"
      />
    </div>
  );
};

export default Grid;
