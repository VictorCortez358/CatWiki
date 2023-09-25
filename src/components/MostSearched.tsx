'use client';
import React, { useState, useEffect } from 'react';
import { CatInfo, Breed } from '@/types';
import Link from 'next/link';

const MostSearched: React.FC = () => {
    const [cats, setCats] = useState<CatInfo[]>([]);

    const getInfoCats = async () => {
        try {
            const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_Xw9FlUU0jDA1KZ0AnRqWUfOzLeLp7HORzM2objmwdQ4QXFSgizpbocc8lJBYVsJX');
            const data = await res.json();
            setCats(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getInfoCats();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center w-portrait bg-grayPerson rounded-b-3xl">
                <div className="flex flex-col justify-center items-start gap-4 my-10 w-portrait tablet:my-4">
                    <p className="text-lg font-bold text-center phone:text-sm">Most Searched Breeds</p>
                    <div className="flex flex-row items-end justify-between w-full tablet:flex-col tablet:items-start">
                        <p className="text-5xl w-2/3 font-bold text-start tablet:text-4xl phone:text-xl">66+ Breeds For you to discover</p>
                        <Link href="/breeds">
                        <div className="flex flex-row items-center gap-2 tablet:mt-4">
                            <p className="text-base font-bold opacity-60 tablet:text-sm phone:text-xs">SEE MORE</p>
                            <svg  xmlns="http://www.w3.org/2000/svg" className='opacity-60 tablet:w-4 h-4' width="24" height="24" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-8 mt-5 mb-10 w-portrait tablet:flex-wrap tablet:mt-0">
                    {cats.map((cat) => (
                        <div key={cat.id} className='flex items-center justify-center'>
                            <img className='w-52 h-52 rounded-xl tablet:w-44 tablet:h-44 phone:w-28 phone:h-28' src={cat.url} alt={cat.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MostSearched;

