const Notification = ({ children, className }) => {
  const existingContainer = document.querySelector("#__container");
  if (existingContainer) {
    return createPortal(children, existingContainer);
  }
  const container = document.createElement("div");
  container.id = "__container";
  if (className) container.className = className;

  const parentElem = document.querySelector("#__next");
  if (parentElem) parentElem.appendChild(container);

  return createPortal(children, container);
};

export default Notification;
