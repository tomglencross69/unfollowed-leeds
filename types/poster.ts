export type Poster = {
    posterId: number
    uploadUserId: number
    uploadUsername: string
    createdAt: string
    updatedAt: string
    posterImageURL: string
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
    posterX: number
    posterY: number
    isPublished: boolean
    tags: string[]
}