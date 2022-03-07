import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div class="container">
      <div class="card col-sm-4">
        <div class="card-header bg-danger text-white">
          <h4>Konversi Bilangan Biner</h4>
        </div>
        <div class="card-body">
          Biner
          <input type="number" id="bilangan" class="form-control" />

          <label for="pilihanConversi">Pilihan Konversi</label>
          <select id="PilihanConversi" class="form-control">
            <option value="Biner">Biner</option>
            <option value="Oktal">Oktal</option>
            <option value="Desimal">Desimal</option>
            <option value="Heksadesimal">Heksadesimal</option>
          </select>

          <br></br>
          <button type="button" class="btn btn-danger btn-block"
          onclick="count()">
            Convert
          </button>
          <br></br>
          <br></br>
          Hasil
          <input type="text" id="hasil" class="form-control" readonly />
        </div>
      </div>

      <br></br>
      <div class="card col-sm-4">
        <div class="card-header bg-danger text-white">
          <h4>Konversi Bilangan Oktal</h4>
        </div>
        <div class="card-body">
          Oktal
          <input type="number" id="bilangan" class="form-control" />

          <label for="pilihanConversi">Pilihan Konversi</label>
          <select id="PilihanConversi" class="form-control">
            <option value="Biner">Biner</option>
            <option value="Oktal">Oktal</option>
            <option value="Desimal">Desimal</option>
            <option value="Heksadesimal">Heksadesimal</option>
          </select>

          <br></br>
          <button type="button" class="btn btn-danger btn-block"
          onclick="count()">
            Convert
          </button>
          <br></br>
          <br></br>
          Hasil
          <input type="text" id="hasil" class="form-control" readonly />
        </div>
      </div>

    <br></br>
    <div class="card col-sm-4">
        <div class="card-header bg-danger text-white">
          <h4>Konversi Bilangan Desimal</h4>
        </div>
        <div class="card-body">
          Desimal
          <input type="number" id="bilangan" class="form-control" />

          <label for="pilihanConversi">Pilihan Konversi</label>
          <select id="PilihanConversi" class="form-control">
            <option value="Biner">Biner</option>
            <option value="Oktal">Oktal</option>
            <option value="Desimal">Desimal</option>
            <option value="Heksadesimal">Heksadesimal</option>
          </select>

          <br></br>
          <button type="button" class="btn btn-danger btn-block"
          onclick="count()">
            Convert
          </button>
          <br></br>
          <br></br>
          Hasil
          <input type="text" id="hasil" class="form-control" readonly />
        </div>
      </div>

      <br></br>
      <div class="card col-sm-4">
        <div class="card-header bg-danger text-white">
          <h4>Konversi Bilangan Hexadesimal</h4>
        </div>
        <div class="card-body">
          Hexadesimal
          <input type="number" id="bilangan" class="form-control" />

          <label for="pilihanConversi">Pilihan Konversi</label>
          <select id="PilihanConversi" class="form-control">
            <option value="Biner">Biner</option>
            <option value="Oktal">Oktal</option>
            <option value="Desimal">Desimal</option>
            <option value="Heksadesimal">Heksadesimal</option>
          </select>

          <br></br>
          <button type="button" class="btn btn-danger btn-block"
          onclick="count()">
            Convert
          </button>
          <br></br>
          <br></br>
          Hasil
          <input type="text" id="hasil" class="form-control" readonly />
        </div>
      </div>
    </div>
  );
}


export default App;
