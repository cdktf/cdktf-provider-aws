# `sagemakerFlowDefinition` Submodule <a name="`sagemakerFlowDefinition` Submodule" id="@cdktf/provider-aws.sagemakerFlowDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerFlowDefinition <a name="SagemakerFlowDefinition" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition aws_sagemaker_flow_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  flow_definition_name: str,
  human_loop_config: SagemakerFlowDefinitionHumanLoopConfig,
  output_config: SagemakerFlowDefinitionOutputConfig,
  role_arn: str,
  human_loop_activation_config: SagemakerFlowDefinitionHumanLoopActivationConfig = None,
  human_loop_request_source: SagemakerFlowDefinitionHumanLoopRequestSource = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.flowDefinitionName">flow_definition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopConfig">human_loop_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | human_loop_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.outputConfig">output_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopActivationConfig">human_loop_activation_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | human_loop_activation_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopRequestSource">human_loop_request_source</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | human_loop_request_source block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `flow_definition_name`<sup>Required</sup> <a name="flow_definition_name" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.flowDefinitionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}.

---

##### `human_loop_config`<sup>Required</sup> <a name="human_loop_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

human_loop_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_config SagemakerFlowDefinition#human_loop_config}

---

##### `output_config`<sup>Required</sup> <a name="output_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.outputConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#output_config SagemakerFlowDefinition#output_config}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}.

---

##### `human_loop_activation_config`<sup>Optional</sup> <a name="human_loop_activation_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopActivationConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

human_loop_activation_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}

---

##### `human_loop_request_source`<sup>Optional</sup> <a name="human_loop_request_source" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopRequestSource"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

