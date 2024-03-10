import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[30px] max-w-[335px] md:mr-6 sm:m4-5 mr-0 my-5 feature-card-hover'>
      <img
        src={quotes}
        alt='double_quotes' className='w-[64px] h-[42px] object-contain'
        />
        <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

        <div className='flex flex-row'>
          <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />

          <div className='flex flex-col ml-4'>
            <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
            <h4 className='font-poppins font-semibold text-[16px] leading-[24px] text-white'>{title}</h4>
          </div>
        </div>
    </div>
  )
}

export default FeedbackCard
