import SensorButton from './SensorButton';

type Props = {
  labels: { sensor: string; value: string }[];
};

const ButtonGrid: React.FC<Props> = ({ labels }) => {
  return (
    <>
      {labels.map((label) => (
        <SensorButton label={label} />
      ))}
    </>
  );
};

export default ButtonGrid;
