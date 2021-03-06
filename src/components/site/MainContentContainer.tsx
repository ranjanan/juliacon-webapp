import React from "react";
import { SponsorSidebar } from "../sponsors/SponsorSidebar";
import { css, cx } from "emotion";
import { mobileOnly } from "../../utils/css";
export const MainContentContainer: React.FC = ({ children }) => {
  return (
    <div
      className={cx(
        css`
          display: flex;
          flex-flow: row nowrap;
          flex: 1;
        `,
        mobileOnly(
          css`
            flex-flow: column nowrap;
          `
        )
      )}
    >
      <div
        className={cx(
          css`
            flex: 1 100;
            max-width: 400px;
          `,
          mobileOnly(
            css`
              display: none;
            `
          )
        )}
      />
      <div
        className={css`
          margin: 0 auto;
          flex-basis: 1000px;
          max-width: 1000px;
          padding: 1rem;
          overflow: auto;
        `}
      >
        {children}
      </div>
      <SponsorSidebar />
    </div>
  );
};
