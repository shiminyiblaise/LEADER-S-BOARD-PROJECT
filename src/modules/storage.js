export const saveTask = (Task) => {
  const task = localStorage.setItem('task', JSON.stringify(Task));
  return task;
};

export const getTask = () => {
  const myTask = localStorage.getItem('task');
  return myTask ? JSON.parse(myTask) : [];
};