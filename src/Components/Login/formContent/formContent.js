
export function FormContent({register,handleSubmit,onSubmit,errors}){
    return(
        <div className="BlockAuthorizationLoginMin1">
            <h3 className="LoginMin1Title">Вход</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="BlockAuthorizationLoginMin1Form"> 
                <input type="text" {...register("login", {required:true})} placeholder="Логин"  className="LoginMin1Input"/>
                {errors.login && <span style={{color:'red'}} className="LoginMin1Span">Неверно введён логин</span>}
                <input type="password" {...register("password", {required:true})} placeholder="Пароль" className="LoginMin1Input"/>
                {errors.password && <span style={{color:'red'}} className="LoginMin1Span">Неверно введён пароль</span>}
                <input type={"submit"} value="Войти" className="LoginMin1InputBtn"/>
            </form>
        </div>
    )
}