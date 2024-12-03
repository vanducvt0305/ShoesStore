import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

const ShoesModal = (props) => {
  const { openModal, setCloseModal, selectedShoe } = props;
  return (
    <div>
      <>
        <Modal show={openModal} onClose={() => setCloseModal(false)}>
          <Modal.Header>Detail Shoes</Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <img src={selectedShoe.image} alt="" />
              </div>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {selectedShoe.name}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {selectedShoe.shortDescription}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {selectedShoe.price}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" onClick={() => setCloseModal(false)}>
              I accept
            </Button>
            <Button color="gray" onClick={() => setCloseModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default ShoesModal;
