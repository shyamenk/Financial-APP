import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import NewTransaction from "./NewTransaction";
import { PlusSquare, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

interface Form {
  id: number;
}

const MultiForm: React.FC = () => {
  const [forms, setForms] = useState<Form[]>([{ id: 1 }]);

  const addForm = () => {
    const newForm = { id: forms.length + 1 };
    setForms([...forms, newForm]);
  };

  const removeForm = (id: number) => {
    if (forms.length === 0) {
      toast.error("You dont have any form in there!");
      return;
    }

    const updatedForms = forms.filter((form) => form.id !== id);
    setForms(updatedForms);
  };

  return (
    <motion.div
      className="mx-auto max-w-2xl p-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <motion.div
        className="flex justify-end items-center mb-4 gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <motion.button
          onClick={() => addForm()}
          className="flex items-center justify-center rounded-full w-10 h-10 bg-red-600 hover:bg-red-700 text-white text-sm font-medium"
          animate={{ scale: [1, 1.1, 1] }} // Define the scale animation
          whileHover={{ scale: 1.1 }} // Define the scale animation on hover
        >
          <PlusSquare className="w-5 h-5" />
        </motion.button>
        {forms.length > 0 && (
          <motion.button
            onClick={() => removeForm(forms[forms.length - 1].id)}
            className="flex items-center justify-center rounded-full w-10 h-10 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
            animate={{ scale: [1, 1.1, 1] }} // Define the scale animation
            whileHover={{ scale: 1.1 }} // Define the scale animation on hover
          >
            <Trash2 className="w-5 h-5" />
          </motion.button>
        )}
      </motion.div>
      <Accordion type="multiple">
        <AnimatePresence>
          {forms.map((form) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <AccordionItem value={`item-${form.id}`}>
                <AccordionTrigger>
                  Transaction Form No:{form.id}
                </AccordionTrigger>
                <AccordionContent>
                  <NewTransaction />
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </Accordion>
    </motion.div>
  );
};

export default MultiForm;
