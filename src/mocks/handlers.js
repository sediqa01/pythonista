import { rest } from "msw";

const baseURL = "https://pythonista-api-5cfcbbfd2406.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
          ctx.json({
            pk: 24,
            username: "Jasmin",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 24,
            profile_image: "https://res.cloudinary.com/drpij1z8t/image/upload/v1/media/images/jasmin_mjwcpi"
            })
        );
      }),
      rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
      }),
    ];