import Button from './Button'

const ReadMore = ({ href }) => {
  return (
    <div className="pb-16 text-center">
      <a href={href} target="_blank" rel="noreferrer" className="inline-block">
        <Button text="Read more" />
      </a>
    </div>
  );
};

export default ReadMore;
