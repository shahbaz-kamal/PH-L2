import TaskCard from "@/module/tasks/TaskCard";
import { selectFilter, selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTask);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1>Tasks</h1>
      </div>
      <div className="space-y-5 mt-5">
       {tasks.map((task)=><TaskCard key={task.id} task={task}></TaskCard>)}
      </div>
    </div>
  );
};

export default Task;
