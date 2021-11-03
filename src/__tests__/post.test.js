import React from "react";
import { render, act } from "@testing-library/react";
import Post from "../views/Post";
import axios from "axios";
import { MemoryRouter } from "react-router";
import { posts } from "./__data__/testData";

test("Renders out a post widget", async () => {
  const post = posts[0];
  var container;
  jest
    .spyOn(axios, "get")
    .mockImplementation(() => Promise.resolve({ data: post }));
  await act(async () => {
    var renderObj = render(
      <MemoryRouter>
        <Post match={{ params: { postId: 1 } }} />
      </MemoryRouter>
    );
    container = renderObj.container;
  });
  expect(container.textContent).toContain(post.text);
});
