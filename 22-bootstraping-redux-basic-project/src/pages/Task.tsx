import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddTaskModal from "@/module/tasks/AddTaskModal";
import TaskCard from "@/module/tasks/TaskCard";
import { useGetTasksQuery } from "@/redux/api/baseApi";

const Task = () => {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);
  console.log({ data, isLoading, isError });
  if (isLoading) {
    return <p>Loading ....</p>;
  }
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20 ">
      <div className="flex justify-end items-center space-x-5">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue={"all"}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mt-5">
        {!isLoading &&
          data.tasks.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
      </div>
    </div>
  );
};

export default Task;
