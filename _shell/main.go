package main

import (
	"fmt"
	"net/http"
)

// 启动一个静态服务
func main() {
	prot := "9988"

	HostPath := "0.0.0.0:" + prot

	OpenHost := "http://localhost:" + prot

	fmt.Println(OpenHost)

	http.ListenAndServe(HostPath, http.FileServer(http.Dir("dist")))
}
