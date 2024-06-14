import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import React from 'react';

export const JewelryDetails = () => {
    const handleJewelryStatus=()=> {

    }

    return (
        <div className='lg:px-20 px-5 pb-10'>
            <div className='py-5 flex justify-center items-center gap-5'>
                <h1 className='text-2x1 lg:text-7x1 text-center font-bold p-5' style={{ fontSize: '36px' }}>Khuyen mai he</h1>
                <div>
                    <Button color={true?"primary":"error"} className='py-[1rem] px-[2rem]' variant ='contained' onClick={handleJewelryStatus} size='large'>
                        {true?"close":"open"}
                    </Button>
                </div>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <Card>
                        <CardHeader title={<span className='text-gray-300'>Jewelry</span>}/>
                        <CardContent>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>Owner</p>
                                    <p className='text-gray-400'>
                                        <span className='pr-5'>-</span>
                                        Anh Tri
                                    </p>
                                </div>
                            </div>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>Jewelry name</p>
                                    <p className='text-gray-400'>
                                        <span className='pr-5'>-</span>
                                        Anh Tri
                                    </p>
                                </div>
                            </div>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>Jewelry Type</p>
                                    <p className='text-gray-400'>
                                        <span className='pr-5'>-</span>
                                        Anh Tri
                                    </p>
                                </div>
                            </div>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>Opening Hours</p>
                                    <p className='text-gray-400'>
                                        <span className='pr-5'>-</span>
                                        Anh Tri
                                    </p>
                                </div>
                            </div>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>Status</p>
                                    <p className='text-gray-400'>
                                        <span className='pr-5'>-</span>
                                        {true?<span className='px-5 py-2 rounded-full bg-green-400 text-gray-950'>Open</span>
                                        :<span className='px-5 py-2 rounded-full bg-red-400 text-gray-9 50'>Closed</span>}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
                    <Card>
                        <CardHeader title={<span className='text-gray-300'>Address</span>}/>
                        <CardContent>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>Country</p>
                                    <p className='text-gray-400'>
                                        <span className='pr-5'>-</span>
                                        Anh Tri
                                    </p>
                                </div>
                            </div>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>City</p>
                                    <p className='text-gray-400'>
                                        <span className='pr-5'>-</span>
                                        Anh Tri
                                    </p>
                                </div>
                            </div>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>Postal Code</p>
                                    <p className='text-gray-400'>
                                        <span className='pr-5'>-</span>
                                        Anh Tri
                                    </p>
                                </div>
                            </div>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>Street Address</p>
                                    <p className='text-gray-400'>
                                        <span className='pr-5'>-</span>
                                        Anh Tri
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
                    <Card>
                        <CardHeader title={<span className='text-gray-300'>Contact</span>}/>
                        <CardContent>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>Email</p>
                                    <p className='text-gray-400'>
                                        <span className='pr-5'>-</span>
                                        Anh Tri
                                    </p>
                                </div>
                            </div>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>Mobile</p>
                                    <p className='text-gray-400'>
                                        <span className='pr-5'>-</span>
                                        Anh Tri
                                    </p>
                                </div>
                            </div>
                            <div className='space-y-4 text-gray-200'>
                                <div className='flex'>
                                    <p className='w-48'>Social</p>
                                    <div className='flex text-gray-400 items-center pb-3 gap-2'>
                                        <span className='pr-5'>-</span>
                                        <a href='/'>
                                            <InstagramIcon sx={{fontSize:"3rem"}}/>
                                        </a>
                                        <a href='/'>
                                            <FacebookIcon sx={{fontSize:"3rem"}}/>
                                        </a>
                                        <a href='/'>
                                            <LinkedInIcon sx={{fontSize:"3rem"}}/>
                                        </a>
                                        <a href='/'>
                                            <XIcon sx={{fontSize:"3rem"}}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
            </Grid>
            </Grid>
        </div>
    )
}