human_loop_request_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig">put_human_loop_activation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig">put_human_loop_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource">put_human_loop_request_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig">put_output_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopActivationConfig">reset_human_loop_activation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopRequestSource">reset_human_loop_request_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_human_loop_activation_config` <a name="put_human_loop_activation_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig"></a>

```python
def put_human_loop_activation_config(
  human_loop_activation_conditions_config: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig = None
) -> None
```

###### `human_loop_activation_conditions_config`<sup>Optional</sup> <a name="human_loop_activation_conditions_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig.parameter.humanLoopActivationConditionsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

human_loop_activation_conditions_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions_config SagemakerFlowDefinition#human_loop_activation_conditions_config}

---

##### `put_human_loop_config` <a name="put_human_loop_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig"></a>

```python
def put_human_loop_config(
  human_task_ui_arn: str,
  task_count: typing.Union[int, float],
  task_description: str,
  task_title: str,
  workteam_arn: str,
  public_workforce_task_price: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice = None,
  task_availability_lifetime_in_seconds: typing.Union[int, float] = None,
  task_keywords: typing.List[str] = None,
  task_time_limit_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `human_task_ui_arn`<sup>Required</sup> <a name="human_task_ui_arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.humanTaskUiArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}.

---

###### `task_count`<sup>Required</sup> <a name="task_count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.taskCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}.

---

###### `task_description`<sup>Required</sup> <a name="task_description" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.taskDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}.

---

###### `task_title`<sup>Required</sup> <a name="task_title" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.taskTitle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}.

---

###### `workteam_arn`<sup>Required</sup> <a name="workteam_arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.workteamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}.

---

###### `public_workforce_task_price`<sup>Optional</sup> <a name="public_workforce_task_price" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.publicWorkforceTaskPrice"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

public_workforce_task_price block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#public_workforce_task_price SagemakerFlowDefinition#public_workforce_task_price}

---

###### `task_availability_lifetime_in_seconds`<sup>Optional</sup> <a name="task_availability_lifetime_in_seconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.taskAvailabilityLifetimeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}.

---

###### `task_keywords`<sup>Optional</sup> <a name="task_keywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.taskKeywords"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}.

---

###### `task_time_limit_in_seconds`<sup>Optional</sup> <a name="task_time_limit_in_seconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.taskTimeLimitInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}.

---

##### `put_human_loop_request_source` <a name="put_human_loop_request_source" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource"></a>

```python
def put_human_loop_request_source(
  aws_managed_human_loop_request_source: str
) -> None
```

###### `aws_managed_human_loop_request_source`<sup>Required</sup> <a name="aws_managed_human_loop_request_source" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource.parameter.awsManagedHumanLoopRequestSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}.

---

##### `put_output_config` <a name="put_output_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig"></a>

```python
def put_output_config(
  s3_output_path: str,
  kms_key_id: str = None
) -> None
```

###### `s3_output_path`<sup>Required</sup> <a name="s3_output_path" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig.parameter.s3OutputPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}.

---

##### `reset_human_loop_activation_config` <a name="reset_human_loop_activation_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopActivationConfig"></a>

```python
def reset_human_loop_activation_config() -> None
```

##### `reset_human_loop_request_source` <a name="reset_human_loop_request_source" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopRequestSource"></a>

```python
def reset_human_loop_request_source() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfig">human_loop_activation_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfig">human_loop_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference">SagemakerFlowDefinitionHumanLoopConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSource">human_loop_request_source</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference">SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfig">output_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference">SagemakerFlowDefinitionOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionNameInput">flow_definition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfigInput">human_loop_activation_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfigInput">human_loop_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSourceInput">human_loop_request_source_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfigInput">output_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionName">flow_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `human_loop_activation_config`<sup>Required</sup> <a name="human_loop_activation_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfig"></a>

```python
human_loop_activation_config: SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference</a>

---

##### `human_loop_config`<sup>Required</sup> <a name="human_loop_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfig"></a>

```python
human_loop_config: SagemakerFlowDefinitionHumanLoopConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference">SagemakerFlowDefinitionHumanLoopConfigOutputReference</a>

---

##### `human_loop_request_source`<sup>Required</sup> <a name="human_loop_request_source" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSource"></a>

```python
human_loop_request_source: SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference">SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference</a>

---

##### `output_config`<sup>Required</sup> <a name="output_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfig"></a>

```python
output_config: SagemakerFlowDefinitionOutputConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference">SagemakerFlowDefinitionOutputConfigOutputReference</a>

---

##### `flow_definition_name_input`<sup>Optional</sup> <a name="flow_definition_name_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionNameInput"></a>

```python
flow_definition_name_input: str
```

- *Type:* str

---

##### `human_loop_activation_config_input`<sup>Optional</sup> <a name="human_loop_activation_config_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfigInput"></a>

```python
human_loop_activation_config_input: SagemakerFlowDefinitionHumanLoopActivationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---

##### `human_loop_config_input`<sup>Optional</sup> <a name="human_loop_config_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfigInput"></a>

```python
human_loop_config_input: SagemakerFlowDefinitionHumanLoopConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---

##### `human_loop_request_source_input`<sup>Optional</sup> <a name="human_loop_request_source_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSourceInput"></a>

```python
human_loop_request_source_input: SagemakerFlowDefinitionHumanLoopRequestSource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `output_config_input`<sup>Optional</sup> <a name="output_config_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfigInput"></a>

```python
output_config_input: SagemakerFlowDefinitionOutputConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `flow_definition_name`<sup>Required</sup> <a name="flow_definition_name" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionName"></a>

```python
flow_definition_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerFlowDefinitionConfig <a name="SagemakerFlowDefinitionConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  flow_definition_name: str,
  human_loop_config: SagemakerFlowDefinitionHumanLoopConfig,
  output_config: SagemakerFlowDefinitionOutputConfig,
  role_arn: str,
  human_loop_activation_config: SagemakerFlowDefinitionHumanLoopActivationConfig = None,
  human_loop_request_source: SagemakerFlowDefinitionHumanLoopRequestSource = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.flowDefinitionName">flow_definition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopConfig">human_loop_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | human_loop_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.outputConfig">output_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopActivationConfig">human_loop_activation_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | human_loop_activation_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopRequestSource">human_loop_request_source</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | human_loop_request_source block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `flow_definition_name`<sup>Required</sup> <a name="flow_definition_name" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.flowDefinitionName"></a>

```python
flow_definition_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}.

---

##### `human_loop_config`<sup>Required</sup> <a name="human_loop_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopConfig"></a>

```python
human_loop_config: SagemakerFlowDefinitionHumanLoopConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

human_loop_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_config SagemakerFlowDefinition#human_loop_config}

---

##### `output_config`<sup>Required</sup> <a name="output_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.outputConfig"></a>

```python
output_config: SagemakerFlowDefinitionOutputConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#output_config SagemakerFlowDefinition#output_config}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}.

---

##### `human_loop_activation_config`<sup>Optional</sup> <a name="human_loop_activation_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopActivationConfig"></a>

```python
human_loop_activation_config: SagemakerFlowDefinitionHumanLoopActivationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

human_loop_activation_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}

