import  {Link} from 'react-router-dom'

const navigation = () => {
    const cartStyle={
        background:'#F59E0D',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'50px'
    }
    return (
        <nav className="container mx-auto flex items-center justify-between">
          <Link to='/'><div style={{display:'flex',flexDirection:'row',alignItems:'center',fontFamily: "'Rubik', sans-serif"}}>
              <img style={{height:45,marginRight:10}} src='/images/logo.jpg' alt='logo'/>FunkeyLook
              </div>
              </Link>
              <ul className="flex items-center">
                  <li><Link to='/'>Home</Link></li>
                  <li className ="ml-6"><Link to='/product'>Prouducts</Link></li>
                  <li className ="ml-6"><Link to='/cart'><div style={cartStyle}>
                      <span>10</span>
                      <img  className='ml-2' style={{height:22}}src='/images/cart.png' alt='carrt-ico'/>
                      </div></Link></li>
              </ul>
        </nav>
    )
}

export default navigation
