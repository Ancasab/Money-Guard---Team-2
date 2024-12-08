import React, { useState } from "react";
import AddTransactionModal from "./components/ModalAddTransaction/ModalAddTransaction";
import EditTransactionModal from "./components/ModalEditTransaction/ModalEditTransaction";

const App = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setAddModalOpen(true)}>Add Transaction</button>
      <button onClick={() => setEditModalOpen(true)}>Edit Transaction</button>

      {isAddModalOpen && <AddTransactionModal onClose={() => setAddModalOpen(false)} />}
      {isEditModalOpen && (
  <EditTransactionModal
    transaction={{
      type: "Income", // Default pentru testare
      amount: "",
      date: new Date().toISOString().split("T")[0],
      comment: "",
    }}
    onClose={() => setEditModalOpen(false)}
    onSave={(updatedTransaction) => {
      console.log("Updated transaction:", updatedTransaction);
      setEditModalOpen(false);
    }}
  />
)}

    </div>
  );
};

export default App;
