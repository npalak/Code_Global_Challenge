
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
 import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import {Button,ButtonGroup,Card,Container,Row,Col} from "reactstrap";
import axios from 'axios';
import Second_page from "./Second_page";
import {Link} from "react-router-dom";

<link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />

const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className="dataTables_length" id="datatable-basic_length">
      <label>
        Show{" "}
        {
          <select
            name="datatable-basic_length"
            aria-controls="datatable-basic"
            className="form-control form-control-sm"
            onChange={(e) => onSizePerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        }{" "}
        entries.
      </label>
    </div>
  ),
});

const { SearchBar } = Search;

class FirstPage extends React.Component {
  constructor(props) {
		super(props)

		this.state = {
      posts: [
    {
      id:'',
      level:'', 
      Profile_Image:'',
      Bet:'',

      Name:'',
    }
      ],
    errorMsg: '',
    id:'',
    alert: null,
    handleEdit:false
		}
	}

  handleEditButton = (id) => {
    this.setState({
      handleEdit:true
    });
  };

  handleDelete = (rowId) => {
    console.log(rowId);
  };
  
  componentDidMount() {
		axios
			.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json')
			.then(response => {
				console.log(response)
        this.setState({ posts: response.data,
          Profile_Image:response.data.Profile_Image
         })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
      })
      

      
	}
  
  
  render() {  
    const { posts} = this.state; 
    const selectRow = {
      mode: 'checkbox', // single row selection
    };

    return (
      <>
{this.state.alert}
<Container className="mt--6" fluid>
  <Row>
  {/* <div className="col-12"><Link to="/Second_page"><Button color="primary"  size="sm">second page</Button> </Link></div> */}

  <div className="col-3">{this.renderSidebar()}</div>
    <div className="col"> 
      <Card>
       <ToolkitProvider 
          data={posts}
          keyField="name"
          columns={[
            {
              
              text: "SELECT",
              sort: true,
              
            },
            {
              dataField: "Name",
              text: "PLAYER NAME",
              sort: true,
              
            },
          
            {
              dataField: "level",
              text: "LEVEL",
              sort: true,
              formatter:()=>(
                <div>1</div>
              )
            },
           
            {
              dataField: "Profile_Image",
              text: "AVATAR",
              sort: true,
              formatter:()=>(
                <div>
                  <img alt="not find" width="15%" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/richarde8624aa.jpg" />
                </div>
              )
            },
            {
              dataField: "Bet",
              text: "BET",
              sort: true,
            },
            {
              dataField: "wins",
              text: "WINS",
              sort: true,
              formatter:()=>(
                <div>0</div>
              )
            },
            {
              dataField: "lost",
              text: "LOST",
              sort: true,
              formatter:()=>(
                <div>0</div>
              )
            },
            {
              dataField: "Price",
              text: "PRICE",
              sort: true,
            },
          ]}
          search
        >
          {(props) => (
            <div className="py-4 table-responsive">
              <Container fluid>
                <Row>
                  <Col xs={12} sm={6}>
                    <ButtonGroup>
                    <Link href="#">
                      <Button color="primary"  size="sm">Select playing 9</Button>
                      </Link>
                    </ButtonGroup>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1 float-right"
                    >
                      <label>
                        Search:
                        <SearchBar
                          className="form-control-sm"
                          placeholder=""
                          {...props.searchProps}
                        />
                      </label>
                    </div>
                  </Col>
                </Row>
              </Container>

            
              <BootstrapTable  
                ref={(el) => (this.componentRef = el)}
                {...props.baseProps}
                bootstrap4={true}
                pagination={pagination}
                bordered={false}
                // id="react-bs-table"
                selectRow={ selectRow }
                 keyField="id"
                 data={ posts }
                
              />
            </div>
          )} 
        </ToolkitProvider>
      </Card>
    </div>
    <Col xs={12} sm={6}>
                    <ButtonGroup>
                      <Link to="/Second_page"><Button color="primary"  size="sm">Start</Button> </Link>
                    </ButtonGroup>
                  </Col>
  </Row>
</Container>
</>
		
    );
  }

  renderSidebar() {
    const { posts } = this.state;
    // const { classes } = this.props;
    return (
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          <h5>playing 9 : </h5>
          <br /><hr />  
        </div>
        <div className="demo-app-sidebar-section">
          <h5> All Events ({this.state.posts.length})</h5>
          <ul>{this.state.posts.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    );
  }
}

function renderSidebarEvent(event) {
  return (
    
      
    <li key={event.id}>&nbsp;&nbsp;
      <i class="far fa-user"></i>&nbsp;&nbsp;
      <i>{event.Name}</i>&nbsp;
    </li>
    
  );
}
export default FirstPage;
