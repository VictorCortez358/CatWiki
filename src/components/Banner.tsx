'use client';
import Image from "next/image";
import BannerImage from "../../public/HeroImagelg.png";
import CatWikiLogo from "../../public/CatwikiLogo.svg"
import { Select } from 'antd';
import { useState, useEffect } from "react";
import { CatInfo } from "@/types";


const Banner = () => {

    const [breeds, setBreeds] = useState<CatInfo[]>([]);

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    const getBreeds = async () => {
        try {
            const res = await fetch('https://api.thecatapi.com/v1/breeds/');
            const data = await res.json();
            setBreeds(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getBreeds();
    }, []);



    return (
        <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-portrait h-full relative">
            <Image className="rounded-t-3xl z-0 relative w-full" src={BannerImage} alt="Banner" />
            <div className="w-1/2 absolute z-10 flex flex-col items-start gap-4 justify-end left-0 mx-20 tablet:mx-10 phone:ml-8 phone:gap-1">
                <Image className="invert contrast-[150%] w-72 tablet:w-2/3 phone:w-20" src={CatWikiLogo} alt="Logo" />
                <h1 className="font-monserrat text-white mb-2 font-medium text-xl tablet:text-sm tablet:break-words phone:text-phone">Get to know more about your cat breed.</h1>
                <Select
                    showSearch
                    placeholder="Enter your bread"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    className="rounded-xl bg-white w-3/5 h-12 tablet:h-10 phone:w-20 phone:h-8"
                    options={
                        breeds.map((breed) => (
                            { value: breed.name }
                        ))
                    }
                />
            </div>
        </div>
        </div>
    )
}

export default Banner;