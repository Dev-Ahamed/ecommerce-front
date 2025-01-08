import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import { Gallery } from "@/components/gallery";
import { ProductInfo } from "@/components/product-info";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);

  if (!product) {
    return (
      <div className="bg-white">
        <Container>
          <p className="text-neutral-500 text-sm">Product not found.</p>
        </Container>
      </div>
    );
  }

  const suggestedProducts = product?.category?.id
    ? await getProducts({
        categoryId: product?.category?.id,
      })
    : [];

  // return <div>Test</div>;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-6">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-2">
            {/* Gallery */}
            <Gallery images={product?.images || []} />
            {/* Info */}
            <ProductInfo data={product} />
          </div>
          <hr className="my-10" />

          {/* <ProductList title="Related Items" items={suggestedProducts} /> */}
        </div>
      </Container>
    </div>
  );
}
