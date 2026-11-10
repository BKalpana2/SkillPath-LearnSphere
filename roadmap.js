/* =========================================
   SKILLPATH - JAVA MOUNTAIN ROADMAP
   Uses the existing Java syllabus and progress
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const mountainStages = document.getElementById("mountainStages");

    if (!mountainStages) return;

    function getModuleProgress(moduleIndex) {

        const module = javaModules[moduleIndex];

        const completed = module.topics.filter(
            (_, topicIndex) => isCompleted(moduleIndex, topicIndex)
        ).length;

        return {
            completed: completed,
            total: module.topics.length,
            percentage: Math.round(
                (completed / module.topics.length) * 100
            )
        };
    }


    function renderMountainRoadmap() {

        mountainStages.innerHTML = "";

        let completedModules = 0;

        javaModules.forEach((module, index) => {

            const progress = getModuleProgress(index);

            const isModuleCompleted =
                progress.completed === progress.total;

            if (isModuleCompleted) {
                completedModules++;
            }

            const isCurrent =
                !isModuleCompleted &&
                javaModules.slice(0, index).every((previousModule, previousIndex) => {
                    const previousProgress = getModuleProgress(previousIndex);

                    return previousProgress.completed === previousProgress.total;
                });

            let status = "Not Started";
            let className = "not-started";

            if (isModuleCompleted) {
                status = "✓ Completed";
                className = "completed";
            } else if (isCurrent) {
                status = "★ Current Stage";
                className = "current";
            } else if (progress.completed > 0) {
                status = `${progress.completed}/${progress.total} Topics Done`;
                className = "current";
            }

            const stage = document.createElement("button");

            stage.type = "button";
            stage.className = `mountain-stage ${className}`;

            stage.innerHTML = `
                <span class="stage-number">
                    ${isModuleCompleted ? "✓" : index + 1}
                </span>

                <span class="stage-name">
                    ${module.name}
                </span>

                <span class="stage-status">
                    ${status} · ${progress.percentage}%
                </span>
            `;

            stage.addEventListener("click", function () {

                activeModule = index;
                activeTopic = 0;

                renderModules();
                renderModuleDetails();

                switchTab("syllabus");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            });

            mountainStages.appendChild(stage);

        });

        const percentage = Math.round(
            (completedTopics.length / totalTopics) * 100
        );

        document.getElementById("roadmapCompleted").textContent =
            `${completedModules} / ${javaModules.length}`;

        document.getElementById("roadmapPercentage").textContent =
            `${percentage}%`;

    }


    /* Open the roadmap when URL ends with #roadmap */

    if (window.location.hash === "#roadmap") {
        switchTab("roadmap");
    }


    /* Refresh roadmap whenever user opens its tab */

    const roadmapTab = document.querySelector(
        '.tab[data-tab="roadmap"]'
    );

    if (roadmapTab) {

        roadmapTab.addEventListener("click", function () {
            renderMountainRoadmap();
        });

    }


    /* Refresh roadmap after topic completion or reset */

    const completeModuleButton = document.getElementById("completeModule");
    const resetButton = document.getElementById("resetProgress");

    if (completeModuleButton) {
        completeModuleButton.addEventListener("click", function () {
            setTimeout(renderMountainRoadmap, 100);
        });
    }

    if (resetButton) {
        resetButton.addEventListener("click", function () {
            setTimeout(renderMountainRoadmap, 100);
        });
    }


    /*
       Listen for completion actions from the existing notes area.
       This refreshes the roadmap after completing an individual topic.
    */

    document.addEventListener("click", function (event) {

        if (
            event.target.closest(".success-button") ||
            event.target.closest(".note-navigation")
        ) {
            setTimeout(renderMountainRoadmap, 100);
        }

    });


    renderMountainRoadmap();

});