import profile from './images/profile.png'

function Nav(){
return( 
    <div className="nav">
      <div className='nav-icon'>
        <div className='nav-name'>
            High Learn
        </div>
        
       <div className='icon-list'>
        <button className='sign-up'>Get Started</button>
        <img src={profile}className='icon' alt='profile-icon'/></div>
       </div>
    </div>
)
}
export default Nav;