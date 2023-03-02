# `dataAwsAlbListener` Submodule <a name="`dataAwsAlbListener` Submodule" id="@cdktf/provider-aws.dataAwsAlbListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAlbListener <a name="DataAwsAlbListener" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb_listener aws_alb_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListener(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str = None,
  id: str = None,
  load_balancer_arn: str = None,
  port: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsAlbListenerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#arn DataAwsAlbListener#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#id DataAwsAlbListener#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#load_balancer_arn DataAwsAlbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#port DataAwsAlbListener#port}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#tags DataAwsAlbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts">DataAwsAlbListenerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#arn DataAwsAlbListener#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#id DataAwsAlbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer_arn`<sup>Optional</sup> <a name="load_balancer_arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.loadBalancerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#load_balancer_arn DataAwsAlbListener#load_balancer_arn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#port DataAwsAlbListener#port}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#tags DataAwsAlbListener#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts">DataAwsAlbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#timeouts DataAwsAlbListener#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetLoadBalancerArn">reset_load_balancer_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#read DataAwsAlbListener#read}.

---

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_load_balancer_arn` <a name="reset_load_balancer_arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetLoadBalancerArn"></a>

```python
def reset_load_balancer_arn() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListener.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListener.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.alpnPolicy">alpn_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.defaultAction">default_action</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList">DataAwsAlbListenerDefaultActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.sslPolicy">ssl_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference">DataAwsAlbListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.loadBalancerArnInput">load_balancer_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts">DataAwsAlbListenerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `alpn_policy`<sup>Required</sup> <a name="alpn_policy" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.alpnPolicy"></a>

```python
alpn_policy: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.defaultAction"></a>

```python
default_action: DataAwsAlbListenerDefaultActionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList">DataAwsAlbListenerDefaultActionList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `ssl_policy`<sup>Required</sup> <a name="ssl_policy" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.sslPolicy"></a>

```python
ssl_policy: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.timeouts"></a>

```python
timeouts: DataAwsAlbListenerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference">DataAwsAlbListenerTimeoutsOutputReference</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_arn_input`<sup>Optional</sup> <a name="load_balancer_arn_input" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.loadBalancerArnInput"></a>

```python
load_balancer_arn_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsAlbListenerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts">DataAwsAlbListenerTimeouts</a>, cdktf.IResolvable]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAlbListenerConfig <a name="DataAwsAlbListenerConfig" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str = None,
  id: str = None,
  load_balancer_arn: str = None,
  port: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsAlbListenerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#arn DataAwsAlbListener#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#id DataAwsAlbListener#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#load_balancer_arn DataAwsAlbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#port DataAwsAlbListener#port}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#tags DataAwsAlbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts">DataAwsAlbListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#arn DataAwsAlbListener#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#id DataAwsAlbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer_arn`<sup>Optional</sup> <a name="load_balancer_arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#load_balancer_arn DataAwsAlbListener#load_balancer_arn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#port DataAwsAlbListener#port}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#tags DataAwsAlbListener#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.timeouts"></a>

```python
timeouts: DataAwsAlbListenerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts">DataAwsAlbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#timeouts DataAwsAlbListener#timeouts}

---

### DataAwsAlbListenerDefaultAction <a name="DataAwsAlbListenerDefaultAction" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultAction()
```


### DataAwsAlbListenerDefaultActionAuthenticateCognito <a name="DataAwsAlbListenerDefaultActionAuthenticateCognito" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognito.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognito()
```


### DataAwsAlbListenerDefaultActionAuthenticateOidc <a name="DataAwsAlbListenerDefaultActionAuthenticateOidc" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidc()
```


### DataAwsAlbListenerDefaultActionFixedResponse <a name="DataAwsAlbListenerDefaultActionFixedResponse" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponse()
```


### DataAwsAlbListenerDefaultActionForward <a name="DataAwsAlbListenerDefaultActionForward" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForward.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionForward()
```


### DataAwsAlbListenerDefaultActionForwardStickiness <a name="DataAwsAlbListenerDefaultActionForwardStickiness" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickiness.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickiness()
```


### DataAwsAlbListenerDefaultActionForwardTargetGroup <a name="DataAwsAlbListenerDefaultActionForwardTargetGroup" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroup()
```


### DataAwsAlbListenerDefaultActionRedirect <a name="DataAwsAlbListenerDefaultActionRedirect" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirect.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirect()
```


### DataAwsAlbListenerTimeouts <a name="DataAwsAlbListenerTimeouts" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#read DataAwsAlbListener#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#read DataAwsAlbListener#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAlbListenerDefaultActionAuthenticateCognitoList <a name="DataAwsAlbListenerDefaultActionAuthenticateCognitoList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference <a name="DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId">user_pool_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognito">DataAwsAlbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: StringMap
```

- *Type:* cdktf.StringMap

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

---

##### `user_pool_client_id`<sup>Required</sup> <a name="user_pool_client_id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```python
user_pool_client_id: str
```

- *Type:* str

---

##### `user_pool_domain`<sup>Required</sup> <a name="user_pool_domain" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAlbListenerDefaultActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognito">DataAwsAlbListenerDefaultActionAuthenticateCognito</a>

---


### DataAwsAlbListenerDefaultActionAuthenticateOidcList <a name="DataAwsAlbListenerDefaultActionAuthenticateOidcList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference <a name="DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidc">DataAwsAlbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: StringMap
```

