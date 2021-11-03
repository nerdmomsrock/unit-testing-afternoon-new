import React from "react";
import { render } from "@testing-library/react";
import PostWidget from "../components/PostWidget";
import { MemoryRouter } from "react-router";
import { shortenText } from "../utils/functions";
import { posts } from "./__data__/testData";

var longPost = posts[0];
var post = posts[1];

test("Renders postWidget and check if innter text contains posts in text content", () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...post} />
    </MemoryRouter>
  );
  expect(container.textContent).toContain(post.text);
});

test("shortens text when expanded is false", () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...longPost} />
    </MemoryRouter>
  );
  expect(container.textContent).toContain(shortenText(longPost.text));
});

test("displays all text when expanded is true", () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget expanded={true} {...longPost} />
    </MemoryRouter>
  );
  expect(container.textContent).toContain(longPost.text);
});
