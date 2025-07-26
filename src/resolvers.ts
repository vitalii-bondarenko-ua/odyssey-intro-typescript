import { DataSourceContext } from "./context";

export const resolvers = {
    Query: {
        featuredListings: (_: any, __: any, {  dataSources }: DataSourceContext) => {
            return dataSources.listingAPI.getFeaturedListings();
        },
    },
};