---

##### `human_loop_request_source`<sup>Optional</sup> <a name="human_loop_request_source" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopRequestSource"></a>

```python
human_loop_request_source: SagemakerFlowDefinitionHumanLoopRequestSource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

human_loop_request_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}.

---

### SagemakerFlowDefinitionHumanLoopActivationConfig <a name="SagemakerFlowDefinitionHumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig(
  human_loop_activation_conditions_config: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.property.humanLoopActivationConditionsConfig">human_loop_activation_conditions_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | human_loop_activation_conditions_config block. |

---

##### `human_loop_activation_conditions_config`<sup>Optional</sup> <a name="human_loop_activation_conditions_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.property.humanLoopActivationConditionsConfig"></a>

```python
human_loop_activation_conditions_config: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

human_loop_activation_conditions_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions_config SagemakerFlowDefinition#human_loop_activation_conditions_config}

---

### SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig <a name="SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig(
  human_loop_activation_conditions: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.property.humanLoopActivationConditions">human_loop_activation_conditions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}. |

---

##### `human_loop_activation_conditions`<sup>Required</sup> <a name="human_loop_activation_conditions" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.property.humanLoopActivationConditions"></a>

```python
human_loop_activation_conditions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}.

---

### SagemakerFlowDefinitionHumanLoopConfig <a name="SagemakerFlowDefinitionHumanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig(
  human_task_ui_arn: str,
  task_count: typing.Union[int, float],
  task_description: str,
  task_title: str,
  workteam_arn: str,
  public_workforce_task_price: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice = None,
  task_availability_lifetime_in_seconds: typing.Union[int, float] = None,
  task_keywords: typing.List[str] = None,
  task_time_limit_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.humanTaskUiArn">human_task_ui_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskDescription">task_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTitle">task_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.workteamArn">workteam_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.publicWorkforceTaskPrice">public_workforce_task_price</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | public_workforce_task_price block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskAvailabilityLifetimeInSeconds">task_availability_lifetime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskKeywords">task_keywords</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTimeLimitInSeconds">task_time_limit_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}. |

---

##### `human_task_ui_arn`<sup>Required</sup> <a name="human_task_ui_arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.humanTaskUiArn"></a>

```python
human_task_ui_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}.

---

##### `task_count`<sup>Required</sup> <a name="task_count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}.

---

##### `task_description`<sup>Required</sup> <a name="task_description" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskDescription"></a>

```python
task_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}.

---

##### `task_title`<sup>Required</sup> <a name="task_title" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTitle"></a>

```python
task_title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}.

---

##### `workteam_arn`<sup>Required</sup> <a name="workteam_arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.workteamArn"></a>

```python
workteam_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}.

---

##### `public_workforce_task_price`<sup>Optional</sup> <a name="public_workforce_task_price" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.publicWorkforceTaskPrice"></a>

```python
public_workforce_task_price: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

public_workforce_task_price block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#public_workforce_task_price SagemakerFlowDefinition#public_workforce_task_price}

---

##### `task_availability_lifetime_in_seconds`<sup>Optional</sup> <a name="task_availability_lifetime_in_seconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskAvailabilityLifetimeInSeconds"></a>

