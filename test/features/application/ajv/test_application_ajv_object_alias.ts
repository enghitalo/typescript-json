import TSON from "../../../../src";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_alias = _test_application_ajv(
    "aliased object",
    TSON.application<[ObjectAlias], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "components#/schemas/ObjectAlias.IMember",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "ObjectAlias.IMember": {
                    $id: "components#/schemas/ObjectAlias.IMember",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: true,
                            "x-tson-required": true,
                        },
                        email: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        sex: {
                            oneOf: [
                                {
                                    type: "number",
                                    enum: [2, 1],
                                    nullable: true,
                                    "x-tson-required": true,
                                },
                                {
                                    type: "string",
                                    enum: ["male", "female"],
                                    nullable: true,
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                        age: {
                            type: "number",
                            nullable: true,
                            "x-tson-required": true,
                        },
                        dead: {
                            type: "boolean",
                            nullable: true,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["id", "email", "name", "sex", "age", "dead"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
