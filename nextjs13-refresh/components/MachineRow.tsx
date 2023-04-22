import currencyFormatter from '@/helpers/currencyFormatter';
import { IMachineRowProps } from '@/types/Interface';
import Link from 'next/link';

const MachineRow = (rowProps: IMachineRowProps) => {
  const { id, name, dimension, price } = rowProps.machine;
  return (
    <tr key={id}>
      <td className="p-4">
        <Link
          href={`/machine/${id}`}
          className="hover:cursor-pointer hover:text-teal-800"
        >
          {name}
        </Link>
      </td>

      <td>{dimension}</td>
      <td>{currencyFormatter.format(price)}</td>
    </tr>
  );
};

export default MachineRow;
