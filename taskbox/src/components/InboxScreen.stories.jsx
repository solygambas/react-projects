import React from "react";
import { Provider } from "react-redux";
import { rest } from "msw";
import {
  fireEvent,
  within,
  waitFor,
  waitForElementToBeRemoved,
} from "@storybook/testing-library";

import InboxScreen from "./InboxScreen";
import { MockedState } from "./TaskList.stories";
import store from "../lib/store";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = () => <InboxScreen />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1",
        (_, res, ctx) => {
          return res(ctx.json(MockedState.tasks));
        }
      ),
    ],
  },
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitForElementToBeRemoved(await canvas.findByTestId("loading"));
  await waitFor(async () => {
    await fireEvent.click(canvas.getByLabelText("pinTask-1"));
    await fireEvent.click(canvas.getByLabelText("pinTask-3"));
  });
};

export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1",
        (_, res, ctx) => {
          return res(ctx.status(403));
        }
      ),
    ],
  },
};
