import { store } from '../../services/store';
import detailsStyles from './details.module.css';

function Details() {
    return (
        <>
            <div className={`${detailsStyles.description} text_color_inactive`}>
                <div className='mr-5'>
                    <p className="text text_type_main-default mb-2 mt-6">За последние сутки во вверенных Вам сайтах произошли следующие изменения:</p>
                </div>
                <div className='mr-5'>
                    <p className="text text_type_main-default mb-2">Исчезли следующие страницы:</p>
                    <div className="text text_type_digits-default">
                        <ul>
                            {store.getState().deleted.map((item) => (<li key={item}>{item}</li>)
                            )}
                        </ul>
                    </div>
                </div>
                <div className='mr-5'>
                    <p className="text text_type_main-default mb-2">Появились следующие новые страницы:</p>
                    <div className="text text_type_digits-default">
                        <ul>
                            {store.getState().added.map((item) => (<li key={item}>{item}</li>)
                            )}
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="text text_type_main-default mb-2">Изменились следующие страницы:</p>
                    <div className="text text_type_digits-default mb-6">
                        <ul>
                            {store.getState().changed.map((item) => (<li key={item}>{item}</li>)
                            )}
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="text text_type_main-default mb-2">С уважением, автоматизированная система мониторинга.</p>
                </div>
            </div>
        </>
    )
}

export default Details;