"use server";
import OpenAi from "openai";
import { PrismaClient } from "@prisma/client";
import prisma from "./db";
type DirectionType = {
  city: string;
  country: string;
};
const openai = new OpenAi({
  apiKey: process.env.OPEN_API_KEY,
});
export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are helpful assistant" },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    return response.choices[0].message;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getExistingTour = async ({ city, country }: DirectionType) => {
  return prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
};
export const createNewTour = async (tour) => {
  return prisma.tour.create({
    data: tour,
  });
};

export const getTourResponse = async ({ city, country }: DirectionType) => {
  try {
    const query = `find short information about city ${city} in ${country}. Give me place who worth visit. Please give back information in Json format 
    find short information about city london in England. Give me places who worth visit and colors  flag of country with correct order. Please give back information in Json format 
{"tour":{
"city":${city},
"country"${country},
"desciption:"short information",
"places":"["first paragraph place of worth visit","second paragraph place of worth visit"...],
"colors":["red,green,...]
}
If you can't find information on exact city or country please give back information in Json format
{"tour":null}
with no additional characters`;
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "Im your guide" },
        {
          role: "user",
          content: query,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    const tourData = JSON.parse(response.choices[0].message.content);
    if (!tourData.tour) {
      return null;
    }
    return tourData;
  } catch (e) {
    console.log(error);
    return null;
  }
};

export const getAllData = async (search = null) => {
  if (!search) {
    const data = await prisma.tour.findMany({});
    return data;
  }
  return await prisma.tour.findMany({
    where: {
      OR: [
        {
          city: {
            contains: search,
          },
        },
        {
          country: {
            contains: search,
          },
        },
      ],
    },
    orderBy: {},
  });
};

export const getSingleTour = async (id) => {
  return prisma.tour.findUnique({ where: { id } });
};
