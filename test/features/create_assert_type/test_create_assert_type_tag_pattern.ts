import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_tag_pattern = _test_assert_type(
    "pattern tag",
    TagPattern.generate,
    TSON.createAssertType<TagPattern>(),
    TagPattern.SPOILERS,
);
