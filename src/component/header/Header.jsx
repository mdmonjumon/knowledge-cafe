import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 border-gray-300 pb-4'>
           <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>

           <img src={profile} alt="Profile" />

        </div>
    );
};

export default Header;