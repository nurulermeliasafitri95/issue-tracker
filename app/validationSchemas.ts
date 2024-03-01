import { z } from "zod";

export const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is requred.').max(255),
    // description: z.string().min(1, 'Description is required.')
    description: z
    .string({ required_error: 'Description is required.' })
    .min(1, 'Description is required.'),
});
