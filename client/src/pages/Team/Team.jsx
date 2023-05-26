
import React from 'react'

import { Card } from 'antd';


function Team() {
    return (
        <>
            <div style={{ marginTop: '80px', }}>
                <h1 style={{ marginLeft: '35%', marginTop: '100px' }}>Top Courses That are open for Students</h1>
                <p style={{ marginLeft: '40%' }}>Who are in extremely love with eco friendly system.</p>
                <div style={{ display: 'flex', color: 'white', flexDirection: 'column', alignItems: 'center', paddingTop: '70px' }} >


                    <div style={{ display: 'flex', gap: '50px' }}>
                        <Card style={{ width: 350 }}>
                            <img style={{ width: '300px' }} src="https://preview.colorlib.com/theme/gym/img/c1.jpg.webp" alt="" />
                            <div style={{ position: 'relative', bottom: '60px', left: '20px' }}>
                                <button style={{ height: '40px', width: '150px', backgroundColor: 'red', color: 'white' }}>Course Available</button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <h2 style={{ paddingRight: '60px' }}>Running Classes</h2>
                                <p style={{ color: 'red', fontSize: '20px' }}>$275</p>
                            </div>

                        </Card>


                        <Card style={{ width: 350, }}>
                            <img style={{ width: '300px' }} src="https://preview.colorlib.com/theme/gym/img/c2.jpg.webp" alt="" />
                            <div style={{ position: 'relative', bottom: '60px', left: '20px' }}>
                                <button style={{ height: '40px', width: '150px', backgroundColor: 'red', color: 'white' }}>Course Available</button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <h2 style={{ paddingRight: '60px' }}>Weight Lifting Classes</h2>
                                <p style={{ color: 'red', fontSize: '20px' }}>$200</p>
                            </div>


                        </Card>


                        <Card style={{ width: 350, }}>
                            <img style={{ width: '300px' }} src="https://preview.colorlib.com/theme/gym/img/c3.jpg.webp" alt="" />
                            <div style={{ position: 'relative', bottom: '60px', left: '20px' }}>
                                <button style={{ height: '40px', width: '150px', backgroundColor: 'red', color: 'white' }}>Course Available</button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <h2 style={{ paddingRight: '60px' }}>Body Combat Classes</h2>
                                <p style={{ color: 'red', fontSize: '20px' }}>$225</p>
                            </div>

                        </Card>
                    </div>

                    <div style={{ display: 'flex', gap: '50px', paddingTop: '50px' }}>
                        <Card style={{ width: 350, }}>
                            <img style={{ width: '300px' }} src="https://preview.colorlib.com/theme/gym/img/c4.jpg.webp" alt="" />
                            <div style={{ position: 'relative', bottom: '60px', left: '20px' }}>
                                <button style={{ height: '40px', width: '150px', backgroundColor: 'red', color: 'white' }}>Course Available</button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <h2 style={{ paddingRight: '60px' }}>Organic Yoga Classes</h2>
                                <p style={{ color: 'red', fontSize: '20px' }}>$300</p>
                            </div>
                        </Card>


                        <Card style={{ width: 350, }}>
                            <img style={{ width: '300px' }} src="https://preview.colorlib.com/theme/gym/img/c5.jpg.webp" alt="" />
                            <div style={{ position: 'relative', bottom: '60px', left: '20px' }}>
                                <button style={{ height: '40px', width: '150px', backgroundColor: 'red', color: 'white' }}>Course Available</button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <h2 style={{ paddingRight: '60px' }}>Raw Fitness Classes</h2>
                                <p style={{ color: 'red', fontSize: '20px' }}>$500</p>
                            </div>
                        </Card>


                        <Card style={{ width: 350, }}>
                            <img style={{ width: '300px' }} src="https://preview.colorlib.com/theme/gym/img/c6.jpg.webp" alt="" />
                            <div style={{ position: 'relative', bottom: '60px', left: '20px' }}>
                                <button style={{ height: '40px', width: '150px', backgroundColor: 'red', color: 'white' }}>Course Available</button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <h2 style={{ paddingRight: '60px' }}>Body Building Classes</h2>
                                <p style={{ color: 'red', fontSize: '20px' }}>$250</p>
                            </div>
                        </Card>

                    </div>




                </div>


            </div>

        </>
    )
}

export default Team