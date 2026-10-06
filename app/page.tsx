import ProductCard from "@/app/components/ProductCard";
import {products} from "@/data/products";

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-1">
                {products.map((product) => (<ProductCard product={product} key={product.id}/>))}
            </div>
            <button
                className="bg-blue-900 text-white uppercase rounded-full px-6 py-1.5 mt-8 transition-colors hover:bg-blue-800">Смотреть
                всю коллекцию
            </button>

        </>
    );
}
