# `autoscalingTrafficSourceAttachment` Submodule <a name="`autoscalingTrafficSourceAttachment` Submodule" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingTrafficSourceAttachment <a name="AutoscalingTrafficSourceAttachment" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment aws_autoscaling_traffic_source_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_traffic_source_attachment

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling_group_name: str,
  id: str = None,
  timeouts: AutoscalingTrafficSourceAttachmentTimeouts = None,
  traffic_source: AutoscalingTrafficSourceAttachmentTrafficSource = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.trafficSource">traffic_source</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | traffic_source block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.autoscalingGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#timeouts AutoscalingTrafficSourceAttachment#timeouts}

---

##### `traffic_source`<sup>Optional</sup> <a name="traffic_source" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.trafficSource"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

traffic_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#traffic_source AutoscalingTrafficSourceAttachment#traffic_source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource">put_traffic_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTrafficSource">reset_traffic_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#create AutoscalingTrafficSourceAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#delete AutoscalingTrafficSourceAttachment#delete}.

---

##### `put_traffic_source` <a name="put_traffic_source" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource"></a>

```python
def put_traffic_source(
  identifier: str,
  type: str
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#identifier AutoscalingTrafficSourceAttachment#identifier}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#type AutoscalingTrafficSourceAttachment#type}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_traffic_source` <a name="reset_traffic_source" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTrafficSource"></a>

```python
def reset_traffic_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutoscalingTrafficSourceAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_traffic_source_attachment

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_traffic_source_attachment

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_traffic_source_attachment

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_traffic_source_attachment

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutoscalingTrafficSourceAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutoscalingTrafficSourceAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutoscalingTrafficSourceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutoscalingTrafficSourceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference">AutoscalingTrafficSourceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSource">traffic_source</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference">AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupNameInput">autoscaling_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSourceInput">traffic_source_input</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeouts"></a>

```python
timeouts: AutoscalingTrafficSourceAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference">AutoscalingTrafficSourceAttachmentTimeoutsOutputReference</a>

---

##### `traffic_source`<sup>Required</sup> <a name="traffic_source" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSource"></a>

```python
traffic_source: AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference">AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference</a>

---

##### `autoscaling_group_name_input`<sup>Optional</sup> <a name="autoscaling_group_name_input" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupNameInput"></a>

```python
autoscaling_group_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AutoscalingTrafficSourceAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>]

---

##### `traffic_source_input`<sup>Optional</sup> <a name="traffic_source_input" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSourceInput"></a>

```python
traffic_source_input: AutoscalingTrafficSourceAttachmentTrafficSource
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupName"></a>

```python
autoscaling_group_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingTrafficSourceAttachmentConfig <a name="AutoscalingTrafficSourceAttachmentConfig" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_traffic_source_attachment

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling_group_name: str,
  id: str = None,
  timeouts: AutoscalingTrafficSourceAttachmentTimeouts = None,
  traffic_source: AutoscalingTrafficSourceAttachmentTrafficSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.trafficSource">traffic_source</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | traffic_source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.autoscalingGroupName"></a>

```python
autoscaling_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.timeouts"></a>

```python
timeouts: AutoscalingTrafficSourceAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#timeouts AutoscalingTrafficSourceAttachment#timeouts}

---

##### `traffic_source`<sup>Optional</sup> <a name="traffic_source" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.trafficSource"></a>

```python
traffic_source: AutoscalingTrafficSourceAttachmentTrafficSource
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

traffic_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#traffic_source AutoscalingTrafficSourceAttachment#traffic_source}

---

### AutoscalingTrafficSourceAttachmentTimeouts <a name="AutoscalingTrafficSourceAttachmentTimeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_traffic_source_attachment

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#create AutoscalingTrafficSourceAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#delete AutoscalingTrafficSourceAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#create AutoscalingTrafficSourceAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#delete AutoscalingTrafficSourceAttachment#delete}.

---

### AutoscalingTrafficSourceAttachmentTrafficSource <a name="AutoscalingTrafficSourceAttachmentTrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_traffic_source_attachment

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource(
  identifier: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#identifier AutoscalingTrafficSourceAttachment#identifier}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#type AutoscalingTrafficSourceAttachment#type}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#identifier AutoscalingTrafficSourceAttachment#identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/autoscaling_traffic_source_attachment#type AutoscalingTrafficSourceAttachment#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingTrafficSourceAttachmentTimeoutsOutputReference <a name="AutoscalingTrafficSourceAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_traffic_source_attachment

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutoscalingTrafficSourceAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>]

---


### AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference <a name="AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_traffic_source_attachment

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingTrafficSourceAttachmentTrafficSource
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

---



