// Given a graph $G = (V, E)$ with weighted edges:
// - initialize a $|V|\times|V|$ matrix `dist` to $\infty$
// - for each vertex $v \in V$, `dist[v][v] = 0`
// - for each edge $(u,v) = e \in E$, `dist[u][v] = weight((u,v))`
// - for each vertex $k\in V$:
//     - for each vertex $i\in V$:
//         - for each vertex $j\in V$:
//             - `if dist[i][j] > dist[i][k] + dist[k][j]:`
//               `dist[i][j] = dist[i][k] + dist[k][j]`

function allPairsShortestPaths(graph) {
    let dist = []
    for(let i = 0; i < graph.length; i++){
        dist[i] = []
        for(let j = 0; j < graph.length; j++){
            dist[i][j] = Infinity
        }
    }
    // console.log(dist)
    for(let i = 0; i < graph.length; i++){
        for(let j = 0; j < graph.length; j++){
            if(i == j){
                dist[i][j] = 0;
            }
            else if(graph[i][j] > 0){
                dist[i][j] = graph[i][j]
            }
        }
    }
    // console.log(dist)
    for(let i = 0; i < graph.length; i++){
        for(let j = 0; j < graph.length; j++){
            for(let k = 0; k < graph.length; k++){
                if(dist[j][k] > dist[j][i] + dist[i][k]){
                    dist[j][k] = dist[j][i] + dist[i][k]
                }
            }
        }
    }
    return dist;
}

