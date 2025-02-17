import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_tag_type = _test_assert_type(
    "type tag",
    TagType.generate,
    TSON.createAssertType<TagType>(),
    TagType.SPOILERS,
);
