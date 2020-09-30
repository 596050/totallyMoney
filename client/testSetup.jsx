import "mutationobserver-shim";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
global.MutationObserver = MutationObserver;

Enzyme.configure({ adapter: new Adapter() });
jest.setTimeout(300000);
