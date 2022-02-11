import ReactDOM from "react-dom";
import ValidatedForm from "./ValidatedForm";

export default function Modal({ toggleModal }) {
  return ReactDOM.createPortal(
    <div className="modal-background">
      <ValidatedForm toggleModal={toggleModal} />
    </div>,
    document.body
  );
}
