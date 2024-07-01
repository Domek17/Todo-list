export default function PackedStats({ items }) {
  if (!items.length)
    return <p className="footer">Start adding some items to your list 🚀</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="footer">
      <p>
        {percentage === 100
          ? "You checked everyhing on your list 😁"
          : `You have ${numItems} on your list, and you already checked ${numPacked} out
        of ${numItems} items (${percentage}%)`}
      </p>
    </footer>
  );
}
