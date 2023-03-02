# `sagemakerModel` Submodule <a name="`sagemakerModel` Submodule" id="@cdktf/provider-aws.sagemakerModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModel <a name="SagemakerModel" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model aws_sagemaker_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  execution_role_arn: str,
  container: typing.Union[IResolvable, typing.List[SagemakerModelContainer]] = None,
  enable_network_isolation: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inference_execution_config: SagemakerModelInferenceExecutionConfig = None,
  name: str = None,
  primary_container: SagemakerModelPrimaryContainer = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  vpc_config: SagemakerModelVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.container">container</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>]]</code> | container block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.enableNetworkIsolation">enable_network_isolation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#id SagemakerModel#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.inferenceExecutionConfig">inference_execution_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | inference_execution_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#name SagemakerModel#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.primaryContainer">primary_container</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | primary_container block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#tags SagemakerModel#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#tags_all SagemakerModel#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.container"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>]]

container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#container SagemakerModel#container}

---

##### `enable_network_isolation`<sup>Optional</sup> <a name="enable_network_isolation" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.enableNetworkIsolation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#id SagemakerModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inference_execution_config`<sup>Optional</sup> <a name="inference_execution_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.inferenceExecutionConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

inference_execution_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#inference_execution_config SagemakerModel#inference_execution_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#name SagemakerModel#name}.

---

##### `primary_container`<sup>Optional</sup> <a name="primary_container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.primaryContainer"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

primary_container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#primary_container SagemakerModel#primary_container}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#tags SagemakerModel#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#tags_all SagemakerModel#tags_all}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#vpc_config SagemakerModel#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.putInferenceExecutionConfig">put_inference_execution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer">put_primary_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation">reset_enable_network_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig">reset_inference_execution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetPrimaryContainer">reset_primary_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_container` <a name="put_container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putContainer"></a>

```python
def put_container(
  value: typing.Union[IResolvable, typing.List[SagemakerModelContainer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putContainer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>]]

---

##### `put_inference_execution_config` <a name="put_inference_execution_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putInferenceExecutionConfig"></a>

```python
def put_inference_execution_config(
  mode: str
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putInferenceExecutionConfig.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#mode SagemakerModel#mode}.

---

##### `put_primary_container` <a name="put_primary_container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer"></a>

```python
def put_primary_container(
  image: str,
  container_hostname: str = None,
  environment: typing.Mapping[str] = None,
  image_config: SagemakerModelPrimaryContainerImageConfig = None,
  mode: str = None,
  model_data_url: str = None
) -> None
```

###### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.image"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#image SagemakerModel#image}.

---

###### `container_hostname`<sup>Optional</sup> <a name="container_hostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.containerHostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#container_hostname SagemakerModel#container_hostname}.

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.environment"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#environment SagemakerModel#environment}.

---

###### `image_config`<sup>Optional</sup> <a name="image_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.imageConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#image_config SagemakerModel#image_config}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#mode SagemakerModel#mode}.

---

###### `model_data_url`<sup>Optional</sup> <a name="model_data_url" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.modelDataUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#model_data_url SagemakerModel#model_data_url}.

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str],
  subnets: typing.List[str]
) -> None
```

###### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}.

---

###### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#subnets SagemakerModel#subnets}.

---

##### `reset_container` <a name="reset_container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_enable_network_isolation` <a name="reset_enable_network_isolation" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation"></a>

```python
def reset_enable_network_isolation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inference_execution_config` <a name="reset_inference_execution_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig"></a>

```python
def reset_inference_execution_config() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_primary_container` <a name="reset_primary_container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetPrimaryContainer"></a>

```python
def reset_primary_container() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.container">container</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList">SagemakerModelContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig">inference_execution_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainer">primary_container</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.containerInput">container_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput">enable_network_isolation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput">inference_execution_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainerInput">primary_container_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfigInput">vpc_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.container"></a>

```python
container: SagemakerModelContainerList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList">SagemakerModelContainerList</a>

