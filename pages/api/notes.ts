
import type { NextApiRequest, NextApiResponse } from "next";

export type NotesResponse = {
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default (req: NextApiRequest, res: NextApiResponse<NotesResponse[]>) => {
  res.status(200).json([
    {
      content: "notes here",
      createdAt: "today",
      updatedAt: "a moment ago",
    },
  ]);
};
