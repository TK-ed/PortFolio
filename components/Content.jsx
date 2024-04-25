import { Const } from "./const";

export const Content = ({ children, style = {} }) => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
      }}
    >
      <div
        data-test-id={"inner content wrapper"}
        style={{
          paddingRight: Const.css.contentPad,
          paddingLeft: Const.css.contentPad,
          maxWidth: 500,
          width: "100%",
          paddingBottom: Const.pad * 10,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
};