- *Type:* cdktf.StringMap

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAlbListenerDefaultActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidc">DataAwsAlbListenerDefaultActionAuthenticateOidc</a>

---


### DataAwsAlbListenerDefaultActionFixedResponseList <a name="DataAwsAlbListenerDefaultActionFixedResponseList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAlbListenerDefaultActionFixedResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAlbListenerDefaultActionFixedResponseOutputReference <a name="DataAwsAlbListenerDefaultActionFixedResponseOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.messageBody">message_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponse">DataAwsAlbListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `message_body`<sup>Required</sup> <a name="message_body" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAlbListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponse">DataAwsAlbListenerDefaultActionFixedResponse</a>

---


### DataAwsAlbListenerDefaultActionForwardList <a name="DataAwsAlbListenerDefaultActionForwardList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAlbListenerDefaultActionForwardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAlbListenerDefaultActionForwardOutputReference <a name="DataAwsAlbListenerDefaultActionForwardOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList">DataAwsAlbListenerDefaultActionForwardStickinessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.targetGroup">target_group</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList">DataAwsAlbListenerDefaultActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForward">DataAwsAlbListenerDefaultActionForward</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.stickiness"></a>

```python
stickiness: DataAwsAlbListenerDefaultActionForwardStickinessList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList">DataAwsAlbListenerDefaultActionForwardStickinessList</a>

---

##### `target_group`<sup>Required</sup> <a name="target_group" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.targetGroup"></a>

```python
target_group: DataAwsAlbListenerDefaultActionForwardTargetGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList">DataAwsAlbListenerDefaultActionForwardTargetGroupList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAlbListenerDefaultActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForward">DataAwsAlbListenerDefaultActionForward</a>

---


### DataAwsAlbListenerDefaultActionForwardStickinessList <a name="DataAwsAlbListenerDefaultActionForwardStickinessList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAlbListenerDefaultActionForwardStickinessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAlbListenerDefaultActionForwardStickinessOutputReference <a name="DataAwsAlbListenerDefaultActionForwardStickinessOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickiness">DataAwsAlbListenerDefaultActionForwardStickiness</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAlbListenerDefaultActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickiness">DataAwsAlbListenerDefaultActionForwardStickiness</a>

---


### DataAwsAlbListenerDefaultActionForwardTargetGroupList <a name="DataAwsAlbListenerDefaultActionForwardTargetGroupList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference <a name="DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroup">DataAwsAlbListenerDefaultActionForwardTargetGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAlbListenerDefaultActionForwardTargetGroup
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroup">DataAwsAlbListenerDefaultActionForwardTargetGroup</a>

---


### DataAwsAlbListenerDefaultActionList <a name="DataAwsAlbListenerDefaultActionList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAlbListenerDefaultActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAlbListenerDefaultActionOutputReference <a name="DataAwsAlbListenerDefaultActionOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.authenticateCognito">authenticate_cognito</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList">DataAwsAlbListenerDefaultActionAuthenticateCognitoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.authenticateOidc">authenticate_oidc</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList">DataAwsAlbListenerDefaultActionAuthenticateOidcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.fixedResponse">fixed_response</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList">DataAwsAlbListenerDefaultActionFixedResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList">DataAwsAlbListenerDefaultActionForwardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList">DataAwsAlbListenerDefaultActionRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultAction">DataAwsAlbListenerDefaultAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authenticate_cognito`<sup>Required</sup> <a name="authenticate_cognito" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.authenticateCognito"></a>

```python
authenticate_cognito: DataAwsAlbListenerDefaultActionAuthenticateCognitoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList">DataAwsAlbListenerDefaultActionAuthenticateCognitoList</a>

---

##### `authenticate_oidc`<sup>Required</sup> <a name="authenticate_oidc" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.authenticateOidc"></a>

```python
authenticate_oidc: DataAwsAlbListenerDefaultActionAuthenticateOidcList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList">DataAwsAlbListenerDefaultActionAuthenticateOidcList</a>

---

##### `fixed_response`<sup>Required</sup> <a name="fixed_response" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.fixedResponse"></a>

```python
fixed_response: DataAwsAlbListenerDefaultActionFixedResponseList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList">DataAwsAlbListenerDefaultActionFixedResponseList</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.forward"></a>

```python
forward: DataAwsAlbListenerDefaultActionForwardList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList">DataAwsAlbListenerDefaultActionForwardList</a>

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.redirect"></a>

```python
redirect: DataAwsAlbListenerDefaultActionRedirectList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList">DataAwsAlbListenerDefaultActionRedirectList</a>

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAlbListenerDefaultAction
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultAction">DataAwsAlbListenerDefaultAction</a>

---


### DataAwsAlbListenerDefaultActionRedirectList <a name="DataAwsAlbListenerDefaultActionRedirectList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAlbListenerDefaultActionRedirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAlbListenerDefaultActionRedirectOutputReference <a name="DataAwsAlbListenerDefaultActionRedirectOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirect">DataAwsAlbListenerDefaultActionRedirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAlbListenerDefaultActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirect">DataAwsAlbListenerDefaultActionRedirect</a>

---


### DataAwsAlbListenerTimeoutsOutputReference <a name="DataAwsAlbListenerTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_alb_listener

dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts">DataAwsAlbListenerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsAlbListenerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts">DataAwsAlbListenerTimeouts</a>, cdktf.IResolvable]

---



