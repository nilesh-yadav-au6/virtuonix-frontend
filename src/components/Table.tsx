import React from "react";
import styles from "./Table.module.css";
import { IUser } from "../services/users";

interface TableProps {
  users: IUser[] | [];
  onDelete: (id: string) => void;
  onRecordClick: (id: string, value: string, key: string) => void;
}

const Table: React.FC<TableProps> = ({ users, onDelete, onRecordClick }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user._id}>
              <td onClick={() => onRecordClick(user._id, user.name, "name")}>
                {user.name}
              </td>
              <td>{user.email}</td>
              <td onClick={() => onRecordClick(user._id, user.phone, "phone")}>
                {user.phone}
              </td>
              <td className={styles.actions}>
                <button
                  onClick={() => onDelete(user._id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <div>No users to show...</div>
        )}
      </tbody>
    </table>
  );
};

export default Table;
