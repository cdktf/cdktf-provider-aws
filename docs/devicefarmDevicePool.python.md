# `devicefarmDevicePool` Submodule <a name="`devicefarmDevicePool` Submodule" id="@cdktf/provider-aws.devicefarmDevicePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmDevicePool <a name="DevicefarmDevicePool" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool aws_devicefarm_device_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_device_pool

devicefarmDevicePool.DevicefarmDevicePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_arn: str,
  rule: typing.Union[IResolvable, typing.List[DevicefarmDevicePoolRule]],
  description: str = None,
  id: str = None,
  max_devices: typing.Union[int, float] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#name DevicefarmDevicePool#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.projectArn">project_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#project_arn DevicefarmDevicePool#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#description DevicefarmDevicePool#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#id DevicefarmDevicePool#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.maxDevices">max_devices</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#max_devices DevicefarmDevicePool#max_devices}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#tags DevicefarmDevicePool#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#tags_all DevicefarmDevicePool#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#name DevicefarmDevicePool#name}.

---

##### `project_arn`<sup>Required</sup> <a name="project_arn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.projectArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#project_arn DevicefarmDevicePool#project_arn}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#rule DevicefarmDevicePool#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#description DevicefarmDevicePool#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#id DevicefarmDevicePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_devices`<sup>Optional</sup> <a name="max_devices" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.maxDevices"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#max_devices DevicefarmDevicePool#max_devices}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#region DevicefarmDevicePool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#tags DevicefarmDevicePool#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#tags_all DevicefarmDevicePool#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetMaxDevices">reset_max_devices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[DevicefarmDevicePoolRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_devices` <a name="reset_max_devices" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetMaxDevices"></a>

```python
def reset_max_devices() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DevicefarmDevicePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_device_pool

devicefarmDevicePool.DevicefarmDevicePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_device_pool

devicefarmDevicePool.DevicefarmDevicePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_device_pool

devicefarmDevicePool.DevicefarmDevicePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_device_pool

devicefarmDevicePool.DevicefarmDevicePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DevicefarmDevicePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevicefarmDevicePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevicefarmDevicePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevicefarmDevicePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList">DevicefarmDevicePoolRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevicesInput">max_devices_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArnInput">project_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevices">max_devices</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArn">project_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.rule"></a>

```python
rule: DevicefarmDevicePoolRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList">DevicefarmDevicePoolRuleList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_devices_input`<sup>Optional</sup> <a name="max_devices_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevicesInput"></a>

```python
max_devices_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_arn_input`<sup>Optional</sup> <a name="project_arn_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArnInput"></a>

```python
project_arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[DevicefarmDevicePoolRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_devices`<sup>Required</sup> <a name="max_devices" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.maxDevices"></a>

```python
max_devices: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_arn`<sup>Required</sup> <a name="project_arn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.projectArn"></a>

```python
project_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmDevicePoolConfig <a name="DevicefarmDevicePoolConfig" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_device_pool

devicefarmDevicePool.DevicefarmDevicePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_arn: str,
  rule: typing.Union[IResolvable, typing.List[DevicefarmDevicePoolRule]],
  description: str = None,
  id: str = None,
  max_devices: typing.Union[int, float] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#name DevicefarmDevicePool#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.projectArn">project_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#project_arn DevicefarmDevicePool#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#description DevicefarmDevicePool#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#id DevicefarmDevicePool#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.maxDevices">max_devices</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#max_devices DevicefarmDevicePool#max_devices}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#tags DevicefarmDevicePool#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#tags_all DevicefarmDevicePool#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#name DevicefarmDevicePool#name}.

---

##### `project_arn`<sup>Required</sup> <a name="project_arn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.projectArn"></a>

```python
project_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#project_arn DevicefarmDevicePool#project_arn}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[DevicefarmDevicePoolRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#rule DevicefarmDevicePool#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#description DevicefarmDevicePool#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#id DevicefarmDevicePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_devices`<sup>Optional</sup> <a name="max_devices" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.maxDevices"></a>

```python
max_devices: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#max_devices DevicefarmDevicePool#max_devices}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#region DevicefarmDevicePool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#tags DevicefarmDevicePool#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#tags_all DevicefarmDevicePool#tags_all}.

---

### DevicefarmDevicePoolRule <a name="DevicefarmDevicePoolRule" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_device_pool

devicefarmDevicePool.DevicefarmDevicePoolRule(
  attribute: str = None,
  operator: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#attribute DevicefarmDevicePool#attribute}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#operator DevicefarmDevicePool#operator}. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#value DevicefarmDevicePool#value}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#attribute DevicefarmDevicePool#attribute}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#operator DevicefarmDevicePool#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_device_pool#value DevicefarmDevicePool#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevicefarmDevicePoolRuleList <a name="DevicefarmDevicePoolRuleList" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_device_pool

devicefarmDevicePool.DevicefarmDevicePoolRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevicefarmDevicePoolRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevicefarmDevicePoolRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>]]

---


### DevicefarmDevicePoolRuleOutputReference <a name="DevicefarmDevicePoolRuleOutputReference" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_device_pool

devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevicefarmDevicePoolRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.devicefarmDevicePool.DevicefarmDevicePoolRule">DevicefarmDevicePoolRule</a>]

---



