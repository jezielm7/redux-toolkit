import { useReduxSelector } from '../../hooks';
import { selectorCounterValue } from '../../store/slices/counter/selectors';
import * as S from './styles';

const Counter = () => {
  const counter = useReduxSelector(selectorCounterValue);

  return <S.Container>{`${counter}`.padStart(2, '0')}</S.Container>;
};

export default Counter;
