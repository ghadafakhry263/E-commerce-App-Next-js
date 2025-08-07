import Menu from '@/components/Menu';

const Bestseller = async () => {
  const res = await fetch("http://localhost:5000/pizzas", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pizzas");
  }

  const pizzaProducts = await res.json();

  return (
    <div className="max-w-7xl mx-auto p-6 mt-[300px]  ">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">
        Our Pizza Menu
      </h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {pizzaProducts?.map((pizza) => (
          <Menu key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Bestseller;

