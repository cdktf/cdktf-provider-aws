# `storagegatewayUploadBuffer` Submodule <a name="`storagegatewayUploadBuffer` Submodule" id="@cdktf/provider-aws.storagegatewayUploadBuffer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayUploadBuffer <a name="StoragegatewayUploadBuffer" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer aws_storagegateway_upload_buffer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_upload_buffer

storagegatewayUploadBuffer.StoragegatewayUploadBuffer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_arn: str,
  disk_id: str = None,
  disk_path: str = None,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.gatewayArn">gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#gateway_arn StoragegatewayUploadBuffer#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.diskId">disk_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#disk_id StoragegatewayUploadBuffer#disk_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.diskPath">disk_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#disk_path StoragegatewayUploadBuffer#disk_path}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#id StoragegatewayUploadBuffer#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.gatewayArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#gateway_arn StoragegatewayUploadBuffer#gateway_arn}.

---

##### `disk_id`<sup>Optional</sup> <a name="disk_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.diskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#disk_id StoragegatewayUploadBuffer#disk_id}.

---

##### `disk_path`<sup>Optional</sup> <a name="disk_path" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.diskPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#disk_path StoragegatewayUploadBuffer#disk_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#id StoragegatewayUploadBuffer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#region StoragegatewayUploadBuffer#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetDiskId">reset_disk_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetDiskPath">reset_disk_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_disk_id` <a name="reset_disk_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetDiskId"></a>

```python
def reset_disk_id() -> None
```

##### `reset_disk_path` <a name="reset_disk_path" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetDiskPath"></a>

```python
def reset_disk_path() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StoragegatewayUploadBuffer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_upload_buffer

storagegatewayUploadBuffer.StoragegatewayUploadBuffer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_upload_buffer

storagegatewayUploadBuffer.StoragegatewayUploadBuffer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_upload_buffer

storagegatewayUploadBuffer.StoragegatewayUploadBuffer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_upload_buffer

storagegatewayUploadBuffer.StoragegatewayUploadBuffer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StoragegatewayUploadBuffer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StoragegatewayUploadBuffer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StoragegatewayUploadBuffer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StoragegatewayUploadBuffer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskIdInput">disk_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskPathInput">disk_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.gatewayArnInput">gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskId">disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskPath">disk_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk_id_input`<sup>Optional</sup> <a name="disk_id_input" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskIdInput"></a>

```python
disk_id_input: str
```

- *Type:* str

---

##### `disk_path_input`<sup>Optional</sup> <a name="disk_path_input" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskPathInput"></a>

```python
disk_path_input: str
```

- *Type:* str

---

##### `gateway_arn_input`<sup>Optional</sup> <a name="gateway_arn_input" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.gatewayArnInput"></a>

```python
gateway_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `disk_id`<sup>Required</sup> <a name="disk_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskId"></a>

```python
disk_id: str
```

- *Type:* str

---

##### `disk_path`<sup>Required</sup> <a name="disk_path" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskPath"></a>

```python
disk_path: str
```

- *Type:* str

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayUploadBufferConfig <a name="StoragegatewayUploadBufferConfig" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_upload_buffer

storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_arn: str,
  disk_id: str = None,
  disk_path: str = None,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#gateway_arn StoragegatewayUploadBuffer#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.diskId">disk_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#disk_id StoragegatewayUploadBuffer#disk_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.diskPath">disk_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#disk_path StoragegatewayUploadBuffer#disk_path}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#id StoragegatewayUploadBuffer#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#gateway_arn StoragegatewayUploadBuffer#gateway_arn}.

---

##### `disk_id`<sup>Optional</sup> <a name="disk_id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.diskId"></a>

```python
disk_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#disk_id StoragegatewayUploadBuffer#disk_id}.

---

##### `disk_path`<sup>Optional</sup> <a name="disk_path" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.diskPath"></a>

```python
disk_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#disk_path StoragegatewayUploadBuffer#disk_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#id StoragegatewayUploadBuffer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_upload_buffer#region StoragegatewayUploadBuffer#region}

---



