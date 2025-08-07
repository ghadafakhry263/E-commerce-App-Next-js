"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
 import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
const sizes = [
  { id: 1, name: "small ", price: 0 },
  { id: 2, name: "Meduim ", price: 4 },
  { id: 3, name: "Large ", price: 6 },
];

const extra = [
  { id: 1, name: "tomato ", price: 1.5 },
  { id: 2, name: "onion  ", price: 2 },
  { id: 3, name: "checken ", price: 5 },
];

const Menu = ({ pizza }) => {
   const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const handleAddToCart = () => {
    const selectedPizza = {
      id: pizza.id,
      name: pizza.name,
      image: pizza.image,
      basePrice: pizza.price,
      size: selectedSize,
      extras: selectedExtras,
      totalPrice:
        pizza.price +
        (selectedSize?.price || 0) +
        selectedExtras.reduce((acc, item) => acc + item.price, 0),
    };

    dispatch(addToCart(selectedPizza));
  };
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300  max-w-sm mx-auto">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-[300px] h-70 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{pizza.name}</h3>
          <p className="text-gray-600">
            Price:{" "}
            <span className="text-black font-medium">{pizza.price} EGP</span>
          </p>

<Dialog>
  <>
    <form onSubmit={(e) => e.preventDefault()}>
      <DialogTrigger asChild>
        <Button className="mt-3 w-full bg-primary text-white py-2 rounded-xl hover:bg-orange-900">
          Add to Cart
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            <div>
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-50 rounded-full m-auto h-55 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {pizza.name}
              </h3>
              <p className="text-gray-800 text-center">
                Price:{" "}
                <span className="text-black font-medium  text-center">
                  {pizza.price} EGP
                </span>
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3 text-center font-bold">
            <Label>Pick your size </Label>
            <Bigsize sizes={sizes} pizza={pizza}   selectedSize={selectedSize}
      setSelectedSize={setSelectedSize}>
            </Bigsize>
            <Label>Extra Additional </Label>
            <Extra extra={extra} selectedExtras={selectedExtras}
      setSelectedExtras={setSelectedExtras} />
          </div>
          <div className="grid gap-3"></div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button  onClick={handleAddToCart} className="mt-3 w-full bg-primary text-white py-2 rounded-xl hover:bg-orange-600">
              Add to cart
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </form>
  </>
</Dialog>
        </div>
      </div>
    </div>
  );
};





export default Menu;

export function Bigsize({ sizes, pizza, selectedSize, setSelectedSize }) {
  return (
    <RadioGroup
      value={selectedSize?.name}
      onValueChange={(value) => {
        const size = sizes.find((s) => s.name === value);
        setSelectedSize(size);
      }}
    >
      {sizes.map((size) => (
        <div key={size.id} className="flex items-center gap-2  mb-3 border border-gray-300 rounded-2xl p-2">
          <RadioGroupItem value={size.name} id={`size-${size.id}`} />
          <Label htmlFor={`size-${size.id}`}>
            {size.name} {size.price + pizza.price} EGP
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

export function Extra({ extra, selectedExtras, setSelectedExtras }) {
  const toggleExtra = (item) => {
    const exists = selectedExtras.find((e) => e.id === item.id);
    if (exists) {
      setSelectedExtras(selectedExtras.filter((e) => e.id !== item.id));
    } else {
      setSelectedExtras([...selectedExtras, item]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {extra.map((item) => (
        <div key={item.id} className="flex items-center gap-3">
          <Checkbox
            id={`extra-${item.id}`}
            checked={selectedExtras.some((e) => e.id === item.id)}
            onCheckedChange={() => toggleExtra(item)}
          />
          <Label htmlFor={`extra-${item.id}`}>
            {item.name} {item.price} EGP
          </Label>
        </div>
      ))}
    </div>
  );
}
