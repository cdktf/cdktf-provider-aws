# `osisPipeline` Submodule <a name="`osisPipeline` Submodule" id="@cdktf/provider-aws.osisPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsisPipeline <a name="OsisPipeline" id="@cdktf/provider-aws.osisPipeline.OsisPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline aws_osis_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipeline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  max_units: typing.Union[int, float],
  min_units: typing.Union[int, float],
  pipeline_configuration_body: str,
  pipeline_name: str,
  buffer_options: typing.Union[IResolvable, typing.List[OsisPipelineBufferOptions]] = None,
  encryption_at_rest_options: typing.Union[IResolvable, typing.List[OsisPipelineEncryptionAtRestOptions]] = None,
  log_publishing_options: typing.Union[IResolvable, typing.List[OsisPipelineLogPublishingOptions]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: OsisPipelineTimeouts = None,
  vpc_options: typing.Union[IResolvable, typing.List[OsisPipelineVpcOptions]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.maxUnits">max_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.minUnits">min_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.pipelineConfigurationBody">pipeline_configuration_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.pipelineName">pipeline_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.bufferOptions">buffer_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>]]</code> | buffer_options block. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.encryptionAtRestOptions">encryption_at_rest_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>]]</code> | encryption_at_rest_options block. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.logPublishingOptions">log_publishing_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>]]</code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#tags OsisPipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts">OsisPipelineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.vpcOptions">vpc_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>]]</code> | vpc_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_units`<sup>Required</sup> <a name="max_units" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.maxUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}.

---

##### `min_units`<sup>Required</sup> <a name="min_units" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.minUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}.

---

##### `pipeline_configuration_body`<sup>Required</sup> <a name="pipeline_configuration_body" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.pipelineConfigurationBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}.

---

##### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.pipelineName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}.

---

##### `buffer_options`<sup>Optional</sup> <a name="buffer_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.bufferOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>]]

buffer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#buffer_options OsisPipeline#buffer_options}

---

##### `encryption_at_rest_options`<sup>Optional</sup> <a name="encryption_at_rest_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.encryptionAtRestOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>]]

encryption_at_rest_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#encryption_at_rest_options OsisPipeline#encryption_at_rest_options}

---

##### `log_publishing_options`<sup>Optional</sup> <a name="log_publishing_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.logPublishingOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>]]

log_publishing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#log_publishing_options OsisPipeline#log_publishing_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#tags OsisPipeline#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts">OsisPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#timeouts OsisPipeline#timeouts}

---

##### `vpc_options`<sup>Optional</sup> <a name="vpc_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.Initializer.parameter.vpcOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>]]

vpc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#vpc_options OsisPipeline#vpc_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.putBufferOptions">put_buffer_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.putEncryptionAtRestOptions">put_encryption_at_rest_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.putLogPublishingOptions">put_log_publishing_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.putVpcOptions">put_vpc_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.resetBufferOptions">reset_buffer_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.resetEncryptionAtRestOptions">reset_encryption_at_rest_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.resetLogPublishingOptions">reset_log_publishing_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.resetVpcOptions">reset_vpc_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_buffer_options` <a name="put_buffer_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putBufferOptions"></a>

