import { prisma } from "../../db";
import EventEmitter from "events";
import { input, z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
const bcrypt = require("bcrypt");

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  hello2: publicProcedure
    .input(z.object({ username: z.string(), password: z.string() }))
    .mutation(async ({ input }) => {
      const hashedPassword = await bcrypt.hashSync(input.password, 10);
      await prisma.user.create({
        data: {
          name: input.username,
          password: hashedPassword,
        },
      });
      return {
        greeting: `Hello ${input.username}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
