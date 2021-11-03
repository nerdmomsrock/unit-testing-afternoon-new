import { shortenText } from "../utils/functions";
import { wordCount, attachUserName } from "../../server/utils";
import { shortText, longText, posts, users } from "./__data__/testData";

test("Should not alter string under 100 characters", () => {
  expect(shortenText(shortText)).toHaveLength(29);
});

test("shortenText should cut off extra characters after 100 and add three periods", () => {
  const shortened = shortenText(longText);
  expect(shortened).not.toHaveLength(longText.length);
  expect(shortened).slice(-3).toBe("...");
});

test("wordCount should correctly count the number of words in a sentence", () => {
  expect(wordCount(posts)).toBe(233);
});

test("attachUserName should correctly attach a user's full name to a post", () => {
  const newPosts = attachUserName(users, posts);
  expect(newPosts[0]).toHaveProperty("displayName");
});

test("attachUserName should remove any post with no matching user", () => {
  const newPosts = attachUserName(users, posts);
  const deletedPost = posts[5];
  expect(newPosts).not.toContainEqual(deletedPost);
});
