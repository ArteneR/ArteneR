export class Project {
    mainImage: string;
    projectOtherPhotos = [];
    projectsFolder = "assets/images/projects";
    defaultPhoto = "assets/images/no image available.jpg";
 
        
    constructor(public id: number,
                public title: string,
                public projectLink: string,
                public year: string,
                public projectFolder: string,
                public description: string,
                public images: string[],
                public technologiesUsed: string[],
                public descriptionOnLeftSide: boolean) {
                
            this.initProjectMainPhoto();
            this.initProjectOtherPhotos();
            this.initProjectImages();
    }


    initProjectMainPhoto(): void {
            this.mainImage = ((this.images !== undefined) && (this.images[0] !== undefined)) ?
                                            this.projectsFolder + "/" + this.projectFolder + "/" + this.images[0] :
                                            this.defaultPhoto;
    }
    
    
    initProjectOtherPhotos(): void {
            this.projectOtherPhotos[0] = (this.images && this.images[1]) ?
                                            this.projectsFolder + "/" + this.projectFolder + "/" + this.images[1] :
                                            this.defaultPhoto;

            this.projectOtherPhotos[1] = (this.images && this.images[2]) ?
                                            this.projectsFolder + "/" + this.projectFolder + "/" + this.images[2] :
                                            this.defaultPhoto;
                                            
            this.projectOtherPhotos[2] = ((this.images !== undefined) && (this.images[3] !== undefined)) ?
                                            this.projectsFolder + "/" + this.projectFolder + "/" + this.images[3] :
                                            this.defaultPhoto;
    }

    initProjectImages(): void {
            this.images = this.images.map(image => this.projectsFolder + "/" + this.projectFolder + "/" + image);
    }
}
