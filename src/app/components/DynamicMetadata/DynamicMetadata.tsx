// components/DynamicMetadata.tsx
"use client";
import { useEffect } from "react";
import useDynamicMetadata from "../../hooks/useDynamicMetadata";

const DynamicMetadata = () => {
  useDynamicMetadata();
  return null; // This component does not render anything visible
};

export default DynamicMetadata;
