export function taskFirst() {
  const preference = 'I prefer const when I can.';
  return preference;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let description = 'But sometimes let';
  description += getLast();

  return description;
}
