export function formatDateBR(date: string) {
  return new Date(date).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export function getStatusLabel(status: string) {
  switch (status) {
    case "pending":
      return "Pendente";
    case "separation":
      return "Em separação";
    case "production":
      return "Em produção";
    case "sent":
      return "Enviado";
    case "delivered":
      return "Entregue";
    default:
      return "";
  }
}