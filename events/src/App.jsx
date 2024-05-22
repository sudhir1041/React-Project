const App = () => {

  

  return (
    <>
    
    <h1 >Application Form</h1>
      Enter Name: <input type="text" name="name"  /><br /><br />
      Hobbies: Singing <input type="checkbox" name="Hobbies" />
      Dancing <input type="checkbox" name="dancing" />
      Reading <input type="checkbox" name="reading" />
      Cooking <input type="checkbox" name="cooking" />
      <br />
      Upload Image: <input type="file" name="image" />
      <br />
      Select Class:
      <select name="class" >
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
        <option value="MBA">MBA</option>
        <option value="MSC">MSC</option>
      </select><br />
      Message: <textarea name="comment" id="comment" cols="30" rows="10" /><br /><br />
      <button>Save !!!</button>
    </>
  );
}

export default App;
