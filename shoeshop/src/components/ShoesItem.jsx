import React from "react";
import ShoesModal from "./ShoesModal";
import { Button, Card } from "flowbite-react";

const ShoesItem = (props) => {
  const {
    id,
    name,
    alias,
    price,
    description,
    shortDescription,
    quantity,
    image,
  } = props.shoe;
  const { setOpenModal, setSelectedShoe } = props;

  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {price}$
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {shortDescription}
      </p>
      <Button
        color="gray"
        onClick={() => {
          setOpenModal(true);
          setSelectedShoe(props.shoe);
        }}
      >
        Xem Chi Tiết
      </Button>
    </Card>
  );
};

export default ShoesItem;