```python
task_availability_lifetime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}.

---

##### `task_keywords`<sup>Optional</sup> <a name="task_keywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskKeywords"></a>

```python
task_keywords: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}.

---

##### `task_time_limit_in_seconds`<sup>Optional</sup> <a name="task_time_limit_in_seconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTimeLimitInSeconds"></a>

```python
task_time_limit_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}.

---

### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice(
  amount_in_usd: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.property.amountInUsd">amount_in_usd</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | amount_in_usd block. |

---

##### `amount_in_usd`<sup>Optional</sup> <a name="amount_in_usd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.property.amountInUsd"></a>

```python
amount_in_usd: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

amount_in_usd block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#amount_in_usd SagemakerFlowDefinition#amount_in_usd}

---

### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd(
  cents: typing.Union[int, float] = None,
  dollars: typing.Union[int, float] = None,
  tenth_fractions_of_a_cent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.cents">cents</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars">dollars</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent">tenth_fractions_of_a_cent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}. |

---

##### `cents`<sup>Optional</sup> <a name="cents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.cents"></a>

```python
cents: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}.

---

##### `dollars`<sup>Optional</sup> <a name="dollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars"></a>

```python
dollars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}.

---

##### `tenth_fractions_of_a_cent`<sup>Optional</sup> <a name="tenth_fractions_of_a_cent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent"></a>

```python
tenth_fractions_of_a_cent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}.

---

### SagemakerFlowDefinitionHumanLoopRequestSource <a name="SagemakerFlowDefinitionHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource(
  aws_managed_human_loop_request_source: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.property.awsManagedHumanLoopRequestSource">aws_managed_human_loop_request_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}. |

---

##### `aws_managed_human_loop_request_source`<sup>Required</sup> <a name="aws_managed_human_loop_request_source" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.property.awsManagedHumanLoopRequestSource"></a>

```python
aws_managed_human_loop_request_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}.

---

### SagemakerFlowDefinitionOutputConfig <a name="SagemakerFlowDefinitionOutputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig(
  s3_output_path: str,
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.s3OutputPath">s3_output_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}. |

---

##### `s3_output_path`<sup>Required</sup> <a name="s3_output_path" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.s3OutputPath"></a>

```python
s3_output_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditionsInput">human_loop_activation_conditions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditions">human_loop_activation_conditions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `human_loop_activation_conditions_input`<sup>Optional</sup> <a name="human_loop_activation_conditions_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditionsInput"></a>

```python
human_loop_activation_conditions_input: str
```

- *Type:* str

---

##### `human_loop_activation_conditions`<sup>Required</sup> <a name="human_loop_activation_conditions" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditions"></a>

```python
human_loop_activation_conditions: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---


### SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig">put_human_loop_activation_conditions_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resetHumanLoopActivationConditionsConfig">reset_human_loop_activation_conditions_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_human_loop_activation_conditions_config` <a name="put_human_loop_activation_conditions_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig"></a>

```python
def put_human_loop_activation_conditions_config(
  human_loop_activation_conditions: str
) -> None
```

###### `human_loop_activation_conditions`<sup>Required</sup> <a name="human_loop_activation_conditions" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig.parameter.humanLoopActivationConditions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}.

---

##### `reset_human_loop_activation_conditions_config` <a name="reset_human_loop_activation_conditions_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resetHumanLoopActivationConditionsConfig"></a>

```python
def reset_human_loop_activation_conditions_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfig">human_loop_activation_conditions_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfigInput">human_loop_activation_conditions_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `human_loop_activation_conditions_config`<sup>Required</sup> <a name="human_loop_activation_conditions_config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfig"></a>

```python
human_loop_activation_conditions_config: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference</a>

---

##### `human_loop_activation_conditions_config_input`<sup>Optional</sup> <a name="human_loop_activation_conditions_config_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfigInput"></a>

```python
human_loop_activation_conditions_config_input: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerFlowDefinitionHumanLoopActivationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---


### SagemakerFlowDefinitionHumanLoopConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice">put_public_workforce_task_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetPublicWorkforceTaskPrice">reset_public_workforce_task_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds">reset_task_availability_lifetime_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskKeywords">reset_task_keywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskTimeLimitInSeconds">reset_task_time_limit_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_public_workforce_task_price` <a name="put_public_workforce_task_price" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice"></a>

