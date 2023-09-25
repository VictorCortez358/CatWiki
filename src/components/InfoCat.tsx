'use client';
import React, {useState, useEffect} from 'react';
import { CatInfo, Breed } from '@/types';
import { Rate } from 'antd';
import Header from './Header';
import Footer from './Footer';

const InfoCat = () => {

    const [catOne, setCatOne] = useState<CatInfo[]>([]);
    const [cats, setCats] = useState<CatInfo[]>([]);

    const getOneMoreInfo = async () => {
        try{
            const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_Xw9FlUU0jDA1KZ0AnRqWUfOzLeLp7HORzM2objmwdQ4QXFSgizpbocc8lJBYVsJX`);
            const data = await res.json();
            setCatOne([data[0]]);
        }catch(err){
            console.log(err);
        }
    }

    const getAllInfo = async () => {
        try{
            const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=beng&api_key=live_Xw9FlUU0jDA1KZ0AnRqWUfOzLeLp7HORzM2objmwdQ4QXFSgizpbocc8lJBYVsJX`);
            const data = await res.json();
            setCats(data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getOneMoreInfo();
        getAllInfo();
    }, []);

    return(
        <div className='flex flex-col'>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col justify-center items-start w-portrait'>
            <Header />
                {catOne.map((cat) => (
                    <div key={cat.id} className='flex flex-wrap items-start justify-center gap-20 tablet:flex-col tablet:items-center tablet:gap-10'>
                        <img className='w-80 h-72 rounded-xl tablet:w-60 tablet:h-52' src={cat.url} alt={cat.id} />
                        <div className='flex flex-col justify-center items-start gap-4 w-1/2 tablet:w-full'>
                            <h1 className='text-2xl font-bold tablet:text-lg'>{cat.breeds[0].name}</h1>
                            <label className='text-base font-monserrat tablet:text-sm'>{cat.breeds[0].description}</label>
                            <div className='flex flex-row items-center gap-2'>
                                <label className='text-base font-bold tablet:text-sm'>Temperament:</label>
                                <label className='text-base font-monserrat tablet:text-xs'>{cat.breeds[0].temperament}</label>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <label className='text-base font-bold tablet:text-sm'>Origin:</label>
                                <label className='text-base font-monserrat tablet:text-xs'>{cat.breeds[0].origin}</label>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <label className='text-base font-bold tablet:text-sm'>Life Span:</label>
                                <label className='text-base font-monserrat tablet:text-xs'>{cat.breeds[0].life_span} years</label>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <label className='text-base font-bold tablet:text-sm'>Adaptability: </label>
                                <Rate disabled defaultValue={cat.breeds[0].adaptability}/>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <label className='text-base font-bold tablet:text-sm'>Affection Level: </label>
                                <Rate disabled defaultValue={cat.breeds[0].affection_level} />
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <label className='text-base font-bold tablet:text-sm'>Child Friendly: </label>
                                <Rate disabled defaultValue={cat.breeds[0].child_friendly} />
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <label className='text-base font-bold tablet:text-sm'>Grooming: </label>
                                <Rate disabled defaultValue={cat.breeds[0].grooming} />
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <label className='text-base font-bold tablet:text-sm'>Intelligence: </label>
                                <Rate disabled={true} defaultValue={cat.breeds[0].intelligence} />
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <label className='text-base font-bold tablet:text-sm'>Health Issues: </label>
                                <Rate disabled defaultValue={cat.breeds[0].health_issues} />
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <label className='text-base font-bold tablet:text-sm'>Social Needs: </label>
                                <Rate disabled defaultValue={cat.breeds[0].social_needs} />
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <label className='text-base font-bold tablet:text-sm'>Stranger Friendly: </label>
                                <Rate disabled defaultValue={cat.breeds[0].stranger_friendly} />
                            </div>
                        </div>
                    </div>
                ))
                }
                <h1 className='text-2xl font-bold mt-8 tablet:text-lg'>Other photos</h1>
                <div className='flex flex-row flex-wrap justify-center items-center gap-4 my-8'>
                {
                    cats.map((cat) => (
                        <div key={cat.id} className='flex items-center justify-center'>
                            <img className='w-64 h-64 rounded-xl tablet:w-40 tablet:h-40' src={cat.url} alt={cat.id} />
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default InfoCat;