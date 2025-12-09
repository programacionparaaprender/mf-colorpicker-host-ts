// declarations.d.ts
declare module "mf_colorlist/ColorList" {
  const ColorList: React.ComponentType<{ lista: string[] }>;
  export default ColorList;
}

declare module "mf_colorpicker/ColorPicker" {
  const ColorPicker: React.ComponentType<{
    color: string;
    colorListado: string[];
    handleChangeColor: (color: string) => void;
    handleSubmitSaveColor: () => void;
  }>;
  export default ColorPicker;
}

declare module "mf_colorpicker/useColors" {
  const useColors: () => {
    color: string;
    colorListado: string[];
    handleChangeColor: (color: string) => void;
    handleSubmitSaveColor: () => void;
  };
  export default useColors;
}

declare module "mf_googlemaps_ts/MyGoogleMap" {
  import React from "react";
  
  const MyGoogleMap: React.FC;
  export default MyGoogleMap;
}

// declarations.d.ts (si ya lo tienes, añade esto)
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.sass' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}