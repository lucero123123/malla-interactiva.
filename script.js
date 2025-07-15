document.addEventListener('DOMContentLoaded', function() {
    // Datos de la malla curricular
    const courses = [
        // Primer ciclo
        { id: "CC1032", name: "Análisis Matemático I", cycle: 1, credits: 3, x: 100, y: 50, color: "#3498db" },
        { id: "CC1024", name: "Ecología General", cycle: 1, credits: 3, x: 200, y: 50, color: "#2ecc71" },
        { id: "CC1031", name: "Química General", cycle: 1, credits: 3, x: 300, y: 50, color: "#e74c3c" },
        { id: "EP1049", name: "Sociedad y Cultura Peruana", cycle: 1, credits: 2, x: 400, y: 50, color: "#9b59b6" },
        { id: "AL1003", name: "Introducción a la Industria Alimentaria", cycle: 1, credits: 3, x: 500, y: 50, color: "#f1c40f" },
        { id: "CC1004", name: "Biología General", cycle: 1, credits: 4, x: 600, y: 50, color: "#1abc9c" },
        { id: "DEP", name: "Curso de Deportes o Actividades Culturales", cycle: 1, credits: 2, x: 700, y: 50, color: "#34495e" },
        
        // Segundo ciclo
        { id: "CC2073", name: "Análisis Matemático II", cycle: 2, credits: 3, x: 100, y: 150, color: "#3498db", prerequisites: ["CC1032"] },
        { id: "EP1050", name: "Economía General", cycle: 2, credits: 3, x: 200, y: 150, color: "#9b59b6" },
        { id: "CC1030", name: "Física General", cycle: 2, credits: 3, x: 300, y: 150, color: "#e74c3c", prerequisites: ["CC1032"] },
        { id: "EP2086", name: "Perú en el Contexto Internacional", cycle: 2, credits: 2, x: 400, y: 150, color: "#9b59b6" },
        { id: "EP1051", name: "Lenguaje y Comunicación", cycle: 2, credits: 2, x: 500, y: 150, color: "#9b59b6" },
        { id: "CC1020", name: "Química Orgánica", cycle: 2, credits: 4, x: 600, y: 150, color: "#e74c3c", prerequisites: ["CC1031"] },
        
        // Tercer ciclo
        { id: "EP2085", name: "Estadística General", cycle: 3, credits: 3, x: 100, y: 250, color: "#3498db", prerequisites: ["CC2073"] },
        { id: "EP1052", name: "Redacción y Argumentación", cycle: 3, credits: 2, x: 200, y: 250, color: "#9b59b6", prerequisites: ["EP1051"] },
        { id: "AL2008", name: "Administración", cycle: 3, credits: 2, x: 300, y: 250, color: "#f1c40f", prerequisites: ["EP1050"] },
        { id: "CC3107", name: "Análisis Matemático III", cycle: 3, credits: 3, x: 400, y: 250, color: "#3498db", prerequisites: ["CC2073"] },
        { id: "CC2004", name: "Bioquímica", cycle: 3, credits: 4, x: 500, y: 250, color: "#1abc9c", prerequisites: ["CC1004", "CC1020"] },
        { id: "CC2075", name: "Fisicoquímica General", cycle: 3, credits: 4, x: 600, y: 250, color: "#e74c3c", prerequisites: ["CC1030"] },
        { id: "CC2033", name: "Laboratorio de Bioquímica", cycle: 3, credits: 1, x: 700, y: 250, color: "#1abc9c", prerequisites: ["CC1004", "CC1020"] },
        { id: "CC1017", name: "Química Analítica", cycle: 3, credits: 4, x: 800, y: 250, color: "#e74c3c", prerequisites: ["CC1031"] },
        
        // Cuarto ciclo
        { id: "CC3108", name: "Análisis Matemático IV", cycle: 4, credits: 3, x: 100, y: 350, color: "#3498db", prerequisites: ["CC3107"] },
        { id: "AL2001", name: "Físicoquímica de Alimentos", cycle: 4, credits: 4, x: 200, y: 350, color: "#e74c3c", prerequisites: ["CC2075"] },
        { id: "CC2034", name: "Laboratorio de Microbiología", cycle: 4, credits: 1, x: 300, y: 350, color: "#1abc9c" },
        { id: "CC2038", name: "Microbiología", cycle: 4, credits: 4, x: 400, y: 350, color: "#1abc9c" },
        { id: "AL3010", name: "Química de Alimentos", cycle: 4, credits: 4, x: 500, y: 350, color: "#e74c3c" },
        { id: "AL2005", name: "Termodinámica General", cycle: 4, credits: 4, x: 600, y: 350, color: "#3498db" },
        
        // Quinto ciclo
        { id: "AL3014", name: "Análisis de Alimentos", cycle: 5, credits: 4, x: 100, y: 450, color: "#e74c3c" },
        { id: "CC1011", name: "Geometría Descriptiva", cycle: 5, credits: 3, x: 200, y: 450, color: "#3498db" },
        { id: "AL4045", name: "Mecánica de Fluidos", cycle: 5, credits: 4, x: 300, y: 450, color: "#3498db" },
        { id: "AL3017", name: "Microbiología de Alimentos", cycle: 5, credits: 4, x: 400, y: 450, color: "#1abc9c" },
        { id: "AL3022", name: "Reología", cycle: 5, credits: 3, x: 500, y: 450, color: "#f1c40f" },
        { id: "AL4044", name: "Transferencia de Calor y Masa", cycle: 5, credits: 3, x: 600, y: 450, color: "#3498db" },
        
        // Sexto ciclo
        { id: "AL4046", name: "Métodos Estadísticos en Ingeniería", cycle: 6, credits: 3, x: 100, y: 550, color: "#3498db" },
        { id: "AL4059", name: "Ingeniería de Alimentos I", cycle: 6, credits: 4, x: 200, y: 550, color: "#f1c40f" },
        { id: "AL4029", name: "Ingeniería de Alimentos II", cycle: 6, credits: 4, x: 300, y: 550, color: "#f1c40f" },
        { id: "IA3070", name: "Circuitos y Motores Eléctricos", cycle: 6, credits: 3, x: 400, y: 550, color: "#3498db" },
        { id: "AL3024", name: "Contabilidad y Finanzas", cycle: 6, credits: 2, x: 500, y: 550, color: "#9b59b6" },
        { id: "IA1009", name: "Dibujo en Ingeniería", cycle: 6, credits: 4, x: 600, y: 550, color: "#3498db" },
        { id: "IA3072", name: "Circuitos Eléctricos y Motores", cycle: 6, credits: 3, x: 700, y: 550, color: "#3498db" },
        
        // Séptimo ciclo
        { id: "EP2088", name: "Ética y Ciudadanía", cycle: 7, credits: 2, x: 100, y: 650, color: "#9b59b6" },
        { id: "EP2087", name: "Metodología de la Investigación", cycle: 7, credits: 2, x: 200, y: 650, color: "#9b59b6" },
        { id: "AL4001", name: "Alimentación y Nutrición Humana", cycle: 7, credits: 3, x: 300, y: 650, color: "#1abc9c" },
        { id: "AL4047", name: "Maquinaria para la Industria Alimentaria", cycle: 7, credits: 4, x: 400, y: 650, color: "#f1c40f" },
        { id: "AL4049", name: "Tecnología Poscosecha", cycle: 7, credits: 3, x: 500, y: 650, color: "#f1c40f" },
        { id: "AL4048", name: "Tecnologías de Conservación", cycle: 7, credits: 4, x: 600, y: 650, color: "#f1c40f" },
        { id: "ELC1", name: "Curso Electivo de Carrera", cycle: 7, credits: 3, x: 700, y: 650, color: "#95a5a6" },
        
        // Octavo ciclo
        { id: "AL4050", name: "Evaluación Sensorial de Alimentos", cycle: 8, credits: 2, x: 100, y: 750, color: "#f1c40f" },
        { id: "AL4053", name: "Fermentaciones Industriales", cycle: 8, credits: 3, x: 200, y: 750, color: "#1abc9c" },
        { id: "AL4051", name: "Fundamentos de Control y Automatización", cycle: 8, credits: 3, x: 300, y: 750, color: "#3498db" },
        { id: "AL4052", name: "Tecnología de Alimentos Pecuarios", cycle: 8, credits: 3, x: 400, y: 750, color: "#f1c40f" },
        { id: "AL4054", name: "Tecnologías de Extracción", cycle: 8, credits: 3, x: 500, y: 750, color: "#f1c40f" },
        { id: "ELC2", name: "Curso Electivo de Carrera", cycle: 8, credits: 6, x: 600, y: 750, color: "#95a5a6" },
        
        // Noveno ciclo
        { id: "AL4055", name: "Control de Calidad e Inocuidad de Alimentos", cycle: 9, credits: 4, x: 100, y: 850, color: "#f1c40f" },
        { id: "AL4057", name: "Diseño en Ingeniería", cycle: 9, credits: 4, x: 200, y: 850, color: "#3498db" },
        { id: "AL4056", name: "Ingeniería de la Producción", cycle: 9, credits: 3, x: 300, y: 850, color: "#f1c40f" },
        { id: "AL4058", name: "Ingeniería del Frío", cycle: 9, credits: 3, x: 400, y: 850, color: "#3498db" },
        { id: "AL4043", name: "Seminario en Industrias Alimentarias", cycle: 9, credits: 1, x: 500, y: 850, color: "#f1c40f" },
        { id: "ELC3", name: "Curso Electivo de Carrera", cycle: 9, credits: 6, x: 600, y: 850, color: "#95a5a6" },
        
        // Décimo ciclo
        { id: "AL5035", name: "Ingeniería de Proyecto", cycle: 10, credits: 4, x: 100, y: 950, color: "#f1c40f" },
        { id: "AL5033", name: "Seminario en Industrias Alimentarias", cycle: 10, credits: 1, x: 200, y: 950, color: "#f1c40f" },
        { id: "AL5034", name: "Sistemas Integrados de Gestión", cycle: 10, credits: 4, x: 300, y: 950, color: "#f1c40f" },
        { id: "AL5037", name: "Taller de Emprendimiento", cycle: 10, credits: 1, x: 400, y: 950, color: "#9b59b6" },
        { id: "AL5036", name: "Taller de Ingeniería de Proyecto", cycle: 10, credits: 1, x: 500, y: 950, color: "#f1c40f" },
        { id: "PP0001", name: "Prácticas Pre-Profesionales", cycle: 10, credits: 1, x: 600, y: 950, color: "#2ecc71" },
        { id: "EG5000", name: "Trabajo de investigación", cycle: 10, credits: 0, x: 700, y: 950, color: "#9b59b6" }
    ];

    // Calcular qué cursos requieren cada curso
    courses.forEach(course => {
        course.requiredBy = [];
    });

    courses.forEach(course => {
        if (course.prerequisites) {
            course.prerequisites.forEach(prereqId => {
                const prereq = courses.find(c => c.id === prereqId);
                if (prereq) {
                    prereq.requiredBy.push(course.id);
                }
            });
        }
    });

    // Crear SVG y grupos
    const width = 1800;
    const height = 1200;
    const svg = d3.select("#malla-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .call(d3.zoom()
            .scaleExtent([0.5, 3])
            .on("zoom", (event) => {
                svg.attr("transform", event.transform);
            }))
        .append("g");

    // Agregar etiquetas de ciclo
    const cycles = [
        { num: 1, name: "Primer Ciclo", y: 30 },
        { num: 2, name: "Segundo Ciclo", y: 130 },
        { num: 3, name: "Tercer Ciclo", y: 230 },
        { num: 4, name: "Cuarto Ciclo", y: 330 },
        { num: 5, name: "Quinto Ciclo", y: 430 },
        { num: 6, name: "Sexto Ciclo", y: 530 },
        { num: 7, name: "Séptimo Ciclo", y: 630 },
        { num: 8, name: "Octavo Ciclo", y: 730 },
        { num: 9, name: "Noveno Ciclo", y: 830 },
        { num: 10, name: "Décimo Ciclo", y: 930 }
    ];

    svg.selectAll(".cycle-label")
        .data(cycles)
        .enter()
        .append("text")
        .attr("class", "cycle-label")
        .attr("x", 50)
        .attr("y", d => d.y)
        .text(d => d.name)
        .attr("fill", "#2c3e50");

    // Dibujar líneas de ciclo
    svg.selectAll(".cycle-line")
        .data(cycles)
        .enter()
        .append("line")
        .attr("x1", 0)
        .attr("y1", d => d.y + 10)
        .attr("x2", width)
        .attr("y2", d => d.y + 10)
        .attr("stroke", "#bdc3c7")
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "5,5");

    // Crear nodos de cursos
    const nodes = svg.selectAll(".course-node")
        .data(courses)
        .enter()
        .append("g")
        .attr("class", "course-node")
        .attr("transform", d => `translate(${d.x}, ${d.y})`)
        .on("click", function(event, d) {
            showCourseInfo(d);
        });

    // Agregar círculos a los nodos
    nodes.append("circle")
        .attr("r", d => 15 + (d.credits / 2))
        .attr("fill", d => d.color)
        .attr("stroke", "#2c3e50")
        .attr("stroke-width", 1);

    // Agregar texto a los nodos (código del curso)
    nodes.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", 4)
        .text(d => d.id)
        .attr("fill", "white");

    // Crear enlaces entre cursos (prerrequisitos)
    const links = [];
    courses.forEach(target => {
        if (target.prerequisites) {
            target.prerequisites.forEach(sourceId => {
                const source = courses.find(c => c.id === sourceId);
                if (source) {
                    links.push({
                        source: { x: source.x, y: source.y },
                        target: { x: target.x, target.y }
                    });
                }
            });
        }
    });

    // Dibujar enlaces
    svg.selectAll(".link")
        .data(links)
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("d", d => {
            // Curva suave entre nodos
            const midY = (d.source.y + d.target.y) / 2;
            return `M${d.source.x},${d.source.y} 
                    C${d.source.x},${midY} 
                    ${d.target.x},${midY} 
                    ${d.target.x},${d.target.y}`;
        })
        .attr("fill", "none");

    // Función para mostrar información del curso
    function showCourseInfo(course) {
        document.getElementById("course-title").textContent = course.name;
        document.getElementById("course-code").textContent = `Código: ${course.id}`;
        document.getElementById("course-credits").textContent = `Créditos: ${course.credits}`;
        
        const prereqList = document.getElementById("prereq-list");
        prereqList.innerHTML = "";
        
        if (course.prerequisites && course.prerequisites.length > 0) {
            course.prerequisites.forEach(prereqId => {
                const prereq = courses.find(c => c.id === prereqId);
                if (prereq) {
                    const li = document.createElement("li");
                    li.textContent = `${prereq.id} - ${prereq.name}`;
                    prereqList.appendChild(li);
                }
            });
        } else {
            const li = document.createElement("li");
            li.textContent = "Ninguno";
            prereqList.appendChild(li);
        }
        
        const requiredList = document.getElementById("required-list");
        requiredList.innerHTML = "";
        
        if (course.requiredBy && course.requiredBy.length > 0) {
            course.requiredBy.forEach(reqId => {
                const reqCourse = courses.find(c => c.id === reqId);
                if (reqCourse) {
                    const li = document.createElement("li");
                    li.textContent = `${reqCourse.id} - ${reqCourse.name}`;
                    requiredList.appendChild(li);
                }
            });
        } else {
            const li = document.createElement("li");
            li.textContent = "Ninguno";
            requiredList.appendChild(li);
        }
        
        document.getElementById("course-info").classList.remove("hidden");
    }

    // Event listeners para los controles
    document.getElementById("zoom-in").addEventListener("click", () => {
        svg.transition().call(zoom.scaleBy, 1.2);
    });

    document.getElementById("zoom-out").addEventListener("click", () => {
        svg.transition().call(zoom.scaleBy, 0.8);
    });

    document.getElementById("reset").addEventListener("click", () => {
        svg.transition()
            .duration(750)
            .call(zoom.transform, d3.zoomIdentity);
    });

    document.getElementById("close-info").addEventListener("click", () => {
        document.getElementById("course-info").classList.add("hidden");
    });

    document.getElementById("search-btn").addEventListener("click", searchCourse);

    document.getElementById("course-search").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchCourse();
        }
    });

    function searchCourse() {
        const searchTerm = document.getElementById("course-search").value.toLowerCase();
        if (!searchTerm) return;
        
        const foundCourse = courses.find(c => 
            c.name.toLowerCase().includes(searchTerm) || 
            c.id.toLowerCase().includes(searchTerm)
        );
        
        if (foundCourse) {
            // Centrar la vista en el curso encontrado
            const container = document.getElementById("malla-container");
            const svgElement = container.querySelector("svg");
            
            // Calcular la transformación necesaria para centrar el curso
            const scale = 1.5;
            const translateX = container.clientWidth / 2 - (foundCourse.x * scale);
            const translateY = container.clientHeight / 2 - (foundCourse.y * scale);
            
            svg.transition()
                .duration(750)
                .call(zoom.transform, d3.zoomIdentity
                    .translate(translateX, translateY)
                    .scale(scale));
            
            // Resaltar el curso encontrado
            svg.selectAll(".course-node")
                .select("circle")
                .attr("stroke-width", 1)
                .attr("stroke", "#2c3e50");
                
            svg.selectAll(".course-node")
                .filter(d => d.id === foundCourse.id)
                .select("circle")
                .attr("stroke-width", 3)
                .attr("stroke", "#f1c40f");
                
            showCourseInfo(foundCourse);
        } else {
            alert("Curso no encontrado. Intente con otro término de búsqueda.");
        }
    }

    // Configurar zoom
    const zoom = d3.zoom()
        .scaleExtent([0.5, 3])
        .on("zoom", (event) => {
            svg.attr("transform", event.transform);
        });

    svg.call(zoom);
});
