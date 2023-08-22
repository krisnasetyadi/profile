import CardComponent from "@/components/card-component"
import { Items } from "@/constants/portofolio-constant"

function PortofolioScreen () {
    return (
        <div className="p-2">
            {Items.map(i => {
                return (
                  <CardComponent 
                    key={i.id} 
                    image={i.image}
                    project_name={i.project_name}
                    project_role={i.project_role}
                  />
                )
            })}
     
        </div>
    )
}

export default PortofolioScreen