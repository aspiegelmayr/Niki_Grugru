class Chapter {
    public title: string;
    public aboutPageTitle: string;
    public aboutPageText: string;
    public url: string;
    
    constructor(title: string, aboutPageTitle: string, aboutPageText: string, url: string){
        this.title = title;
        this.aboutPageTitle = aboutPageTitle;
        this.aboutPageText = aboutPageText;
        this.url = url
    }
}

export default Chapter;