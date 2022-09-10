export class arc {
    constructor(width, height, result) {
        this.width = width
        this.height = height
        this.result = result
        this.data = 0
    }
    init() {
        let el = document.getElementById('arc')
        el.style.boxShadow = '0 0 10px #aaaaaa'
        this.app = el.getContext('2d')
        this.animate()
    }
    drawCircle() {
        this.app.beginPath()
        this.app.strokeStyle = '#aaaaaa'
        this.app.lineWidth = 40
        this.app.lineCap = 'round'
        this.app.arc(this.width / 2, this.height, this.width / 2 - 20, 0, Math.PI, true)
        this.app.stroke()
        this.app.closePath()
    }
    progress() {
        let part = Math.PI / 100
        if (this.data <= 25) {
            this.app.strokeStyle = '#3366FF'
        } else if (25 < this.data <= 50) {
            this.app.strokeStyle = '#FFFF00'
        } else if (50 < this.data <= 75) {
            this.app.strokeStyle = '#FF3366'
        } else if (75 < this.data <= 100) {
            this.app.strokeStyle = '#66FF00'
        }
        this.app.beginPath()
        this.app.lineWidth = 30
        this.app.lineCap = 'round'
        this.app.arc(this.width / 2, this.height, this.width / 2 - 20, Math.PI, ` ${Math.PI + part * this.data}`)
        this.app.stroke()
        this.app.closePath()
    }
    text() {
        this.app.font = "60px serif";
        this.app.fillText(this.data + '%', this.width / 2 - 40, this.height - 40)
    }
    animate() {
        requestAnimationFrame(() => {
            this.animate()
        })
        if (this.result > this.data) {
            this.app.clearRect(0, 0, this.width, this.height)
            this.data = this.data + 0.5
            this.drawCircle()
            this.text()
            this.progress()
        }
    }
}