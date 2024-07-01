
export interface Comment {

    id: number,
    title: string,
    content: string,
    createdOn: string,
    stockId: number
}

export interface CommentUpdate {

    title: string,
    content: string
}

export interface CommentCreate {

    title: string,
    content: string,
    createdOn: string
}