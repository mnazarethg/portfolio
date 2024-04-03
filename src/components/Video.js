import partnersOdoo from '../assets/partners_odoo.mp4';

function Video() {

  return (
    <div>
      <video controls src={partnersOdoo} style={{ width: '100%' }} />
    </div>
  );
}

export default Video;