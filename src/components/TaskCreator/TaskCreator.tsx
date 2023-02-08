import { FC } from 'react';
import './TaskCreator.css';
interface TaskCreatorProps {
  printTaskChild: (word: string) => void;
}
const TaskCreator: FC<TaskCreatorProps> = ({ printTaskChild: printText }) => {
  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.currentTarget.send.value);
        printText(e.currentTarget.send.value);
      }}
    >
      <div className="form-container__square"></div>
      <input
        className="form-container__text-input"
        type="text"
        name="send"
        placeholder="New Todo"
      />
      <input
        className="form-container__submit"
        type="submit"
        value="Add a new task"
      />
    </form>
  );
};

export default TaskCreator;
