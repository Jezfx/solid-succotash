import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Modal from "@mui/material/Modal";

const ModalContext = createContext({
  add: () => {},
  remove: () => {},
});

const ModalProvider = ({ children }) => {
  // const [isDismissable, setDismissable] = useState(true);
  const [modal, setModal] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleAdd = (component, dismissable) => {
    setModal(component);
    setToggle(true);
    // setDismissable(dismissable);
  };

  return (
    <ModalContext.Provider
      value={{
        add: handleAdd,
        remove: () => setToggle(false),
      }}
    >
      {children}
      <Modal
        open={toggle}
        onClose={() => setToggle(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {modal}
      </Modal>
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useModal = () => {
  const modal = useContext(ModalContext);
  if (!useModal)
    throw new Error("useModal must be used within a ModalProvider component");
  return modal;
};

export { ModalContext, ModalProvider, useModal };
