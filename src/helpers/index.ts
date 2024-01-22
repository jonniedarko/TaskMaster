export function getPriortyColor(priority: string) {
  if (priority === "High") return "text-red-500";
  if (priority === "Medium") return "text-blue-500";
  if (priority === "Low") return "text-green-500";
  return "";
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
