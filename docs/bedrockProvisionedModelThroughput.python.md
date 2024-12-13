# `bedrockProvisionedModelThroughput` Submodule <a name="`bedrockProvisionedModelThroughput` Submodule" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockProvisionedModelThroughput <a name="BedrockProvisionedModelThroughput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput aws_bedrock_provisioned_model_throughput}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_provisioned_model_throughput

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  model_arn: str,
  model_units: typing.Union[int, float],
  provisioned_model_name: str,
  commitment_duration: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockProvisionedModelThroughputTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.modelArn">model_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.modelUnits">model_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provisionedModelName">provisioned_model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.commitmentDuration">commitment_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.modelArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}.

---

##### `model_units`<sup>Required</sup> <a name="model_units" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.modelUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}.

---

##### `provisioned_model_name`<sup>Required</sup> <a name="provisioned_model_name" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provisionedModelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}.

---

##### `commitment_duration`<sup>Optional</sup> <a name="commitment_duration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.commitmentDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#timeouts BedrockProvisionedModelThroughput#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetCommitmentDuration">reset_commitment_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#create BedrockProvisionedModelThroughput#create}

---

##### `reset_commitment_duration` <a name="reset_commitment_duration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetCommitmentDuration"></a>

```python
def reset_commitment_duration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_provisioned_model_throughput

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_provisioned_model_throughput

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_provisioned_model_throughput

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_provisioned_model_throughput

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockProvisionedModelThroughput to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockProvisionedModelThroughput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockProvisionedModelThroughput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelArn">provisioned_model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference">BedrockProvisionedModelThroughputTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDurationInput">commitment_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArnInput">model_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnitsInput">model_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelNameInput">provisioned_model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDuration">commitment_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnits">model_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelName">provisioned_model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provisioned_model_arn`<sup>Required</sup> <a name="provisioned_model_arn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelArn"></a>

```python
provisioned_model_arn: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeouts"></a>

```python
timeouts: BedrockProvisionedModelThroughputTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference">BedrockProvisionedModelThroughputTimeoutsOutputReference</a>

---

##### `commitment_duration_input`<sup>Optional</sup> <a name="commitment_duration_input" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDurationInput"></a>

```python
commitment_duration_input: str
```

- *Type:* str

---

##### `model_arn_input`<sup>Optional</sup> <a name="model_arn_input" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArnInput"></a>

```python
model_arn_input: str
```

- *Type:* str

---

##### `model_units_input`<sup>Optional</sup> <a name="model_units_input" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnitsInput"></a>

```python
model_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_model_name_input`<sup>Optional</sup> <a name="provisioned_model_name_input" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelNameInput"></a>

```python
provisioned_model_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BedrockProvisionedModelThroughputTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>]

---

##### `commitment_duration`<sup>Required</sup> <a name="commitment_duration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDuration"></a>

```python
commitment_duration: str
```

- *Type:* str

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

##### `model_units`<sup>Required</sup> <a name="model_units" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnits"></a>

```python
model_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_model_name`<sup>Required</sup> <a name="provisioned_model_name" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelName"></a>

```python
provisioned_model_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockProvisionedModelThroughputConfig <a name="BedrockProvisionedModelThroughputConfig" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_provisioned_model_throughput

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  model_arn: str,
  model_units: typing.Union[int, float],
  provisioned_model_name: str,
  commitment_duration: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockProvisionedModelThroughputTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelArn">model_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelUnits">model_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisionedModelName">provisioned_model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.commitmentDuration">commitment_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}.

---

##### `model_units`<sup>Required</sup> <a name="model_units" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelUnits"></a>

```python
model_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}.

---

##### `provisioned_model_name`<sup>Required</sup> <a name="provisioned_model_name" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisionedModelName"></a>

```python
provisioned_model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}.

---

##### `commitment_duration`<sup>Optional</sup> <a name="commitment_duration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.commitmentDuration"></a>

```python
commitment_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.timeouts"></a>

```python
timeouts: BedrockProvisionedModelThroughputTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#timeouts BedrockProvisionedModelThroughput#timeouts}

---

### BedrockProvisionedModelThroughputTimeouts <a name="BedrockProvisionedModelThroughputTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_provisioned_model_throughput

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/bedrock_provisioned_model_throughput#create BedrockProvisionedModelThroughput#create}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockProvisionedModelThroughputTimeoutsOutputReference <a name="BedrockProvisionedModelThroughputTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_provisioned_model_throughput

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockProvisionedModelThroughputTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>]

---



