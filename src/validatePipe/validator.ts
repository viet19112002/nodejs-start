import { validationPipe } from "./validate";

// export const validationMiddleware = (validationSchema) => async (req, res, next) => {
//     console.log("validationMiddleware");
//     console.log(validationSchema);
//     const result: any = await validationPipe(validationSchema, { ...req.body, ...req.params });
//       if (result.errors) {
//         console.log(result);
//         return res.status(400).json({
//           success: false,
//           ...result,
//         });
//       }

//       next();
//       return true;
// };

export function validationMiddleware(validationSchema) {
  console.log("validationMiddleware");
  return async (req, res, next) => {
    const result: any = await validationPipe(validationSchema, {
      ...req.body,
      ...req.params,
    });
    if (result.errors) {
      return res.status(400).json({
        success: false,
        ...result,
      });
    }

    next();
    return true;
  };
}
