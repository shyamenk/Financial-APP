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
    <div className="mx-auto max-w-2xl p-8">
      <div className="flex justify-end items-center mb-4 gap-4">
        <button
          onClick={() => addForm()}
          className="flex items-center justify-center rounded-full w-10 h-10 bg-red-600 hover:bg-red-700 text-white text-sm font-medium"
        >
          <PlusSquare className="w-5 h-5" />
        </button>
        {forms.length > 0 && (
          <button
            onClick={() => removeForm(forms[forms.length - 1].id)}
            className="flex items-center justify-center rounded-full w-10 h-10 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        )}
      </div>
      <Accordion type="multiple">
        {forms.map((form) => (
          <AccordionItem key={form.id} value={`item-${form.id}`}>
            <AccordionTrigger>Transaction Form No:{form.id}</AccordionTrigger>

            <AccordionContent>
              <NewTransaction />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MultiForm;
