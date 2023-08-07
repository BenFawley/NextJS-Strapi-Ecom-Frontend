import Product from "@/app/components/Product/Product";

async function getSearchedProducts(name) {
  const url = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(
      `${url}/api/products?filters[name][$contains]=${name}&populate[0]=image`
    );
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

const metadata = {
  title: "Search Results",
};

const SearchResultsPage = async ({ searchParams: { name } }) => {
  const products = await getSearchedProducts(name);
  return (
    <div className="px-6 2xl:px-0">
      <h1 className="mt-8 text-2xl font-medium capitalize md:text-4xl">
        Search Results
      </h1>
      <p className="mb-8 text-sm text-gray-600 md:text-base">
        Here's what we found
      </p>
      <div className="flex flex-wrap items-start justify-start gap-[2%] md:gap-[1.33%]">
        {products.data.map((product) => (
          <Product
            key={product.id}
            slug={product.attributes.slug}
            name={product.attributes.name}
            price={product.attributes.price}
            description={product.attributes.description}
            image={product.attributes.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
