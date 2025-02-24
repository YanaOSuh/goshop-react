import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Content from "./Content";

const ModalController = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const modalTimer = setTimeout(() => setModalOpen(true), 7000);
        return () => clearTimeout(modalTimer);
    }, []);

    return ( 
        <>
            {isModalOpen && (
                <Modal setModalOpen={setModalOpen} >
                    <Content setModalOpen={setModalOpen} />
                </Modal>
            )}
        </>
    );
};

export default ModalController;