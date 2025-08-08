# `cloudwatchLogDeliveryDestination` Submodule <a name="`cloudwatchLogDeliveryDestination` Submodule" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogDeliveryDestination <a name="CloudwatchLogDeliveryDestination" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination aws_cloudwatch_log_delivery_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery_destination

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination(
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
  delivery_destination_configuration: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration]] = None,
  output_format: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#name CloudwatchLogDeliveryDestination#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.deliveryDestinationConfiguration">delivery_destination_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>]]</code> | delivery_destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.outputFormat">output_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#output_format CloudwatchLogDeliveryDestination#output_format}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#tags CloudwatchLogDeliveryDestination#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#name CloudwatchLogDeliveryDestination#name}.

---

##### `delivery_destination_configuration`<sup>Optional</sup> <a name="delivery_destination_configuration" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.deliveryDestinationConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>]]

delivery_destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#delivery_destination_configuration CloudwatchLogDeliveryDestination#delivery_destination_configuration}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.outputFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#output_format CloudwatchLogDeliveryDestination#output_format}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#region CloudwatchLogDeliveryDestination#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#tags CloudwatchLogDeliveryDestination#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.putDeliveryDestinationConfiguration">put_delivery_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetDeliveryDestinationConfiguration">reset_delivery_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_delivery_destination_configuration` <a name="put_delivery_destination_configuration" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.putDeliveryDestinationConfiguration"></a>

```python
def put_delivery_destination_configuration(
  value: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.putDeliveryDestinationConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>]]

---

##### `reset_delivery_destination_configuration` <a name="reset_delivery_destination_configuration" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetDeliveryDestinationConfiguration"></a>

```python
def reset_delivery_destination_configuration() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudwatchLogDeliveryDestination resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery_destination

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery_destination

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery_destination

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery_destination

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudwatchLogDeliveryDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchLogDeliveryDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchLogDeliveryDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchLogDeliveryDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationConfiguration">delivery_destination_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList">CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationType">delivery_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationConfigurationInput">delivery_destination_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `delivery_destination_configuration`<sup>Required</sup> <a name="delivery_destination_configuration" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationConfiguration"></a>

```python
delivery_destination_configuration: CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList">CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList</a>

---

##### `delivery_destination_type`<sup>Required</sup> <a name="delivery_destination_type" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationType"></a>

```python
delivery_destination_type: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `delivery_destination_configuration_input`<sup>Optional</sup> <a name="delivery_destination_configuration_input" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.deliveryDestinationConfigurationInput"></a>

```python
delivery_destination_configuration_input: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogDeliveryDestinationConfig <a name="CloudwatchLogDeliveryDestinationConfig" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery_destination

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  delivery_destination_configuration: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration]] = None,
  output_format: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#name CloudwatchLogDeliveryDestination#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.deliveryDestinationConfiguration">delivery_destination_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>]]</code> | delivery_destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.outputFormat">output_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#output_format CloudwatchLogDeliveryDestination#output_format}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#tags CloudwatchLogDeliveryDestination#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#name CloudwatchLogDeliveryDestination#name}.

---

##### `delivery_destination_configuration`<sup>Optional</sup> <a name="delivery_destination_configuration" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.deliveryDestinationConfiguration"></a>

```python
delivery_destination_configuration: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>]]

delivery_destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#delivery_destination_configuration CloudwatchLogDeliveryDestination#delivery_destination_configuration}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#output_format CloudwatchLogDeliveryDestination#output_format}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#region CloudwatchLogDeliveryDestination#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#tags CloudwatchLogDeliveryDestination#tags}.

---

### CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration <a name="CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery_destination

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration(
  destination_resource_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration.property.destinationResourceArn">destination_resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#destination_resource_arn CloudwatchLogDeliveryDestination#destination_resource_arn}. |

---

##### `destination_resource_arn`<sup>Required</sup> <a name="destination_resource_arn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration.property.destinationResourceArn"></a>

```python
destination_resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery_destination#destination_resource_arn CloudwatchLogDeliveryDestination#destination_resource_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList <a name="CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery_destination

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>]]

---


### CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference <a name="CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery_destination

cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.destinationResourceArnInput">destination_resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.destinationResourceArn">destination_resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_resource_arn_input`<sup>Optional</sup> <a name="destination_resource_arn_input" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.destinationResourceArnInput"></a>

```python
destination_resource_arn_input: str
```

- *Type:* str

---

##### `destination_resource_arn`<sup>Required</sup> <a name="destination_resource_arn" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.destinationResourceArn"></a>

```python
destination_resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cloudwatchLogDeliveryDestination.CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration">CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration</a>]

---



