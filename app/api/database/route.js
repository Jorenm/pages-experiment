import { NextResponse } from 'next/server';

import Image from "next/image"

import {encode, decode} from 'node-base64-image'

async function base64encode(url) {
	const options = {
		string: true,
		headers: {
			"User-Agent": "my-app"
		}
	}
	
	const image = await encode(url, options)
	return 'data:image/png;base64,' + image
}

async function generateBase64Images(string) {
	let matches = string.matchAll(/blurDataURL="(.*?)"/g)
	matches = [...matches]

	await Promise.all(matches.map(async (match) => {
		const url = match[1]
		const base64 = await base64encode(url)
		string = string.replace(url, base64)
	}))

	return string
}

const pageData = [
	{
		title: 'Integer volutpat nisl',
		above_fold: `
			<p>Integer volutpat nisl eu ligula sodales suscipit ac nec magna. Pellentesque pretium egestas auctor. Quisque posuere facilisis libero, nec ullamcorper libero fringilla nec. Ut eu viverra sapien, quis tincidunt neque. Nam non nisi id enim ultricies tempus non sed ante. Curabitur ullamcorper in elit in mattis. Pellentesque eget erat tempor turpis auctor porttitor id id libero. Vestibulum ullamcorper eleifend sodales. Pellentesque nec felis auctor, porttitor lectus quis, lacinia quam.</p>
			<p>Integer fermentum blandit velit. Morbi ut consectetur risus. Nullam imperdiet eget dolor sit amet malesuada. Proin blandit malesuada aliquet. Quisque vel venenatis odio. Suspendisse tincidunt elit et eros iaculis, a condimentum odio vehicula. Cras interdum et diam a tincidunt. Donec ultricies tellus nec hendrerit malesuada.</p>
			<p>Nam mollis lacus felis, ut ullamcorper quam condimentum ac. Sed bibendum vulputate dui. Integer fermentum convallis imperdiet. Aliquam accumsan nisl sed aliquet sagittis. Duis ornare felis sed tortor mattis mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lacus erat, facilisis id condimentum sed, laoreet nec metus. Praesent rhoncus pharetra nisi quis cursus. Sed hendrerit nunc sed semper lobortis. Nunc fermentum orci id velit egestas, pellentesque volutpat justo malesuada.</p>
		`,
		content: `
			<Image style={{float: 'left'}} placeholder="blur" blurDataURL="https://picsum.photos/id/237/50/30/?blur=6" src="https://picsum.photos/id/237/400/300" alt="Placeholder" width={400} height={300} />
			<p>Integer volutpat nisl eu ligula sodales suscipit ac nec magna. Pellentesque pretium egestas auctor. Quisque posuere facilisis libero, nec ullamcorper libero fringilla nec. Ut eu viverra sapien, quis tincidunt neque. Nam non nisi id enim ultricies tempus non sed ante. Curabitur ullamcorper in elit in mattis. Pellentesque eget erat tempor turpis auctor porttitor id id libero. Vestibulum ullamcorper eleifend sodales. Pellentesque nec felis auctor, porttitor lectus quis, lacinia quam.</p>
			<h2>Morbi ut consectetur</h2>
			<p>Integer fermentum blandit velit. Morbi ut consectetur risus. Nullam imperdiet eget dolor sit amet malesuada. Proin blandit malesuada aliquet. Quisque vel venenatis odio. Suspendisse tincidunt elit et eros iaculis, a condimentum odio vehicula. Cras interdum et diam a tincidunt. Donec ultricies tellus nec hendrerit malesuada.</p>
			<Image style={{float: 'right'}} placeholder="blur" blurDataURL="https://picsum.photos/id/238/50/30/?blur=6" src="https://picsum.photos/id/238/400/300" alt="Placeholder" width={400} height={300} />
			<p>Nam mollis lacus felis, ut ullamcorper quam condimentum ac. Sed bibendum vulputate dui. Integer fermentum convallis imperdiet. Aliquam accumsan nisl sed aliquet sagittis. Duis ornare felis sed tortor mattis mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lacus erat, facilisis id condimentum sed, laoreet nec metus. Praesent rhoncus pharetra nisi quis cursus. Sed hendrerit nunc sed semper lobortis. Nunc fermentum orci id velit egestas, pellentesque volutpat justo malesuada.</p>
			<p>Integer volutpat nisl eu ligula sodales suscipit ac nec magna. Pellentesque pretium egestas auctor. Quisque posuere facilisis libero, nec ullamcorper libero fringilla nec. Ut eu viverra sapien, quis tincidunt neque. Nam non nisi id enim ultricies tempus non sed ante. Curabitur ullamcorper in elit in mattis. Pellentesque eget erat tempor turpis auctor porttitor id id libero. Vestibulum ullamcorper eleifend sodales. Pellentesque nec felis auctor, porttitor lectus quis, lacinia quam.</p>
			<p>Fusce nec venenatis magna, sed fringilla erat. Mauris venenatis, tellus non fermentum tristique, massa velit accumsan nunc, sit amet sagittis diam ligula vel ante. Integer elementum nisl sodales, faucibus risus eget, egestas ligula. Donec sollicitudin bibendum augue vel tincidunt. Aliquam porttitor gravida sem, ac consequat quam malesuada quis. Nullam eu nunc non risus ornare faucibus id eget mauris. Mauris blandit mattis bibendum. Donec sollicitudin luctus enim, eget lacinia tortor pretium id. Pellentesque suscipit in purus at dapibus. Etiam luctus sit amet quam at dapibus. Sed dapibus auctor ipsum, vel pharetra risus tempor nec. Duis molestie, purus et laoreet porttitor, urna magna gravida mi, id egestas nisl purus a tellus.</p>
		`,
		color: '#EFF0D1',
	},
	{
		title: 'Praesent suscipit magna',
		above_fold: `
			<p>Praesent suscipit magna eu dolor molestie ullamcorper. Donec suscipit lectus nec lacus feugiat condimentum. Sed mattis tortor sed urna varius feugiat. Duis vitae rutrum felis, finibus blandit sapien. Maecenas dictum purus suscipit dui viverra laoreet. Mauris feugiat lacinia quam sed ultrices. Nam a tellus ut odio rhoncus dictum non nec quam. Pellentesque laoreet porta lacus, nec dictum neque luctus eget. Suspendisse varius orci non dui feugiat, eget gravida leo commodo. Aliquam facilisis auctor dolor quis vehicula. Maecenas eu velit a purus ornare aliquam.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt tempus ullamcorper. Nulla ultricies a nisi et fermentum. Duis efficitur ac elit sed convallis. Nam tellus mauris, viverra ac varius in, interdum sed nulla. Integer felis ligula, malesuada at pulvinar eget, pulvinar id nunc. In ligula tellus, tincidunt et tincidunt eget, facilisis a nulla. Nam congue tempus lorem id ultrices. Quisque eget odio eget urna elementum aliquet quis sit amet diam. Suspendisse nec malesuada nisi. Vestibulum quis aliquet felis. Pellentesque eleifend posuere orci sed dapibus. Aliquam hendrerit lorem accumsan urna mattis vulputate.</p>
		`,
		content: `
			<Image style={{float: 'left'}} placeholder="blur" blurDataURL="https://picsum.photos/id/239/50/30/?blur=6" src="https://picsum.photos/id/239/400/300" alt="Placeholder" width={400} height={300} />
			<p>Praesent suscipit magna eu dolor molestie ullamcorper. Donec suscipit lectus nec lacus feugiat condimentum. Sed mattis tortor sed urna varius feugiat. Duis vitae rutrum felis, finibus blandit sapien. Maecenas dictum purus suscipit dui viverra laoreet. Mauris feugiat lacinia quam sed ultrices. Nam a tellus ut odio rhoncus dictum non nec quam. Pellentesque laoreet porta lacus, nec dictum neque luctus eget. Suspendisse varius orci non dui feugiat, eget gravida leo commodo. Aliquam facilisis auctor dolor quis vehicula. Maecenas eu velit a purus ornare aliquam.</p>
			<Image style={{float: 'right'}} placeholder="blur" blurDataURL="https://picsum.photos/id/240/50/30/?blur=6" src="https://picsum.photos/id/240/400/300" alt="Placeholder" width={400} height={300} />
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt tempus ullamcorper. Nulla ultricies a nisi et fermentum. Duis efficitur ac elit sed convallis. Nam tellus mauris, viverra ac varius in, interdum sed nulla. Integer felis ligula, malesuada at pulvinar eget, pulvinar id nunc. In ligula tellus, tincidunt et tincidunt eget, facilisis a nulla. Nam congue tempus lorem id ultrices. Quisque eget odio eget urna elementum aliquet quis sit amet diam. Suspendisse nec malesuada nisi. Vestibulum quis aliquet felis. Pellentesque eleifend posuere orci sed dapibus. Aliquam hendrerit lorem accumsan urna mattis vulputate.</p>
		`,
		color: '#D7C0D0'
	},
	{
		title: 'Donec in vestibulum odio',
		above_fold: `
			<p>Donec in vestibulum odio. Mauris non fermentum ipsum. Suspendisse tincidunt nec tellus ut ullamcorper. Quisque erat mi, suscipit at tincidunt sit amet, malesuada non eros. Fusce non eros risus. Phasellus pellentesque lorem sed tempor porttitor. Integer vel porta ipsum. Sed bibendum at sem ac mollis. Sed at posuere ligula, eget maximus ante. In egestas arcu in dui fermentum maximus. Donec vehicula mi eu consectetur molestie. Fusce lobortis lectus nec metus ornare sodales.</p>
			<p>Phasellus condimentum nibh et libero tempor, sed tempus ligula suscipit. Sed a pulvinar justo. Curabitur leo sapien, feugiat et molestie nec, aliquet sit amet eros. Cras sodales at mi id egestas. Quisque tristique tortor eu lacus pharetra, quis feugiat urna rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi nec fermentum urna, at gravida lacus. Sed magna lacus, vestibulum sit amet tortor ac, tincidunt pellentesque urna. Suspendisse velit tortor, aliquet et varius dapibus, blandit pulvinar nisl.</p>
		`,
		content: `
			<p>Donec in vestibulum odio. Mauris non fermentum ipsum. Suspendisse tincidunt nec tellus ut ullamcorper. Quisque erat mi, suscipit at tincidunt sit amet, malesuada non eros. Fusce non eros risus. Phasellus pellentesque lorem sed tempor porttitor. Integer vel porta ipsum. Sed bibendum at sem ac mollis. Sed at posuere ligula, eget maximus ante. In egestas arcu in dui fermentum maximus. Donec vehicula mi eu consectetur molestie. Fusce lobortis lectus nec metus ornare sodales.</p>
			<h2>Sed a pulvinar justo</h2>
			<p>Phasellus condimentum nibh et libero tempor, sed tempus ligula suscipit. Sed a pulvinar justo. Curabitur leo sapien, feugiat et molestie nec, aliquet sit amet eros. Cras sodales at mi id egestas. Quisque tristique tortor eu lacus pharetra, quis feugiat urna rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi nec fermentum urna, at gravida lacus. Sed magna lacus, vestibulum sit amet tortor ac, tincidunt pellentesque urna. Suspendisse velit tortor, aliquet et varius dapibus, blandit pulvinar nisl.</p>
		`,
		color: '#77BA99'
	},
	{
		title: 'Mauris porttitor',
		above_fold: `
			<p>Mauris porttitor faucibus nunc, non dapibus lacus dictum id. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Curabitur diam lorem, laoreet vel eros non, mattis ultricies lectus. Sed nec scelerisque massa. Proin eget semper ex. Donec bibendum at lorem id pulvinar. Duis malesuada rutrum mattis. Donec lacinia magna vel ante posuere fringilla. Curabitur risus arcu, tincidunt eu nisl consequat, fringilla vestibulum metus. Nulla sit amet augue interdum, dignissim odio ut, fringilla justo. Cras lobortis a tellus lacinia viverra. Phasellus posuere massa tempus tincidunt tempor. Pellentesque interdum tempor libero nec laoreet. Nunc id est et nisi ullamcorper facilisis non at ligula. Proin tincidunt in nisi a venenatis.</p>
			<p>Curabitur sagittis, justo et scelerisque dictum, eros nulla varius leo, id fringilla augue erat ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec fermentum odio sed erat auctor, sed suscipit ligula varius. Sed a nulla consequat, auctor tortor vitae, efficitur eros. Integer iaculis mi eget vulputate interdum. Pellentesque at aliquam odio. Nam eget nibh feugiat, ullamcorper libero quis, fringilla sem. Quisque porttitor commodo nibh ac mollis. Phasellus ut nunc nec erat lobortis viverra.</p>
		`,
		content: `
			<p>Mauris porttitor faucibus nunc, non dapibus lacus dictum id. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Curabitur diam lorem, laoreet vel eros non, mattis ultricies lectus. Sed nec scelerisque massa. Proin eget semper ex. Donec bibendum at lorem id pulvinar. Duis malesuada rutrum mattis. Donec lacinia magna vel ante posuere fringilla. Curabitur risus arcu, tincidunt eu nisl consequat, fringilla vestibulum metus. Nulla sit amet augue interdum, dignissim odio ut, fringilla justo. Cras lobortis a tellus lacinia viverra. Phasellus posuere massa tempus tincidunt tempor. Pellentesque interdum tempor libero nec laoreet. Nunc id est et nisi ullamcorper facilisis non at ligula. Proin tincidunt in nisi a venenatis.</p>
			<p>Curabitur sagittis, justo et scelerisque dictum, eros nulla varius leo, id fringilla augue erat ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec fermentum odio sed erat auctor, sed suscipit ligula varius. Sed a nulla consequat, auctor tortor vitae, efficitur eros. Integer iaculis mi eget vulputate interdum. Pellentesque at aliquam odio. Nam eget nibh feugiat, ullamcorper libero quis, fringilla sem. Quisque porttitor commodo nibh ac mollis. Phasellus ut nunc nec erat lobortis viverra.</p>
		`,
		color: '#FFD1BA'
	},
	{
		title: 'Lorem ipsum dolor',
		above_fold: `
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum nibh at lacus facilisis vestibulum. Vestibulum rutrum laoreet turpis, eget varius ex suscipit vitae. Cras sed tortor nisi. Duis lorem nulla, tincidunt vitae fringilla et, consectetur iaculis justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Donec in pretium lectus. Phasellus commodo ex nec mauris aliquam molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ultrices lorem ex, facilisis eleifend dolor feugiat at. In hac habitasse platea dictumst.</p>
			<p>Curabitur sagittis, justo et scelerisque dictum, eros nulla varius leo, id fringilla augue erat ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec fermentum odio sed erat auctor, sed suscipit ligula varius. Sed a nulla consequat, auctor tortor vitae, efficitur eros. Integer iaculis mi eget vulputate interdum. Pellentesque at aliquam odio. Nam eget nibh feugiat, ullamcorper libero quis, fringilla sem. Quisque porttitor commodo nibh ac mollis. Phasellus ut nunc nec erat lobortis viverra.</p>
		`,
		content: `
			<p>Proin interdum eget ante non viverra. Phasellus a consequat felis, vel rhoncus arcu. Pellentesque ultricies venenatis vulputate. Nulla a fringilla lectus, vel ullamcorper odio. Maecenas feugiat pharetra lacus. Pellentesque sed purus non lacus egestas posuere. Donec nec neque sed ex placerat consectetur et vel elit. Nam suscipit, odio sed venenatis ullamcorper, sem lacus ornare odio, sit amet ullamcorper turpis lacus quis leo. Pellentesque ac justo vel ante cursus ultrices. Praesent in neque sed risus sollicitudin auctor. Fusce euismod et urna et feugiat. Morbi aliquam mauris ut ipsum euismod egestas nec id velit. Nam maximus vel metus non volutpat.</p>
			<h2>Vestibulum ullamcorper</h2>
			<p>Nec risus a maximus. Duis ultrices fermentum turpis in rhoncus. Nunc egestas ullamcorper dapibus. Donec consectetur risus eget pharetra scelerisque. Aenean id quam nibh. Suspendisse nec sem sit amet augue elementum porta. Cras dapibus eros non laoreet bibendum. Donec tincidunt felis id consequat suscipit. Nullam ultricies justo a massa eleifend hendrerit. Donec pharetra massa non sodales placerat.</p>
			<p>Proin interdum eget ante non viverra. Phasellus a consequat felis, vel rhoncus arcu. Pellentesque ultricies venenatis vulputate. Nulla a fringilla lectus, vel ullamcorper odio. Maecenas feugiat pharetra lacus. Pellentesque sed purus non lacus egestas posuere. Donec nec neque sed ex placerat consectetur et vel elit. Nam suscipit, odio sed venenatis ullamcorper, sem lacus ornare odio, sit amet ullamcorper turpis lacus quis leo. Pellentesque ac justo vel ante cursus ultrices. Praesent in neque sed risus sollicitudin auctor. Fusce euismod et urna et feugiat. Morbi aliquam mauris ut ipsum euismod egestas nec id velit. Nam maximus vel metus non volutpat.</p>
		`,
		color: '#A47963'
	}
]

export async function GET(req) {
	const page = req.nextUrl.searchParams.get('page')

	const data = pageData[page]

	const content = await generateBase64Images(data.content)
	const above_fold = await generateBase64Images(data.above_fold)

	return NextResponse.json({content, above_fold})
}