---

##### `inference_execution_config`<sup>Required</sup> <a name="inference_execution_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig"></a>

```python
inference_execution_config: SagemakerModelInferenceExecutionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a>

---

##### `primary_container`<sup>Required</sup> <a name="primary_container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainer"></a>

```python
primary_container: SagemakerModelPrimaryContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfig"></a>

```python
vpc_config: SagemakerModelVpcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a>

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.containerInput"></a>

```python
container_input: typing.Union[IResolvable, typing.List[SagemakerModelContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>]]

---

##### `enable_network_isolation_input`<sup>Optional</sup> <a name="enable_network_isolation_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput"></a>

```python
enable_network_isolation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inference_execution_config_input`<sup>Optional</sup> <a name="inference_execution_config_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput"></a>

```python
inference_execution_config_input: SagemakerModelInferenceExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_container_input`<sup>Optional</sup> <a name="primary_container_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainerInput"></a>

```python
primary_container_input: SagemakerModelPrimaryContainer
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfigInput"></a>

```python
vpc_config_input: SagemakerModelVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---

##### `enable_network_isolation`<sup>Required</sup> <a name="enable_network_isolation" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelConfig <a name="SagemakerModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  execution_role_arn: str,
  container: typing.Union[IResolvable, typing.List[SagemakerModelContainer]] = None,
  enable_network_isolation: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inference_execution_config: SagemakerModelInferenceExecutionConfig = None,
  name: str = None,
  primary_container: SagemakerModelPrimaryContainer = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  vpc_config: SagemakerModelVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.container">container</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>]]</code> | container block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#id SagemakerModel#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig">inference_execution_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | inference_execution_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#name SagemakerModel#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.primaryContainer">primary_container</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | primary_container block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#tags SagemakerModel#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#tags_all SagemakerModel#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.container"></a>

```python
container: typing.Union[IResolvable, typing.List[SagemakerModelContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>]]

container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#container SagemakerModel#container}

---

##### `enable_network_isolation`<sup>Optional</sup> <a name="enable_network_isolation" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#id SagemakerModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inference_execution_config`<sup>Optional</sup> <a name="inference_execution_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig"></a>

```python
inference_execution_config: SagemakerModelInferenceExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

inference_execution_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#inference_execution_config SagemakerModel#inference_execution_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#name SagemakerModel#name}.

---

##### `primary_container`<sup>Optional</sup> <a name="primary_container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.primaryContainer"></a>

```python
primary_container: SagemakerModelPrimaryContainer
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

primary_container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#primary_container SagemakerModel#primary_container}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#tags SagemakerModel#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#tags_all SagemakerModel#tags_all}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.vpcConfig"></a>

```python
vpc_config: SagemakerModelVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#vpc_config SagemakerModel#vpc_config}

---

### SagemakerModelContainer <a name="SagemakerModelContainer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelContainer(
  image: str,
  container_hostname: str = None,
  environment: typing.Mapping[str] = None,
  image_config: SagemakerModelContainerImageConfig = None,
  mode: str = None,
  model_data_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#image SagemakerModel#image}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.containerHostname">container_hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#container_hostname SagemakerModel#container_hostname}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#environment SagemakerModel#environment}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.imageConfig">image_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#mode SagemakerModel#mode}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelDataUrl">model_data_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#model_data_url SagemakerModel#model_data_url}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#image SagemakerModel#image}.

---

##### `container_hostname`<sup>Optional</sup> <a name="container_hostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.containerHostname"></a>

```python
container_hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#container_hostname SagemakerModel#container_hostname}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#environment SagemakerModel#environment}.

---

##### `image_config`<sup>Optional</sup> <a name="image_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.imageConfig"></a>

