// Components
import ItemsListContainer from "../../components/ItemsListContainer/ItemsListContainer";
import Shop from "../../components/Shop/Shop";

// Material Ui
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import { useParams } from "react-router";

/* Imports */

const ItemsCategories = () => {
  const { categoryId } = useParams();
  // Lista de opciones válidas para el Select
  const validOptions = [
    "jewelery",
    "men's clothing",
    "women's clothing",
    "electronics",
  ];

  // Verificar si el categoryId obtenido de la URL es una opción válida
  const selectedCategory = validOptions.includes(categoryId)
    ? categoryId
    : "All";
  return (
    <main>
      <Container maxWidth={"lg"}>
        <Grid mt={2} container flexDirection={"column"} rowSpacing={5}>
          <Grid
            sx={{
              borderTop: "0.1rem solid #f0efed",
              borderBottom: "0.1rem solid #f0efed",
            }}
          >
            <Shop />
          </Grid>

          <Grid>
            <ItemsListContainer />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default ItemsCategories;
