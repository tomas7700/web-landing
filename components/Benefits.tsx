import React from 'react'

function Benefits() {
    return (

        <div  className='w-[full] mt-[150px] flex flex-col items-center gap-10'>
            <div className='flex flex-col   h-fit gap-10'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>
                    Save up to $6 K
                </h2>
            </div>
            <div className='flex flex-col  h-fit  mt-10 gap-10'>
                <p className='font-light text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] '>
                    If youre an entrepreneur or small business owner, you know that marketing and development can be expensive. <br /> <br />
                    You would need to hire not only a web designerbut also a  developer, and marketer separately. <br /><br />

                    All this can cost you anywhere from $2,000 to $30,000 per month.
                </p>
                <br />
                <br />

                <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-left'>benefits of our monthly subscription service</h2>

                <ul className='list-disc flex flex-col gap-3'>
                    <li className='font-bold text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Save money: <span className='font-light'>Youll save up to $28,000 per month by using our service instead of hiring each professional separately.</span></li>
                    <li className='font-bold text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Convenience:  <span className='font-light'> Well handle everything for you, so you dont have to worry about finding and hiring the right professionals.</span></li>
                    <li className='font-bold text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Simplicity:  <span className='font-light'> We simplify everything for you. Just add your tasks to the Trello board and forget about it. We develop the strategies you need and carry out all the tasks you provide.</span></li>
                </ul>
                <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-left'>Of course, there are some potential drawbacks to using a monthly subscription service</h2>
                <ul className='list-disc flex flex-col gap-3'>
                    <li className='font-bold text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Limited lexibility: <span className='font-light'>You may not have the same flexibility as if you hired each professional separately..</span></li>
                </ul>

            </div>


            <div className='flex flex-col h-fit '>
                <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center'>What is include in the subscription?</h2>
                <br />
                <ul className='list-disc flex flex-col gap-3'>
                    <li className='font-light text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Fast landing page delivery</li>
                    <li className='font-light text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Unlimited brands and users</li>
                    <li className='font-light text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>SEO strategy and maintenance</li>
                    <li className='font-light text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Pause or cancel anytime</li>
                    <li className='font-light text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Lead generation strategy</li>
                    <li className='font-light text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Inbound marketing strategy</li>
                    <li className='font-light text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Web maintenance</li>
                </ul>
                <br />
                <p className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center'>Does not inclued</p>
                <br />
                <ul className='list-disc flex flex-col gap-3'>
                    <li className='font-light text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Ads spend <span className='font-light'>We will help you create and manage your ad campaigns, but you will be responsible for paying for the ads themselves.</span> </li>
                    <li className='font-light text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>Domain and hosting are not included</li>
                </ul>
            </div>
        </div>
    )
}

export default Benefits