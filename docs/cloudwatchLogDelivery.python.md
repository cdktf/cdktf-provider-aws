# `cloudwatchLogDelivery` Submodule <a name="`cloudwatchLogDelivery` Submodule" id="@cdktf/provider-aws.cloudwatchLogDelivery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogDelivery <a name="CloudwatchLogDelivery" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery aws_cloudwatch_log_delivery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery

cloudwatchLogDelivery.CloudwatchLogDelivery(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delivery_destination_arn: str,
  delivery_source_name: str,
  field_delimiter: str = None,
  record_fields: typing.List[str] = None,
  s3_delivery_configuration: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryS3DeliveryConfiguration]] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.deliveryDestinationArn">delivery_destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.deliverySourceName">delivery_source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.recordFields">record_fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.s3DeliveryConfiguration">s3_delivery_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delivery_destination_arn`<sup>Required</sup> <a name="delivery_destination_arn" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.deliveryDestinationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}.

---

##### `delivery_source_name`<sup>Required</sup> <a name="delivery_source_name" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.deliverySourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}.

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.fieldDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}.

---

##### `record_fields`<sup>Optional</sup> <a name="record_fields" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.recordFields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}.

---

##### `s3_delivery_configuration`<sup>Optional</sup> <a name="s3_delivery_configuration" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.s3DeliveryConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.putS3DeliveryConfiguration">put_s3_delivery_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetRecordFields">reset_record_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetS3DeliveryConfiguration">reset_s3_delivery_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_s3_delivery_configuration` <a name="put_s3_delivery_configuration" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.putS3DeliveryConfiguration"></a>

```python
def put_s3_delivery_configuration(
  value: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryS3DeliveryConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.putS3DeliveryConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>]]

---

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_record_fields` <a name="reset_record_fields" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetRecordFields"></a>

```python
def reset_record_fields() -> None
```

##### `reset_s3_delivery_configuration` <a name="reset_s3_delivery_configuration" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetS3DeliveryConfiguration"></a>

```python
def reset_s3_delivery_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudwatchLogDelivery resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery

cloudwatchLogDelivery.CloudwatchLogDelivery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery

cloudwatchLogDelivery.CloudwatchLogDelivery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery

cloudwatchLogDelivery.CloudwatchLogDelivery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery

cloudwatchLogDelivery.CloudwatchLogDelivery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudwatchLogDelivery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchLogDelivery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchLogDelivery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchLogDelivery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfiguration">s3_delivery_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList">CloudwatchLogDeliveryS3DeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArnInput">delivery_destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceNameInput">delivery_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFieldsInput">record_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfigurationInput">s3_delivery_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArn">delivery_destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceName">delivery_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFields">record_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `s3_delivery_configuration`<sup>Required</sup> <a name="s3_delivery_configuration" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfiguration"></a>

```python
s3_delivery_configuration: CloudwatchLogDeliveryS3DeliveryConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList">CloudwatchLogDeliveryS3DeliveryConfigurationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `delivery_destination_arn_input`<sup>Optional</sup> <a name="delivery_destination_arn_input" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArnInput"></a>

```python
delivery_destination_arn_input: str
```

- *Type:* str

---

##### `delivery_source_name_input`<sup>Optional</sup> <a name="delivery_source_name_input" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceNameInput"></a>

```python
delivery_source_name_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `record_fields_input`<sup>Optional</sup> <a name="record_fields_input" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFieldsInput"></a>

```python
record_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_delivery_configuration_input`<sup>Optional</sup> <a name="s3_delivery_configuration_input" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfigurationInput"></a>

```python
s3_delivery_configuration_input: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryS3DeliveryConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delivery_destination_arn`<sup>Required</sup> <a name="delivery_destination_arn" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArn"></a>

```python
delivery_destination_arn: str
```

- *Type:* str

---

##### `delivery_source_name`<sup>Required</sup> <a name="delivery_source_name" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceName"></a>

```python
delivery_source_name: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `record_fields`<sup>Required</sup> <a name="record_fields" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFields"></a>

```python
record_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogDeliveryConfig <a name="CloudwatchLogDeliveryConfig" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery

cloudwatchLogDelivery.CloudwatchLogDeliveryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delivery_destination_arn: str,
  delivery_source_name: str,
  field_delimiter: str = None,
  record_fields: typing.List[str] = None,
  s3_delivery_configuration: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryS3DeliveryConfiguration]] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliveryDestinationArn">delivery_destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliverySourceName">delivery_source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.recordFields">record_fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.s3DeliveryConfiguration">s3_delivery_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delivery_destination_arn`<sup>Required</sup> <a name="delivery_destination_arn" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliveryDestinationArn"></a>

```python
delivery_destination_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}.

---

##### `delivery_source_name`<sup>Required</sup> <a name="delivery_source_name" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliverySourceName"></a>

```python
delivery_source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}.

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}.

---

##### `record_fields`<sup>Optional</sup> <a name="record_fields" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.recordFields"></a>

```python
record_fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}.

---

##### `s3_delivery_configuration`<sup>Optional</sup> <a name="s3_delivery_configuration" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.s3DeliveryConfiguration"></a>

```python
s3_delivery_configuration: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryS3DeliveryConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}.

---

### CloudwatchLogDeliveryS3DeliveryConfiguration <a name="CloudwatchLogDeliveryS3DeliveryConfiguration" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery

cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration(
  enable_hive_compatible_path: typing.Union[bool, IResolvable] = None,
  suffix_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.enableHiveCompatiblePath">enable_hive_compatible_path</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#enable_hive_compatible_path CloudwatchLogDelivery#enable_hive_compatible_path}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.suffixPath">suffix_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#suffix_path CloudwatchLogDelivery#suffix_path}. |

---

##### `enable_hive_compatible_path`<sup>Optional</sup> <a name="enable_hive_compatible_path" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.enableHiveCompatiblePath"></a>

```python
enable_hive_compatible_path: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#enable_hive_compatible_path CloudwatchLogDelivery#enable_hive_compatible_path}.

---

##### `suffix_path`<sup>Optional</sup> <a name="suffix_path" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.suffixPath"></a>

```python
suffix_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_delivery#suffix_path CloudwatchLogDelivery#suffix_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogDeliveryS3DeliveryConfigurationList <a name="CloudwatchLogDeliveryS3DeliveryConfigurationList" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery

cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchLogDeliveryS3DeliveryConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>]]

---


### CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference <a name="CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_delivery

cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetEnableHiveCompatiblePath">reset_enable_hive_compatible_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetSuffixPath">reset_suffix_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_hive_compatible_path` <a name="reset_enable_hive_compatible_path" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetEnableHiveCompatiblePath"></a>

```python
def reset_enable_hive_compatible_path() -> None
```

##### `reset_suffix_path` <a name="reset_suffix_path" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetSuffixPath"></a>

```python
def reset_suffix_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePathInput">enable_hive_compatible_path_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPathInput">suffix_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePath">enable_hive_compatible_path</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPath">suffix_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_hive_compatible_path_input`<sup>Optional</sup> <a name="enable_hive_compatible_path_input" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePathInput"></a>

```python
enable_hive_compatible_path_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suffix_path_input`<sup>Optional</sup> <a name="suffix_path_input" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPathInput"></a>

```python
suffix_path_input: str
```

- *Type:* str

---

##### `enable_hive_compatible_path`<sup>Required</sup> <a name="enable_hive_compatible_path" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePath"></a>

```python
enable_hive_compatible_path: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suffix_path`<sup>Required</sup> <a name="suffix_path" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPath"></a>

```python
suffix_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudwatchLogDeliveryS3DeliveryConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>]

---



