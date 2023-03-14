import { useCallback, memo, useState, useEffect, useRef } from "react";

interface Downner {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const boxCss: React.CSSProperties = {
  height: "200px",
  width: "200px",
  border: "1px solid #000000",
  transition: ".5s",
};

const flex: React.CSSProperties = {
  display: "flex",
};

const PureDownnerComponent = memo(DownnerComponent);

function UpperComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {}, []);
  const handleClickWithoutHook = () => {};
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref1.current && ref2.current) {
      ref1.current.style.backgroundColor = "green";
      ref2.current.style.backgroundColor = "green";
      setTimeout(() => {
        ref1.current!.style.backgroundColor = "white";
        ref2.current!.style.backgroundColor = "white";
      }, 500);
    }
  }, [count]);

  useEffect(() => {
    const time = setInterval(() => {
      setCount((v) => v + 1);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      <div ref={ref1} style={boxCss}>
        {count}
      </div>
      <div style={flex}>
        <div ref={ref2} style={boxCss}>
          {count}
        </div>
        <PureDownnerComponent text="pure and hook" onClick={handleClick} />
        <PureDownnerComponent
          text="pure without hook"
          onClick={handleClickWithoutHook}
        />
        <DownnerComponent text="not pure and hook" onClick={handleClick} />
        <DownnerComponent
          text="not pure without hook"
          onClick={handleClickWithoutHook}
        />
      </div>
    </>
  );
}

function DownnerComponent({ onClick, text }: Downner) {
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Skipping re-rendering of components (useCallback with a memo(pure) component)
   */

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundColor = "green";
      setTimeout(() => {
        ref.current!.style.backgroundColor = "white";
      }, 500);
    }
  });

  /**
   * Preventing an Effect from firing too often
   */

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.style.backgroundColor = "green";
  //     setTimeout(() => {
  //       ref.current!.style.backgroundColor = "white";
  //     }, 500);
  //   }
  // }, [onClick]);
  return (
    <>
      <div ref={ref} style={boxCss}>
        {text}
      </div>
    </>
  );
}

export default function CallbackExample() {
  return (
    <div>
      <UpperComponent />
    </div>
  );
}

