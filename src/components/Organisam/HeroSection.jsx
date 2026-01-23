import SportImages from '../../assets/Images/banner.png';
import Button from '../Atoms/Button';

const HeroSection = () => {
    return (
        <div className='position-relative overflow-hidden' style={{background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',minHeight:'400px'}} >
        
                <div className="container">
                    <div className='row align-items-center min-vh-100'>
                        <div className='col-lg-6 text-white py-5'>
                            <h1 className='display-3 fw-bold mb-4'>Sport Champions </h1>
                            <p className=' lead mb-4'>
                                Get Premium Sport items 
                            </p>
                            <div className='d-flex gap-3'>
                                    <Button text="Shop Now" className="btn-outline-light btn-lg px-5"></Button>
                                    <Button text="View Collection" className="btn-outline-light btn-lg px-5"></Button>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="text-center">
                                <img src={SportImages} alt="Banner" style={{maxWidth:'100px'}}/>
                            </div>
                        </div>

                    </div>

                </div>

        </div>
    );
};

export default HeroSection;