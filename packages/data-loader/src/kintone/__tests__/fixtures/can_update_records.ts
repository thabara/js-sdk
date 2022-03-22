import { RecordForImport } from "../../../types/data-loader";
import {
  KintoneFormFieldProperty,
  KintoneRestAPIClient,
} from "@kintone/rest-api-client";
import { KintoneRecordForParameter } from "../../../types/kintone";

export const input: RecordForImport[] = [
  {
    recordNumber: {
      value: "APP-1",
    },
    singleLineText: {
      value: "value1",
    },
  },
  {
    recordNumber: {
      value: "APP-2",
    },
    singleLineText: {
      value: "value2",
    },
  },
];

export const expectedParamsOfUpdateRecords: Parameters<
  KintoneRestAPIClient["record"]["updateRecords"]
> = [
  {
    app: "1",
    records: [
      {
        id: "1",
        record: {
          singleLineText: {
            value: "value1",
          },
        },
      },
      {
        id: "2",
        record: {
          singleLineText: {
            value: "value2",
          },
        },
      },
    ],
  },
];

export const properties: Record<string, KintoneFormFieldProperty.OneOf> = {
  singleLineText: {
    type: "SINGLE_LINE_TEXT",
    code: "singleLineText",
    label: "singleLineText",
    noLabel: false,
    required: false,
    minLength: "",
    maxLength: "",
    expression: "",
    hideExpression: false,
    unique: false,
    defaultValue: "",
  },
  recordNumber: {
    code: "recordNumber",
    label: "recordNumber",
    noLabel: false,
    type: "RECORD_NUMBER",
  },
};
