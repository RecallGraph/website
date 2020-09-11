import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="recaptcha"
      src="https://www.google.com/recaptcha/api.js"
      type="text/javascript"
      async
      defer
    />,
  ])
}
