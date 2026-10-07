import Image from "next/image";

export default function ProductCard({product}: {
    product: {
        id: number
        image: string
        title: string
        description: string
        price: number
    }
}) {

    return (
        <div className="bg-white rounded-3xl p-3 flex flex-col w-50 justify-between">
            <Image src={product.image} alt={product.title} className="bg-[#abc4c5] rounded-3xl w-full"
                   width="200" height="200"/>
            <span className="font-bold text-2xl lowercase text-black">{product.title}</span>
            <span className="font-normal text-base text-gray-500 leading-5">{product.description}</span>
            <span className="font-normal text-base text-gray-500">{product.price}</span>
            <button className="bg-blue-900 text-white rounded-full px-9 py-1.5 mt-2">В корзину</button>
        </div>
    )

}