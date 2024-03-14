export function deleteDuplicates(obj): any {
  const objects = obj.map((x) => JSON.stringify(x));
  const uniq = [...new Set(objects)];

  return uniq.map((x) => JSON.parse(x as any));
}
