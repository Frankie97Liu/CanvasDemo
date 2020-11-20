import React from "react";

class Canvas extends React.Component {
    componentDidMount() {
        const self = this;
        const canvas = this.refs.canvas;
        canvas.height = 500;
        canvas.width = 500;
        this.canvas = canvas;
        this.canvasWidth = canvas.width
        this.canvasHeight = canvas.height
        this.xOffset = 0;  // 初始偏移
        this.xOffset1 = 3;
        this.speed = 0.1;  // 偏移速度
        this.rangeValue = 0.6  // 水位数值
        this.nowRange = 0;  // 初始水位
        this.waveWidth = 0.05  // 初始波浪宽度
        this.waveHeight = 20;  // 初始波浪高度
        const ctx = canvas.getContext('2d');
        this.drawSin(ctx,this.xOffset,this.nowRange, this.waveWidth,this.waveHeight);
        this.drawSin(ctx,this.xOffset1,this.nowRange);
        requestAnimationFrame(this.draw.bind(this,canvas));
    }
    // 画正弦
    drawSin(ctx,xOffset=0,nowRange=0, waveWidth = 0.05, waveHeight = 20) {
        const points = [];
        const canvasWidth = this.canvasWidth;
        const canvasHeight = this.canvasHeight;
        const startX = 0;
        //const waveWidth = 0.05; // 波浪宽度，数越小越宽
        //const waveHeight = 20;  //波浪高度，数越大越高

        ctx.beginPath();
        for (let x = startX; x < startX + canvasWidth; x += 20/canvasWidth) {
            const y = waveHeight * Math.sin((startX + x)* waveWidth + xOffset);
            points.push([x, (1-nowRange) * canvasHeight + y]);
            ctx.lineTo(x,(1-nowRange) * canvasHeight + y);
        }
        ctx.lineTo(canvasWidth,canvasHeight);
        ctx.lineTo(startX,canvasHeight);
        ctx.lineTo(points[0][0],points[0][1]);
        ctx.stroke();
    }
    // 画圆
    drawCircle(ctx) {
        const r = this.canvasWidth / 2;
        const lineWidth = 3;
        const cR = r - (lineWidth);
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.arc(r,r,cR,0,2*Math.PI);
        ctx.stroke();
        ctx.clip();   // 剪切区域
        this.isDrawCircle = true;
    }

    // 画 画布
    draw() {
        const canvas = this.canvas;
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0,0,canvas.width,canvas.height);
        if (!this.isDrawCircle) {
            this.drawCircle(ctx);
        }
        // 曲线绘制
        this.drawSin(ctx,this.xOffset,this.nowRange,0.02, 8);
        this.drawSin(ctx,this.xOffset1,this.nowRange,0.01,5);
        this.xOffset += this.speed;
        this.xOffset1 += this.speed;
        if (this.nowRange < this.rangeValue) {
            this.nowRange +=  0.01;
        }
        requestAnimationFrame(this.draw.bind(this))
    }

    render() {
        return(
            <div className="content page">
                <canvas ref="canvas"></canvas>
            </div>
        )
    }
}

export default Canvas;