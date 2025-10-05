type Props = {
  progress: number;
  currentValue: number;
  value: number;
  onSeek: (time: number) => void;
  withThumb?: boolean;
};

export const ProgressBar = ({
  progress,
  currentValue,
  value,
  onSeek,
  withThumb = false,
}: Props) => {
  return (
    <div className="w-full h-1 bg-zinc-400 rounded-lg relative ">
      <div
        className=" bg-primary absolute left-0 top-0 h-1  rounded-lg "
        style={{ width: `${progress}%` }}
      ></div>
      {withThumb && (
        <div
          className="w-3  h-3 bg-primary rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2 "
          style={{ left: `${progress}%` }}
        />
      )}
      <input
        min={0}
        max={value}
        value={currentValue}
        onChange={(e) => onSeek(Number(e.target.value))}
        step={1}
        type="range"
        className="w-full h-2 pointer-events-auto cursor-pointer opacity-0 appearance-none absolute left-0 -top-0.5"
      />
    </div>
  );
};
