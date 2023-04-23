import { useAppSelector } from '../redux/store/store';

const MachineList = () => {
  const items = useAppSelector((state) => state.item.items);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MachineList;