```python
def put_buffer_options(
  value: typing.Union[IResolvable, typing.List[OsisPipelineBufferOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putBufferOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>]]

---

##### `put_encryption_at_rest_options` <a name="put_encryption_at_rest_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putEncryptionAtRestOptions"></a>

```python
def put_encryption_at_rest_options(
  value: typing.Union[IResolvable, typing.List[OsisPipelineEncryptionAtRestOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putEncryptionAtRestOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>]]

---

##### `put_log_publishing_options` <a name="put_log_publishing_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putLogPublishingOptions"></a>

```python
def put_log_publishing_options(
  value: typing.Union[IResolvable, typing.List[OsisPipelineLogPublishingOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putLogPublishingOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#create OsisPipeline#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#delete OsisPipeline#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#update OsisPipeline#update}

---

##### `put_vpc_options` <a name="put_vpc_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putVpcOptions"></a>

```python
def put_vpc_options(
  value: typing.Union[IResolvable, typing.List[OsisPipelineVpcOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.putVpcOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>]]

---

##### `reset_buffer_options` <a name="reset_buffer_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.resetBufferOptions"></a>

```python
def reset_buffer_options() -> None
```

##### `reset_encryption_at_rest_options` <a name="reset_encryption_at_rest_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.resetEncryptionAtRestOptions"></a>

```python
def reset_encryption_at_rest_options() -> None
```

##### `reset_log_publishing_options` <a name="reset_log_publishing_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.resetLogPublishingOptions"></a>

```python
def reset_log_publishing_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_options` <a name="reset_vpc_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.resetVpcOptions"></a>

```python
def reset_vpc_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsisPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsisPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsisPipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsisPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsisPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.bufferOptions">buffer_options</a></code> | <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList">OsisPipelineBufferOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.encryptionAtRestOptions">encryption_at_rest_options</a></code> | <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList">OsisPipelineEncryptionAtRestOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.ingestEndpointUrls">ingest_endpoint_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.logPublishingOptions">log_publishing_options</a></code> | <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList">OsisPipelineLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.pipelineArn">pipeline_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference">OsisPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList">OsisPipelineVpcOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.bufferOptionsInput">buffer_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.encryptionAtRestOptionsInput">encryption_at_rest_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.logPublishingOptionsInput">log_publishing_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.maxUnitsInput">max_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.minUnitsInput">min_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.pipelineConfigurationBodyInput">pipeline_configuration_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.pipelineNameInput">pipeline_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts">OsisPipelineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.vpcOptionsInput">vpc_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.maxUnits">max_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.minUnits">min_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.pipelineConfigurationBody">pipeline_configuration_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.pipelineName">pipeline_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `buffer_options`<sup>Required</sup> <a name="buffer_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.bufferOptions"></a>

```python
buffer_options: OsisPipelineBufferOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList">OsisPipelineBufferOptionsList</a>

---

##### `encryption_at_rest_options`<sup>Required</sup> <a name="encryption_at_rest_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.encryptionAtRestOptions"></a>

```python
encryption_at_rest_options: OsisPipelineEncryptionAtRestOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList">OsisPipelineEncryptionAtRestOptionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingest_endpoint_urls`<sup>Required</sup> <a name="ingest_endpoint_urls" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.ingestEndpointUrls"></a>

```python
ingest_endpoint_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_publishing_options`<sup>Required</sup> <a name="log_publishing_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.logPublishingOptions"></a>

```python
log_publishing_options: OsisPipelineLogPublishingOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList">OsisPipelineLogPublishingOptionsList</a>

---

##### `pipeline_arn`<sup>Required</sup> <a name="pipeline_arn" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.pipelineArn"></a>

```python
pipeline_arn: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.timeouts"></a>

```python
timeouts: OsisPipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference">OsisPipelineTimeoutsOutputReference</a>

---

##### `vpc_options`<sup>Required</sup> <a name="vpc_options" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.vpcOptions"></a>

```python
vpc_options: OsisPipelineVpcOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList">OsisPipelineVpcOptionsList</a>

---

##### `buffer_options_input`<sup>Optional</sup> <a name="buffer_options_input" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.bufferOptionsInput"></a>

```python
buffer_options_input: typing.Union[IResolvable, typing.List[OsisPipelineBufferOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>]]

---

##### `encryption_at_rest_options_input`<sup>Optional</sup> <a name="encryption_at_rest_options_input" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.encryptionAtRestOptionsInput"></a>

```python
encryption_at_rest_options_input: typing.Union[IResolvable, typing.List[OsisPipelineEncryptionAtRestOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>]]

---

##### `log_publishing_options_input`<sup>Optional</sup> <a name="log_publishing_options_input" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.logPublishingOptionsInput"></a>

```python
log_publishing_options_input: typing.Union[IResolvable, typing.List[OsisPipelineLogPublishingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>]]

---

##### `max_units_input`<sup>Optional</sup> <a name="max_units_input" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.maxUnitsInput"></a>

```python
max_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_units_input`<sup>Optional</sup> <a name="min_units_input" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.minUnitsInput"></a>

```python
min_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pipeline_configuration_body_input`<sup>Optional</sup> <a name="pipeline_configuration_body_input" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.pipelineConfigurationBodyInput"></a>

```python
pipeline_configuration_body_input: str
```

- *Type:* str

---

##### `pipeline_name_input`<sup>Optional</sup> <a name="pipeline_name_input" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.pipelineNameInput"></a>

```python
pipeline_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsisPipelineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts">OsisPipelineTimeouts</a>]

---

##### `vpc_options_input`<sup>Optional</sup> <a name="vpc_options_input" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.vpcOptionsInput"></a>

```python
vpc_options_input: typing.Union[IResolvable, typing.List[OsisPipelineVpcOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>]]

---

##### `max_units`<sup>Required</sup> <a name="max_units" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.maxUnits"></a>

```python
max_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_units`<sup>Required</sup> <a name="min_units" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.minUnits"></a>

```python
min_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pipeline_configuration_body`<sup>Required</sup> <a name="pipeline_configuration_body" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.pipelineConfigurationBody"></a>

```python
pipeline_configuration_body: str
```

- *Type:* str

---

##### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.pipelineName"></a>

```python
pipeline_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.osisPipeline.OsisPipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsisPipelineBufferOptions <a name="OsisPipelineBufferOptions" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineBufferOptions(
  persistent_buffer_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions.property.persistentBufferEnabled">persistent_buffer_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#persistent_buffer_enabled OsisPipeline#persistent_buffer_enabled}. |

---

##### `persistent_buffer_enabled`<sup>Required</sup> <a name="persistent_buffer_enabled" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions.property.persistentBufferEnabled"></a>

```python
persistent_buffer_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#persistent_buffer_enabled OsisPipeline#persistent_buffer_enabled}.

---

### OsisPipelineConfig <a name="OsisPipelineConfig" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  max_units: typing.Union[int, float],
  min_units: typing.Union[int, float],
  pipeline_configuration_body: str,
  pipeline_name: str,
  buffer_options: typing.Union[IResolvable, typing.List[OsisPipelineBufferOptions]] = None,
  encryption_at_rest_options: typing.Union[IResolvable, typing.List[OsisPipelineEncryptionAtRestOptions]] = None,
  log_publishing_options: typing.Union[IResolvable, typing.List[OsisPipelineLogPublishingOptions]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: OsisPipelineTimeouts = None,
  vpc_options: typing.Union[IResolvable, typing.List[OsisPipelineVpcOptions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.maxUnits">max_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.minUnits">min_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.pipelineConfigurationBody">pipeline_configuration_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.pipelineName">pipeline_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.bufferOptions">buffer_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>]]</code> | buffer_options block. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.encryptionAtRestOptions">encryption_at_rest_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>]]</code> | encryption_at_rest_options block. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.logPublishingOptions">log_publishing_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>]]</code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#tags OsisPipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts">OsisPipelineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.vpcOptions">vpc_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>]]</code> | vpc_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_units`<sup>Required</sup> <a name="max_units" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.maxUnits"></a>

```python
max_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}.

---

##### `min_units`<sup>Required</sup> <a name="min_units" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.minUnits"></a>

```python
min_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}.

---

##### `pipeline_configuration_body`<sup>Required</sup> <a name="pipeline_configuration_body" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.pipelineConfigurationBody"></a>

```python
pipeline_configuration_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}.

---

##### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.pipelineName"></a>

```python
pipeline_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}.

---

##### `buffer_options`<sup>Optional</sup> <a name="buffer_options" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.bufferOptions"></a>

```python
buffer_options: typing.Union[IResolvable, typing.List[OsisPipelineBufferOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>]]

buffer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#buffer_options OsisPipeline#buffer_options}

---

##### `encryption_at_rest_options`<sup>Optional</sup> <a name="encryption_at_rest_options" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.encryptionAtRestOptions"></a>

```python
encryption_at_rest_options: typing.Union[IResolvable, typing.List[OsisPipelineEncryptionAtRestOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>]]

encryption_at_rest_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#encryption_at_rest_options OsisPipeline#encryption_at_rest_options}

---

##### `log_publishing_options`<sup>Optional</sup> <a name="log_publishing_options" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.logPublishingOptions"></a>

```python
log_publishing_options: typing.Union[IResolvable, typing.List[OsisPipelineLogPublishingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>]]

log_publishing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#log_publishing_options OsisPipeline#log_publishing_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#tags OsisPipeline#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.timeouts"></a>

```python
timeouts: OsisPipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts">OsisPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#timeouts OsisPipeline#timeouts}

---

##### `vpc_options`<sup>Optional</sup> <a name="vpc_options" id="@cdktf/provider-aws.osisPipeline.OsisPipelineConfig.property.vpcOptions"></a>

```python
vpc_options: typing.Union[IResolvable, typing.List[OsisPipelineVpcOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>]]

vpc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#vpc_options OsisPipeline#vpc_options}

---

### OsisPipelineEncryptionAtRestOptions <a name="OsisPipelineEncryptionAtRestOptions" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineEncryptionAtRestOptions(
  kms_key_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#kms_key_arn OsisPipeline#kms_key_arn}. |

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#kms_key_arn OsisPipeline#kms_key_arn}.

---

### OsisPipelineLogPublishingOptions <a name="OsisPipelineLogPublishingOptions" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineLogPublishingOptions(
  cloudwatch_log_destination: typing.Union[IResolvable, typing.List[OsisPipelineLogPublishingOptionsCloudwatchLogDestination]] = None,
  is_logging_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions.property.cloudwatchLogDestination">cloudwatch_log_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>]]</code> | cloudwatch_log_destination block. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions.property.isLoggingEnabled">is_logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#is_logging_enabled OsisPipeline#is_logging_enabled}. |

---

##### `cloudwatch_log_destination`<sup>Optional</sup> <a name="cloudwatch_log_destination" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions.property.cloudwatchLogDestination"></a>

```python
cloudwatch_log_destination: typing.Union[IResolvable, typing.List[OsisPipelineLogPublishingOptionsCloudwatchLogDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>]]

cloudwatch_log_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#cloudwatch_log_destination OsisPipeline#cloudwatch_log_destination}

---

##### `is_logging_enabled`<sup>Optional</sup> <a name="is_logging_enabled" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions.property.isLoggingEnabled"></a>

```python
is_logging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#is_logging_enabled OsisPipeline#is_logging_enabled}.

---

### OsisPipelineLogPublishingOptionsCloudwatchLogDestination <a name="OsisPipelineLogPublishingOptionsCloudwatchLogDestination" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination(
  log_group: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.property.logGroup">log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}. |

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}.

---

### OsisPipelineTimeouts <a name="OsisPipelineTimeouts" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#create OsisPipeline#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#delete OsisPipeline#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#update OsisPipeline#update}

---

### OsisPipelineVpcOptions <a name="OsisPipelineVpcOptions" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineVpcOptions(
  subnet_ids: typing.List[str],
  security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#subnet_ids OsisPipeline#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#security_group_ids OsisPipeline#security_group_ids}. |

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#subnet_ids OsisPipeline#subnet_ids}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/osis_pipeline#security_group_ids OsisPipeline#security_group_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsisPipelineBufferOptionsList <a name="OsisPipelineBufferOptionsList" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineBufferOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsisPipelineBufferOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsisPipelineBufferOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>]]

---


### OsisPipelineBufferOptionsOutputReference <a name="OsisPipelineBufferOptionsOutputReference" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineBufferOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabledInput">persistent_buffer_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled">persistent_buffer_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persistent_buffer_enabled_input`<sup>Optional</sup> <a name="persistent_buffer_enabled_input" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabledInput"></a>

```python
persistent_buffer_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `persistent_buffer_enabled`<sup>Required</sup> <a name="persistent_buffer_enabled" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled"></a>

```python
persistent_buffer_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsisPipelineBufferOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>]

