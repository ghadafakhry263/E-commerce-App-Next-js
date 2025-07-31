import Menu from '@/components/Menu';
import React from 'react'

const Bestseller = () => {

  const pizzaProducts = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: "/2e4bf53c-572d-459f-9270-e7ccb26f1ed1_removalai_preview.png",
    price: 60,
    quantity: 1
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    image: "/7c5e2e19-d272-402d-bc93-83f13c101507_removalai_preview.png",
    price: 75,
    quantity: 1
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    image: "/9ce5a8f5-8828-432e-a0d4-b7ee40f41c28_removalai_preview.png",
    price: 85,
    quantity: 1
  },
  {
    id: 4,
    name: "Vegetarian Pizza",
    image: "/acd5f44c-81e5-4040-bc64-9558cde5d022_removalai_preview.png",
    price: 65,
    quantity: 1
  },
  {
    id: 5,
    name: "Four Cheese Pizza",
    image: "/c9438a2c-0416-4107-b3cb-673b1d5a2fac_removalai_preview.png",
    price: 80,
    quantity: 1
  },
    {
    id: 6,
    name: "Four Cheese Pizza",
    image: "/e3a398bd-c73b-417d-a725-7b9db3274724_removalai_preview.png",
    price: 80,
    quantity: 1
  }
  
];

  return (

    <div className="max-w-7xl mx-auto p-6 mt-[250px]">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">Our Pizza Menu</h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {pizzaProducts.map((pizza) => (
         <Menu key={pizza.id}  pizza={pizza}/>
        ))}
      </div>
    </div>
  );
};


export default Bestseller

