import RecipeList from "@/components/recipe-list";

async function listOfRecipes() {
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    // console.log(data);
    return data?.recipes;
  } catch (error) {
    console.error(error);
  }
}

const AllRecipes = async () => {
  const recipeList = await listOfRecipes();

  return (
    <div>
      <RecipeList recipeList={recipeList} />
    </div>
  );
};

export default AllRecipes;
