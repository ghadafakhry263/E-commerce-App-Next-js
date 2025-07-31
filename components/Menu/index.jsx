import React from "react";
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
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-55 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{pizza.name}</h3>
          <p className="text-gray-600">
            Price:{" "}
            <span className="text-black font-medium">{pizza.price} EGP</span>
          </p>

          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button className="mt-3 w-full bg-primary text-white py-2 rounded-xl hover:bg-orange-600">
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
                    <Bigsize sizes={sizes} pizza={pizza}></Bigsize>
                    <Label>Extra Additional </Label>
                    <Extra extra={extra} />
                  </div>
                  <div className="grid gap-3"></div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button className="mt-3 w-full bg-primary text-white py-2 rounded-xl hover:bg-orange-600">
                      Add to cart
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Menu;

export function Bigsize({ sizes, pizza }) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center gap-3 mb-3 border border-gray-300 rounded-2xl p-2"
        >
          <RadioGroupItem value={size.name} id="r1" />
          <Label htmlFor="r1">
            {size.name} {size.price + pizza.price} EGP
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
export function Extra({ extra }) {
  return (
    <div className="flex items-center gap-3">
      {" "}
      {extra.map((extra) => (
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">
            {extra.name} {extra.price} EGB{" "}
          </Label>
        </div>
      ))}
    </div>
  );
}
