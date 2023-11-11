import { useState } from "react";
import { panelData } from "../data";
import Panel from "./Panel";
const PanelGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handelClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <main className="container">
      {panelData.map((panel, index) => (
        <Panel
          key={index}
          title={panel.title}
          imagenUrl={panel.imageUrl}
          isActive={index === activeIndex}
          onClick={() => handelClick(index)}
        />
      ))}
    </main>
  );
};

export default PanelGallery;
