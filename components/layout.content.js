import Dots from './content.dots-triangle'
import Divider from './content.divider'
import Specialities from './content.specialities'

const Content = () => {
    return <div>
        <div className='relative mx-auto dark:text-white text-primary-default container-inner'>
            <div className='px-12 py-20'>
                <div className='w-full mx-auto text-center lg:w-1/2'>
                    <img className="mx-auto rounded-full h-40 lg:h-44" src="main.png" alt='Piotr Yordanov' />
                    <div className='p-4 text-black'>
                        <div className='text-3xl font-semibold dark:text-white'>
                            Hi, I'm Piotr Yordanov
                        </div>
                        <div className='mt-4 text-xl text-gray-500'>
                            Executive CTO building AI-native products, quantitative trading systems, and modern web platforms.
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <Dots direction="left" />
        </div >
        <Specialities />
    </div>
}

export default Content
