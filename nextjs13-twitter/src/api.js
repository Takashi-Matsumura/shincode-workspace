const baseUrl = "http://localhost:3001";

export const getAll = async () => {
  const response = await fetch(`${baseUrl}/tweets`, { cache: "no-cache" });
  const timeline = await response.json();
  return timeline;
};
