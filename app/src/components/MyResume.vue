<!-- src/components/Resume.vue -->
<template>
  <div class="container">
    <div class="left-column">
      <section>
        <h2>個人資料</h2>
        <div class="image-container">
          <img src="../assets/myPhoto.jpg" width="150" />
        </div>
        <div class="personal-info">
          <p v-for="info in personalInfo" :key="info.column">
            <span class="info-column">{{ info.column }}:</span>
            <span class="info-value">{{ info.value }}</span>
          </p>
        </div>
      </section>
    </div>
    <div class="right-column">
      <section>
        <h2>學歷</h2>
        <ul>
          <li v-for="edu in education" :key="edu.school">
            <h3>{{ edu.school }} - {{ edu.degree }} ({{ edu.year }})</h3>
          </li>
        </ul>
      </section>
      <section>
        <h2>工作經歷</h2>
        <ul>
          <li v-for="experience in experiences" :key="experience.company">
            <h3>
              {{ experience.company }} - {{ experience.role }} ({{
                experience.duration
              }})
            </h3>
            <div>
              <p>前端: {{ experience.frontend }}</p>
            </div>
            <div>
              <p>後端: {{ experience.backEnd }}</p>
            </div>
            <div v-for="project in experience.project" :key="project.name">
              <h4>● {{ project.name }}</h4>
              <p style="padding: 10px 5px">
                {{ project.depiction }}
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MyResume",
  computed: {
    ...mapGetters(["getPersonalInfo", "getExperiences", "getEducation"]),
    personalInfo() {
      return this.getPersonalInfo;
    },
    experiences() {
      return this.getExperiences;
    },
    education() {
      return this.getEducation;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.left-column {
  flex: 3;
  padding: 20px;
  margin: 0px 15px;
  border-right: 1px solid #ddd;
  /* background: #E9F5DD; */
}

.right-column {
  flex: 8;
  padding: 20px;
}

.image-container {
  text-align: center;
  margin-bottom: 20px;
  border-radius: 50%;
}

.personal-info p {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
}

.info-column {
  width: 60px;
  text-align: right;
  margin-right: 10px;
  font-weight: bold;
}

.info-value {
  flex: 1;
}
</style>
