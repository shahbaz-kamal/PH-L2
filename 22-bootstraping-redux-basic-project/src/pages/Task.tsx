import { selectFilter, selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTask);
  const filter=useAppSelector(selectFilter)
  console.log(tasks)
  console.log(filter)
  return <div>I am task</div>;
};

export default Task;
