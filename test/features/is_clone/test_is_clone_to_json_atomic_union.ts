import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_to_json_atomic_union = _test_is_clone(
    "toJSON() method returning atomic union type",
    ToJsonAtomicUnion.generate,
    (input) => TSON.isClone(input),
);
