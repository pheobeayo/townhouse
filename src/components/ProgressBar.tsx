interface ProgressBarProps {
  maxProgress?: number;
  progress?: number;
  strokeWidth?: string;
  barWidth?: string;
  color?: string;
  background?: string;
}

function ProgressBar({
  maxProgress = 100,
  progress = 50,
  strokeWidth = "20px",
  barWidth = "100%",
  color = "var(--primary-01)",
  background = "#E6E6E6",
}: ProgressBarProps) {
  const width = (progress / maxProgress) * 100;

  return (
    <div className={`w-[${barWidth}] rounded-lg bg-[${background}]`}>
      <div
        className={`bg-[${color}] rounded-lg`}
        style={{ width: `${width}%` , height: strokeWidth}}
      ></div>
    </div>
  );
}

export default ProgressBar;
