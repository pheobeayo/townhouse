interface circleProgressBarProp {
  progress: number;
  circleWidth: number;
  strokeWidth: number;
  sqSize: number;
}

function CircleProgressBar({
  progress,
  circleWidth,
  strokeWidth,
  sqSize,
}: circleProgressBarProp) {
  const radius = (sqSize - strokeWidth) / 2;

  const viewBox = `0 0 ${sqSize} ${sqSize}`;

  const dashArray = radius * Math.PI * 2;

  const dashOffset = dashArray - (dashArray * progress) / 100;
  return (
    <div>
      <svg
        style={{ width: circleWidth, height: circleWidth }}
        viewBox={viewBox}
      >
        <circle
          className="fill-none stroke-[#E6E6E6]"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className="fill-none stroke-[var(--primary-01)]"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          className="text-2xl font-medium fill-[var(--primary-01)]"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`${progress}%`}
        </text>
      </svg>
    </div>
  );
}

export default CircleProgressBar;
