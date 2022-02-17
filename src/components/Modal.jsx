import ReactDOM from "react-dom";
// import ValidatedForm from "./ValidatedForm";
import Form from "./Form";

export default function Modal() {
  return ReactDOM.createPortal(
    <div className="modal-background">
      {/* <ValidatedForm /> */}
      <Form />
    </div>,
    document.body
  );
}
