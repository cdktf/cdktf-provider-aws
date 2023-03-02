# `lbCookieStickinessPolicy` Submodule <a name="`lbCookieStickinessPolicy` Submodule" id="@cdktf/provider-aws.lbCookieStickinessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbCookieStickinessPolicy <a name="LbCookieStickinessPolicy" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy aws_lb_cookie_stickiness_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_cookie_stickiness_policy

lbCookieStickinessPolicy.LbCookieStickinessPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lb_port: typing.Union[int, float],
  load_balancer: str,
  name: str,
  cookie_expiration_period: typing.Union[int, float] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.lbPort">lb_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#lb_port LbCookieStickinessPolicy#lb_port}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.loadBalancer">load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#load_balancer LbCookieStickinessPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#name LbCookieStickinessPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.cookieExpirationPeriod">cookie_expiration_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#cookie_expiration_period LbCookieStickinessPolicy#cookie_expiration_period}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#id LbCookieStickinessPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lb_port`<sup>Required</sup> <a name="lb_port" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.lbPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#lb_port LbCookieStickinessPolicy#lb_port}.

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.loadBalancer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#load_balancer LbCookieStickinessPolicy#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#name LbCookieStickinessPolicy#name}.

---

##### `cookie_expiration_period`<sup>Optional</sup> <a name="cookie_expiration_period" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.cookieExpirationPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#cookie_expiration_period LbCookieStickinessPolicy#cookie_expiration_period}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#id LbCookieStickinessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetCookieExpirationPeriod">reset_cookie_expiration_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cookie_expiration_period` <a name="reset_cookie_expiration_period" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetCookieExpirationPeriod"></a>

```python
def reset_cookie_expiration_period() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lb_cookie_stickiness_policy

lbCookieStickinessPolicy.LbCookieStickinessPolicy.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lb_cookie_stickiness_policy

lbCookieStickinessPolicy.LbCookieStickinessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lb_cookie_stickiness_policy

lbCookieStickinessPolicy.LbCookieStickinessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cookieExpirationPeriodInput">cookie_expiration_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lbPortInput">lb_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.loadBalancerInput">load_balancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cookieExpirationPeriod">cookie_expiration_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lbPort">lb_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.loadBalancer">load_balancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cookie_expiration_period_input`<sup>Optional</sup> <a name="cookie_expiration_period_input" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cookieExpirationPeriodInput"></a>

```python
cookie_expiration_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lb_port_input`<sup>Optional</sup> <a name="lb_port_input" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lbPortInput"></a>

```python
lb_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_balancer_input`<sup>Optional</sup> <a name="load_balancer_input" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.loadBalancerInput"></a>

```python
load_balancer_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `cookie_expiration_period`<sup>Required</sup> <a name="cookie_expiration_period" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cookieExpirationPeriod"></a>

```python
cookie_expiration_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lb_port`<sup>Required</sup> <a name="lb_port" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lbPort"></a>

```python
lb_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.loadBalancer"></a>

```python
load_balancer: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbCookieStickinessPolicyConfig <a name="LbCookieStickinessPolicyConfig" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_cookie_stickiness_policy

lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lb_port: typing.Union[int, float],
  load_balancer: str,
  name: str,
  cookie_expiration_period: typing.Union[int, float] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.lbPort">lb_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#lb_port LbCookieStickinessPolicy#lb_port}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.loadBalancer">load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#load_balancer LbCookieStickinessPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#name LbCookieStickinessPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.cookieExpirationPeriod">cookie_expiration_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#cookie_expiration_period LbCookieStickinessPolicy#cookie_expiration_period}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#id LbCookieStickinessPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lb_port`<sup>Required</sup> <a name="lb_port" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.lbPort"></a>

```python
lb_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#lb_port LbCookieStickinessPolicy#lb_port}.

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.loadBalancer"></a>

```python
load_balancer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#load_balancer LbCookieStickinessPolicy#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#name LbCookieStickinessPolicy#name}.

---

##### `cookie_expiration_period`<sup>Optional</sup> <a name="cookie_expiration_period" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.cookieExpirationPeriod"></a>

```python
cookie_expiration_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#cookie_expiration_period LbCookieStickinessPolicy#cookie_expiration_period}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#id LbCookieStickinessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



