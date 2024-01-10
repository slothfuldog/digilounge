import image1 from '../../assets/image/web.png';
import Navbar from './Navbar'

const Jumbotron = () =>{
    return(
        <div className='bg-jumbo'>
            <Navbar/>
            <div className="flex flex-col items-center justify-center" style={{height:'80%'}}>
                <h1 className='text-4xl font-bold text-white'>The Most Realiable Co-Working Gourpware</h1>
                <h1 className='mt-4 font-semibold text-slate-300'>DigiLounge is an office organizer application</h1>
                <h1 className='font-semibold text-slate-300'>including e-approval, clock-in, knowledge sharing and more!</h1>
                <div className='flex flex-row items-center mt-12'>
                    <button type='button' className='btn-white'>Get started</button>
                    <button type='button' className='btn-dark ml-8'>Live demo</button>
                </div>
            </div>

        </div>
    )
}

export default Jumbotron;