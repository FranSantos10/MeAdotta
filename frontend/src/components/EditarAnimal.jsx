import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { PERSONALIDADE_OPCOES, PORTE_OPCOES, ESPECIE_OPCOES } from '../opcoes';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/styles/CadastroAnimal.css';

const API_URL = import.meta.env.VITE_API_URL;

function EditarAnimal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    porte: '',
    personalidade: [],
    descricao: '',
    bomComCriancas: '',
    cuidadosEspeciais: '',
    foto: null,  // Foto será tratada separadamente
    emailProtetor: '',
    especie: '',
    cidade: '',
    estado: '',
  });

  useEffect(() => {
    // Carregar estados e cidades inicialmente
    axios.get(`${API_URL}/api/estados`)
      .then(response => setEstados(response.data))
      .catch(err => console.error('Erro ao carregar estados', err));

    // Carregar os dados do animal ao acessar a página de edição
    axios.get(`${API_URL}/api/animais/${id}`)
      .then(response => {
        const animal = response.data;
        setFormData({
          nome: animal.nome,
          idade: animal.idade,
          porte: animal.porte || 'pequeno',
          personalidade: animal.personalidade || [],  // Certificando-se de que é um array
          descricao: animal.descricao,
          bomComCriancas: animal.bomcomcriancas ? 'true' : 'false',  // Garantir que é 'true' ou 'false'
          cuidadosEspeciais: animal.cuidadosespeciais ? 'true' : 'false', // Garantir que é 'true' ou 'false'
          foto: animal.foto,
          emailProtetor: animal.emailprotetor,
          especie: animal.especie,
          cidade: animal.cidade,
          estado: animal.estado,
        });
      })
      .catch(error => {
        console.error('Erro ao buscar os dados do animal:', error);
        setError('Erro ao carregar os dados do animal.');
      });
  }, [id]);

  useEffect(() => {
    if (formData.estado) {
      axios.get(`${API_URL}/api/estados/${formData.estado}/municipios`)
        .then(res => setCidades(res.data))
        .catch(err => console.error('Erro ao carregar cidades', err));
    }
  }, [formData.estado]);


  const handleEstadoChange = (e) => {
    const estadoSelecionado = e.target.value;
    setFormData((prevData) => ({ ...prevData, estado: estadoSelecionado, cidade: '' }));
    axios.get(`${API_URL}/api/estados/${estadoSelecionado}/municipios`)
      .then(response => setCidades(response.data))
      .catch(err => console.error('Erro ao carregar cidades', err));
  };

  const handleCidadeChange = (e) => {
    const cidadeSelecionada = e.target.value;
    setFormData((prevData) => ({ ...prevData, cidade: cidadeSelecionada }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => {
        const newPersonalidade = checked
          ? [...prevData.personalidade, value]
          : prevData.personalidade.filter((item) => item !== value);
        return { ...prevData, personalidade: newPersonalidade };
      });
    } else if (type === 'file') {
      setFormData((prevData) => ({ ...prevData, foto: e.target.files[0] }));  // Atualiza a foto se for alterada
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Preencher FormData com os dados do formulário
    Object.keys(formData).forEach((key) => {
      if (key === 'personalidade') {
        formData.personalidade.forEach((item) => formDataToSend.append('personalidade', item));
      } else if (key === 'foto' && formData.foto) {
        formDataToSend.append('foto', formData.foto);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      await axios.put(`${API_URL}/api/animais/${id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFormSubmitted(true);
      setError('');
      navigate(`/animais/${id}`); // Redireciona para o perfil do animal após a edição
    } catch (err) {
      console.error(err);
      setError('Erro ao editar o animal. Tente novamente.');
    }
  };

  return (
    <div>
      <div className="page">
        <h2 className="title">Editar Animal</h2>

        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label htmlFor="nome">Nome do Animal:</label>
              <input
                className="input"
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="idade">Idade:</label>
              <input
                className="input"
                type="number"
                id="idade"
                name="idade"
                value={formData.idade}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="especie">Espécie:</label>
              <select
                id="especie"
                name="especie"
                value={formData.especie}
                onChange={handleChange}
                required
                className="select"
              >
                {ESPECIE_OPCOES.map((especie) => (
                  <option key={especie} value={especie}>
                    {especie.charAt(0).toUpperCase() + especie.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="porte">Porte:</label>
              <select
                id="porte"
                name="porte"
                value={formData.porte}
                onChange={handleChange}
                required
                className="select"
              >
                {PORTE_OPCOES.map((porte) => (
                  <option key={porte} value={porte}>
                    {porte.charAt(0).toUpperCase() + porte.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>Personalidade:</label>
              <div className="checkbox-group">
                {PERSONALIDADE_OPCOES.map((personalidade) => (
                  <label key={personalidade}>
                    <input
                      type="checkbox"
                      name="personalidade"
                      value={personalidade}
                      checked={formData.personalidade.includes(personalidade)}
                      onChange={handleChange}
                    />
                    {personalidade.charAt(0).toUpperCase() + personalidade.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="descricao">Descrição / História:</label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                required
                className="textarea"
              ></textarea>
            </div>

            {/* Resumo Rápido */}
            <div className="input-group">
              <label>Se dá bem com crianças?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="bomComCriancas"
                    value="true"
                    checked={formData.bomComCriancas === 'true'}
                    onChange={handleChange}
                    required
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="bomComCriancas"
                    value="false"
                    checked={formData.bomComCriancas === 'false'}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>

            <div className="input-group">
              <label>Precisa de cuidados especiais?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="cuidadosEspeciais"
                    value="true"
                    checked={formData.cuidadosEspeciais === 'true'}
                    onChange={handleChange}
                    required
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="cuidadosEspeciais"
                    value="false"
                    checked={formData.cuidadosEspeciais === 'false'}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="emailProtetor">E-mail do Protetor:</label>
              <input
                className="input"
                type="email"
                id="emailProtetor"
                name="emailProtetor"
                value={formData.emailProtetor}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="estado">Estado:</label>
              <select
                className="select"
                id="estado"
                value={formData.estado}
                onChange={handleEstadoChange}
              >
                <option value="">Selecione um estado</option>
                {estados.map((estado) => (
                  <option key={estado.id} value={estado.sigla}>
                    {estado.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="cidade">Cidade:</label>
              <select
                className="select"
                id="cidade"
                value={formData.cidade}
                onChange={handleCidadeChange}
              >
                <option value="">Selecione uma cidade</option>
                {cidades.map((cidade) => (
                  <option key={cidade.id} value={cidade.nome}>
                    {cidade.nome}
                  </option>
                ))}
              </select>
            </div>

            {/* Mostrar a foto atual */}
            {formData.foto && typeof formData.foto === 'string' && (
              <div className="image-preview">
                <img
                  src={`${API_URL}${formData.foto}`}
                  alt="Foto do Animal"
                  className="image-preview-small"
                />
              </div>
            )}

            <div className="input-group">
              <label htmlFor="foto">Upload de Foto (opcional):</label>
              <input
                className="input"
                type="file"
                id="foto"
                name="foto"
                onChange={handleChange}
              />
            </div>

            <div className="button-group">
              <button type="submit" className="button">
                Salvar Alterações
              </button>
            </div>

            {error && <Alert severity="error">{error}</Alert>}
          </form>
        ) : (
          <div className="alert">
            <Alert severity="success">Animal editado com sucesso!</Alert>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditarAnimal;
