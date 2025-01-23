import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CtaSection() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-700">
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
					Stay Ahead of the Market
				</h2>
				<p className="mt-4 text-lg leading-6 text-indigo-200">
					Subscribe to our newsletter for exclusive financial insights and
					analysis delivered straight to your inbox.
				</p>
				<form className="mt-8 sm:flex justify-center">
					<Input
						type="email"
						required
						className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
						placeholder="Enter your email"
					/>
					<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
						<Button
							type="submit"
							className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:w-auto">
							Subscribe
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