```python
image_config: SagemakerModelContainerImageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#mode SagemakerModel#mode}.

---

##### `model_data_url`<sup>Optional</sup> <a name="model_data_url" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelDataUrl"></a>

```python
model_data_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#model_data_url SagemakerModel#model_data_url}.

---

### SagemakerModelContainerImageConfig <a name="SagemakerModelContainerImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelContainerImageConfig(
  repository_access_mode: str,
  repository_auth_config: SagemakerModelContainerImageConfigRepositoryAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAccessMode">repository_access_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAuthConfig">repository_auth_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a></code> | repository_auth_config block. |

---

##### `repository_access_mode`<sup>Required</sup> <a name="repository_access_mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAccessMode"></a>

```python
repository_access_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}.

---

##### `repository_auth_config`<sup>Optional</sup> <a name="repository_auth_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAuthConfig"></a>

```python
repository_auth_config: SagemakerModelContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

repository_auth_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

### SagemakerModelContainerImageConfigRepositoryAuthConfig <a name="SagemakerModelContainerImageConfigRepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig(
  repository_credentials_provider_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn">repository_credentials_provider_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}. |

---

##### `repository_credentials_provider_arn`<sup>Required</sup> <a name="repository_credentials_provider_arn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn"></a>

```python
repository_credentials_provider_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}.

---

### SagemakerModelInferenceExecutionConfig <a name="SagemakerModelInferenceExecutionConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelInferenceExecutionConfig(
  mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#mode SagemakerModel#mode}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#mode SagemakerModel#mode}.

---

### SagemakerModelPrimaryContainer <a name="SagemakerModelPrimaryContainer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainer(
  image: str,
  container_hostname: str = None,
  environment: typing.Mapping[str] = None,
  image_config: SagemakerModelPrimaryContainerImageConfig = None,
  mode: str = None,
  model_data_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#image SagemakerModel#image}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname">container_hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#container_hostname SagemakerModel#container_hostname}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#environment SagemakerModel#environment}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig">image_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#mode SagemakerModel#mode}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl">model_data_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#model_data_url SagemakerModel#model_data_url}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#image SagemakerModel#image}.

---

##### `container_hostname`<sup>Optional</sup> <a name="container_hostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname"></a>

```python
container_hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#container_hostname SagemakerModel#container_hostname}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#environment SagemakerModel#environment}.

---

##### `image_config`<sup>Optional</sup> <a name="image_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig"></a>

```python
image_config: SagemakerModelPrimaryContainerImageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#mode SagemakerModel#mode}.

---

##### `model_data_url`<sup>Optional</sup> <a name="model_data_url" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl"></a>

```python
model_data_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#model_data_url SagemakerModel#model_data_url}.

---

### SagemakerModelPrimaryContainerImageConfig <a name="SagemakerModelPrimaryContainerImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerImageConfig(
  repository_access_mode: str,
  repository_auth_config: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode">repository_access_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAuthConfig">repository_auth_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | repository_auth_config block. |

---

##### `repository_access_mode`<sup>Required</sup> <a name="repository_access_mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode"></a>

```python
repository_access_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}.

---

##### `repository_auth_config`<sup>Optional</sup> <a name="repository_auth_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAuthConfig"></a>

```python
repository_auth_config: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

repository_auth_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

### SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig <a name="SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig(
  repository_credentials_provider_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn">repository_credentials_provider_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}. |

---

##### `repository_credentials_provider_arn`<sup>Required</sup> <a name="repository_credentials_provider_arn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn"></a>

```python
repository_credentials_provider_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}.

---

### SagemakerModelVpcConfig <a name="SagemakerModelVpcConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelVpcConfig(
  security_group_ids: typing.List[str],
  subnets: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#subnets SagemakerModel#subnets}. |

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#subnets SagemakerModel#subnets}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelContainerImageConfigOutputReference <a name="SagemakerModelContainerImageConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelContainerImageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.putRepositoryAuthConfig">put_repository_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resetRepositoryAuthConfig">reset_repository_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_repository_auth_config` <a name="put_repository_auth_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.putRepositoryAuthConfig"></a>

