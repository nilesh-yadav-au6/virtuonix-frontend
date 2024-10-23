import { useEffect, useState } from "react";
import { getAllUsers, deleteUser, updateUser } from "../services/users";
import Table from "../components/Table";
import Modal from "../components/Modal";
import { IUser } from "../services/users";

const RegisteredUser: React.FC = () => {
  const [users, setUsers] = useState<IUser[] | []>([]);

  useEffect(() => {
    getAllUsers().then((value) => setUsers(value));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateField, setUpdateField] = useState<{
    id: string;
    value: string;
    field: string;
  }>({
    id: "",
    value: "",
    field: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    deleteUser(id).then(() => {
      getAllUsers().then((value) => setUsers(value));
    });
  };

  const handleEdit = (id: string, value: string, field: string) => {
    setUpdateField({ id, value, field });
    handleOpenModal();
  };

  const handleSubmit = (inputValue: string) => {
    updateUser(updateField.id, { [updateField.field]: inputValue }).then(() => {
      getAllUsers().then((value) => setUsers(value));
    });
  };

  return (
    <div>
      <Table users={users} onDelete={handleDelete} onRecordClick={handleEdit} />
      <Modal
        title={updateField.field}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegisteredUser;
