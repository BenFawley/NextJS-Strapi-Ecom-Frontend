import Product from "@/app/components/Product/Product";

const url = process.env.NEXT_PUBLIC_API_URL;

export async function generateMetadata({ params: { name } }) {
  try {
    const response = await fetch(
      `${url}/api/categories?filters[name][$eq]=${name}`
    );
    const data = await response.json();

    const { meta_title, meta_description } = data.data[0].attributes;
    return {
      title: meta_title.charAt(0).toUpperCase() + meta_title.slice(1),
      description: meta_description,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getProducts(name) {
  try {
    const response = await fetch(
      `${url}/api/products?filters[categories][name][$eq]=${name}&populate[0]=image`
    );
    const data = response.json();

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

const CategoryPage = async ({ params: { name } }) => {
  const products = await getProducts(name);

  return (
    <div className="mt-8 px-6 2xl:px-0">
      <h2 className="text-2xl font-medium capitalize md:text-4xl">{name}</h2>
      <p className="mb-8 text-sm text-gray-600 md:text-base">
        Shop our exclusive {name} range
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

export default CategoryPage;
