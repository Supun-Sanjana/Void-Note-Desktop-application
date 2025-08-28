import { Copyright , SquareCheck, Square, BookText, ListTodo, LayoutDashboard, Calendar, WifiOff } from 'lucide-react';

const Dashboard = () => {
    return (
        <>
        <div className='bg-black mx-30'>



            <div className="felx-2 flex gap-10 mt-10 ">
                <div className="p-4 left-panel flex-1 h-full rounded-[10px] bg-[#141414] border border-[#3A3D47]">
                    <h2 className='text-2xl'>Recent Tasks</h2>
                    <p className='text-[#8F8F8F] pb-7 mb-5 border-b border-[#3A3D47]'>Manage your priorities and daily tasks.</p>


                    <div>
                        <h2 className='pb-4 my-3'>Pending</h2>
                        <div className="task flex">
                            <Square />
                            <p className='ml-2 flex-wrap'>Prepare for React component architecture workshop</p>
                        </div>

                    </div>

                    <div>
                        <h2 className='py-4 my-3'>Completed</h2>
                        <div className="task flex text-white bg-[#040404] p-2 rounded-[5px] w-full h-full">
                            <SquareCheck style={{ color: '#676BEB'  }}/>
                            <p className='ml-2 flex-wrap'>Prepare for React component architecture workshop</p>

                        </div>

                    </div>

                </div>
                <div className='flex-1'>
                    <div className="p-4 right-panel   rounded-[10px] bg-[#141414] border-1 border-[#3A3D47]">
                        <h2 className='text-2xl'>Recent Notes</h2>
                        <p className='text-[#8F8F8F] mb-5 pb-7 border-b border-[#3A3D47]'>Quick access to your latest thoughts.</p>

                        <div className="note w-full h-full py-3 px-5 rounded-2xl pb-7 bg-[#040404]">
                            <h2 className='text-2xl py-3'>Meeting Notes: Q2 Review</h2>
                            <p>Key takeaways from Q2 performance review: focus on user engagement, streamline onboarding, and expand community features. Next steps include A/B testing new signup flows.</p>
                        </div>

                    </div>

                    <div className='my-10  p-4 rounded-[10px] bg-[#141414] border-1 border-[#3A3D47]'>
                        <div >
                            <h2 className='text-2xl'>Quick Access</h2>
                            <p className='text-[#8F8F8F] mb-5 pb-7 border-b border-[#3A3D47]'>Navigate or find what you need.</p>

                            <div className='flex-col'>
                                <div className='flex gap-3 mb-5'>
                                    <BookText />
                                    <h2>All Notes</h2>
                                </div>

                                <div className='flex gap-3 mb-5'>
                                    <ListTodo />
                                    <h2>Tasks</h2>
                                </div>

                                <div className='flex gap-3 mb-5'>
                                    <LayoutDashboard />
                                    <h2>Project Boards</h2>
                                </div>

                                <div className='flex gap-3 mb-10 border-b border-[#3A3D47] pb-7'>
                                    <Calendar />
                                    <h2>Calander</h2>
                                </div>

                                <h2 className='text-2xl pb-3'>Offline Support</h2>
                                <div className='flex gap-3 mb-5 pb-4'>

                                    <WifiOff style={{ color: '#676BEB' }}/>
                                    <p>Active Tasks and notes are accessible offline.</p>

                                </div>

                                <button className='w-full h-[35px] bg-black rounded-[10px] text-[15px] mb-3'>Learn more</button>



                            </div>



                        </div>
                    </div>
                </div>



            </div>




        </div>
        <div className='flex gap-2'>
            <Copyright />
        <p>2025 VoidNote. All rights reserved.</p>
        </div>

        </>

    )
}

export default Dashboard
