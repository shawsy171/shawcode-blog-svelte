const options = {
  day: 'numeric' as const,
  month: 'long' as const,
  year: 'numeric' as const,
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', options);
}