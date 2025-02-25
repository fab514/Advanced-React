/* eslint-disable @typescript-eslint/indent */
/* eslint-disable prettier/prettier */
import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';

const User = list({
    fields: {
        name: text({ isRequired: true }),
        email: text({ isRequired: true, isUnique: true }),
        password: password(),
        // TODO, add roles, cart and orders
    },
});

export default User;
export { User };
