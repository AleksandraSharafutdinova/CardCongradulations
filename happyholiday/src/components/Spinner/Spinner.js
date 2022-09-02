import {Vortex} from 'react-loader-spinner';
import style from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={style.spinner}>
            <Vortex
                visible={true}
                height="180"
                width="180"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    );

};

export default Spinner;