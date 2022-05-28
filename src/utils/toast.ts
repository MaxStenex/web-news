import toast from "react-hot-toast";

interface IMakeToast {
  message: string;
  type: "success" | "error";
}

export const makeToast = ({ message, type }: IMakeToast) => {
  return toast[type](message);
};
