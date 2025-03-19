// components/PageNameButton.tsx
"use client";

import { usePageName } from "../../hooks/UsePageName";
import Button from "../Button";

const PageNameButton = () => {
  const pageName = usePageName();
  return (
    <Button
      type="button"
      text={pageName}
      className="text-[#161f32] hover:text-[#20bead] font-montserrat text-sm md:text-base font-medium"
    />
  );
};

export default PageNameButton;