/** Format a date, or a date range when dateEnd is provided. */
export function formatPostDate(date: Date, dateEnd?: Date) {
  const start = date.toLocaleDateString('zh-Hant-HK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (!dateEnd) return start;

  const sameYear = date.getFullYear() === dateEnd.getFullYear();
  const sameMonth = sameYear && date.getMonth() === dateEnd.getMonth();

  if (sameMonth) {
    const endDay = dateEnd.toLocaleDateString('zh-Hant-HK', { day: 'numeric' });
    return `${start} – ${endDay}`;
  }

  if (sameYear) {
    const end = dateEnd.toLocaleDateString('zh-Hant-HK', {
      month: 'long',
      day: 'numeric',
    });
    return `${start} – ${end}`;
  }

  const end = dateEnd.toLocaleDateString('zh-Hant-HK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return `${start} – ${end}`;
}
