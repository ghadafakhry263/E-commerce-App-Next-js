import Image from "next/image";

export default async function ProductDetails({ params }) {
  const res = await fetch(`http://localhost:5000/pizzas/${params.id}`, {
    cache: "no-store",
  });
  const product = await res.json();

  return (
    <div className="max-w-4xl m-auto p-6">
      <div className="flex flex-col md:flex-row justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="w-[300px] h-70 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg font-semibold text-green-600 mb-6">
            Price : {product.price} EGP
          </p>

          <p className="text-primary font-playfair font-bold text-2xl mb-4">
            {product.description}
          </p>

          {/* عرض المكونات */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Ingredients:</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {product.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-gray-50 p-3 rounded-lg shadow-sm"
                  >
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <p className="mt-2 text-sm font-medium text-gray-700">
                      {ingredient.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-6">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

