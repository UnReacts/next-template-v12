import Button from '@/components/common/parts/Button';
import Container from '@/components/common/parts/Container';
import useCounter from '@/hooks/useCounter';

type CounterProps = {
  initialNum: number;
};

const Counter = (props: CounterProps): JSX.Element => {
  const { initialNum } = props;
  const { count, countUp, countDown } = useCounter(initialNum);

  return (
    <Container className="py-20">
      <div className="flex items-center space-x-5">
        <Button className="w-10 md:p-1 md:text-2xl" colorInverse onClick={countDown}>
          -
        </Button>
        <div className="w-20 text-center text-7xl font-bold">{count}</div>
        <Button className="w-10 md:p-1 md:text-2xl" onClick={countUp}>
          +
        </Button>
      </div>
    </Container>
  );
};

export default Counter;
