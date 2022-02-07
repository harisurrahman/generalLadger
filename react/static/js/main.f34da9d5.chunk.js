(this["webpackJsonperp-react"] = this["webpackJsonperp-react"] || []).push([
  [0],
  {
    163: function (e, t, a) {},
    223: function (e, t, a) {},
    244: function (e, t, a) {},
    270: function (e, t, a) {
      "use strict";
      a.r(t);
      var c = a(0),
        n = a.n(c),
        r = a(52),
        s = a.n(r),
        l = a(5),
        o = Object(c.createContext)({ authed: !1, dr: 0, cr: 0 }),
        i = Object(c.createContext)({ dr: 0, cr: 0, entries: [], date: null }),
        j = a(4),
        d = a(327),
        b = a(308),
        u = a(331),
        O = a(325),
        x = a(336),
        h = a(19),
        g = a(73),
        p = a(47),
        m = a.n(p),
        f = a(1);
      var v = function () {
          var e = Object(h.g)(),
            t = Object(c.useContext)(o),
            a = t.appData,
            n = t.setAppData;
          return Object(f.jsx)(d.a, {
            variant: "dark",
            bg: "dark",
            expand: "lg",
            children: Object(f.jsxs)(b.a, {
              children: [
                Object(f.jsx)(d.a.Brand, {
                  href: "#home",
                  children: Object(f.jsx)(x.a, {
                    src: "/images/logo.png",
                    variant: "square",
                  }),
                }),
                Object(f.jsx)(d.a.Toggle, {
                  "aria-controls": "basic-navbar-nav",
                }),
                Object(f.jsx)(d.a.Collapse, {
                  id: "basic-navbar-nav",
                  children: Object(f.jsxs)(u.a, {
                    className: "me-auto",
                    children: [
                      Object(f.jsx)(u.a.Link, {
                        as: g.b,
                        to: "/ladger-entry",
                        children: "General Ladger",
                      }),
                      Object(f.jsx)(u.a.Link, {
                        as: g.b,
                        to: "/dashboard",
                        children: "Dashboard",
                      }),
                      Object(f.jsx)(u.a.Link, {
                        as: g.b,
                        to: "/messages",
                        children: "Message",
                      }),
                      Object(f.jsxs)(O.a, {
                        title: "Dropdown",
                        id: "basic-nav-dropdown",
                        children: [
                          Object(f.jsx)(O.a.Item, {
                            onClick: function () {
                              m.a.remove("Authed"),
                                n(
                                  Object(j.a)(
                                    Object(j.a)({}, a),
                                    {},
                                    { authed: !1 }
                                  )
                                ),
                                e("/");
                            },
                            children: "Logout",
                          }),
                          Object(f.jsx)(O.a.Item, {
                            href: "#action/3.2",
                            children: "Another action",
                          }),
                          Object(f.jsx)(O.a.Item, {
                            href: "#action/3.3",
                            children: "Something",
                          }),
                          Object(f.jsx)(O.a.Divider, {}),
                          Object(f.jsx)(O.a.Item, {
                            href: "#action/3.4",
                            children: "Separated link",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        N = function () {
          return m.a.get("Authed");
        },
        y =
          (a(222),
          function (e) {
            var t = N();
            return Object(f.jsxs)(f.Fragment, {
              children: [t ? Object(f.jsx)(v, {}) : null, e.children],
            });
          }),
        C = function (e) {
          var t,
            a = e.children,
            c = !1;
          m.a.get("Authed") &&
            (c =
              null !== (t = JSON.parse(m.a.get("Authed"))) &&
              void 0 !== t &&
              t);
          return c ? a : Object(f.jsx)(h.a, { to: "/", replace: !0 });
        },
        S = function () {
          var e = N();
          return Object(f.jsx)(b.a, {
            children: Object(f.jsxs)("div", {
              children: ["You are logged - ", e ? "Yes" : "No"],
            }),
          });
        },
        w = function () {
          return Object(f.jsx)("div", {
            children: Object(f.jsx)("button", {
              type: "submit",
              name: "logout",
              className: "btn btn-danger",
              onClick: function (e) {
                e.preventDefault(), m.a.remove("Authed");
              },
              children: "LOGOUT",
            }),
          });
        },
        A = function () {
          var e = N();
          return Object(f.jsx)(b.a, {
            children: Object(f.jsxs)("h1", {
              children: [
                e ? "Yes" : "No",
                " I am ",
                e ? null : " not",
                "authenticated",
              ],
            }),
          });
        },
        I = (a(223), a(81)),
        k = a.n(I);
      (k.a.defaults.withCredentials = !0),
        (k.a.defaults.baseURL = "http://test2.com/");
      var F = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "",
      };
      k.a.defaults.headers.common = F;
      var D = function () {
          if (localStorage.getItem("userInfo")) {
            var e = JSON.parse(localStorage.getItem("userInfo"));
            return "Bearer ".concat(e.token);
          }
          return !1;
        },
        L = a(333),
        _ = a(337),
        P = a(320),
        T = function () {
          var e = Object(h.g)(),
            t = Object(h.f)().state,
            a = Object(c.useContext)(o),
            n = a.appData,
            r = a.setAppData,
            s = Object(c.useState)({ email: "", password: "" }),
            i = Object(l.a)(s, 2),
            d = i[0],
            b = i[1],
            u = Object(c.useState)(!1),
            O = Object(l.a)(u, 2),
            x = O[0],
            g = O[1],
            p = Object(c.useState)(""),
            v = Object(l.a)(p, 2),
            N = v[0],
            y =
              (v[1],
              function (e) {
                b(
                  Object(j.a)(Object(j.a)({}, d), {}, { email: e.target.value })
                ),
                  g(
                    d.email.match(
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    )
                  );
              });
          return (
            Object(c.useEffect)(function () {
              n.authed &&
                e(
                  (null === t || void 0 === t ? void 0 : t.path) || "/messages"
                );
            }, []),
            Object(f.jsx)("div", {
              className: "login-container",
              children: Object(f.jsxs)("div", {
                className: "login",
                children: [
                  Object(f.jsxs)("div", {
                    className: "text-center header",
                    children: [
                      Object(f.jsx)("h1", { children: "jainaSOFT" }),
                      Object(f.jsx)("p", { children: N }),
                    ],
                  }),
                  Object(f.jsxs)("form", {
                    action: "",
                    children: [
                      Object(f.jsx)("div", {
                        className: "rows form-group",
                        children: Object(f.jsx)(L.a, {
                          type: "text",
                          className: "form-control",
                          style: { color: x ? "black" : "red" },
                          name: "email",
                          label: "Email Address",
                          onChange: y,
                          onBlur: y,
                        }),
                      }),
                      Object(f.jsx)("div", {
                        className: "rows form-group",
                        children: Object(f.jsx)("div", {
                          children: Object(f.jsx)(L.a, {
                            type: "password",
                            className: "form-control",
                            name: "password",
                            label: "Passoword",
                            onChange: function (e) {
                              b(
                                Object(j.a)(
                                  Object(j.a)({}, d),
                                  {},
                                  { password: e.target.value }
                                )
                              );
                            },
                          }),
                        }),
                      }),
                      Object(f.jsx)("div", {
                        className: "rows text-center",
                        children: Object(f.jsx)(_.a, {
                          endIcon: Object(f.jsx)(P.a, {}),
                          type: "button",
                          variant: "contained",
                          color: "primary",
                          size: "large",
                          onClick: function (t) {
                            t.preventDefault();
                            var a = {};
                            (a.email = d.email),
                              (a.password = d.password),
                              (function (e) {
                                return new Promise(function (t, a) {
                                  k.a
                                    .get("sanctum/csrf-cookie")
                                    .then(function (a) {
                                      k.a
                                        .post("api/login", e)
                                        .then(function (e) {
                                          localStorage.setItem(
                                            "userInfo",
                                            JSON.stringify(e.data)
                                          ),
                                            m.a.set(
                                              "Authed",
                                              JSON.stringify(e.data)
                                            ),
                                            t(e);
                                        });
                                    })
                                    .catch(function (e) {
                                      console.log(e), a(e);
                                    });
                                });
                              })(a).then(function (t) {
                                r(
                                  Object(j.a)(
                                    Object(j.a)({}, n),
                                    {},
                                    { authed: !0 }
                                  )
                                ),
                                  localStorage.setItem(
                                    "userInfo",
                                    JSON.stringify(t.data)
                                  ),
                                  m.a.set("Authed", JSON.stringify(t.data)),
                                  e("/messages");
                              });
                          },
                          disabled: !x,
                          children: "Send",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        J = a(22),
        z = a(321),
        R = a(191),
        B = a(192),
        E = a(328),
        G =
          (a(163),
          function (e) {
            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(e);
          }),
        M = a(194),
        U = function (e) {
          var t = e.entries,
            a = e.setEntries,
            n = Object(c.useContext)(i),
            r = n.jdata,
            s = n.setJdata;
          return Object(f.jsx)(f.Fragment, {
            children: t.map(function (e, c) {
              return Object(f.jsxs)(
                z.a,
                {
                  className: "row-brs",
                  children: [
                    Object(f.jsx)(R.a, {
                      xs: !0,
                      lg: "1",
                      className: "col-border",
                      children: c + 1,
                    }),
                    Object(f.jsx)(R.a, {
                      xs: !0,
                      lg: "2",
                      className: "col-border",
                      children: e.gl_account,
                    }),
                    Object(f.jsx)(R.a, {
                      xs: !0,
                      lg: "4",
                      className: "col-border",
                      children: e.gl_name,
                    }),
                    Object(f.jsx)(R.a, {
                      xs: !0,
                      lg: "2",
                      className: "col-border text-end",
                      children: G(e.debit),
                    }),
                    Object(f.jsx)(R.a, {
                      xs: !0,
                      lg: "2",
                      className: "col-border text-end",
                      children: G(e.credit),
                    }),
                    Object(f.jsx)(R.a, {
                      xs: !0,
                      lg: "1",
                      className: "col-border",
                      children: Object(f.jsx)(_.a, {
                        size: "lg",
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        onClick: function () {
                          !(function (e) {
                            var c = Object(j.a)({}, r);
                            s(
                              Object(j.a)(
                                Object(j.a)({}, c),
                                {},
                                {
                                  dr: c.dr - t[e].debit,
                                  cr: c.cr - t[e].credit,
                                }
                              )
                            );
                            var n = Object(J.a)(t);
                            n.splice(e, 1), a(n);
                          })(c);
                        },
                        children: Object(f.jsx)(M.a, {}),
                      }),
                    }),
                  ],
                },
                c
              );
            }),
          });
        },
        W =
          (a(244),
          function () {
            return Object(f.jsxs)(z.a, {
              className: "row-bg",
              children: [
                Object(f.jsx)(R.a, {
                  className: "col-border",
                  xs: !0,
                  lg: "1",
                  children: "#",
                }),
                Object(f.jsx)(R.a, {
                  xs: !0,
                  lg: "2",
                  className: "col-border",
                  children: "GL Code",
                }),
                Object(f.jsx)(R.a, {
                  xs: !0,
                  lg: "4",
                  className: "col-border",
                  children: "GL Description",
                }),
                Object(f.jsx)(R.a, {
                  xs: !0,
                  lg: "2",
                  className: "col-border",
                  children: "Debit",
                }),
                Object(f.jsx)(R.a, {
                  xs: !0,
                  lg: "2",
                  className: "col-border",
                  children: "Credit",
                }),
                Object(f.jsx)(R.a, {
                  xs: !0,
                  lg: "1",
                  className: "col-border",
                  style: { borderRight: "none" },
                }),
              ],
            });
          }),
        Y = a(322),
        q = function (e) {
          var t = e.entries,
            a = Object(c.useContext)(i),
            n = a.jdata,
            r = a.setJdata,
            s = n.dr === n.cr,
            l = Object(c.useRef)("");
          return Object(f.jsxs)(z.a, {
            className: "row-brs",
            style: { background: "azure" },
            children: [
              Object(f.jsx)(R.a, {
                lg: "5",
                className: "col-border",
                children: Object(f.jsx)(_.a, {
                  size: "lg",
                  variant: "contained",
                  color: "primary",
                  startIcon: Object(f.jsx)(Y.a, {}),
                  style: {
                    width: "100%",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                  },
                  children: "Upload Files",
                }),
              }),
              Object(f.jsx)(R.a, {
                lg: "2",
                className: "col-border",
                children: Object(f.jsx)(L.a, { label: "Check Number", ref: l }),
              }),
              Object(f.jsx)(R.a, {
                className: "col-border fw-bold",
                lg: "2",
                style: s ? { color: "green" } : { color: "red" },
                children: Object(f.jsx)(L.a, {
                  label: "Debit",
                  style: { textAlign: "right" },
                  value: G(n.dr),
                  inputProps: { readOnly: !0, style: { textAlign: "right" } },
                }),
              }),
              Object(f.jsx)(R.a, {
                lg: "2",
                className: "col-border fw-bold",
                style: s ? { color: "green" } : { color: "red" },
                children: Object(f.jsx)(L.a, {
                  label: "Credit",
                  style: { textAlign: "right" },
                  value: G(n.cr),
                  inputProps: { readOnly: !0, style: { textAlign: "right" } },
                }),
              }),
              Object(f.jsx)(R.a, {
                xs: !0,
                lg: "1",
                className: "col-border",
                style: { borderRight: "none", paddingTop: "10px" },
                children: Object(f.jsx)(_.a, {
                  onClick: function () {
                    r(
                      Object(j.a)(
                        Object(j.a)({}, n),
                        {},
                        { postInprogress: !0 }
                      )
                    ),
                      (function (e) {
                        return (
                          console.log(e),
                          (F.Authorization = D()),
                          new Promise(function (t, a) {
                            k.a.post("/api/journal", e).then(function (e) {
                              console.log(e), t(e);
                            });
                          })
                        );
                      })({ trans: t, trDate: n.date }).then(function (e) {
                        r(
                          Object(j.a)(
                            Object(j.a)({}, n),
                            {},
                            { postInprogress: !1 }
                          )
                        );
                      });
                  },
                  disabled:
                    n.dr !== n.cr ||
                    0 === parseFloat(n.dr) ||
                    0 === parseFloat(n.cr),
                  size: "lg",
                  title: "Save",
                  variant: "contained",
                  color: "primary",
                  sx: {
                    width: "100%",
                    paddingTop: "14px",
                    paddingBottom: "14px",
                  },
                  children: Object(f.jsx)(Y.a, {}),
                }),
              }),
            ],
          });
        },
        H = function (e) {
          var t = Object(c.useRef)(""),
            a = e.data.children.props.entries;
          return Object(f.jsxs)(f.Fragment, {
            children: [
              Object(f.jsx)(z.a, {
                className: "row-brs rows",
                children: Object(f.jsx)(R.a, {
                  xs: !0,
                  lg: "12",
                  className: "",
                  children: Object(f.jsx)(L.a, {
                    multiline: !0,
                    rows: 2,
                    ref: t,
                    label: "Sort Description",
                    fullWidth: !0,
                    style: { fontSize: "10px", background: "#fff" },
                  }),
                }),
              }),
              Object(f.jsx)(q, { entries: a }),
            ],
          });
        },
        V = function (e) {
          return Object(f.jsxs)(f.Fragment, {
            children: [
              Object(f.jsx)(z.a, { style: { minHeight: "10px" } }),
              Object(f.jsx)(W, {}),
              e.children,
              Object(f.jsx)(H, { data: e }),
            ],
          });
        },
        $ = a(323),
        K = a(334),
        Q = a(335),
        X = a(324),
        Z = a(332),
        ee = a(326),
        te = a(330),
        ae = a(189),
        ce = function (e) {
          var t = e.message,
            a = e.clrMsg;
          return Object(f.jsxs)(te.a, {
            show: "" !== t,
            centered: !0,
            children: [
              Object(f.jsx)(te.a.Header, {
                closeButton: !0,
                onClick: function () {
                  a("");
                },
                children: Object(f.jsx)(te.a.Title, { children: "Error !!" }),
              }),
              Object(f.jsx)(te.a.Body, {
                className: "text-center",
                style: { color: "red" },
                children: Object(f.jsxs)("p", { children: [t, "."] }),
              }),
              Object(f.jsx)(te.a.Footer, {
                children: Object(f.jsx)(ae.a, {
                  variant: "primary",
                  onClick: function () {
                    a("");
                  },
                  children: "Close",
                }),
              }),
            ],
          });
        },
        ne = a(193),
        re = function () {
          var e = Object(c.useState)([]),
            t = Object(l.a)(e, 2),
            a = t[0],
            n = t[1],
            r = Object(c.useRef)(0),
            s = Object(c.useRef)(""),
            o = Object(c.useRef)("2021-12-31"),
            d = Object(c.useState)([]),
            u = Object(l.a)(d, 2),
            O = u[0],
            x = u[1],
            h = Object(c.useState)(!1),
            g = Object(l.a)(h, 2),
            p = g[0],
            m = g[1],
            v = Object(c.useContext)(i),
            N = v.jdata,
            y = v.setJdata,
            C = Object(c.useState)({}),
            S = Object(l.a)(C, 2),
            w = S[0],
            A = S[1],
            I = Object(c.useState)("---"),
            P = Object(l.a)(I, 2),
            T = P[0],
            G = P[1],
            M = Object(c.useState)(""),
            W = Object(l.a)(M, 2),
            Y = W[0],
            q = W[1],
            H = Object(c.useState)(!0),
            te = Object(l.a)(H, 2),
            ae = te[0],
            re = te[1],
            se = Object(c.useState)("debit"),
            le = Object(l.a)(se, 2),
            oe = le[0],
            ie = le[1],
            je = Object(c.useState)({ shrink: !1 }),
            de = Object(l.a)(je, 2),
            be = de[0],
            ue = de[1];
          return (
            Object(c.useEffect)(function () {
              ((F.Authorization = D()),
              new Promise(function (e, t) {
                k.a
                  .get("api/journal", null)
                  .then(function (t) {
                    e(t.data[0].ChartOfAc);
                  })
                  .catch(function (e) {
                    t(e);
                  });
              })).then(function (e) {
                n(
                  [].concat(
                    [
                      {
                        gl_account: "---",
                        gl_name: "Select Account",
                        gl_group: "",
                      },
                    ],
                    Object(J.a)(e)
                  )
                ),
                  (o.current.value = (function () {
                    var e = new Date(),
                      t = e.getFullYear(),
                      a = ("0" + e.getMonth() + 1).slice(-2),
                      c = ("0" + e.getDate()).slice(-2);
                    return "".concat(t, "-").concat(a, "-").concat(c);
                  })());
              });
            }, []),
            Object(f.jsxs)(f.Fragment, {
              children: [
                Object(f.jsx)(ce, { message: Y, clrMsg: q }),
                Object(f.jsx)(b.a, {
                  style: {
                    padding: "20px",
                    border: "1px solid silver",
                    background: "azure",
                  },
                  className: "mt-3",
                  children: Object(f.jsxs)(z.a, {
                    className: "g-0",
                    children: [
                      Object(f.jsx)(R.a, {
                        children: Object(f.jsx)(B.a, {
                          controlId: "floatingInput",
                          label: "Date",
                          children: Object(f.jsx)(E.a.Control, {
                            ref: o,
                            type: "date",
                            placeholder: "Date",
                            onChange: function () {
                              y(
                                Object(j.a)(
                                  Object(j.a)({}, N),
                                  {},
                                  { date: o.current.value }
                                )
                              );
                            },
                            disabled: p,
                          }),
                        }),
                      }),
                      Object(f.jsx)(R.a, {
                        xs: !0,
                        lg: "2",
                        children: Object(f.jsxs)(K.a, {
                          fullWidth: !0,
                          children: [
                            Object(f.jsx)(Q.a, {
                              id: "select-label",
                              children: "TR Type",
                            }),
                            Object(f.jsxs)(X.a, {
                              id: "simple-select",
                              value: oe,
                              onChange: function (e) {
                                ie(e.target.value);
                              },
                              children: [
                                Object(f.jsx)(Z.a, {
                                  value: "debit",
                                  children: "Debit",
                                }),
                                Object(f.jsx)(Z.a, {
                                  value: "credit",
                                  children: "Credit",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(f.jsx)(R.a, {
                        xs: !0,
                        lg: "2",
                        children: Object(f.jsx)(L.a, {
                          inputRef: s,
                          type: "number",
                          label: "GL-Code",
                          InputLabelProps: be,
                          onChange: function (e) {
                            var t = !1;
                            "" !== e.target.value &&
                              (a.forEach(function (c, n) {
                                c.gl_account === e.target.value &&
                                  c.gl_account.length > 1 &&
                                  (A(a[n]), G(c.gl_name), (t = !0));
                              }),
                              t || A(a[0]));
                          },
                        }),
                      }),
                      Object(f.jsx)(R.a, {
                        xs: !0,
                        lg: "3",
                        children: Object(f.jsx)(ee.a, {
                          value: w,
                          options: a,
                          onChange: function (e, t) {
                            null !== t &&
                              ("---" !== t.gl_account
                                ? (ue({ shrink: !0 }),
                                  (s.current.value = t.gl_account),
                                  G(t.gl_name),
                                  A(t))
                                : (s.current.value = "")),
                              "---" !== s && parseFloat(r.current.value) > 0
                                ? re(!1)
                                : re(!0);
                          },
                          getOptionLabel: function (e) {
                            return e.gl_name || "";
                          },
                          isOptionEqualToValue: function (e, t) {
                            return e.id === t.id;
                          },
                          renderInput: function (e) {
                            return Object(f.jsx)(
                              L.a,
                              Object(j.a)(
                                Object(j.a)({}, e),
                                {},
                                { label: "Select Account" }
                              )
                            );
                          },
                        }),
                      }),
                      Object(f.jsx)(R.a, {
                        xs: !0,
                        lg: "2",
                        children: Object(f.jsx)(L.a, {
                          inputRef: r,
                          type: "number",
                          defaultValue: 0,
                          onChange: function () {
                            void 0 !== w.gl_name &&
                            parseFloat(r.current.value) > 0
                              ? re(!1)
                              : re(!0);
                          },
                          label: "Amount",
                          inputProps: { style: { textAlign: "right" } },
                        }),
                      }),
                      Object(f.jsx)(R.a, {
                        xs: !0,
                        lg: "1",
                        children: Object(f.jsx)(_.a, {
                          disabled: ae,
                          sx: { paddingTop: "14px", paddingBottom: "14px" },
                          fullWidth: !0,
                          size: "lg",
                          variant: "contained",
                          color: "primary",
                          onClick: function (e) {
                            if (
                              (e.preventDefault(),
                              0 !== parseFloat(r.current.value) && "---" !== T)
                            ) {
                              m(!(O.length > 0));
                              var t = "debit" === oe ? r.current.value : 0,
                                a = "credit" === oe ? r.current.value : 0,
                                c = {
                                  gl_account: s.current.value,
                                  gl_name: T,
                                  debit: parseFloat(t),
                                  credit: parseFloat(a),
                                };
                              x([].concat(Object(J.a)(O), [c])),
                                y(
                                  Object(j.a)(
                                    Object(j.a)({}, N),
                                    {},
                                    {
                                      dr: parseFloat(N.dr) + parseFloat(t),
                                      cr: parseFloat(N.cr) + parseFloat(a),
                                      date: o.current.value,
                                    }
                                  )
                                );
                            } else q("Account and Amount is required");
                          },
                          children: Object(f.jsx)($.a, {}),
                        }),
                      }),
                    ],
                  }),
                }),
                Object(f.jsx)(b.a, {
                  children: Object(f.jsx)(z.a, {
                    children: Object(f.jsx)(R.a, {
                      lg: "12",
                      className: "mt-1 text-center",
                      children: Object(f.jsx)(ne.PropagateLoader, {
                        loading: N.postInprogress,
                      }),
                    }),
                  }),
                }),
                Object(f.jsx)(b.a, {
                  className: "mt-1 journal-container",
                  children: Object(f.jsx)(V, {
                    children: Object(f.jsx)(U, { entries: O, setEntries: x }),
                  }),
                }),
              ],
            })
          );
        },
        se = function () {
          var e = Object(c.useState)({
              dr: 0,
              cr: 0,
              dialog: !1,
              entries: [],
              date: null,
              postInprogress: !1,
            }),
            t = Object(l.a)(e, 2),
            a = t[0],
            n = t[1];
          return Object(f.jsx)(i.Provider, {
            value: { jdata: a, setJdata: n },
            children: Object(f.jsx)(re, {}),
          });
        },
        le = function () {
          return Object(f.jsxs)(h.d, {
            children: [
              Object(f.jsx)(h.b, { path: "/", element: Object(f.jsx)(T, {}) }),
              Object(f.jsx)(h.b, {
                path: "/dashboard",
                element: Object(f.jsx)(C, { children: Object(f.jsx)(S, {}) }),
              }),
              Object(f.jsx)(h.b, {
                path: "/ladger-entry",
                element: Object(f.jsx)(C, { children: Object(f.jsx)(se, {}) }),
              }),
              Object(f.jsx)(h.b, {
                path: "/messages",
                element: Object(f.jsx)(C, { children: Object(f.jsx)(A, {}) }),
              }),
              Object(f.jsx)(h.b, {
                path: "/logout",
                element: Object(f.jsx)(C, { children: Object(f.jsx)(w, {}) }),
              }),
              Object(f.jsx)(h.b, {
                path: "*",
                element: Object(f.jsx)("h1", {
                  children: "404 Page not found",
                }),
              }),
            ],
          });
        };
      var oe = function () {
          var e = Object(c.useState)({ authed: !1 }),
            t = Object(l.a)(e, 2),
            a = t[0],
            n = t[1];
          return Object(f.jsx)(o.Provider, {
            value: { appData: a, setAppData: n },
            children: Object(f.jsx)(y, { children: Object(f.jsx)(le, {}) }),
          });
        },
        ie = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 340))
              .then(function (t) {
                var a = t.getCLS,
                  c = t.getFID,
                  n = t.getFCP,
                  r = t.getLCP,
                  s = t.getTTFB;
                a(e), c(e), n(e), r(e), s(e);
              });
        };
      s.a.render(
        Object(f.jsx)(n.a.StrictMode, {
          children: Object(f.jsx)(g.a, { children: Object(f.jsx)(oe, {}) }),
        }),
        document.getElementById("root")
      ),
        ie();
    },
  },
  [[270, 1, 2]],
]);
//# sourceMappingURL=main.f34da9d5.chunk.js.map
