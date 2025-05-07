export type User = {
    // userId: number COMMENTED OUT BECAUSE IT WILL BE SERIAL PRIMARY KEY ASSIGNED BY SQLTABLE
    userUID: string
    username: string
    email: string 
    // createdAt: string COMMENTED OUT AS IT WILL BE ASSIGNED TIMESTAMP IN SQL TABLE
}