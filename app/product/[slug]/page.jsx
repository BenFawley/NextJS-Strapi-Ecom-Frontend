import ProductDetails from "@/app/components/Product/ProductDetails";

async function getProductDetails(slug) {
  const url = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(
      `${url}/api/products?filters[slug][$eq]=${slug}&populate[0]=variations&populate[1]=image`
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function generateMetadata({ params: { slug } }) {
  const response = await getProductDetails(slug);

  const { meta_title, meta_description } = response.data[0].attributes;

  return {
    title: meta_title,
    description: meta_description,
  };
}

const ProductDetailsPage = async ({ params: { slug } }) => {
  const productArray = await getProductDetails(slug);
  const product = productArray.data[0];

  const sizeArray = [...product.attributes.variations.data];

  return (
    <ProductDetails
      id={product.id}
      name={product.attributes.name}
      price={product.attributes.price}
      description={product.attributes.description}
      image={product.attributes.image}
      sizes={sizeArray}
    />
  );
};

export default ProductDetailsPage;
