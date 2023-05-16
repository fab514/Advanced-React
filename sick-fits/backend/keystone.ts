/* eslint-disable @typescript-eslint/indent */
/* eslint-disable prettier/prettier */
import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { User } from './schemas/Users';

const databaseURL =
    process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        // TODO Add in initial field. 
    }
});

export default config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL,
        // TODO: Add data seeding here
    },
    lists: createSchema({
        // Schema items go in here
        User
    }),
    ui: {
        // Show the ui for only the people who passed this test. 
        isAccessAllowed: ({ session }) => {
            console.log('session', session);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return !!session?.data;
        },
    },
    session: withItemData(statelessSessions(sessionConfig), {
        User: 'id name email',
    }),
});
