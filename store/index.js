/* 
**  Stores the data from database to the website
*/
import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedTeamProjects: [],
      loadedSoloProjects: []
    },
    mutations: {
      setTeamProjects(state, projects) {
        state.loadedTeamProjects = projects;
      },
      setSoloProjects(state, projects) {
        state.loadedSoloProjects = projects;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get("https://omat-sivut-85174.firebaseio.com/portfolio.json")
          .then(res => {
            const projectsArray = [];
            for (const key in res.data) {
              projectsArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setTeamProjects", projectsArray.slice(0, 4));
            vuexContext.commit("setSoloProjects", projectsArray.slice(4, 6));
          })
          .catch(e => context.error(e));
      }
    },
    getters: {
      loadedTeamProjects(state) {
        return state.loadedTeamProjects;
      },
      loadedSoloProjects(state) {
        return state.loadedSoloProjects;
      }
    }
  });
};

export default createStore;