---


### OsisPipelineEncryptionAtRestOptionsList <a name="OsisPipelineEncryptionAtRestOptionsList" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineEncryptionAtRestOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsisPipelineEncryptionAtRestOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsisPipelineEncryptionAtRestOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>]]

---


### OsisPipelineEncryptionAtRestOptionsOutputReference <a name="OsisPipelineEncryptionAtRestOptionsOutputReference" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsisPipelineEncryptionAtRestOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>]

---


### OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList <a name="OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsisPipelineLogPublishingOptionsCloudwatchLogDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>]]

---


### OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference <a name="OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsisPipelineLogPublishingOptionsCloudwatchLogDestination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>]

---


### OsisPipelineLogPublishingOptionsList <a name="OsisPipelineLogPublishingOptionsList" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineLogPublishingOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsisPipelineLogPublishingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsisPipelineLogPublishingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>]]

---


### OsisPipelineLogPublishingOptionsOutputReference <a name="OsisPipelineLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineLogPublishingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination">put_cloudwatch_log_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetCloudwatchLogDestination">reset_cloudwatch_log_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetIsLoggingEnabled">reset_is_logging_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_log_destination` <a name="put_cloudwatch_log_destination" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination"></a>

```python
def put_cloudwatch_log_destination(
  value: typing.Union[IResolvable, typing.List[OsisPipelineLogPublishingOptionsCloudwatchLogDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>]]

---

##### `reset_cloudwatch_log_destination` <a name="reset_cloudwatch_log_destination" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetCloudwatchLogDestination"></a>

```python
def reset_cloudwatch_log_destination() -> None
```

##### `reset_is_logging_enabled` <a name="reset_is_logging_enabled" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetIsLoggingEnabled"></a>

```python
def reset_is_logging_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination">cloudwatch_log_destination</a></code> | <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList">OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestinationInput">cloudwatch_log_destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabledInput">is_logging_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled">is_logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_destination`<sup>Required</sup> <a name="cloudwatch_log_destination" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination"></a>

