angular.module("meuModulo")
.controller("indexController", function($scope){
    $scope.titulo = "Home";
    $scope.alunos = [
        {nome: "Camila", email:"camila@mail.com", nota1:65, nota2:80, nota3:55},
        {nome: "Ada", email:"ada@mail.com", nota1:90, nota2:95, nota3:85},
        {nome: "Alan", email:"alan@mail.com", nota1:95, nota2:75, nota3:30},
        {nome: "Tesla", email:"tesla@mail.com", nota1:50, nota2:40, nota3:50},
        {nome: "Isaac", email:"isaac@mail.com", nota1:63, nota2:28, nota3:75},
        
    ]

    const init = function(){
        $scope.alunos.forEach(function(aluno){
            aluno.media = media(aluno);
        })
        limpaForm()
    }

    const media = function(Aluno){
        var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + 
        parseFloat(Aluno.nota3))/3
        return media.toFixed(2)
    }
    
    $scope.openAddAluno = function(){
        $scope.editando = false
        limpaForm()
        $('#modal1').openModal();
    }
    
    $scope.addAluno = function(Aluno){
        Aluno.media = media(Aluno)
        $scope.alunos.push(Aluno)
        $('#modal1').closeModal();
        limpaForm()
    }

    $scope.editando = false
    var alunoEditar

    $scope.editAluno = function(Aluno){
        $scope.editando = true 
        angular.copy(Aluno, $scope.Aluno)          
        $('#modal1').openModal();
        alunoEditar = Aluno
    }

    $scope.saveAluno = function(Aluno){
        alunoEditar.nome  = Aluno.nome
        alunoEditar.email = Aluno.email
        alunoEditar.nota1 = Aluno.nota1
        alunoEditar.nota2 = Aluno.nota2
        alunoEditar.nota3 = Aluno.nota3
        alunoEditar.media = media(Aluno)
        $('#modal1').closeModal();
    }

    $scope.deleteAluno = function(Aluno){
        for(let i in $scope.alunos){
            let aux = $scope.alunos[i]
            if(Aluno === aux){
                $scope.alunos.splice(i, 1)
            }
        }
    }
    

    const limpaForm = () => {
        $scope.Aluno = {nome: "", email:"", nota1:'', nota2:'', nota3:'', media:''}
    }
    
    init()
})

angular.module("meuModulo")
.controller("contatoController", function($scope){
    $scope.titulo = "Contato";
})