export default function taskBlock(trueOrFalse) {
  const initialTask = false;
  const initialTask2 = true;

  if (trueOrFalse) {
    const updatedTask = true;
    const updatedTask2 = false;
    return [updatedTask, updatedTask2];
  }

  return [initialTask, initialTask2];
}
