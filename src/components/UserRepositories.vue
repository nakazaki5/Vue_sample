<script>

import { toRefs } from "vue"
import useUserRepositories from "@/composables/useUserRepositories"
import useRepositoryNameSearch from "@/composables/useRepositoryNameSearch"
import useRepositoryFilters from "@/composables/useRepositoryFilters"

export default {
  components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { user } = toRefs(props)

    const { repositories, getUserRepositories } = useUserRepositories(user)

    const { searchQuery, repositoriesMatchingSearchQuery } =
      useRepositoryNameSearch(repositories)

    return {
      repositories: getUserRepositories,
      searchQuery,
    }
  },
}

</script>
