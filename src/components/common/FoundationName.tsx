import './FoundationName.scss'

export const FoundationName = ({value}: { value: string }) => {
    return (
        <div className='foundation-name'>
            <div className='foundation-name__logo'>{value.split('')[0]}</div>
            <div>{value}</div>
        </div>)
};
