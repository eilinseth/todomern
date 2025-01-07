import PlusSvgComponent from '../../assets/svg/plus';

interface prop {
  open : () => void
}

const AddButton : React.FC<prop> =  ({open}) => {
  return (
    <div>
      <button onClick={open} className="fixed bottom-2 left-1/2 transform -translate-x-1/2 text-5xl text-black bg-white rounded-full">
        <PlusSvgComponent className="w-10 h-10" />
      </button>
    </div>
  );
};

export default AddButton;
