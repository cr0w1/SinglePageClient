import { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FaBalanceScale , FaCarAlt } from 'react-icons/fa'
import { FcIdea } from 'react-icons/fc'
import { IoIosArrowDown } from 'react-icons/io'
import { FiPhoneCall , FiArrowRight } from 'react-icons/fi'
import { BsCheck , BsWhatsapp } from 'react-icons/bs'
import { BiShield } from 'react-icons/bi'
import { ImProfile } from 'react-icons/im'
import { GrSearch } from 'react-icons/gr'
import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';
import Image from 'next/image'

const slideInLeftAnimation = keyframes`${slideInLeft}`;

const BouncyDiv = styled.div`
  animation: 2s ${slideInLeftAnimation};
`;

const imagem_1 = () => {
  // return 'https://imgur.com/2kXZ7AS.png'
  return 'https://imgur.com/PmE6SP1.png'
}

const Home: NextPage = () => {
  const useWidth = () => {
    const [width, setWidth] = useState(0); // default width, detect on server.
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    return width;
};
  
  const  width = useWidth()

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
            <title>Adv. - Leite&Neves</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      </Head>

      <section className={styles.section_initial} style={{ width: '100%', height: width <= 360 ? 600 : ( width <= 460 ? 650 : 767.5) }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' , alignItems: 'center' , fontFamily: 'Spartan, sans-serif' }}>
          <div className="d-flex align-items-center" style={{ width: '100%',}}>
            <div className="col-12 " style={{ padding: 15, height: 600}}>
              <div className={`${styles.margin_bloco_1} col-12 d-flex  justify-content-center align-items-center`}
                style={{
                  padding: '15px 0',
                  marginTop: width <= 360 ? 45 : ( width <= 460 ? 40 : 30)
                }}
              >
                <span
                  style={{
                    backgroundColor: '#fff',
                    content: '',
                    width:  width <= 360 ? 45 : ( width <= 460 ? 43 : 200),
                    height: 1
                  }}></span>
                <span style={{ fontSize: width <= 360 ? 15 : ( width <= 460 ? 18 : 18) , fontWeight: 'bold' , padding: 8 , color: '#fff'}}>ADVOGADOS DE TR??NSITO</span>
                <span style={{
                    backgroundColor: '#fff',
                    content: '',
                    width:  width <= 360 ? 45 : ( width <= 460 ? 43 : 200),
                    height: 1
                  }}></span>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center">
                  <span style={{
                    fontSize: width <= 360 ? 37 : ( width <= 460 ? 40 : 60),
                    fontWeight: 'bold',
                    color: '#fff',
                    
                  }}>Foi multado ?</span>
              </div>
              <div className="col-12 d-flex  justify-content-center align-items-center" style={{ padding: '15px 0' }}>
                <span style={{
                    backgroundColor: '#fff',
                    content: '',
                    width:  width <= 360 ? 45 : ( width <= 460 ? 40 : 200),
                    height: 1
                  }}></span>
                <span style={{
                  fontSize: width <= 360 ? 15 : ( width <= 460 ? 18 : 18) ,
                  fontWeight: 'bold' ,
                  padding: 8 ,
                  color: '#fff'
                }}>N??S TE EXPLICAMOS TUDO</span>
                <span style={{
                    backgroundColor: '#fff',
                    content: '',
                    width:  width <= 360 ? 45 : ( width <= 460 ? 40 : 200),
                    height: 1
                  }}></span>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center" style={{ marginTop: 20 }}>
                <a href="https://wa.me/5581986880070?text=Sej%C3%A1%20Bem%20Vindo(a)" target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className={styles.button_primory_section+" btn"}
                  >CLIQUE AQUI E RECEBA UMA AVALIA????O SEM CUSTO <IoIosArrowDown size={20}/></button>
                </a>
              </div>
              <div className="col-12 d-flex  justify-content-center align-items-center" style={{ marginTop: 20 }}>
                {/* <img src="https://promultas.com.br/wp-content/uploads/2022/04/promultas_logo_-novo-768x187.png" className="attachment-medium_large size-medium_large" alt="" loading="lazy" srcSet="https://promultas.com.br/wp-content/uploads/2022/04/promultas_logo_-novo-768x187.png 768w, https://promultas.com.br/wp-content/uploads/2022/04/promultas_logo_-novo-300x73.png 300w, https://promultas.com.br/wp-content/uploads/2022/04/promultas_logo_-novo.png 843w" sizes="(max-width: 768px) 100vw, 768px" /> */}
                <img src="https://imgur.com/VlzZ2Ti.png 843w"  sizes="(max-width: 768px) 100vw, 768px" height={220} width={width <= 360 ? 300 : ( width <= 460 ? 300 : 400)}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section
        style={{ width: '100%' }}
      >
        <div className="container">
          <div 
            className="row"
            style={{ marginLeft: 0.3 , width: '100%', height: '100%'}}
          >
            <BouncyDiv
              className="col-lg-5 col-md-12  d-flex justify-content-center align-items-end"
            >
              <Image
                loader={imagem_1}
                src="me.png"
                width={500}
                height={630}
              />
            </BouncyDiv>
            <div
              className="col-md-12 col-lg-7"
            >
              <div style={{ marginTop: 50 , fontSize: 16 , color: '#7A7A7A' , fontFamily: 'Times New Roman , sans-serif'}}>
                <h5 style={{ margin: 0 , color: '#C59589' , fontWeight: 'bold' , fontSize: 25 }}>Foi parado na blitz?</h5>
                <h5 style={{ color: '#C59589' , fontWeight: 'bold' , fontSize: 25 }}>Fez o teste ou rescusou?</h5> 
                <h5 style={{ color: '#C59589' , fontWeight: 'bold' , fontSize: 25 }}>Nos vamos te ajudar!</h5> 
                <h5 style={{ fontWeight: 'bold' , marginBottom: 30 , fontSize: 24 , color: '#141414' }}>Bem-vindo ?? Leite&Neves</h5>
                <p>
                  Nosso escritorio ?? especialista em Direito de transito.
                </p>
                <p>
                  N??s sabemos exatamente o que fazer para cancelar/anular sua multa.
                </p>

                <span ><BsCheck size={25} style={{ marginRight:5 , color: '#C59589' }}/>Somos especialistas</span><br/>
                <span ><BsCheck size={25} style={{ marginRight:5 , color: '#C59589' }}/>temos expertise no assunto</span><br/>
                <span ><BsCheck size={25} style={{ marginRight:5 , color: '#C59589' }}/>Voc?? esta contratando um advogado</span><br/>
                <span ><BsCheck size={25} style={{ marginRight:5 , color: '#C59589' }}/>Nosso trabalho ?? <strong>PREMIUM</strong>, <strong>acess??vel</strong> e de <strong>qualidade</strong></span><br/>
              </div>

              <div 
                className="col-12 row"
                style={{ marginTop: 20 , fontFamily: 'Times New Roman , sans-serif'}}
              >
                <div
                  className=" card col-md-6 col-lg-6"
                  style={{
                    position: "relative" ,
                    right: width <= 360 ? 0 : ( width <= 460 ? 0 : -10),
                    height: 120,
                    background: 'none',
                    borderTop: `${width <= 360 ? '0' : ( width <= 460 ? '0' : '2')}px solid #eaeaeae3`,
                    borderRight: `${width <= 360 ? '0' : ( width <= 460 ? '0' : '2')}px solid #eaeaeae3`,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderLeft: 'none',
                    borderBottom: 'none',
                  }}
                >
                  <div className="card-body row" style={{ padding: 25 }}>
                    <div className="col-3">
                      <FaBalanceScale size={45} color='#C59589'/>
                    </div>
                    <div className="col-9">
                      <h5 className="card-title col-12" style={{ margin: 0 , textAlign: 'start', fontSize: 20 , fontWeight: 'bold'}}>Advogados</h5>
                      <h5 className="card-title col-12" style={{ textAlign: 'start', fontSize: 20 , fontWeight: 'bold'}}>Especializados</h5>
                      <span className="card-text col-12" style={{ marginTop: 25 }}>Direito de Tr??nsito</span>
                    </div>
                  </div>
                </div>
                <div
                  className=" card col-md-6 col-lg-6"
                  style={{
                    height: 120,
                    background: 'none',
                    borderTop: '2px solid #eaeaeae3',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderLeft: 'none',
                    borderBottom: 'none',
                    borderRight: 'none',
                  }}
                >
                  <div className="card-body row" style={{ padding: 25 }}>
                    <div className="col-3">
                      <FiPhoneCall size={45} color='#C59589'/>
                    </div>
                    <div className="col-9">
                      <h5 className="card-title col-12" style={{textAlign: 'start', fontSize: 20, fontWeight: 'bold'}}>(81) 98688-0070</h5>
                      <h5 className="card-title col-12" style={{textAlign: 'start', fontSize: 20, fontWeight: 'bold'}}>(81) 97344-9514</h5>
                      <span className="card-text col-12" style={{ marginTop: 46 }}>Atendemos todo o Brasil</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex" style={{ marginTop: 25, marginBottom: 10  , justifyContent: 'center'}}>
                <a href="https://wa.me/5581986880070?text=Sej%C3%A1%20Bem%20Vindo(a)" target="_blank" rel="noreferrer">
                  <button type="button" className={styles.button_section+" btn"} >Contate-nos!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section
        style={{ width: '100%', backgroundColor: '#FBFBFB', fontFamily: 'Spartan, sans-serif'}}
      >
        <div className="container">
          <div className="col-12" style={{ textAlign: 'center' , fontSize: 14 , color: '#333333' , padding: 20 }}>
            <div style={{ marginBottom: 10 }}>
              <BiShield size={50} color='#C59589'/>
            </div>
            <h6 style={{ fontWeight: 'bold' , }}>Infra????es da Lei Seca:</h6><br/>
            <div style={{ marginBottom: 20 }}>
              <span>Voc?? pode ???ser pego na Lei Seca??? diante de duas situa????es: </span><br/> 
              <span>Fazendo o teste ou se recusando a realizar.</span><br/> 
              <span>Em ambos os casos, a penalidade ?? a mesma:</span><br/>   
            </div>
            <div style={{ marginBottom: 10 }}>
              <span >Art. 165 do CTB ??? <b>???dirigir sob a influ??ncia de ??lcool??? </b>??? Multa: R$ 2.934,70 ??? Suspens??o de 12 meses da CNH;</span><br/> 
            </div>
            <div style={{ marginBottom: 30 }}>
              <span >Art. 165-A do CTB ??? <b>???recusar-se a realizar o teste do etil??metro e demais testes???</b> ??? Multa: R$ 2.934,70 ??? Suspens??o de 12 meses da CNH.</span><br/> 
            </div>
            <div style={{ marginBottom: 20 }}>
              <span >Se for pego dirigindo com a CNH suspensa, voc?? sofrer?? a <b>???cassa????o???</b>, que significa ficar 2 anos sem dirigir e, ap??s, fazer e pagar a auto escola de novo.</span><br/> 
            </div>
          </div>        
          <div className="col-12 d-flex" style={{ justifyContent: 'center' , marginTop: 5 , paddingBottom: 18 }}>
            <a href="https://wa.me/5581986880070?text=Sej%C3%A1%20Bem%20Vindo(a)" target="_blank" rel="noreferrer">
              <button type="button" className={styles.button_section+" btn"}>Saiba mais sem custo!</button>
            </a>
          </div>
        </div>
      </section>
      <section
        style={{ width: '100%', backgroundColor: '#C59589', fontFamily: 'Spartan, sans-serif'}}
      > 
        <div className="col-12" style={{ paddingTop: 10, paddingLeft: width <= 360 ? 0 : ( width <= 460 ? 0 : 50) , paddingRight: width <= 360 ? 0 : ( width <= 460 ? 0 : 50) , paddingBottom: 10 ,}}>
          <div className="container">
            <div style={{ textAlign: 'center' , backgroundColor: '#ffff' , paddingTop: 40, paddingBottom: 30 , paddingLeft: 10 , paddingRight: 10}}>
              <h6 style={{ fontWeight: 'bold' , marginBottom: 20 }}>SUPREMO TRIBUNAL FEDERAL</h6>
              <div>
                <span>Aten????o: em <b>19 de maio de 2022 o STF entendeu que ?? Constitucional a multa de recusa ao teste do baf??metro, ou seja, ela pode ser aplicada</b>. Por??m, este debate referente ?? constitucionalidade do artigo j?? n??o cancelava nenhuma multa em ??mbito administrativo, por falta de compet??ncia do ??rg??o de tr??nsito para avaliar se uma lei est?? ou n??o de acordo com a Constitui????o.</span>
              </div>
              <div>
                <span><b>Todos os cancelamentos s??o motivados por ???nulidades???</b>, erros cometidos pela autoridade e descumprimentos de lei e resolu????es.</span><br />
                <span>Por isto, <b>n??o confie em modelos prontos, al??m de desatualizados, usam apenas o argumento gen??rico de que o motorista tem o direito de n??o fazer o teste</b>.</span><br />
                <span>Procure advogados atualizados e especializados na mat??ria, n??o perca seu direito de dirigir! </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ width: '100%', backgroundColor: '#F1F1F1', fontFamily: 'Spartan, sans-serif'}}
      >
        <div className="container">
          <div className="col-12" style={{ textAlign: 'center' , fontSize: 14 , color: '#333333' , padding: 20 }}>
            <div style={{ marginBottom: 10 }}>
              <ImProfile size={50} color='#C59589'/>
            </div>
            <h6 style={{ fontWeight: 'bold' , }}>O que ocorre no momento da abordagem:</h6>
            <div style={{ fontSize: 14 }}>
              <p>A <b>CNH</b> deve ser recolhida e voc?? ter?? que <b>apresentar um condutor</b> para retirar o ve??culo.</p>
              <p>Essa pessoa precisa estar com a CNH em dia e deve soprar o baf??metro oficial, n??o o ???pr??-teste???.</p>
              <p>Caso n??o seja apresentado condutor, a lei prev?? que o <b>ve??culo ser?? removido</b> para o p??tio do DETRAN.</p>
              <p>Quanto ?? CNH, ela poder?? ser retirada posteriormente no ??rg??o.</p>
              <p>Pois bem, e se autoridade n??o adotou algum procedimento? Existe uma <b>nulidade e sua multa deve ser cancelada!</b></p>
            </div>
          </div>
          <div className="col-12 d-flex" style={{ justifyContent: 'center' , marginTop: 5 , paddingBottom: 40 }}>
            <a href="https://wa.me/5581986880070?text=Sej%C3%A1%20Bem%20Vindo(a)" target="_blank" rel="noreferrer">
              <button type="button" className={styles.button_section+" btn"} style={{ fontSize: width <= 360 ? 13 : ( width <= 460 ? 14 : 16) }}>Descubra se voc?? tem chances de cancelar a multa: clique aqui. </button>
            </a>
          </div>
        </div>
      </section>  
      {/* <section
        style={{ width: '100%', backgroundColor: '#FFFFFF'}}
      >
        <div className="container">
          <div className="col-12" style={{ textAlign: 'center' , fontSize: 14 , color: '#333333' , padding: 20 }}>
            <div style={{ marginBottom: 10 }}>
              <GrSearch size={50} color='#B89161' />
            </div>
            <h6 style={{ fontWeight: 'bold' , }}>O que voc?? precisa receber para a multa ser v??lida?</h6>
            <p>
              <span><BsCheck size={25} style={{ marginRight:5 , color: '#B89161' }}/><b>Auto de Infra????o de Tr??nsito</b> - AIT</span><br/>
              <span><BsCheck size={25} style={{ marginRight:5 , color: '#B89161' }}/><b>Guia de Recolhimento da sua CNH</b></span><br/>
              <span><BsCheck size={25} style={{ marginRight:5 , color: '#B89161' }}/><b>Tiras do baf??metro</b>, documento que traz todos os dados do aparelho</span><br/>
            </p>
            <p>
              <span><BsCheck size={25} style={{ marginRight:5 , color: '#B89161' }}/>Tratando-se de autua????o por recusa, do <b>DETRAN/SP</b>, ?? necess??ria a entrega do <b>ACASE</b></span><br/>
              <span>Al??m disso, h?? in??meros detalhes que devem ser observados, como a indica????o de <b>sinais de embriaguez</b> e a oportunidade de fazer outros tipos de <b>testes do artigo 277 do CTB</b>, por exemplo.</span>
              <span>Para autua????o pelo 165-A, a <b>Resolu????o n?? 925 de abril de 2022 do CONTRAN</b> define como <b>item obrigat??rio a apresenta????o dos dados do etil??metro</b> (marca, modelo e n??mero de s??rie) que j?? eram requisitos do artigo 165 do CTB.</span>
            </p>
          </div>
        </div>
      </section> */}
      <section
        style={{ width: '100%' }}
      >
        <div className="container">
          <div 
            className="row"
            style={{ position: 'relative' , top: 35 , marginLeft: 0.3 , width: '100%' , paddingLeft: width <= 360 ? 0 : ( width <= 460 ? 0 : 50) , paddingRight: width <= 360 ? 0 : ( width <= 460 ? 0 : 50) }}
          >
            <div
              className="card col-md-12 col-lg-4"
              style={{
                height: 300 ,
                backgroundColor: '#C59589'
              }}
            >
              <div className="card-body" style={{ padding: 25 }}>
                <div className=" col-12 d-flex justify-content-center">
                  <FaBalanceScale size={45}/>
                </div>
                <h4 className="card-title col-12" style={{ marginTop: 25 , textAlign: 'center' , fontWeight: 'bold'}}>Efeito Suspensivo da Pena</h4>
                <p className="card-text col-12" style={{ marginTop: 18 }}>Enquanto estiver recorrendo voc?? n??o ?? penalizado. Pode dirigir tranquilamente e at?? renovar a CNH.</p>
              </div>
            </div>
            <div
              className="card col-md-12 col-lg-4"
              style={{ height: 300 }}
            >
              <div className="card-body" style={{ padding: 25 }}>
                <div className="col-12 d-flex justify-content-center">
                  <FcIdea size={45}/>
                </div>
                <h5 className="card-title col-12" style={{ marginTop: 25 , textAlign: 'center', fontWeight: 'bold'}}>Possibilidade de n??o pagamento da multa</h5>
                <p className="card-text col-12" style={{ marginTop: 25 }}>Se um dos tr??s primeiros recursos for deferido, voc?? n??o precisar?? efetuar o pagamento da multa.</p>
              </div>
            </div>
            <div
              className="card col-md-12 col-lg-4"
              style={{ height: 300}}
            >
              <div className="card-body" style={{ padding: 25 }}>
                <div className="col-12 d-flex justify-content-center">
                  <FaCarAlt size={45}/>
                </div>
                <h5 className="card-title col-12" style={{ marginTop: 25 , textAlign: 'center', fontWeight: 'bold'}}>N??o fique sem CNH</h5>
                <p className="card-text col-12" style={{ marginTop: 46 }}>Se qualquer um dos seis recursos dispon??veis for aceito, voc?? n??o ter?? que ficar 12 meses sem dirigir.</p>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <section
        style={{ width: '100%', backgroundColor: '#F1F1F1'}}
      >
        <div className="container">
          <div className="col-12" style={{ textAlign: 'center' , fontSize: 14 , color: '#333333' , paddingTop: 60 , paddingBottom: 20, fontFamily: 'Spartan, sans-serif'}}>
            <p>
              <h6 style={{ fontWeight: 'bold' , color: '#C59589' , fontSize: 21 }}>Entenda as raz??es para</h6>
              <h5 style={{ fontWeight: 'bold' , }}>RECORRER da MULTA ou PROCESSO:</h5>
            </p>
            <p>
              <span>H?? <b>ao menos 6 chances de recorrer</b> e evitar a multa e a suspens??o da CNH. </span><br/>
              <span><b>Enquanto estiver recorrendo voc?? n??o ?? penalizado!</b></span><br/>
            </p>  
            <p>
              <span>No recurso voc?? precisar?? apontar de forma fundamentada as <b>nulidades e omiss??es</b>.</span><br/>
            </p>
            <p> 
              <span>O trabalho de an??lise e fundamenta????o ?? feito por nossa equipe especializada nas penalidades previstas nos artigos 165 e 165-A do CTB.</span><br/>
            </p>
            <p>
              <span>Caso voc?? n??o tenha recorrido da multa e <b>recebeu a notifica????o do processo</b>, fique calmo, ainda h?? como evitar a suspens??o. </span><br/>
            </p>
          </div>
          
          <div 
            className="col-12 row"
            style={{ marginTop: 20, paddingBottom: 80  , paddingLeft: width <= 460 ? 20 : 50 , paddingRight: width <= 460 ? 0 : 50, fontFamily: 'Spartan, sans-serif' }}
          >
            <div className="col-12 d-flex" style={{ justifyContent: 'center', paddingBottom: 20}}>
              <a href="https://wa.me/5581986880070?text=Sej%C3%A1%20Bem%20Vindo(a)" target="_blank" rel="noreferrer">
                <button type="button" className={styles.button_section+" btn"}>Contate-nos!</button>
              </a>
            </div>
            {/* <div
              className={"card col-sm-12 col-md-4 col-lg-4"}
              style={{ height: 350 , background: 'none' , border:'none'}}
            >
              <div className="card-body row" style={{ padding: 25 }}>
                <div className={styles.hover_icon_efect +" "+ styles.img_icon+" col-12 d-flex justify-content-center"} style={{ height: 40}}>
                  <img src="https://promultas.com.br/wp-content/uploads/2022/04/contracts.png" alt="" srcSet="" width="60" height="60" />
                </div>
                <div className="col-12" style={{ textAlign: 'center' }}>
                  <span className="card-title col-12" style={{ textAlign: 'center', fontSize: 20 , fontWeight: 'bold'}}>Solicite a avalia????o gratuita</span>
                  <p className="card-text col-12" >Informe a raz??o da sua multa: teste realizado ou recusa.</p>
                  <a className={styles.link_} href="#">Sem Custo <FiArrowRight size={20}/></a>
                </div>
              </div>
            </div> */}
            <div
              className={"card col-sm-12 col-md-6 col-lg-6"}
              style={{
                height: 350 ,
                background: 'none' , 
                borderTop:'none',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRadius: 0}}
            >
              <div className="card-body row" style={{ padding: 25 }}>
                <div className={styles.hover_icon_efect +" col-12 d-flex justify-content-center"} style={{ height: 90}}>
                  <img src="https://promultas.com.br/wp-content/uploads/2022/04/copyrights.png" alt="" srcSet="" width="60" height="60" />
                </div>
                <div className="col-12" style={{ textAlign: 'center' }}>
                  <h5 className="card-title col-12" style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Faremos a an??lise do caso</h5>
                  <p className="card-text col-12" >Todo procedimento se d?? de forma online e r??pida. N??o vendemos modelos prontos e sim uma experi??ncia personalizada.</p>
                  <a className={styles.link_} href="https://wa.me/5581986880070?text=Sej%C3%A1%20Bem%20Vindo(a)">Retorno em minutos <FiArrowRight color='#C59589' size={20}/></a>
                </div>
              </div>
            </div>
            <div
              className={" card col-sm-12 col-md-6 col-lg-6"}
              style={{ height: 350 , background: 'none' , border: 'none' }}
            >
              <div className="card-body row" style={{ padding: 25 }}>
                <div className={styles.hover_icon_efect + " col-12 d-flex justify-content-center"} style={{ height: 90}}>
                  <img src="https://promultas.com.br/wp-content/uploads/2022/04/child.png" alt="" srcSet="" width="60" height="60" />
                </div>
                <div className="col-12" style={{ textAlign: 'center' }}>
                  <h5 className="card-title col-12" style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Recurso elaborado!</h5>
                  <p className="card-text col-12" >Todo procedimento se d?? de forma online e r??pida. N??o vendemos modelos prontos e sim uma experi??ncia personalizada.</p>
                  <a className={styles.link_} href="https://wa.me/5581986880070?text=Sej%C3%A1%20Bem%20Vindo(a)">Sem modelos prontos<FiArrowRight color='#C59589' size={20}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ width: '100%', backgroundColor: '#C59589'}}
      > 
        <div className="container">
          <div style={{ height: 80 , width: '100%'}}>
          </div>
          <div className="col-12" style={{ textAlign: 'center', paddingBottom: 10 ,fontSize: 11 , color: '#FFFFFF' }}>
            <span>2022 Leite&Neves?? Todos os direitos reservados. Endere??o:Estrada do Barbalho, 970 Segundo andar - Iputinga , Recife - PE.</span><br/>
            {/* <span>Av. Dr. Chucri Zaidan, 1240 ??? Ch??cara Santo Ant??nio (Zona Sul), S??o Paulo ??? SP.</span><br/> */}
            <span>Atendemos todo o Brasil | A Leite & Neves presta qualquer servi??o na esfera judicial.</span>
            {/* , atuando apenas na esfera administrativa */}
          </div>
        </div>
      </section>
      <div className={styles.fab_container}>
        <div className={`${styles.button} ${styles.iconbutton}`}>
          <a href="https://wa.me/5581986880070?text=Sej%C3%A1%20Bem%20Vindo(a)" target="_blank" rel="noreferrer">
            <BsWhatsapp size={25} color='#fff'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
