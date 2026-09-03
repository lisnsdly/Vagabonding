/** Format a date as year + month, or a month range when dateEnd is provided. */
export function formatPostDate(date: Date, dateEnd?: Date) {
  const start = date.toLocaleDateString('zh-Hant-HK', {
    year: 'numeric',
    month: 'long',
  });

  if (!dateEnd) return start;

  const sameYear = date.getFullYear() === dateEnd.getFullYear();
  const sameMonth = sameYear && date.getMonth() === dateEnd.getMonth();

  if (sameMonth) return start;

  if (sameYear) {
    const end = dateEnd.toLocaleDateString('zh-Hant-HK', {
      month: 'long',
    });
    return `${start} – ${end}`;
  }

  const end = dateEnd.toLocaleDateString('zh-Hant-HK', {
    year: 'numeric',
    month: 'long',
  });
  return `${start} – ${end}`;
}
