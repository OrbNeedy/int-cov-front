import SectionHeader from '../components/SectionHeader';
import './Common.css';

const FOF = () => {
  return (
    <div className='content-with-side'>
      <div className='content' style={{ width: '100%' }}>
        <SectionHeader text={'Page not found'}/>
        <div style={{ padding: '64px', fontSize: 'x-large', fontWeight: 'bolder' }}>
          Page not found
        </div>
        <div style={{ padding: '8px' }}>
          There is unfortunately no pages found under this direction, did you misinput?<br/>
          Here, use <a href='/' className='link-list'>this</a> link to go back to the index.
        </div>
      </div>
    </div>
  )
};

export default FOF;