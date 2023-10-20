function convertToAdjList(adjMatrix) {
    for(row = 0; row < adjMatrix.length; row++) {
        current = 0;
        for(column = 0; column < adjMatrix.length; column++) {
            if(adjMatrix[row][column] > 0){
                adjMatrix[row][current] = column;
                current++;
            }
        }
        adjMatrix[row].length = current;
    }
    return adjMatrix;
}
