import Head from "next/head";
import { Features } from "./components/Features";
// Define a function to fetch data
const fetchData = async () => {
  // Simulate fetching data (replace this with your actual data fetching logic)
  return {
    title: "FindNow - Powerful POS System",
    description:
      "FindNow provides cutting-edge POS and inventory management for businesses.",
  };
};

// HomePage component
const HomePage = async () => {
  const { title, description } = await fetchData(); // Fetch data here

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="ICYHTpLPY5OCwiF87Y2JBH9862VsZs9KJlj_9L7sWbM"
        />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="container mx-auto">
        <div>
          <Features />
        </div>
      </div>
    </>
  );
};

export default HomePage;
