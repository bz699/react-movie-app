import React, { Component } from 'react';
import axios from 'axios';


class FormMovie extends Component {
    constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

    submitForm(e) {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';

        axios.post(url, this.state)
        .then(res => res.data)
        .then(res => {
          alert(`Film ajouté avec l'ID ${res.id} !`);
        })
        .catch(e => {
          console.error(e);
          alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
        });
      }




  render () {
      return <div className="FormMovie">
      <h1>Ajouter un film</h1>
    
      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Title</legend>
          <div className="form-data">
            <label htmlFor="title">Nom</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
              required={true}
            />
          </div>
    
          <div className="form-data">
            <label htmlFor="poster">Lien du Poster</label>
            <input
              type="url"
              id="poster"
              name="poster"
              onChange={this.onChange}
              value={this.state.poster}
              required={true}
            />
          </div>
    
          <div className="form-data">
            <label htmlFor="comment">Comment</label>
            <textarea
              type="text"
              id="comment"
              name="comment"
              onChange={this.onChange}
              value={this.state.comment}
              required={true}
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit" value="Envoyer" />
          </div>
        </fieldset>
      </form>
    </div>
  }



}

export default FormMovie;