```python
def put_public_workforce_task_price(
  amount_in_usd: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd = None
) -> None
```

###### `amount_in_usd`<sup>Optional</sup> <a name="amount_in_usd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice.parameter.amountInUsd"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

amount_in_usd block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#amount_in_usd SagemakerFlowDefinition#amount_in_usd}

---

##### `reset_public_workforce_task_price` <a name="reset_public_workforce_task_price" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetPublicWorkforceTaskPrice"></a>

```python
def reset_public_workforce_task_price() -> None
```

##### `reset_task_availability_lifetime_in_seconds` <a name="reset_task_availability_lifetime_in_seconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds"></a>

```python
def reset_task_availability_lifetime_in_seconds() -> None
```

##### `reset_task_keywords` <a name="reset_task_keywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskKeywords"></a>

```python
def reset_task_keywords() -> None
```

##### `reset_task_time_limit_in_seconds` <a name="reset_task_time_limit_in_seconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskTimeLimitInSeconds"></a>

```python
def reset_task_time_limit_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPrice">public_workforce_task_price</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArnInput">human_task_ui_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPriceInput">public_workforce_task_price_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput">task_availability_lifetime_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCountInput">task_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescriptionInput">task_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywordsInput">task_keywords_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSecondsInput">task_time_limit_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitleInput">task_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArnInput">workteam_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArn">human_task_ui_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSeconds">task_availability_lifetime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescription">task_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywords">task_keywords</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSeconds">task_time_limit_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitle">task_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArn">workteam_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_workforce_task_price`<sup>Required</sup> <a name="public_workforce_task_price" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPrice"></a>

```python
public_workforce_task_price: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference</a>

---

##### `human_task_ui_arn_input`<sup>Optional</sup> <a name="human_task_ui_arn_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArnInput"></a>

```python
human_task_ui_arn_input: str
```

- *Type:* str

---

##### `public_workforce_task_price_input`<sup>Optional</sup> <a name="public_workforce_task_price_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPriceInput"></a>

```python
public_workforce_task_price_input: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---

##### `task_availability_lifetime_in_seconds_input`<sup>Optional</sup> <a name="task_availability_lifetime_in_seconds_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput"></a>

```python
task_availability_lifetime_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_count_input`<sup>Optional</sup> <a name="task_count_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCountInput"></a>

```python
task_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_description_input`<sup>Optional</sup> <a name="task_description_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescriptionInput"></a>

```python
task_description_input: str
```

- *Type:* str

---

##### `task_keywords_input`<sup>Optional</sup> <a name="task_keywords_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywordsInput"></a>

```python
task_keywords_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `task_time_limit_in_seconds_input`<sup>Optional</sup> <a name="task_time_limit_in_seconds_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSecondsInput"></a>

```python
task_time_limit_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_title_input`<sup>Optional</sup> <a name="task_title_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitleInput"></a>

```python
task_title_input: str
```

- *Type:* str

---

##### `workteam_arn_input`<sup>Optional</sup> <a name="workteam_arn_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArnInput"></a>

```python
workteam_arn_input: str
```

- *Type:* str

---

##### `human_task_ui_arn`<sup>Required</sup> <a name="human_task_ui_arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArn"></a>

```python
human_task_ui_arn: str
```

- *Type:* str

---

##### `task_availability_lifetime_in_seconds`<sup>Required</sup> <a name="task_availability_lifetime_in_seconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSeconds"></a>

```python
task_availability_lifetime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_count`<sup>Required</sup> <a name="task_count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_description`<sup>Required</sup> <a name="task_description" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescription"></a>

```python
task_description: str
```

- *Type:* str

---

##### `task_keywords`<sup>Required</sup> <a name="task_keywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywords"></a>

