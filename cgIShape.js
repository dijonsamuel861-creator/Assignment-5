//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube (subdivisions)  {
    
    // Front face
    addTriangle(-0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5);
    addTriangle(-0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5);

    // Back face
    addTriangle(-0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5);
    addTriangle(-0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5);

    // Left face
    addTriangle(-0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5);
    addTriangle(-0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5);

    // Right face
    addTriangle(0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5);
    addTriangle(0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5);

    // Top face
    addTriangle(-0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5);
    addTriangle(-0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5);

    // Bottom face
    addTriangle(-0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5);
    addTriangle(-0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5);
}
 

    // +X and -X faces
    makeFace('x', 0.5, 'y', 'z', false);
    makeFace('x', -0.5, 'y', 'z', true);

    // +Y and -Y faces
    makeFace('y', 0.5, 'x', 'z', true);
    makeFace('y', -0.5, 'x', 'z', false);

    // +Z and -Z faces
    makeFace('z', 0.5, 'x', 'y', false);
    makeFace('z', -0.5, 'x', 'y', true);
}

    // +X and -X faces
    makeFace('x', 0.5, 'y', 'z', false);
    makeFace('x', -0.5, 'y', 'z', true);

    // +Y and -Y faces
    makeFace('y', 0.5, 'x', 'z', true);
    makeFace('y', -0.5, 'x', 'z', false);

    // +Z and -Z faces
    makeFace('z', 0.5, 'x', 'y', false);
    makeFace('z', -0.5, 'x', 'y', true);
}


//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder (radialdivision,heightdivision){
     if (radialdivision < 3) radialdivision = 3;
    if (heightdivision < 1) heightdivision = 1;

    let radius = 0.5;
    let height = 1.0;
    let halfHeight = height / 2.0;

    for (let i = 0; i < radialdivision; i++) {
        let theta0 = (2 * Math.PI * i) / radialdivision;
        let theta1 = (2 * Math.PI * (i + 1)) / radialdivision;

        let x0 = radius * Math.cos(theta0);
        let z0 = radius * Math.sin(theta0);
        let x1 = radius * Math.cos(theta1);
        let z1 = radius * Math.sin(theta1);

        // Top and bottom caps
        addTriangle(0, halfHeight, 0, x1, halfHeight, z1, x0, halfHeight, z0);
        addTriangle(0, -halfHeight, 0, x0, -halfHeight, z0, x1, -halfHeight, z1);

        // Side surface
        for (let j = 0; j < heightdivision; j++) {
            let y0 = -halfHeight + (height * j) / heightdivision;
            let y1 = -halfHeight + (height * (j + 1)) / heightdivision;

            addTriangle(x0, y0, z0, x1, y0, z1, x1, y1, z1);
            addTriangle(x0, y0, z0, x1, y1, z1, x0, y1, z0);
        }
    }
}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone (radialdivision, heightdivision) {
     if (radialdivision < 3) radialdivision = 3;
    if (heightdivision < 1) heightdivision = 1;

    let height = 1.0;
    let radius = 0.5;
    let halfHeight = height / 2.0;

    for (let i = 0; i < radialdivision; i++) {
        let theta0 = (2 * Math.PI * i) / radialdivision;
        let theta1 = (2 * Math.PI * (i + 1)) / radialdivision;

        let x0 = radius * Math.cos(theta0);
        let z0 = radius * Math.sin(theta0);
        let x1 = radius * Math.cos(theta1);
        let z1 = radius * Math.sin(theta1);

        // Base
        addTriangle(0, -halfHeight, 0, x1, -halfHeight, z1, x0, -halfHeight, z0);

        // Lateral surface
        let prevR = radius;
        for (let j = 0; j < heightdivision; j++) {
            let y0 = -halfHeight + (height * j) / heightdivision;
            let y1 = -halfHeight + (height * (j + 1)) / heightdivision;

            let r0 = radius * (1 - j / heightdivision);
            let r1 = radius * (1 - (j + 1) / heightdivision);

            let v00 = [r0 * Math.cos(theta0), y0, r0 * Math.sin(theta0)];
            let v10 = [r0 * Math.cos(theta1), y0, r0 * Math.sin(theta1)];
            let v01 = [r1 * Math.cos(theta0), y1, r1 * Math.sin(theta0)];
            let v11 = [r1 * Math.cos(theta1), y1, r1 * Math.sin(theta1)];

            addTriangle(v00[0], v00[1], v00[2], v10[0], v10[1], v10[2], v11[0], v11[1], v11[2]);
            addTriangle(v00[0], v00[1], v00[2], v11[0], v11[1], v11[2], v01[0], v01[1], v01[2]);
        }
    }
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
 if (slices < 3) slices = 3;
    if (stacks < 2) stacks = 2;

    let radius = 0.5;

    for (let i = 0; i < slices; i++) {
        let theta0 = (2 * Math.PI * i) / slices;
        let theta1 = (2 * Math.PI * (i + 1)) / slices;

        for (let j = 0; j < stacks; j++) {
            let phi0 = Math.PI * j / stacks;
            let phi1 = Math.PI * (j + 1) / stacks;

            let v00 = [radius * Math.sin(phi0) * Math.cos(theta0), radius * Math.cos(phi0), radius * Math.sin(phi0) * Math.sin(theta0)];
            let v10 = [radius * Math.sin(phi0) * Math.cos(theta1), radius * Math.cos(phi0), radius * Math.sin(phi0) * Math.sin(theta1)];
            let v01 = [radius * Math.sin(phi1) * Math.cos(theta0), radius * Math.cos(phi1), radius * Math.sin(phi1) * Math.sin(theta0)];
            let v11 = [radius * Math.sin(phi1) * Math.cos(theta1), radius * Math.cos(phi1), radius * Math.sin(phi1) * Math.sin(theta1)];

            addTriangle(v00[0], v00[1], v00[2], v10[0], v10[1], v10[2], v11[0], v11[1], v11[2]);
            addTriangle(v00[0], v00[1], v00[2], v11[0], v11[1], v11[2], v01[0], v01[1], v01[2]);
        }
    }
}


