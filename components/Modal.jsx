'use client'
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function CustomModal({ isOpen, onClose, title, children }) {
  return (
    <Modal className="px-3" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className=" text-black">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody className=" text-black">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
