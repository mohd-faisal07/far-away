export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list✈</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? (
          <p> you have packed all items and ready to go✈✈</p>
        ) : (
          `you have ${numItems} items in your bag and you already packed ${numPacked}
        (${percentage}%)`
        )}
      </em>
    </footer>
  );
}
