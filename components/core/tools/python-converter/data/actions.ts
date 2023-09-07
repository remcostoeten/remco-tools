export const types = ["GPT-3", "Codex"] as const;

export type ActionType = (typeof types)[number];

export interface Action<Type = string> {
  id: string;
  name?: string;
  description?: string;
  strengths?: string;
  type?: Type;
}

export const Actions: Action<ActionType>[] = [
  {
    id: "c305f976-8e38-42b1-9fb7-d21b2e34f0da",
    name: "Replace string with string",
    description:
      "Replace all occurrences of a string with another string in a given text.",
    type: "GPT-3",
    strengths:
      "Simple string replacement, but can be used to replace multiple strings at once",
  },
  {
    id: "remove-string-remove-string",
    name: "Remove string recursively",
    description: "Remove all occurrences of a string in a given text.",
    strengths:
      "Simple string removal, but can be used to remove multiple strings at once",
  },
];
                  