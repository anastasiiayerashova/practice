import { useSelector } from "react-redux";
import s from './TaskCounter.module.css'

export default function TaskCounter () {
  const tasks = useSelector((state) => state.tasks.items);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={s.text}>Active: {count.active}</p>
      <p className={s.text}>Completed: {count.completed}</p>
    </div>
  );
};