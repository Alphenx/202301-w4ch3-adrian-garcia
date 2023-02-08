import { FC } from 'react';
import { Task } from '../../types/task.model';
import './TaskList.css';
interface TaskListProps {
  recieveTasks: Task[];
}
const TaskList: FC<TaskListProps> = ({ recieveTasks }) => {
  return (
    <ul className="todo-list">
      {recieveTasks.map((task, index) => (
        <li className="todo-list__task" key={index}>
          <span>
            <input type="checkbox" />
            <p>{task.contain}</p>
          </span>
          <i className="fa-solid fa-trash"></i>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
