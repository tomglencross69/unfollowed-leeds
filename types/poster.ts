export type Poster = {
    // posterId: number COMMENTED OUT BECAUSE IT WILL BE SERIAL PRIMARY KEY ASSIGNED BY SQLTABLE
    uploadUserId: number
    uploadUserUID: string
    uploadUsername: string
    // createdAt: string COMMENTED OUT AS IT WILL BE ASSIGNED TIMESTAMP IN SQL TABLE
    updatedAt: string
    posterImageURL: string
    slug: string
    posterImageAltText: string
    eventName: string
    eventVenueName: string
    eventLocation: {
        name: string
        address: string
        latitude: number
        longitude: number
      },
    eventTime: string
    eventText: string
    eventCategory: string
    posterDeletionDate: string
    isExpired: boolean
    posterX: number
    posterY: number
    isPublished: boolean
    tags: string[]
}