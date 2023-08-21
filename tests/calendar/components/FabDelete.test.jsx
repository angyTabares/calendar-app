import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { FabDelete } from "../../../src/calendar/components/FabDelete"

describe('Pruebas en <FabDelete/>', () => {
  
    test('debe de mostrar el componente correctamente ', () => {
      
        render(
            <Provider>
                <FabDelete/>
            </Provider>
        );
        screen.debug();
    })
    
})
