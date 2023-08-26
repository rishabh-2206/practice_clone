import { Typography } from 'antd'
import React from 'react'

const Left = ({market}) => {
  return ( 

    <div className='flex flex-col mt-16'>
    <div className='flex gap-4 mt-8'>
      <div className='text-black flex-1'>
        <h2 className='font-sans font-arial font-medium text-blue-500 text-2xl mb-4'>{market?.title}</h2>
        <p className='text-base pr-2 leading-[1.65] font-light'>{market?.body}</p>
      </div>
      <div className='flex-1 flex items-center'>
        <img
          src={market?.url}
          alt='img'
          className='object-cover h-full w-full'
        />
      </div>
    </div>
  </div>
  
   );
}
 
const Right = ({market}) => {
  return ( 
<div className='flex flex-col mt-16'>
  <div className='flex gap-4 mt-8'>
    <div className='flex-1 flex items-center'>
      <img
        src={market?.url}
        alt='img'
        className='object-cover h-full w-full'
      />
    </div>

    <div className='text-black flex-1'>
      <h2 className='font-sans font-medium text-blue-500 text-2xl mb-4'>{market?.title}</h2>
      <p className='text-base leading-[1.65] pl-2 font-light'>{market?.body}</p>
    </div>
  </div>
</div>

   );
}
const marketData=[
  {
     id:0,
     title: "National ID",
     body: `National biometric system plays a key role in fraud prevention, providing of digital governmental services and national security. Fingerprint recognition is a "must-have" biometric modality in such systems: it's reliable, unique for any individuals including identical twins and changes less over time than face.
     Our algorithms are designed to work with millions of records in enrollment databases with high accuracy and low false accept rate even for a search with one finger. High matching speed - up to 1 billion matches per 1 s - is a crucial advantage for big scale projects. It significantly saves customer's budget: numbers of required matching servers is up to 100 times less than the same numbers for "traditional" recognition algorithms.`,
     url:  `	https://thumb.tildacdn.com/tild3861-3834-4634-a234-636432306139/-/format/webp/id_sm.png`
  },
  {
    id:1,
    title: "Banks",
    body: `Banks go digital today. Now good service means that a lot of features can be provided to a client remotely, without visiting bank office. Biometric identification and verification help to prove customer's identity for online operations. Its safer and more convenient than a password, biometrics can not be forgotten or passed to someone else and it doesn't require memorizing.
    Our technologies unlock fingerprint recognition for user's online verification and customer onboarding, because it requires only a regular phone. Mobile SDK can verify a person using 4 fingers, which are user-friendly to capture. It ensures ultimate verification and identification accuracy, which is much higher than recognition with one face.`,
    url:  `https://thumb.tildacdn.com/tild6134-3366-4634-b464-343266633664/-/format/webp/bank_sm.png`
 },
 {
  id:2,
  title: "Governmental services",
  body: `Biometric identification and verification expedite and secure providing of digital governmental services. Its especially convenient for elder citizens, who often have difficulties with online authorization and memorizing lot of different passwords, which stops them from using digital services.
  Fingerprint recognition provides high accuracy of identification, especially when several fingers are used. It contains different biometric data and reliability of recognition is increasing not several times, but by orders of magnitude.
  Our technologies allow to acquire fingerprints by a scanner and a phone with compatible templates, as well as to use fingerprints acquired by a phone and converted to standard format (WSQ) in legacy systems.`,
  url:  `https://thumb.tildacdn.com/tild3932-6134-4539-b235-373332396164/-/format/webp/gov_sm.png`
},
{
  id:3,
  title: "Police and migration",
  body: `Our algorithms demonstrate superior accuracy of neural networks working with national scale databases of tens or hundreds of millions individuals. Specially trained algorithms of detection and segmentation allow to automatically process fingerprint cards, segmenting flat and roll fingerprints of different quality, checking right/left hands and finger positions.
  Mobile finger acquisition opens new possibilities for law enforcement, making fingerprint recognition possible without a scanner, but with an ordinary mobile phone. Our technologies can not just capture, but also run fingerprints against a database stored locally on a phone. It makes a check against relatively small databases (less than 10,000-100,000 fingers) fast and fully mobile - it requires only phone application instead of expensive mobile biometric terminals.`,
  url:  `https://thumb.tildacdn.com/tild6263-6565-4266-b262-666266306134/-/format/webp/police_sm.png`
},
{
  id:4,
  title: "Forencics",
  body: `Quality of latents collected from a crime scene is usually far away from ideal: its "dirty", partial, with artifacts. In many cases forensic experts should process it manually.
  Unlike "traditional" algorithms, neural networks can identify even partial fingerprints automatically. Furthermore, ability of machine algorithms to recognize complicated patterns surpasses human's, so the algorithm can automatically find list of candidates and human can validate it manually.
  Our SDK also have detection and segmentation algorithms for processing fingerprint cards and all types of fingerprints on it automatically.`,
  url:  `https://thumb.tildacdn.com/tild3164-3535-4439-b130-633131383239/-/format/webp/forensic_sm.png`
},
]


const Market = () => {

  return (
<div  className='flex flex-col bg-white p-3'>
     <div className='w-[80%] mx-auto '>
     <div>
    <h1 className=' font-sans  text-blue-500 text-5xl font-medium '>Market</h1>
    {marketData?.map((market, idx) => (
  <div key={idx}>
    {idx % 2 === 0 ? <Left market={market} /> : <Right market={market} />}
  </div>
))}

     </div>


  
      

</div>


       


</div>

   
  )
}

export default Market