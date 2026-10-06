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
        <div className="bg-white rounded-3xl p-1">
            <Image src={product.image} alt={product.title} className="bg-[#abc4c5] rounded-full content-center"
                   width="100" height="150"/>
            <p className="font-bold text-2xl lowercase text-black">{product.title}</p>
            <p className="font-normal text-base text-gray-500 leading-1">{product.description}</p>
            <p className="font-normal text-base text-gray-500">{product.price}</p>
            <button className="bg-blue-900 text-white rounded-full px-1 mt-1">В корзину</button>
        </div>
    )

}