import currencyFormatter from '@/helpers/currencyFormatter';
import { IMachineRowProps } from '@/types/Interface';

const MachineRow = (rowProps: IMachineRowProps) => {
  const { id, name, dimension, price } = rowProps.machine;
  return (
    <tr key={id}>
      <td className="p-4">{name}</td>
      <td>{dimension}</td>
      <td>{currencyFormatter.format(price)}</td>
    </tr>
  );
};

export default MachineRow;
