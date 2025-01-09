import { useEffect, useState } from "react";

type Section =
  | "hero"
  | "features"
  | "products"
  | "pricing"
  | "demo"
  | "support";
interface MetaTag {
  id: number;
  title: string;
  description: string;
}

const useDynamicMetadata = () => {
  const [currentSection, setCurrentSection] = useState<Section | null>(null); // Allow null here
  const [metadata, setMetadata] = useState<
    Record<Section, { title: string; description: string }>
  >({
    hero: { title: "", description: "" },
    features: { title: "", description: "" },
    // keyFeature: { title: "", description: "" },
    products: { title: "", description: "" },
    pricing: { title: "", description: "" },
    demo: { title: "", description: "" },
    support: { title: "", description: "" },
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      let newCurrentSection: Section | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // Detect if section is in the top quarter of the viewport
        if (rect.top >= 0 && rect.top < window.innerHeight / 4) {
          newCurrentSection = section.getAttribute(
            "data-section"
          ) as Section | null;
        }
      });

      // Only update if the section has changed to avoid unnecessary renders
      if (newCurrentSection !== currentSection) {
        setCurrentSection(newCurrentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  useEffect(() => {
    const fetchMeta = async () => {
      const response = await fetch("http://localhost:3000/api/meta", {
        cache: "no-store",
      });
      const metaTags: MetaTag[] = await response.json();
      console.log("Fertched Meta tags>>>>", metaTags);
      const updatedMetadata: Record<
        Section,
        { title: string; description: string }
      > = {
        hero: metaTags[0]
          ? { title: metaTags[0].title, description: metaTags[0].description }
          : { title: "", description: "" },
        features: metaTags[1]
          ? { title: metaTags[1].title, description: metaTags[1].description }
          : { title: "", description: "" },
        // keyFeature: metaTags[2] ? { title: metaTags[2].title, description: metaTags[2].description } : { title: "", description: "" },
        products: metaTags[4]
          ? { title: metaTags[4].title, description: metaTags[4].description }
          : { title: "", description: "" },
        pricing: metaTags[3]
          ? { title: metaTags[3].title, description: metaTags[3].description }
          : { title: "", description: "" },
        demo: metaTags[5]
          ? { title: metaTags[5].title, description: metaTags[5].description }
          : { title: "", description: "" },
        support: metaTags[6]
          ? { title: metaTags[6].title, description: metaTags[6].description }
          : { title: "", description: "" },
      };

      setMetadata(updatedMetadata);
    };

    fetchMeta();
  }, []);

  useEffect(() => {
    const defaultMetadata = {
      title: "FindNow - Inventory Management System",
      description:
        "Manage your business inventory and reach global customers with FindNow.",
    };
    // console.log("Updated Meta>>>>>", metadata)
    const { title, description } = currentSection
      ? metadata[currentSection]
      : defaultMetadata;

    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }, [currentSection, metadata]);
};

export default useDynamicMetadata;
