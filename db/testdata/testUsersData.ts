import type {User} from "@/types/user"

export const testUsersData: User[] = [
    {
        // userId: 1, COMMENTED OUT AS WILL BE ASSIGNED SERIAL PRIMARY KEY BY TABLE
        userUID: "test1",
        username: "testusername",
        email: "test@test.com",
        // createdAt: "2024-05-06T12:00:00.000Z" COMMENTED OUT AS IT WILL BE ASSIGNED TIMESTAMP IN SQL TABLE

    }
]
