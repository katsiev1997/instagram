import { Button, Icon } from '@/shared/ui';
import { Navbar } from '../widgets';

const App = () => {
  return (
    <div className='app_dark'>
      <Navbar />
      <Button variant='outline'>Like post</Button>
    </div>
  );
};

export default App;
