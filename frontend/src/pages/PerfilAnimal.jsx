import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Snackbar, Button, Alert, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';  // Correção na importação do Alert
import '../assets/styles/PerfilAnimal.css';

const API_URL = import.meta.env.VITE_API_URL;

function PerfilAnimal() {
    const { id } = useParams(); // Obtém o id do animal na URL
    const navigate = useNavigate(); // Para navegação após a deleção
    const [animal, setAnimal] = useState(null);
    const [logado, setLogado] = useState(false);  // Controle de login
    const [openSnackbar, setOpenSnackbar] = useState(false); // Estado para controlar o Snackbar
    const [snackbarMessage, setSnackbarMessage] = useState(''); // Mensagem do Snackbar
    const [severity, setSeverity] = useState('success'); // Tipo de mensagem do Snackbar (success, error)
    const [openDialog, setOpenDialog] = useState(false); // Estado para controle do Dialog

    // Carregar os dados do animal e verificar se o usuário está logado
    useEffect(() => {
        const token = localStorage.getItem('tokenProtetor');
        const email = localStorage.getItem('protetorEmail');

        if (token && email) {
            setLogado(true);  // Se o token e email existirem, o usuário está logado
        } else {
            setLogado(false);  // Se não houver token, o usuário não está logado
        }

        fetch(`${API_URL}/api/animais/${id}`)
            .then(response => response.json())
            .then(data => setAnimal(data))  // Armazena os dados do animal no estado
            .catch(error => console.error('Erro ao buscar animal:', error));
    }, [id]);

    // Função para abrir o dialog de confirmação de exclusão
    const handleDeleteDialogOpen = () => {
        setOpenDialog(true);  // Abre o dialog
    };

    // Função para fechar o dialog de confirmação de exclusão
    const handleDeleteDialogClose = () => {
        setOpenDialog(false);  // Fecha o dialog
    };

    // Função para deletar o animal
    const handleDelete = async () => {
        try {
            // Realiza a requisição DELETE para a API
            const response = await fetch(`${API_URL}/api/animais/${id}`, { method: 'DELETE' });

            if (!response.ok) {
                throw new Error('Falha ao deletar o animal');
            }

            setSnackbarMessage('Animal deletado com sucesso!');
            setSeverity('success');
            setOpenSnackbar(true);  // Abre o Snackbar de sucesso
            setOpenDialog(false);  // Fecha o Dialog de confirmação

            setTimeout(() => {
                navigate('/adotar'); // Redireciona para a página de adoção
            }, 1500);
        } catch (error) {
            setSnackbarMessage('Erro ao deletar o animal. Tente novamente.', error.message);
            setSeverity('error');
            setOpenSnackbar(true);  // Abre o Snackbar de erro
            setOpenDialog(false);  // Fecha o Dialog de confirmação
        }
    };

    // Função para fechar o Snackbar
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);  // Fecha o Snackbar
    };

    // Exibição enquanto os dados do animal estão sendo carregados
    if (!animal) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <div className='pagePerfil'>
                <div className='profile'>
                    <h2 className="titlePerfil">Perfil do Animal</h2>
                    {/* Foto Grande */}
                    <img src={`${API_URL}${animal.foto}`} alt="Animal" className='imagePerfil' />

                    {/* Informações do Animal */}
                    <div className='info-container'>
                        <div className='name-and-age'>
                            <h2 className='name'>{animal.nome}</h2>
                            <p className='age'>{animal.idade} {animal.idade === 1 ? 'ano' : 'anos'}</p>
                        </div>

                        {/* Tags do Animal */}
                        <div className='tags'>
                            {animal.personalidade.map((tag, index) => (
                                <span key={index} className='tag'>{tag}</span>
                            ))}
                            <span className='tag'>{animal.porte}</span>
                        </div>
                    </div>

                    {/* História do Resgate */}
                    <div className='history-container'>
                        <label htmlFor="historyText" className='history-label'>História do Resgate:</label>
                        <textarea
                            id="historyText"
                            value={animal.descricao}
                            readOnly
                            className='history'
                        />
                    </div>

                    {/* Resumo Rápido */}
                    <div className='summary'>
                        <div className='summary-item'>
                            <span>Se dá bem com crianças?</span> {animal.bomComCriancas ? '✅' : '❌'}
                        </div>
                        <div className='summary-item'>
                            <span>Precisa de cuidados especiais?</span> {animal.cuidadosEspeciais ? '✅' : '❌'}
                        </div>
                    </div>

                    {/* Botões de Ação */}
                    {logado && (
                        <div className="button-container">
                            {/* Botão Editar */}
                            <Link to={`/editar/${animal.id}`} >
                                <Button className='button-link-acao'>Editar</Button>
                            </Link>

                            {/* Botão Deletar */}
                            <Button onClick={handleDeleteDialogOpen} className='button-link-acao'>
                                Excluir
                            </Button>
                        </div>
                    )}

                    {/* Botões de Interesse */}
                    <Link to={`/interesse/${animal.id}`} className='button-link'>
                        <button className='button'>Tenho Interesse</button>
                    </Link>

                    {/* Link para Voltar */}
                    <Link to="/adotar" className='back-link'>Voltar</Link>
                </div>
            </div>

            {/* Snackbar com Alert */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}  // Tempo para o Snackbar desaparecer (3 segundos)
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}  // Posição na tela
            >
                <Alert onClose={handleCloseSnackbar} severity={severity} variant="filled" sx={{ width: '100%' }}>
                    {snackbarMessage}  {/* Exibe a mensagem */}
                </Alert>
            </Snackbar>

            {/* Dialog de Confirmação de Exclusão */}
            <Dialog open={openDialog} onClose={handleDeleteDialogClose}>
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>
                    <p>Você tem certeza que deseja excluir este animal? Essa ação não pode ser desfeita.</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleDelete} color="primary">
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default PerfilAnimal;