```python
def put_repository_auth_config(
  repository_credentials_provider_arn: str
) -> None
```

###### `repository_credentials_provider_arn`<sup>Required</sup> <a name="repository_credentials_provider_arn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.putRepositoryAuthConfig.parameter.repositoryCredentialsProviderArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}.

---

##### `reset_repository_auth_config` <a name="reset_repository_auth_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resetRepositoryAuthConfig"></a>

```python
def reset_repository_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfig">repository_auth_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessModeInput">repository_access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfigInput">repository_auth_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessMode">repository_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_auth_config`<sup>Required</sup> <a name="repository_auth_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfig"></a>

```python
repository_auth_config: SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `repository_access_mode_input`<sup>Optional</sup> <a name="repository_access_mode_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```python
repository_access_mode_input: str
```

- *Type:* str

---

##### `repository_auth_config_input`<sup>Optional</sup> <a name="repository_auth_config_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfigInput"></a>

```python
repository_auth_config_input: SagemakerModelContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

---

##### `repository_access_mode`<sup>Required</sup> <a name="repository_access_mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```python
repository_access_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerModelContainerImageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

---


### SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference <a name="SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput">repository_credentials_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">repository_credentials_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_credentials_provider_arn_input`<sup>Optional</sup> <a name="repository_credentials_provider_arn_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput"></a>

```python
repository_credentials_provider_arn_input: str
```

- *Type:* str

---

##### `repository_credentials_provider_arn`<sup>Required</sup> <a name="repository_credentials_provider_arn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```python
repository_credentials_provider_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerModelContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

---


### SagemakerModelContainerList <a name="SagemakerModelContainerList" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelContainerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerModelContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SagemakerModelContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>]]

---


### SagemakerModelContainerOutputReference <a name="SagemakerModelContainerOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig">put_image_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetContainerHostname">reset_container_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetImageConfig">reset_image_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataUrl">reset_model_data_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_image_config` <a name="put_image_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig"></a>

```python
def put_image_config(
  repository_access_mode: str,
  repository_auth_config: SagemakerModelContainerImageConfigRepositoryAuthConfig = None
) -> None
```

###### `repository_access_mode`<sup>Required</sup> <a name="repository_access_mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig.parameter.repositoryAccessMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}.

---

###### `repository_auth_config`<sup>Optional</sup> <a name="repository_auth_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig.parameter.repositoryAuthConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

repository_auth_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

##### `reset_container_hostname` <a name="reset_container_hostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetContainerHostname"></a>

```python
def reset_container_hostname() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_image_config` <a name="reset_image_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetImageConfig"></a>

```python
def reset_image_config() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_model_data_url` <a name="reset_model_data_url" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataUrl"></a>

```python
def reset_model_data_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfig">image_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference">SagemakerModelContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostnameInput">container_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfigInput">image_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrlInput">model_data_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostname">container_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrl">model_data_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_config`<sup>Required</sup> <a name="image_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfig"></a>

```python
image_config: SagemakerModelContainerImageConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference">SagemakerModelContainerImageConfigOutputReference</a>

---

##### `container_hostname_input`<sup>Optional</sup> <a name="container_hostname_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostnameInput"></a>

```python
container_hostname_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_config_input`<sup>Optional</sup> <a name="image_config_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfigInput"></a>

```python
image_config_input: SagemakerModelContainerImageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `model_data_url_input`<sup>Optional</sup> <a name="model_data_url_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrlInput"></a>

```python
model_data_url_input: str
```

- *Type:* str

---

##### `container_hostname`<sup>Required</sup> <a name="container_hostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostname"></a>

```python
container_hostname: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `model_data_url`<sup>Required</sup> <a name="model_data_url" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrl"></a>

```python
model_data_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SagemakerModelContainer, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>, cdktf.IResolvable]

