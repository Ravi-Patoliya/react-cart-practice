import Products from "../componants/Products"

const Home= () =>{
return(
    <>
    <div className="hero py-16">
        <div className='container mx-auto flex items-center justify-content-between'>
            <div className='w-1/2'>
                <h6 className='text-lg'>Are You Hungry?</h6>
                <h1 className='text-3xl md:text-6xl font-bold'>Don't Wait!</h1>
                <button className='px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600'>Order now</button>
            </div>
            <div className='w-1/2'>
                <img className='w-4/5' src='/images/pizza.png' alt='img-1'/>
            </div>
        </div>
    </div>
    <div className='pb-6'>
<Products/>
    </div>
    </>
) 
}
export default Home;