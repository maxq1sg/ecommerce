export default function convertDate(createdAt) {
  const formatter = new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return formatter.format(new Date(createdAt));
}
