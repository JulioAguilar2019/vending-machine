export function formatTime(seconds: number): string {
  if (seconds < 0) {
    return 'Invalid input';
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let timeString = '';

  if (hours > 0) {
    timeString += `${hours} hour${hours !== 1 ? 's' : ''} `;
  }

  if (minutes > 0) {
    timeString += `${minutes} minute${minutes !== 1 ? 's' : ''} `;
  }

  timeString += `${remainingSeconds} second${
    remainingSeconds !== 1 ? 's' : ''
  }`;

  return timeString.trim();
}
