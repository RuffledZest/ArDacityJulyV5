import { z } from "zod"

export const registryItemFileSchema = z.union([
  z.string(),
  z.object({
    path: z.string(),
    content: z.string().optional(),
    type: z.enum(["registry:component", "registry:hook", "registry:lib", "registry:block"]).optional(),
    target: z.string().optional(),
  }),
])
