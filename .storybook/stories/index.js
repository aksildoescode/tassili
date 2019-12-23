import React from "react";
import { storiesOf } from "@storybook/react";

import App from "../../src/index";

storiesOf("App", module).addWithJSX("simple", () => <App />);
