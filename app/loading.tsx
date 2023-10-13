import MiniSpinner from '@/components/effects/MiniSpinner';
import PercentageLoader from '@/components/effects/PercentageLoader';

export default function Loading() {
    return (
        <>
            <MiniSpinner />
            <PercentageLoader percentage={0}/>
        </>
    );
}
