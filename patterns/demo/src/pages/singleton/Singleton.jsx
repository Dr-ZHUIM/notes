import singletonCounter from '../../utils/singleton/singleton_3_freezeObject';
import Button from '../../components/Button';

export default function Singleton() {
    return <>
        <Button color="red" method={singletonCounter.increment} placeholder="increment" />
        <Button color="blue" method={singletonCounter.decrement} placeholder="decrement" />
    </>;
}