```python
task_keywords: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `task_time_limit_in_seconds`<sup>Required</sup> <a name="task_time_limit_in_seconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSeconds"></a>

```python
task_time_limit_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_title`<sup>Required</sup> <a name="task_title" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitle"></a>

```python
task_title: str
```

- *Type:* str

---

##### `workteam_arn`<sup>Required</sup> <a name="workteam_arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArn"></a>

```python
workteam_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerFlowDefinitionHumanLoopConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---


### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents">reset_cents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars">reset_dollars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent">reset_tenth_fractions_of_a_cent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cents` <a name="reset_cents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents"></a>

```python
def reset_cents() -> None
```

##### `reset_dollars` <a name="reset_dollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars"></a>

```python
def reset_dollars() -> None
```

##### `reset_tenth_fractions_of_a_cent` <a name="reset_tenth_fractions_of_a_cent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent"></a>

```python
def reset_tenth_fractions_of_a_cent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput">cents_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput">dollars_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput">tenth_fractions_of_a_cent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents">cents</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars">dollars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent">tenth_fractions_of_a_cent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cents_input`<sup>Optional</sup> <a name="cents_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput"></a>

```python
cents_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dollars_input`<sup>Optional</sup> <a name="dollars_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput"></a>

```python
dollars_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenth_fractions_of_a_cent_input`<sup>Optional</sup> <a name="tenth_fractions_of_a_cent_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput"></a>

```python
tenth_fractions_of_a_cent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cents`<sup>Required</sup> <a name="cents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents"></a>

```python
cents: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dollars`<sup>Required</sup> <a name="dollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars"></a>

```python
dollars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenth_fractions_of_a_cent`<sup>Required</sup> <a name="tenth_fractions_of_a_cent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent"></a>

```python
tenth_fractions_of_a_cent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---


### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd">put_amount_in_usd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd">reset_amount_in_usd</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_amount_in_usd` <a name="put_amount_in_usd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd"></a>

```python
def put_amount_in_usd(
  cents: typing.Union[int, float] = None,
  dollars: typing.Union[int, float] = None,
  tenth_fractions_of_a_cent: typing.Union[int, float] = None
) -> None
```

###### `cents`<sup>Optional</sup> <a name="cents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd.parameter.cents"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}.

---

###### `dollars`<sup>Optional</sup> <a name="dollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd.parameter.dollars"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}.

---

###### `tenth_fractions_of_a_cent`<sup>Optional</sup> <a name="tenth_fractions_of_a_cent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd.parameter.tenthFractionsOfACent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}.

---

##### `reset_amount_in_usd` <a name="reset_amount_in_usd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd"></a>

```python
def reset_amount_in_usd() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd">amount_in_usd</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput">amount_in_usd_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount_in_usd`<sup>Required</sup> <a name="amount_in_usd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd"></a>

```python
amount_in_usd: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference</a>

---

##### `amount_in_usd_input`<sup>Optional</sup> <a name="amount_in_usd_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput"></a>

```python
amount_in_usd_input: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---


### SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference <a name="SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSourceInput">aws_managed_human_loop_request_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSource">aws_managed_human_loop_request_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_managed_human_loop_request_source_input`<sup>Optional</sup> <a name="aws_managed_human_loop_request_source_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSourceInput"></a>

```python
aws_managed_human_loop_request_source_input: str
```

- *Type:* str

---

##### `aws_managed_human_loop_request_source`<sup>Required</sup> <a name="aws_managed_human_loop_request_source" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSource"></a>

```python
aws_managed_human_loop_request_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerFlowDefinitionHumanLoopRequestSource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---


### SagemakerFlowDefinitionOutputConfigOutputReference <a name="SagemakerFlowDefinitionOutputConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_flow_definition

sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPathInput">s3_output_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPath">s3_output_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `s3_output_path_input`<sup>Optional</sup> <a name="s3_output_path_input" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPathInput"></a>

```python
s3_output_path_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `s3_output_path`<sup>Required</sup> <a name="s3_output_path" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPath"></a>

```python
s3_output_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerFlowDefinitionOutputConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---



