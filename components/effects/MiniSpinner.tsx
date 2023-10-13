export function Spinner() {
  return (
    <div className='pswp__preloader__icn'>
      <div className='pswp__preloader__cut'>
        <div className='pswp__preloader__donut'></div>
      </div>
    </div>
  );
}


export default function MiniSpinner() {
  return (
    <div className="spinner-container w-screen h-screen grid place-items-center">
      <div className="spinner"></div>
    </div>
  )
}