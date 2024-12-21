import { scheduleJob } from "node-schedule";
//Cron jobs

//Runs on every 21st of the month on 14:47 PM
// scheduleJob("47 14 21 * *", () => {
//   console.log("Running a job");
// });

// Runs every second (6 stars)
// scheduleJob("*/1 * * * * *", () => {
//   try {
//     console.log("Running a job");
//     throw new Error("Error while running cron");
//   } catch (error) {
//     console.log(error);
//   }
// });
