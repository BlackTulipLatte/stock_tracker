import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IsMarketOpen = () => {
  const today = new Date();
  const US_DEADLINE = new Date("1984-06-09T16:30");
  console.log(today);
  console.log(US_DEADLINE);
  console.log(today.getHours());

  // if we are checking in before 16:00
  if (today.getHours() < US_DEADLINE.getHours && today.getHours() >= 0) {
    toast.success("Market is open! Happy browsing! :)", {
      toastId: "open",
    });
  }
  // if we are checking during 16:00 but not past 16:30
  else if (
    today.getHours() === US_DEADLINE.getMinutes &&
    today.getMinutes() < 30
  ) {
    toast.warn("Market closes in 30 minutes! :O", {
      toastId: "still_open",
    });
  }
  // otherwise we are closed
  else {
    toast.error("Market is closed! :(", {
      toastId: "closed",
    });
  }
  return;
};

export default IsMarketOpen;
