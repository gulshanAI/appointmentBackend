import mongoose from "mongoose";
/**
 * Handles filtering, sorting, selecting fields, and populating references for any Mongoose model.
 *
 * @param {mongoose.Model} model - The Mongoose model to query.
 * @param {Object} queryParams - The query parameters from the client side.
 * @returns {Promise<Array>} - The result of the query.
 */

// const applyDynamicFilters = (filter, regexFields = []) => {
//   const newFilter = { ...filter };

//   regexFields.forEach((field) => {
//     if (newFilter[field]) {
//       newFilter[field] = { $regex: newFilter[field], $options: "i" };
//     }
//   });

//   return newFilter;
// };

const queryDatabase = async (model, query, queryParams) => {
  const filter = queryParams.filter;
  // if (queryParams.filter) {
  //   // const filter = applyDynamicFilters(queryParams.filter, regexFields);
  //   // console.log(queryParams, queryParams.filter, filter, regexFields);
  //   // query = query.where(queryParams.filter);
  //   // const filter = JSON.parse(queryParams.filter);
  //   console.log(filter);
  //   query = query.where(filter);
  // }

  // if (queryParams.fields) {
  //   query = query.select(queryParams.fields.split(",").join(" "));
  // }

  // if (queryParams.populate) {
  //   const populateFields = queryParams.populate.split(",");
  //   populateFields.forEach((field) => {
  //     query = query.populate(field);
  //   });
  // }
  if (queryParams.sort) {
    query = query.sort(queryParams.sort);
  }
  // const page = queryParams.page || 1;
  // const limit = queryParams.limit || 10;
  // const skip = (page - 1) * limit;

  // query = query.skip(skip).limit(limit);

  const results = await query.exec();
  // const total = await model.countDocuments(filter || {});

  return results;
  // return {
  //   pagination: {
  //     total,
  //     page,
  //     pages: Math.ceil(total / limit),
  //   },
  //   results,
  // };
};

export default queryDatabase;
