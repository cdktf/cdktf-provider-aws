# `opsworksPermission` Submodule <a name="`opsworksPermission` Submodule" id="@cdktf/provider-aws.opsworksPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksPermission <a name="OpsworksPermission" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission aws_opsworks_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_permission

opsworksPermission.OpsworksPermission(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stack_id: str,
  user_arn: str,
  allow_ssh: typing.Union[bool, IResolvable] = None,
  allow_sudo: typing.Union[bool, IResolvable] = None,
  id: str = None,
  level: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#stack_id OpsworksPermission#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.userArn">user_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#user_arn OpsworksPermission#user_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.allowSsh">allow_ssh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_ssh OpsworksPermission#allow_ssh}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.allowSudo">allow_sudo</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_sudo OpsworksPermission#allow_sudo}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#id OpsworksPermission#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#level OpsworksPermission#level}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.stackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#stack_id OpsworksPermission#stack_id}.

---

##### `user_arn`<sup>Required</sup> <a name="user_arn" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.userArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#user_arn OpsworksPermission#user_arn}.

---

##### `allow_ssh`<sup>Optional</sup> <a name="allow_ssh" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.allowSsh"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_ssh OpsworksPermission#allow_ssh}.

---

##### `allow_sudo`<sup>Optional</sup> <a name="allow_sudo" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.allowSudo"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_sudo OpsworksPermission#allow_sudo}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#id OpsworksPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.level"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#level OpsworksPermission#level}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetAllowSsh">reset_allow_ssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetAllowSudo">reset_allow_sudo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetLevel">reset_level</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allow_ssh` <a name="reset_allow_ssh" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetAllowSsh"></a>

```python
def reset_allow_ssh() -> None
```

##### `reset_allow_sudo` <a name="reset_allow_sudo" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetAllowSudo"></a>

```python
def reset_allow_sudo() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_level` <a name="reset_level" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetLevel"></a>

```python
def reset_level() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_permission

opsworksPermission.OpsworksPermission.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_permission

opsworksPermission.OpsworksPermission.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_permission

opsworksPermission.OpsworksPermission.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSshInput">allow_ssh_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSudoInput">allow_sudo_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.stackIdInput">stack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.userArnInput">user_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSsh">allow_ssh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSudo">allow_sudo</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.userArn">user_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_ssh_input`<sup>Optional</sup> <a name="allow_ssh_input" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSshInput"></a>

```python
allow_ssh_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_sudo_input`<sup>Optional</sup> <a name="allow_sudo_input" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSudoInput"></a>

```python
allow_sudo_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `stack_id_input`<sup>Optional</sup> <a name="stack_id_input" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.stackIdInput"></a>

```python
stack_id_input: str
```

- *Type:* str

---

##### `user_arn_input`<sup>Optional</sup> <a name="user_arn_input" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.userArnInput"></a>

```python
user_arn_input: str
```

- *Type:* str

---

##### `allow_ssh`<sup>Required</sup> <a name="allow_ssh" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSsh"></a>

```python
allow_ssh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_sudo`<sup>Required</sup> <a name="allow_sudo" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSudo"></a>

```python
allow_sudo: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

##### `user_arn`<sup>Required</sup> <a name="user_arn" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.userArn"></a>

```python
user_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksPermissionConfig <a name="OpsworksPermissionConfig" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_permission

opsworksPermission.OpsworksPermissionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stack_id: str,
  user_arn: str,
  allow_ssh: typing.Union[bool, IResolvable] = None,
  allow_sudo: typing.Union[bool, IResolvable] = None,
  id: str = None,
  level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#stack_id OpsworksPermission#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.userArn">user_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#user_arn OpsworksPermission#user_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.allowSsh">allow_ssh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_ssh OpsworksPermission#allow_ssh}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.allowSudo">allow_sudo</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_sudo OpsworksPermission#allow_sudo}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#id OpsworksPermission#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#level OpsworksPermission#level}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#stack_id OpsworksPermission#stack_id}.

---

##### `user_arn`<sup>Required</sup> <a name="user_arn" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.userArn"></a>

```python
user_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#user_arn OpsworksPermission#user_arn}.

---

##### `allow_ssh`<sup>Optional</sup> <a name="allow_ssh" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.allowSsh"></a>

```python
allow_ssh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_ssh OpsworksPermission#allow_ssh}.

---

##### `allow_sudo`<sup>Optional</sup> <a name="allow_sudo" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.allowSudo"></a>

```python
allow_sudo: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_sudo OpsworksPermission#allow_sudo}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#id OpsworksPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#level OpsworksPermission#level}.

---



