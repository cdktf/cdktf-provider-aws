# `lbSslNegotiationPolicy` Submodule <a name="`lbSslNegotiationPolicy` Submodule" id="@cdktf/provider-aws.lbSslNegotiationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbSslNegotiationPolicy <a name="LbSslNegotiationPolicy" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy aws_lb_ssl_negotiation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_ssl_negotiation_policy

lbSslNegotiationPolicy.LbSslNegotiationPolicy(
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
  attribute: typing.Union[IResolvable, typing.List[LbSslNegotiationPolicyAttribute]] = None,
  id: str = None,
  triggers: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.lbPort">lb_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#lb_port LbSslNegotiationPolicy#lb_port}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.loadBalancer">load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#load_balancer LbSslNegotiationPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.attribute">attribute</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>]]</code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#id LbSslNegotiationPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#triggers LbSslNegotiationPolicy#triggers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lb_port`<sup>Required</sup> <a name="lb_port" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.lbPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#lb_port LbSslNegotiationPolicy#lb_port}.

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.loadBalancer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#load_balancer LbSslNegotiationPolicy#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.attribute"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>]]

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#attribute LbSslNegotiationPolicy#attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#id LbSslNegotiationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.triggers"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#triggers LbSslNegotiationPolicy#triggers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute">put_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetTriggers">reset_triggers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_attribute` <a name="put_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute"></a>

```python
def put_attribute(
  value: typing.Union[IResolvable, typing.List[LbSslNegotiationPolicyAttribute]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>]]

---

##### `reset_attribute` <a name="reset_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetTriggers"></a>

```python
def reset_triggers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lb_ssl_negotiation_policy

lbSslNegotiationPolicy.LbSslNegotiationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lb_ssl_negotiation_policy

lbSslNegotiationPolicy.LbSslNegotiationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lb_ssl_negotiation_policy

lbSslNegotiationPolicy.LbSslNegotiationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList">LbSslNegotiationPolicyAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attributeInput">attribute_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPortInput">lb_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancerInput">load_balancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggersInput">triggers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPort">lb_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancer">load_balancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attribute"></a>

```python
attribute: LbSslNegotiationPolicyAttributeList
```

- *Type:* <a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList">LbSslNegotiationPolicyAttributeList</a>

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attributeInput"></a>

```python
attribute_input: typing.Union[IResolvable, typing.List[LbSslNegotiationPolicyAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lb_port_input`<sup>Optional</sup> <a name="lb_port_input" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPortInput"></a>

```python
lb_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_balancer_input`<sup>Optional</sup> <a name="load_balancer_input" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancerInput"></a>

```python
load_balancer_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggersInput"></a>

```python
triggers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lb_port`<sup>Required</sup> <a name="lb_port" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPort"></a>

```python
lb_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancer"></a>

```python
load_balancer: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbSslNegotiationPolicyAttribute <a name="LbSslNegotiationPolicyAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_ssl_negotiation_policy

lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#value LbSslNegotiationPolicy#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#value LbSslNegotiationPolicy#value}.

---

### LbSslNegotiationPolicyConfig <a name="LbSslNegotiationPolicyConfig" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_ssl_negotiation_policy

lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig(
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
  attribute: typing.Union[IResolvable, typing.List[LbSslNegotiationPolicyAttribute]] = None,
  id: str = None,
  triggers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lbPort">lb_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#lb_port LbSslNegotiationPolicy#lb_port}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.loadBalancer">load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#load_balancer LbSslNegotiationPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.attribute">attribute</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>]]</code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#id LbSslNegotiationPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#triggers LbSslNegotiationPolicy#triggers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lb_port`<sup>Required</sup> <a name="lb_port" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lbPort"></a>

```python
lb_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#lb_port LbSslNegotiationPolicy#lb_port}.

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.loadBalancer"></a>

```python
load_balancer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#load_balancer LbSslNegotiationPolicy#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.attribute"></a>

```python
attribute: typing.Union[IResolvable, typing.List[LbSslNegotiationPolicyAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>]]

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#attribute LbSslNegotiationPolicy#attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#id LbSslNegotiationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#triggers LbSslNegotiationPolicy#triggers}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbSslNegotiationPolicyAttributeList <a name="LbSslNegotiationPolicyAttributeList" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_ssl_negotiation_policy

lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LbSslNegotiationPolicyAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LbSslNegotiationPolicyAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>]]

---


### LbSslNegotiationPolicyAttributeOutputReference <a name="LbSslNegotiationPolicyAttributeOutputReference" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_ssl_negotiation_policy

lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LbSslNegotiationPolicyAttribute, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>, cdktf.IResolvable]

---



