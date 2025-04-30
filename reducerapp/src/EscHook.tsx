import { useEffect } from "react";
import { EventEmitter } from "stream";

interface EscHookProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EscHook = ({ isOpen, onClose }: EscHookProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
};
