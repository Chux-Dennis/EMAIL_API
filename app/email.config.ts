import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

interface IEmailDetails {
  emailAppPassword: string;
  emailAddress: string;
}

const emailDetails: IEmailDetails = {
  emailAppPassword:
    process.env.APP_PASSWORD ||
    (() => {
      throw new Error(
        "APP_PASSWORD is not defined in the environment variables"
      );
    })(),
  emailAddress:
    process.env.EMAIL_ADDRESS ||
    (() => {
      throw new Error(
        "EMAIL_ADDRESS is not defined in the environment variables"
      );
    })(),
};

export { emailDetails };
