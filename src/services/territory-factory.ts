import { Territory } from "../model/Territory";

export class TerritoryFactory{
    static loadCountries(scene:Phaser.Scene){
        const territorios = scene.add.group();
    const territories = scene.cache.json.get('territories').territories
    const territoriosData = scene.cache.json.get('frame').frames;
    console.log(territories)
    territories.forEach((territory: {
        slug: any;
        name: string; id: number; neighbors: number[]
        }) => {
            let territorio = new Territory(
                {
                    scene: scene,
                    id: territory.id,
                    x: 0, 
                    y: 0,
                    spriteSource: territoriosData[territory.slug].spriteSourceSize,
                    neighbors: territory.neighbors,
                    name: territory.name,
                    slug: territory.slug    
                }
            )  
            territorios.add(territorio);
        });
    }

    
}