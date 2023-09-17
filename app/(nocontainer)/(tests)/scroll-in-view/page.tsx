'use client';
import T from '@/components/core/GradientText';

export default function page() {
    return (
        <>
            {' '}
            <section className='h-screen w-screen border-t border-b  bg-offblack border-[#eee]/0.4 p-[100px]'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-[100px] text-offwhite'>Section one</h1>
                    <p className='w-3/6 text-xl'>
                        Lorem ipsum dolor sit amet, consectetur{' '}
                        <T t='adipiscing elit' />, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit <T t='in voluptate velit esse'/> cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>
            <section className='h-screen w-screen border-t border-b  bg-offblack border-[#eee]/0.4 p-[100px]'>
            <div className='flex flex-col gap-4'>
                    <h1 className='text-[100px] text-offwhite'>Section Two</h1>
                    <p className='w-3/6 text-[#eee] text-2xl'>
                        Lorem ipsum dolor sit amet, consectetur{' '}
                        <T t='adipiscing elit' />, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit <T t='in voluptate velit esse'/> cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>
            <section className='h-screen w-screen border-t border-b  bg-offblack border-[#eee]/0.4 p-[100px]'>
            <div className='flex flex-col gap-4'>
                    <h1 className='text-[100px] text-offwhite'>Section Three</h1>
                    <p className='w-3/6 text-[#eee] text-2xl'>
                        Lorem ipsum dolor sit amet, consectetur{' '}
                        adipiscing elit, sed do eiusmod tempor
                        <T t='incididunt ut labore et'/> dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat<T t=' non proident, sunt in'/> culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>
            <section className='h-screen w-screen border-t border-b  bg-offblack border-[#eee]/0.4 p-[100px]'>
                <h1 className='text-[100px] text-offwhite'>Section one</h1>
            </section>
        </>
    );
}
