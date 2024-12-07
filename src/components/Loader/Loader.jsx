import { LineWave } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';


function Loader() {
    return (
        <LineWave
            visible={true}
            height="100"
            width="100"
            color="var(--text-color)"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass={css.div}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
        />
    );
}

export default Loader;