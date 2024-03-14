export function formatDateYearFirst(date) {
  if (!date) return "";
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function formatTimeWithTimeZone(date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000);

  if (diffInSeconds < 60) {
    return "just now";
  } else if (diffInSeconds < 3600) {
    return Math.floor(diffInSeconds / 60) + " minutes ago";
  } else if (diffInSeconds < 86400) {
    return Math.floor(diffInSeconds / 3600) + " hours ago";
  } else if (diffInSeconds < 2592000) {
    return Math.floor(diffInSeconds / 86400) + " days ago";
  } else if (diffInSeconds < 31536000) {
    return Math.floor(diffInSeconds / 2592000) + " months ago";
  } else {
    return Math.floor(diffInSeconds / 31536000) + " years ago";
  }
}
