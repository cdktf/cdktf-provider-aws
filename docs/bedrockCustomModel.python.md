# `bedrockCustomModel` Submodule <a name="`bedrockCustomModel` Submodule" id="@cdktf/provider-aws.bedrockCustomModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockCustomModel <a name="BedrockCustomModel" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model aws_bedrock_custom_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_model_identifier: str,
  custom_model_name: str,
  hyperparameters: typing.Mapping[str],
  job_name: str,
  role_arn: str,
  customization_type: str = None,
  custom_model_kms_key_id: str = None,
  output_data_config: typing.Union[IResolvable, typing.List[BedrockCustomModelOutputDataConfig]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockCustomModelTimeouts = None,
  training_data_config: typing.Union[IResolvable, typing.List[BedrockCustomModelTrainingDataConfig]] = None,
  validation_data_config: typing.Union[IResolvable, typing.List[BedrockCustomModelValidationDataConfig]] = None,
  vpc_config: typing.Union[IResolvable, typing.List[BedrockCustomModelVpcConfig]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.baseModelIdentifier">base_model_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#base_model_identifier BedrockCustomModel#base_model_identifier}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.customModelName">custom_model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#custom_model_name BedrockCustomModel#custom_model_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.hyperparameters">hyperparameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#hyperparameters BedrockCustomModel#hyperparameters}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#job_name BedrockCustomModel#job_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#role_arn BedrockCustomModel#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.customizationType">customization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#customization_type BedrockCustomModel#customization_type}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.customModelKmsKeyId">custom_model_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#custom_model_kms_key_id BedrockCustomModel#custom_model_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.outputDataConfig">output_data_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig">BedrockCustomModelOutputDataConfig</a>]]</code> | output_data_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#tags BedrockCustomModel#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts">BedrockCustomModelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.trainingDataConfig">training_data_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig">BedrockCustomModelTrainingDataConfig</a>]]</code> | training_data_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.validationDataConfig">validation_data_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig">BedrockCustomModelValidationDataConfig</a>]]</code> | validation_data_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig">BedrockCustomModelVpcConfig</a>]]</code> | vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_model_identifier`<sup>Required</sup> <a name="base_model_identifier" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.baseModelIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#base_model_identifier BedrockCustomModel#base_model_identifier}.

---

##### `custom_model_name`<sup>Required</sup> <a name="custom_model_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.customModelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#custom_model_name BedrockCustomModel#custom_model_name}.

---

##### `hyperparameters`<sup>Required</sup> <a name="hyperparameters" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.hyperparameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#hyperparameters BedrockCustomModel#hyperparameters}.

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.jobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#job_name BedrockCustomModel#job_name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#role_arn BedrockCustomModel#role_arn}.

---

##### `customization_type`<sup>Optional</sup> <a name="customization_type" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.customizationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#customization_type BedrockCustomModel#customization_type}.

---

##### `custom_model_kms_key_id`<sup>Optional</sup> <a name="custom_model_kms_key_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.customModelKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#custom_model_kms_key_id BedrockCustomModel#custom_model_kms_key_id}.

---

##### `output_data_config`<sup>Optional</sup> <a name="output_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.outputDataConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig">BedrockCustomModelOutputDataConfig</a>]]

output_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#output_data_config BedrockCustomModel#output_data_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#tags BedrockCustomModel#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts">BedrockCustomModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#timeouts BedrockCustomModel#timeouts}

---

##### `training_data_config`<sup>Optional</sup> <a name="training_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.trainingDataConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig">BedrockCustomModelTrainingDataConfig</a>]]

training_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#training_data_config BedrockCustomModel#training_data_config}

---

##### `validation_data_config`<sup>Optional</sup> <a name="validation_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.validationDataConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig">BedrockCustomModelValidationDataConfig</a>]]

validation_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#validation_data_config BedrockCustomModel#validation_data_config}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.vpcConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig">BedrockCustomModelVpcConfig</a>]]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#vpc_config BedrockCustomModel#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putOutputDataConfig">put_output_data_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTrainingDataConfig">put_training_data_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putValidationDataConfig">put_validation_data_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetCustomizationType">reset_customization_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetCustomModelKmsKeyId">reset_custom_model_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetOutputDataConfig">reset_output_data_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTrainingDataConfig">reset_training_data_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetValidationDataConfig">reset_validation_data_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_output_data_config` <a name="put_output_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putOutputDataConfig"></a>

```python
def put_output_data_config(
  value: typing.Union[IResolvable, typing.List[BedrockCustomModelOutputDataConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putOutputDataConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig">BedrockCustomModelOutputDataConfig</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#create BedrockCustomModel#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#delete BedrockCustomModel#delete}

---

##### `put_training_data_config` <a name="put_training_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTrainingDataConfig"></a>

```python
def put_training_data_config(
  value: typing.Union[IResolvable, typing.List[BedrockCustomModelTrainingDataConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTrainingDataConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig">BedrockCustomModelTrainingDataConfig</a>]]

---

##### `put_validation_data_config` <a name="put_validation_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putValidationDataConfig"></a>

```python
def put_validation_data_config(
  value: typing.Union[IResolvable, typing.List[BedrockCustomModelValidationDataConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putValidationDataConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig">BedrockCustomModelValidationDataConfig</a>]]

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putVpcConfig"></a>

```python
def put_vpc_config(
  value: typing.Union[IResolvable, typing.List[BedrockCustomModelVpcConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putVpcConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig">BedrockCustomModelVpcConfig</a>]]

---

##### `reset_customization_type` <a name="reset_customization_type" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetCustomizationType"></a>

```python
def reset_customization_type() -> None
```

##### `reset_custom_model_kms_key_id` <a name="reset_custom_model_kms_key_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetCustomModelKmsKeyId"></a>

```python
def reset_custom_model_kms_key_id() -> None
```

##### `reset_output_data_config` <a name="reset_output_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetOutputDataConfig"></a>

```python
def reset_output_data_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_training_data_config` <a name="reset_training_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTrainingDataConfig"></a>

```python
def reset_training_data_config() -> None
```

##### `reset_validation_data_config` <a name="reset_validation_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetValidationDataConfig"></a>

```python
def reset_validation_data_config() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockCustomModel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockCustomModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockCustomModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockCustomModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockCustomModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelArn">custom_model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobArn">job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobStatus">job_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.outputDataConfig">output_data_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList">BedrockCustomModelOutputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference">BedrockCustomModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingDataConfig">training_data_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList">BedrockCustomModelTrainingDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingMetrics">training_metrics</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList">BedrockCustomModelTrainingMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationDataConfig">validation_data_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList">BedrockCustomModelValidationDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationMetrics">validation_metrics</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList">BedrockCustomModelValidationMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList">BedrockCustomModelVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.baseModelIdentifierInput">base_model_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customizationTypeInput">customization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelKmsKeyIdInput">custom_model_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelNameInput">custom_model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.hyperparametersInput">hyperparameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.outputDataConfigInput">output_data_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig">BedrockCustomModelOutputDataConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts">BedrockCustomModelTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingDataConfigInput">training_data_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig">BedrockCustomModelTrainingDataConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationDataConfigInput">validation_data_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig">BedrockCustomModelValidationDataConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.vpcConfigInput">vpc_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig">BedrockCustomModelVpcConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.baseModelIdentifier">base_model_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customizationType">customization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelKmsKeyId">custom_model_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelName">custom_model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.hyperparameters">hyperparameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_model_arn`<sup>Required</sup> <a name="custom_model_arn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelArn"></a>

```python
custom_model_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_arn`<sup>Required</sup> <a name="job_arn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobArn"></a>

```python
job_arn: str
```

- *Type:* str

---

##### `job_status`<sup>Required</sup> <a name="job_status" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobStatus"></a>

```python
job_status: str
```

- *Type:* str

---

##### `output_data_config`<sup>Required</sup> <a name="output_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.outputDataConfig"></a>

```python
output_data_config: BedrockCustomModelOutputDataConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList">BedrockCustomModelOutputDataConfigList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.timeouts"></a>

```python
timeouts: BedrockCustomModelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference">BedrockCustomModelTimeoutsOutputReference</a>

---

##### `training_data_config`<sup>Required</sup> <a name="training_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingDataConfig"></a>

```python
training_data_config: BedrockCustomModelTrainingDataConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList">BedrockCustomModelTrainingDataConfigList</a>

---

##### `training_metrics`<sup>Required</sup> <a name="training_metrics" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingMetrics"></a>

```python
training_metrics: BedrockCustomModelTrainingMetricsList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList">BedrockCustomModelTrainingMetricsList</a>

---

##### `validation_data_config`<sup>Required</sup> <a name="validation_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationDataConfig"></a>

```python
validation_data_config: BedrockCustomModelValidationDataConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList">BedrockCustomModelValidationDataConfigList</a>

---

##### `validation_metrics`<sup>Required</sup> <a name="validation_metrics" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationMetrics"></a>

```python
validation_metrics: BedrockCustomModelValidationMetricsList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList">BedrockCustomModelValidationMetricsList</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.vpcConfig"></a>

```python
vpc_config: BedrockCustomModelVpcConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList">BedrockCustomModelVpcConfigList</a>

---

##### `base_model_identifier_input`<sup>Optional</sup> <a name="base_model_identifier_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.baseModelIdentifierInput"></a>

```python
base_model_identifier_input: str
```

- *Type:* str

---

##### `customization_type_input`<sup>Optional</sup> <a name="customization_type_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customizationTypeInput"></a>

```python
customization_type_input: str
```

- *Type:* str

---

##### `custom_model_kms_key_id_input`<sup>Optional</sup> <a name="custom_model_kms_key_id_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelKmsKeyIdInput"></a>

```python
custom_model_kms_key_id_input: str
```

- *Type:* str

---

##### `custom_model_name_input`<sup>Optional</sup> <a name="custom_model_name_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelNameInput"></a>

```python
custom_model_name_input: str
```

- *Type:* str

---

##### `hyperparameters_input`<sup>Optional</sup> <a name="hyperparameters_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.hyperparametersInput"></a>

```python
hyperparameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `output_data_config_input`<sup>Optional</sup> <a name="output_data_config_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.outputDataConfigInput"></a>

```python
output_data_config_input: typing.Union[IResolvable, typing.List[BedrockCustomModelOutputDataConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig">BedrockCustomModelOutputDataConfig</a>]]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BedrockCustomModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts">BedrockCustomModelTimeouts</a>]

---

##### `training_data_config_input`<sup>Optional</sup> <a name="training_data_config_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingDataConfigInput"></a>

```python
training_data_config_input: typing.Union[IResolvable, typing.List[BedrockCustomModelTrainingDataConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig">BedrockCustomModelTrainingDataConfig</a>]]

---

##### `validation_data_config_input`<sup>Optional</sup> <a name="validation_data_config_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationDataConfigInput"></a>

```python
validation_data_config_input: typing.Union[IResolvable, typing.List[BedrockCustomModelValidationDataConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig">BedrockCustomModelValidationDataConfig</a>]]

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.vpcConfigInput"></a>

```python
vpc_config_input: typing.Union[IResolvable, typing.List[BedrockCustomModelVpcConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig">BedrockCustomModelVpcConfig</a>]]

---

##### `base_model_identifier`<sup>Required</sup> <a name="base_model_identifier" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.baseModelIdentifier"></a>

```python
base_model_identifier: str
```

- *Type:* str

---

##### `customization_type`<sup>Required</sup> <a name="customization_type" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customizationType"></a>

```python
customization_type: str
```

- *Type:* str

---

##### `custom_model_kms_key_id`<sup>Required</sup> <a name="custom_model_kms_key_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelKmsKeyId"></a>

```python
custom_model_kms_key_id: str
```

- *Type:* str

---

##### `custom_model_name`<sup>Required</sup> <a name="custom_model_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelName"></a>

```python
custom_model_name: str
```

- *Type:* str

---

##### `hyperparameters`<sup>Required</sup> <a name="hyperparameters" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.hyperparameters"></a>

```python
hyperparameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockCustomModelConfig <a name="BedrockCustomModelConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_model_identifier: str,
  custom_model_name: str,
  hyperparameters: typing.Mapping[str],
  job_name: str,
  role_arn: str,
  customization_type: str = None,
  custom_model_kms_key_id: str = None,
  output_data_config: typing.Union[IResolvable, typing.List[BedrockCustomModelOutputDataConfig]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockCustomModelTimeouts = None,
  training_data_config: typing.Union[IResolvable, typing.List[BedrockCustomModelTrainingDataConfig]] = None,
  validation_data_config: typing.Union[IResolvable, typing.List[BedrockCustomModelValidationDataConfig]] = None,
  vpc_config: typing.Union[IResolvable, typing.List[BedrockCustomModelVpcConfig]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.baseModelIdentifier">base_model_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#base_model_identifier BedrockCustomModel#base_model_identifier}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customModelName">custom_model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#custom_model_name BedrockCustomModel#custom_model_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.hyperparameters">hyperparameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#hyperparameters BedrockCustomModel#hyperparameters}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#job_name BedrockCustomModel#job_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#role_arn BedrockCustomModel#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customizationType">customization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#customization_type BedrockCustomModel#customization_type}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customModelKmsKeyId">custom_model_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#custom_model_kms_key_id BedrockCustomModel#custom_model_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.outputDataConfig">output_data_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig">BedrockCustomModelOutputDataConfig</a>]]</code> | output_data_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#tags BedrockCustomModel#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts">BedrockCustomModelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.trainingDataConfig">training_data_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig">BedrockCustomModelTrainingDataConfig</a>]]</code> | training_data_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.validationDataConfig">validation_data_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig">BedrockCustomModelValidationDataConfig</a>]]</code> | validation_data_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.vpcConfig">vpc_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig">BedrockCustomModelVpcConfig</a>]]</code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_model_identifier`<sup>Required</sup> <a name="base_model_identifier" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.baseModelIdentifier"></a>

```python
base_model_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#base_model_identifier BedrockCustomModel#base_model_identifier}.

---

##### `custom_model_name`<sup>Required</sup> <a name="custom_model_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customModelName"></a>

```python
custom_model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#custom_model_name BedrockCustomModel#custom_model_name}.

---

##### `hyperparameters`<sup>Required</sup> <a name="hyperparameters" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.hyperparameters"></a>

```python
hyperparameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#hyperparameters BedrockCustomModel#hyperparameters}.

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#job_name BedrockCustomModel#job_name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#role_arn BedrockCustomModel#role_arn}.

---

##### `customization_type`<sup>Optional</sup> <a name="customization_type" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customizationType"></a>

```python
customization_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#customization_type BedrockCustomModel#customization_type}.

---

##### `custom_model_kms_key_id`<sup>Optional</sup> <a name="custom_model_kms_key_id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customModelKmsKeyId"></a>

```python
custom_model_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#custom_model_kms_key_id BedrockCustomModel#custom_model_kms_key_id}.

---

##### `output_data_config`<sup>Optional</sup> <a name="output_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.outputDataConfig"></a>

```python
output_data_config: typing.Union[IResolvable, typing.List[BedrockCustomModelOutputDataConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig">BedrockCustomModelOutputDataConfig</a>]]

output_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#output_data_config BedrockCustomModel#output_data_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#tags BedrockCustomModel#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.timeouts"></a>

```python
timeouts: BedrockCustomModelTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts">BedrockCustomModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#timeouts BedrockCustomModel#timeouts}

---

##### `training_data_config`<sup>Optional</sup> <a name="training_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.trainingDataConfig"></a>

```python
training_data_config: typing.Union[IResolvable, typing.List[BedrockCustomModelTrainingDataConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig">BedrockCustomModelTrainingDataConfig</a>]]

training_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#training_data_config BedrockCustomModel#training_data_config}

---

##### `validation_data_config`<sup>Optional</sup> <a name="validation_data_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.validationDataConfig"></a>

```python
validation_data_config: typing.Union[IResolvable, typing.List[BedrockCustomModelValidationDataConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig">BedrockCustomModelValidationDataConfig</a>]]

validation_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#validation_data_config BedrockCustomModel#validation_data_config}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.vpcConfig"></a>

```python
vpc_config: typing.Union[IResolvable, typing.List[BedrockCustomModelVpcConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig">BedrockCustomModelVpcConfig</a>]]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#vpc_config BedrockCustomModel#vpc_config}

---

### BedrockCustomModelOutputDataConfig <a name="BedrockCustomModelOutputDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelOutputDataConfig(
  s3_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig.property.s3Uri">s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}. |

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}.

---

### BedrockCustomModelTimeouts <a name="BedrockCustomModelTimeouts" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#create BedrockCustomModel#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#delete BedrockCustomModel#delete}

---

### BedrockCustomModelTrainingDataConfig <a name="BedrockCustomModelTrainingDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelTrainingDataConfig(
  s3_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig.property.s3Uri">s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}. |

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}.

---

### BedrockCustomModelTrainingMetrics <a name="BedrockCustomModelTrainingMetrics" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelTrainingMetrics()
```


### BedrockCustomModelValidationDataConfig <a name="BedrockCustomModelValidationDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelValidationDataConfig(
  validator: typing.Union[IResolvable, typing.List[BedrockCustomModelValidationDataConfigValidator]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig.property.validator">validator</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator">BedrockCustomModelValidationDataConfigValidator</a>]]</code> | validator block. |

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig.property.validator"></a>

```python
validator: typing.Union[IResolvable, typing.List[BedrockCustomModelValidationDataConfigValidator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator">BedrockCustomModelValidationDataConfigValidator</a>]]

validator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#validator BedrockCustomModel#validator}

---

### BedrockCustomModelValidationDataConfigValidator <a name="BedrockCustomModelValidationDataConfigValidator" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator(
  s3_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator.property.s3Uri">s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}. |

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}.

---

### BedrockCustomModelValidationMetrics <a name="BedrockCustomModelValidationMetrics" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelValidationMetrics()
```


### BedrockCustomModelVpcConfig <a name="BedrockCustomModelVpcConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelVpcConfig(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#security_group_ids BedrockCustomModel#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#subnet_ids BedrockCustomModel#subnet_ids}. |

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#security_group_ids BedrockCustomModel#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/bedrock_custom_model#subnet_ids BedrockCustomModel#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockCustomModelOutputDataConfigList <a name="BedrockCustomModelOutputDataConfigList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelOutputDataConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockCustomModelOutputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig">BedrockCustomModelOutputDataConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockCustomModelOutputDataConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig">BedrockCustomModelOutputDataConfig</a>]]

---


### BedrockCustomModelOutputDataConfigOutputReference <a name="BedrockCustomModelOutputDataConfigOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig">BedrockCustomModelOutputDataConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockCustomModelOutputDataConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig">BedrockCustomModelOutputDataConfig</a>]

---


### BedrockCustomModelTimeoutsOutputReference <a name="BedrockCustomModelTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts">BedrockCustomModelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockCustomModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts">BedrockCustomModelTimeouts</a>]

---


### BedrockCustomModelTrainingDataConfigList <a name="BedrockCustomModelTrainingDataConfigList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelTrainingDataConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockCustomModelTrainingDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig">BedrockCustomModelTrainingDataConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockCustomModelTrainingDataConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig">BedrockCustomModelTrainingDataConfig</a>]]

---


### BedrockCustomModelTrainingDataConfigOutputReference <a name="BedrockCustomModelTrainingDataConfigOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig">BedrockCustomModelTrainingDataConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockCustomModelTrainingDataConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig">BedrockCustomModelTrainingDataConfig</a>]

---


### BedrockCustomModelTrainingMetricsList <a name="BedrockCustomModelTrainingMetricsList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelTrainingMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockCustomModelTrainingMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockCustomModelTrainingMetricsOutputReference <a name="BedrockCustomModelTrainingMetricsOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.trainingLoss">training_loss</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetrics">BedrockCustomModelTrainingMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `training_loss`<sup>Required</sup> <a name="training_loss" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.trainingLoss"></a>

```python
training_loss: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.internalValue"></a>

```python
internal_value: BedrockCustomModelTrainingMetrics
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetrics">BedrockCustomModelTrainingMetrics</a>

---


### BedrockCustomModelValidationDataConfigList <a name="BedrockCustomModelValidationDataConfigList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelValidationDataConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockCustomModelValidationDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig">BedrockCustomModelValidationDataConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockCustomModelValidationDataConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig">BedrockCustomModelValidationDataConfig</a>]]

---


### BedrockCustomModelValidationDataConfigOutputReference <a name="BedrockCustomModelValidationDataConfigOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.putValidator">put_validator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.resetValidator">reset_validator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_validator` <a name="put_validator" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.putValidator"></a>

```python
def put_validator(
  value: typing.Union[IResolvable, typing.List[BedrockCustomModelValidationDataConfigValidator]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.putValidator.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator">BedrockCustomModelValidationDataConfigValidator</a>]]

---

##### `reset_validator` <a name="reset_validator" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.resetValidator"></a>

```python
def reset_validator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.validator">validator</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList">BedrockCustomModelValidationDataConfigValidatorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.validatorInput">validator_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator">BedrockCustomModelValidationDataConfigValidator</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig">BedrockCustomModelValidationDataConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `validator`<sup>Required</sup> <a name="validator" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.validator"></a>

```python
validator: BedrockCustomModelValidationDataConfigValidatorList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList">BedrockCustomModelValidationDataConfigValidatorList</a>

---

##### `validator_input`<sup>Optional</sup> <a name="validator_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.validatorInput"></a>

```python
validator_input: typing.Union[IResolvable, typing.List[BedrockCustomModelValidationDataConfigValidator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator">BedrockCustomModelValidationDataConfigValidator</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockCustomModelValidationDataConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig">BedrockCustomModelValidationDataConfig</a>]

---


### BedrockCustomModelValidationDataConfigValidatorList <a name="BedrockCustomModelValidationDataConfigValidatorList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockCustomModelValidationDataConfigValidatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator">BedrockCustomModelValidationDataConfigValidator</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockCustomModelValidationDataConfigValidator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator">BedrockCustomModelValidationDataConfigValidator</a>]]

---


### BedrockCustomModelValidationDataConfigValidatorOutputReference <a name="BedrockCustomModelValidationDataConfigValidatorOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator">BedrockCustomModelValidationDataConfigValidator</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockCustomModelValidationDataConfigValidator]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator">BedrockCustomModelValidationDataConfigValidator</a>]

---


### BedrockCustomModelValidationMetricsList <a name="BedrockCustomModelValidationMetricsList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelValidationMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockCustomModelValidationMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockCustomModelValidationMetricsOutputReference <a name="BedrockCustomModelValidationMetricsOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.validationLoss">validation_loss</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetrics">BedrockCustomModelValidationMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `validation_loss`<sup>Required</sup> <a name="validation_loss" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.validationLoss"></a>

```python
validation_loss: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.internalValue"></a>

```python
internal_value: BedrockCustomModelValidationMetrics
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetrics">BedrockCustomModelValidationMetrics</a>

---


### BedrockCustomModelVpcConfigList <a name="BedrockCustomModelVpcConfigList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelVpcConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockCustomModelVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig">BedrockCustomModelVpcConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockCustomModelVpcConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig">BedrockCustomModelVpcConfig</a>]]

---


### BedrockCustomModelVpcConfigOutputReference <a name="BedrockCustomModelVpcConfigOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrock_custom_model

bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig">BedrockCustomModelVpcConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockCustomModelVpcConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig">BedrockCustomModelVpcConfig</a>]

---



