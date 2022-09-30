import axios from 'axios'
import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }

  }
  componentDidMount() {
    axios.get("https://api.unsplash.com/search/photos?page=1&query=office&client_id=Egvg7MvpLRWZ1ryPVapg92F432EpamI04irWE3uPsNQ")
      .then((res) => {
        console.log(res);
        this.setState({ images: res.data.results })
      })
  }


  render() {
    return (
      <>
        {
          this.state.images.map((value) => {
            return (
              <div class="card" style={{
                width: "400px",
                display: " inline-block",
                height: " 268px"
              }}>
                <img src={value.urls.small} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">{value.description}</p>
                </div>
              </div>

            )
          })
        }

      </>
    )
  }
}
