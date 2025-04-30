export default function Arrays() {
  const arr1 = [1, 2, 3, 4];
  return (
    <div className="App">
      <ul key="arrays">
        {arr1.map((arr, index) => (
          <li key={index}> {arr}</li>
        ))}
      </ul>
    </div>
  );
}
