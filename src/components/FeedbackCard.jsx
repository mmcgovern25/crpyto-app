import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-6 py-12 rounded-[30px] max-w-[310px] md:mr-6 sm:m4-5 mr-0 my-5 bg-blue-gradient-hover feedback-card'>
    <img
      src={quotes}
      alt='double_quotes'
      className='w-[64px] h-[42px] object-contain'
    />
    <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10 feedback-content'>{content}</p>

    <div className='flex flex-row'>
      <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />

      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white feedback-name'>{name}</h4>
        <h4 className='font-poppins font-semibold text-[16px] leading-[24px] text-white feedback-title'>{title}</h4>
      </div>
    </div>
  </div>


  )
}

export default FeedbackCard
