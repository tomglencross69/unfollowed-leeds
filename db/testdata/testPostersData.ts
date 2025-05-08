import type { Poster } from '@/types/poster'

export const testPostersData: Poster[] = [
    {
        // posterId: 1,
        uploadUserId: 1,
        uploadUserUID: "test1",
        uploadUsername: "testusername",
        // createdAt: "2024-05-06T12:00:00.000Z", COMMENTED OUT AS IT WILL BE ASSIGNED TIMESTAMP IN SQL TABLE
        updatedAt: "2024-05-06T12:30:00.000Z",
        posterImageURL: "https://res.cloudinary.com/dp98q16wp/image/upload/v1742659468/hfmynfjcht5xlx4z76r7.png",
        slug: "test-party",
        posterImageAltText: "Event poster for a test event",
        eventName: "Test Party",
        eventVenueName: "Wharf Chambers",
        eventLocation: {
            name: "Wharf Chambers",
            address: "23-25 Wharf Street, Leeds LS2 7EQ",
            latitude: 53.7976,
            longitude: -1.5491
          },
        eventTime: "2024-05-07T22:30:00.000Z",
        eventText: "This is a test event.",
        eventCategory: "gig",
        posterDeletionDate: "2024-05-14T22:30:00.000Z",
        isExpired: false,
        posterX: 0,
        posterY: 0,
        isPublished: true,
        tags: ["party", "test", "music"],
    
    }
]

