# `sagemakerDevice` Submodule <a name="`sagemakerDevice` Submodule" id="@cdktf/provider-aws.sagemakerDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerDevice <a name="SagemakerDevice" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device aws_sagemaker_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_device

sagemakerDevice.SagemakerDevice(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  device: SagemakerDeviceDevice,
  device_fleet_name: str,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.device">device</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice">SagemakerDeviceDevice</a></code> | device block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.deviceFleetName">device_fleet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#device_fleet_name SagemakerDevice#device_fleet_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#id SagemakerDevice#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.device"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice">SagemakerDeviceDevice</a>

device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#device SagemakerDevice#device}

---

##### `device_fleet_name`<sup>Required</sup> <a name="device_fleet_name" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.deviceFleetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#device_fleet_name SagemakerDevice#device_fleet_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#id SagemakerDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#region SagemakerDevice#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.putDevice">put_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_device` <a name="put_device" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.putDevice"></a>

```python
def put_device(
  device_name: str,
  description: str = None,
  iot_thing_name: str = None
) -> None
```

###### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.putDevice.parameter.deviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#device_name SagemakerDevice#device_name}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.putDevice.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#description SagemakerDevice#description}.

---

###### `iot_thing_name`<sup>Optional</sup> <a name="iot_thing_name" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.putDevice.parameter.iotThingName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#iot_thing_name SagemakerDevice#iot_thing_name}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SagemakerDevice resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_device

sagemakerDevice.SagemakerDevice.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_device

sagemakerDevice.SagemakerDevice.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_device

sagemakerDevice.SagemakerDevice.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_device

sagemakerDevice.SagemakerDevice.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SagemakerDevice resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerDevice to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.device">device</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference">SagemakerDeviceDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.deviceFleetNameInput">device_fleet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.deviceInput">device_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice">SagemakerDeviceDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.deviceFleetName">device_fleet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.device"></a>

```python
device: SagemakerDeviceDeviceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference">SagemakerDeviceDeviceOutputReference</a>

---

##### `device_fleet_name_input`<sup>Optional</sup> <a name="device_fleet_name_input" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.deviceFleetNameInput"></a>

```python
device_fleet_name_input: str
```

- *Type:* str

---

##### `device_input`<sup>Optional</sup> <a name="device_input" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.deviceInput"></a>

```python
device_input: SagemakerDeviceDevice
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice">SagemakerDeviceDevice</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `device_fleet_name`<sup>Required</sup> <a name="device_fleet_name" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.deviceFleetName"></a>

```python
device_fleet_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDevice.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerDeviceConfig <a name="SagemakerDeviceConfig" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_device

sagemakerDevice.SagemakerDeviceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  device: SagemakerDeviceDevice,
  device_fleet_name: str,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.device">device</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice">SagemakerDeviceDevice</a></code> | device block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.deviceFleetName">device_fleet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#device_fleet_name SagemakerDevice#device_fleet_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#id SagemakerDevice#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.device"></a>

```python
device: SagemakerDeviceDevice
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice">SagemakerDeviceDevice</a>

device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#device SagemakerDevice#device}

---

##### `device_fleet_name`<sup>Required</sup> <a name="device_fleet_name" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.deviceFleetName"></a>

```python
device_fleet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#device_fleet_name SagemakerDevice#device_fleet_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#id SagemakerDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#region SagemakerDevice#region}

---

### SagemakerDeviceDevice <a name="SagemakerDeviceDevice" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_device

sagemakerDevice.SagemakerDeviceDevice(
  device_name: str,
  description: str = None,
  iot_thing_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#device_name SagemakerDevice#device_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#description SagemakerDevice#description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice.property.iotThingName">iot_thing_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#iot_thing_name SagemakerDevice#iot_thing_name}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#device_name SagemakerDevice#device_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#description SagemakerDevice#description}.

---

##### `iot_thing_name`<sup>Optional</sup> <a name="iot_thing_name" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice.property.iotThingName"></a>

```python
iot_thing_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_device#iot_thing_name SagemakerDevice#iot_thing_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerDeviceDeviceOutputReference <a name="SagemakerDeviceDeviceOutputReference" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_device

sagemakerDevice.SagemakerDeviceDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.resetIotThingName">reset_iot_thing_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_iot_thing_name` <a name="reset_iot_thing_name" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.resetIotThingName"></a>

```python
def reset_iot_thing_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.iotThingNameInput">iot_thing_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.iotThingName">iot_thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice">SagemakerDeviceDevice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `iot_thing_name_input`<sup>Optional</sup> <a name="iot_thing_name_input" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.iotThingNameInput"></a>

```python
iot_thing_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `iot_thing_name`<sup>Required</sup> <a name="iot_thing_name" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.iotThingName"></a>

```python
iot_thing_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDeviceOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerDeviceDevice
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDevice.SagemakerDeviceDevice">SagemakerDeviceDevice</a>

---



