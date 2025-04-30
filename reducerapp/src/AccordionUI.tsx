import { useState } from "react";

interface AccordianProps {
  title: string;
  description: string;
}

interface AccordianItemsProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const AccordianUI = ({ title, description }: AccordianProps) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <AccordianItem title={title} isOpen={open} onToggle={handleToggle}>
        {description}
      </AccordianItem>
    </div>
  );
};

const AccordianItem = ({
  title,
  children,
  isOpen,
  onToggle,
}: AccordianItemsProps) => {
  return (
    <div className="border rounded-md mb-2">
      <button
        onClick={onToggle}
        className="w-full text-right px-4 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
      >
        {title}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