---


### SagemakerModelInferenceExecutionConfigOutputReference <a name="SagemakerModelInferenceExecutionConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerModelInferenceExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---


### SagemakerModelPrimaryContainerImageConfigOutputReference <a name="SagemakerModelPrimaryContainerImageConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig">put_repository_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAuthConfig">reset_repository_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_repository_auth_config` <a name="put_repository_auth_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig"></a>

```python
def put_repository_auth_config(
  repository_credentials_provider_arn: str
) -> None
```

###### `repository_credentials_provider_arn`<sup>Required</sup> <a name="repository_credentials_provider_arn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig.parameter.repositoryCredentialsProviderArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}.

---

##### `reset_repository_auth_config` <a name="reset_repository_auth_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAuthConfig"></a>

```python
def reset_repository_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig">repository_auth_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput">repository_access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfigInput">repository_auth_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode">repository_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_auth_config`<sup>Required</sup> <a name="repository_auth_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig"></a>

```python
repository_auth_config: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `repository_access_mode_input`<sup>Optional</sup> <a name="repository_access_mode_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```python
repository_access_mode_input: str
```

- *Type:* str

---

##### `repository_auth_config_input`<sup>Optional</sup> <a name="repository_auth_config_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfigInput"></a>

```python
repository_auth_config_input: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---

##### `repository_access_mode`<sup>Required</sup> <a name="repository_access_mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```python
repository_access_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerModelPrimaryContainerImageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---


### SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference <a name="SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput">repository_credentials_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">repository_credentials_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_credentials_provider_arn_input`<sup>Optional</sup> <a name="repository_credentials_provider_arn_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput"></a>

```python
repository_credentials_provider_arn_input: str
```

- *Type:* str

---

##### `repository_credentials_provider_arn`<sup>Required</sup> <a name="repository_credentials_provider_arn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```python
repository_credentials_provider_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---


### SagemakerModelPrimaryContainerOutputReference <a name="SagemakerModelPrimaryContainerOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig">put_image_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname">reset_container_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig">reset_image_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl">reset_model_data_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_image_config` <a name="put_image_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig"></a>

```python
def put_image_config(
  repository_access_mode: str,
  repository_auth_config: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig = None
) -> None
```

###### `repository_access_mode`<sup>Required</sup> <a name="repository_access_mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig.parameter.repositoryAccessMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}.

---

###### `repository_auth_config`<sup>Optional</sup> <a name="repository_auth_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig.parameter.repositoryAuthConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

repository_auth_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

##### `reset_container_hostname` <a name="reset_container_hostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname"></a>

```python
def reset_container_hostname() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_image_config` <a name="reset_image_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig"></a>

```python
def reset_image_config() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_model_data_url` <a name="reset_model_data_url" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl"></a>

```python
def reset_model_data_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig">image_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput">container_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput">image_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput">model_data_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname">container_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl">model_data_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_config`<sup>Required</sup> <a name="image_config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig"></a>

```python
image_config: SagemakerModelPrimaryContainerImageConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a>

---

##### `container_hostname_input`<sup>Optional</sup> <a name="container_hostname_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput"></a>

```python
container_hostname_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_config_input`<sup>Optional</sup> <a name="image_config_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput"></a>

```python
image_config_input: SagemakerModelPrimaryContainerImageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `model_data_url_input`<sup>Optional</sup> <a name="model_data_url_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput"></a>

```python
model_data_url_input: str
```

- *Type:* str

---

##### `container_hostname`<sup>Required</sup> <a name="container_hostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname"></a>

```python
container_hostname: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `model_data_url`<sup>Required</sup> <a name="model_data_url" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl"></a>

```python
model_data_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerModelPrimaryContainer
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---


### SagemakerModelVpcConfigOutputReference <a name="SagemakerModelVpcConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_model

sagemakerModel.SagemakerModelVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerModelVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---



