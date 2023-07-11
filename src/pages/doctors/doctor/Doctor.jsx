import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useSingleData} from '../../../hooks'
import {getData} from '../../../redux/slices/singleDataSlice'
import { Breadcrumb } from 'antd';
import PageLoader from '../../../components/shared/pageLoader/PageLoader';
const Doctor = () => {
   const dispatch = useDispatch();
   const { doctorID } = useParams();
   useEffect(() => {
     let arg = { id: Number(doctorID), url: "doctors" };
     dispatch(getData(arg));
   }, [doctorID]);
   const { loading, data } = useSingleData();
   const items = [
     {
       href: "/medical",
       title: "خانه",
     },
     {
       href: "/medical/#/doctors",
       title: "پزشکان",
     },
     {
       href: `/medical/#/doctors/${data.id}`,
       title: data.full_name,
     },
   ];
   return (
     <div className='pt-10 relative  w-full flex flex-col items-center '>
       <Breadcrumb className='self-start ms-20' items={items} />

       {loading === "fulfilled" ? (
         <div className=' py-10 container grid grid-cols-1 md:grid-cols-4'>
           <img className='col-span-1' src={data.cover} alt='' />
           <div className='p-4 col-span-1 md:col-span-3'>
             <h6 className='text-teal-500 text-3xl py-4'>{data.full_name}</h6>
             <p>{data.Expertise}</p>
             <p className='py-4 text-xl'>{data.information}</p>
           </div>
         </div>
       ) : (
         <PageLoader />
       )}
     </div>
   );
}

export default Doctor