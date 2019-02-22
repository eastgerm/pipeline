import React,{Component} from "react";
import './CategoryTab.scss';

class CategoryTab extends Component {
  render() {
    return (
      <div className="CategoryTab">
        <div className="category">나라선택</div>
        <div className="category">리그선택</div>
      </div>
    )
  }
}

export default CategoryTab;