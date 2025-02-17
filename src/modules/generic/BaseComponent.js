class BaseComponent {
	constructor() {
		if(this.constructor === BaseComponent) {
			throw  new Error('Нельзя создать экземпляр асбтрактного класса BaseComponent')
		}
	}

	getProxyState(initialState) {
		return new Proxy(initialState, {
			get: (target, prop) => {
				return target[prop];
			},
			set: (target, prop, newValue) => {
				const oldValue = target[prop];

				target[prop] = newValue;

				if (newValue !== oldValue) {
					this.updateUi();
				}

				return true
			},
		})
	}

	// Перерисовка UI в ответ на обновление состояния
	updateUi() {

	}
}

export default BaseComponent