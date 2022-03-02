export interface Blog {
    title: string,
    content: string | null,
    publishDate: Date
};

export interface BlogForList {
    id: number,
    title: string,
    publishDate: Date
}