```python
cloudwatch_log_destination: OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList">OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList</a>

---

##### `cloudwatch_log_destination_input`<sup>Optional</sup> <a name="cloudwatch_log_destination_input" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestinationInput"></a>

```python
cloudwatch_log_destination_input: typing.Union[IResolvable, typing.List[OsisPipelineLogPublishingOptionsCloudwatchLogDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>]]

---

##### `is_logging_enabled_input`<sup>Optional</sup> <a name="is_logging_enabled_input" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabledInput"></a>

```python
is_logging_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_logging_enabled`<sup>Required</sup> <a name="is_logging_enabled" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled"></a>

```python
is_logging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsisPipelineLogPublishingOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>]

---


### OsisPipelineTimeoutsOutputReference <a name="OsisPipelineTimeoutsOutputReference" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts">OsisPipelineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsisPipelineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineTimeouts">OsisPipelineTimeouts</a>]

---


### OsisPipelineVpcOptionsList <a name="OsisPipelineVpcOptionsList" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineVpcOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsisPipelineVpcOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsisPipelineVpcOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>]]

---


### OsisPipelineVpcOptionsOutputReference <a name="OsisPipelineVpcOptionsOutputReference" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import osis_pipeline

osisPipeline.OsisPipelineVpcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsisPipelineVpcOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>]

---



