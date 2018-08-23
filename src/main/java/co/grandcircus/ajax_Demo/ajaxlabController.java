package co.grandcircus.ajax_Demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ajaxlabController {

	@RequestMapping("/")
	public ModelAndView home() {
		return new ModelAndView("list");
	}
	
	@RequestMapping("/list")
	public ModelAndView shop() {
		return new ModelAndView("list");
	}
}
