interface ButtonProps {
  imageSrc?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <>
      <button
        onClick={props.onClick}
        className="flex px-6 py-5 space-x-5 bg-[#252D4A] rounded-lg items-center cursor-pointer hover:bg-[#3b435e] transition"
      >
        {props.imageSrc && (
          <img
            src={props.imageSrc}
            alt="Github icon"
            className="inline mr-2"
            width={32}
            height={32}
          />
        )}

        <span className="font-bold text-lg">{props.children}</span>
      </button>
    </>
  );
}
