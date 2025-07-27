import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const PhoneButton = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <Button
      onClick={handlePhoneClick}
      className="fixed bottom-8 right-8 z-50 rounded-full w-16 h-16 shadow-primary hover:shadow-glow transition-all duration-300  hover:scale-110 glass-card"
      size="icon"
    >
      <Phone size={28} className="text-primary" />
    </Button>
  );
};

export default PhoneButton;