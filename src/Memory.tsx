import Phaser from 'phaser';
import * as React from 'react';
import MemoryCardArea from './MemoryCardArea';

const Memory: React.FunctionComponent = () => {
    let showMenu: boolean = true;
    let difficulty: string;
    const [value, setValue] = React.useState('');

    function setDifficulty(selectedDifficulty: string){
        difficulty = selectedDifficulty;
        showMenu = false;
        setValue(selectedDifficulty)
    }

    if(!value){
        return(
            <div className='content'>
                <button onClick={() => setDifficulty('easy')}>Leicht</button>
                <button onClick={() => setDifficulty('hard')}>Schwierig</button>
            </div>
        )
    }

    return (
          <div>
            <MemoryCardArea difficulty='easy'/>
          </div>
    );
}
export default Memory;