function makeCone(radialDiv, heightDiv) {
    if (radialdivision < 3) radialdivision = 3;
    if (heightdivision < 1) heightdivision = 1;

    let height = 1.0;
    let radius = 0.5;
    let halfHeight = height / 2.0;

    for (let i = 0; i < radialdivision; i++) {
        let theta0 = (2 * Math.PI * i) / radialdivision;
        let theta1 = (2 * Math.PI * (i + 1)) / radialdivision;

        let x0 = radius * Math.cos(theta0);
        let z0 = radius * Math.sin(theta0);
        let x1 = radius * Math.cos(theta1);
        let z1 = radius * Math.sin(theta1);

        // Base
        addTriangle(0, -halfHeight, 0, x1, -halfHeight, z1, x0, -halfHeight, z0);

        // Lateral surface
        let prevR = radius;
        for (let j = 0; j < heightdivision; j++) {
            let y0 = -halfHeight + (height * j) / heightdivision;
            let y1 = -halfHeight + (height * (j + 1)) / heightdivision;

            let r0 = radius * (1 - j / heightdivision);
            let r1 = radius * (1 - (j + 1) / heightdivision);

            let v00 = [r0 * Math.cos(theta0), y0, r0 * Math.sin(theta0)];
            let v10 = [r0 * Math.cos(theta1), y0, r0 * Math.sin(theta1)];
            let v01 = [r1 * Math.cos(theta0), y1, r1 * Math.sin(theta0)];
            let v11 = [r1 * Math.cos(theta1), y1, r1 * Math.sin(theta1)];

            addTriangle(v00[0], v00[1], v00[2], v10[0], v10[1], v10[2], v11[0], v11[1], v11[2]);
            addTriangle(v00[0], v00[1], v00[2], v11[0], v11[1], v11[2], v01[0], v01[1], v01[2]);
        }
    }
}



////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

