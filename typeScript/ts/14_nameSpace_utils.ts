// name spaces


namespace Geometry{

    export const PI=3.14;

    export class Calc{
        area(width:number,height:number):number{
            return width *height;
        }
    }

    export function calc_area(radius:number):number{
        return Math.PI*radius*radius;
    }


}

console.log(Geometry.PI);
console.log(Geometry.calc_area);



const calc=new Geometry.Calc();
console.log(calc.area(2,3));





// nested namespace  example
namespace Shape{
    export namespace Circle{
        export  const PI=3.14;
    }
}
console.log(Shape.Circle.PI);
