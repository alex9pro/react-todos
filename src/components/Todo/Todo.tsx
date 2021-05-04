import React from 'react';
import { Todo as TodoType } from 'types';
import { TodoEditingControls } from './TodoEditingControls';
import { TodoName } from './TodoName';
import { TodoToEditControls } from './TodoToEditControls';

export interface TodoProps {
  todo: TodoType;
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [editingName, setEditingName] = React.useState<string>();

  const onEdit = (e: React.ChangeEvent<HTMLInputElement>) => setEditingName(e.target.value);
  const resetEditingName = () => setEditingName(undefined);
  const startEditingName = () => setEditingName(todo.name);

  return (
    <div>
      {editingName !== undefined ? (
        <input value={editingName} onChange={onEdit} />
      ) : (
        <TodoName todo={todo} />
      )}

      <span>
        {editingName === undefined && (
          <TodoToEditControls todo={todo} startEditingName={startEditingName} />
        )}
        {editingName !== undefined && (
          <TodoEditingControls
            todo={todo}
            editingName={editingName}
            resetEditingName={resetEditingName}
          />
        )}
      </span>
    </div>
  );
};
