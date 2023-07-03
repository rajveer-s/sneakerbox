import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default async function Home() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX mid-sole is combined with increased stack
            heights to help provide Cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
        {/* product cards */}
      </Wrapper>
    </main>
  );
}
