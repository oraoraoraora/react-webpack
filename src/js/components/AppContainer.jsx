module.exports = React.createClass({
  
  render: function() {
    
    return (
      <div>
        <div>Awesome App</div>
        <div>{this.props.children}</div>
      </div>
    )
  }
})