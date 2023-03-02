# `datapipelinePipelineDefinition` Submodule <a name="`datapipelinePipelineDefinition` Submodule" id="@cdktf/provider-aws.datapipelinePipelineDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatapipelinePipelineDefinition <a name="DatapipelinePipelineDefinition" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pipeline_id: str,
  pipeline_object: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionPipelineObject]],
  id: str = None,
  parameter_object: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterObject]] = None,
  parameter_value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterValue]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.pipelineObject">pipeline_object</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>]]</code> | pipeline_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.parameterObject">parameter_object</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>]]</code> | parameter_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.parameterValue">parameter_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>]]</code> | parameter_value block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.pipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}.

---

##### `pipeline_object`<sup>Required</sup> <a name="pipeline_object" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.pipelineObject"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>]]

pipeline_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_object DatapipelinePipelineDefinition#pipeline_object}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter_object`<sup>Optional</sup> <a name="parameter_object" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.parameterObject"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>]]

parameter_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_object DatapipelinePipelineDefinition#parameter_object}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.parameterValue"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>]]

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_value DatapipelinePipelineDefinition#parameter_value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject">put_parameter_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue">put_parameter_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject">put_pipeline_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterObject">reset_parameter_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_parameter_object` <a name="put_parameter_object" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject"></a>

```python
def put_parameter_object(
  value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterObject]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>]]

---

##### `put_parameter_value` <a name="put_parameter_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue"></a>

```python
def put_parameter_value(
  value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterValue]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>]]

---

##### `put_pipeline_object` <a name="put_pipeline_object" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject"></a>

```python
def put_pipeline_object(
  value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionPipelineObject]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameter_object` <a name="reset_parameter_object" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterObject"></a>

```python
def reset_parameter_object() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObject">parameter_object</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList">DatapipelinePipelineDefinitionParameterObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList">DatapipelinePipelineDefinitionParameterValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObject">pipeline_object</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList">DatapipelinePipelineDefinitionPipelineObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObjectInput">parameter_object_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValueInput">parameter_value_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineIdInput">pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObjectInput">pipeline_object_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parameter_object`<sup>Required</sup> <a name="parameter_object" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObject"></a>

```python
parameter_object: DatapipelinePipelineDefinitionParameterObjectList
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList">DatapipelinePipelineDefinitionParameterObjectList</a>

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValue"></a>

```python
parameter_value: DatapipelinePipelineDefinitionParameterValueList
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList">DatapipelinePipelineDefinitionParameterValueList</a>

---

##### `pipeline_object`<sup>Required</sup> <a name="pipeline_object" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObject"></a>

```python
pipeline_object: DatapipelinePipelineDefinitionPipelineObjectList
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList">DatapipelinePipelineDefinitionPipelineObjectList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameter_object_input`<sup>Optional</sup> <a name="parameter_object_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObjectInput"></a>

```python
parameter_object_input: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterObject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>]]

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValueInput"></a>

```python
parameter_value_input: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>]]

---

##### `pipeline_id_input`<sup>Optional</sup> <a name="pipeline_id_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineIdInput"></a>

```python
pipeline_id_input: str
```

- *Type:* str

---

##### `pipeline_object_input`<sup>Optional</sup> <a name="pipeline_object_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObjectInput"></a>

```python
pipeline_object_input: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionPipelineObject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatapipelinePipelineDefinitionConfig <a name="DatapipelinePipelineDefinitionConfig" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pipeline_id: str,
  pipeline_object: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionPipelineObject]],
  id: str = None,
  parameter_object: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterObject]] = None,
  parameter_value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterValue]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineObject">pipeline_object</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>]]</code> | pipeline_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterObject">parameter_object</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>]]</code> | parameter_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterValue">parameter_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>]]</code> | parameter_value block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}.

---

##### `pipeline_object`<sup>Required</sup> <a name="pipeline_object" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineObject"></a>

```python
pipeline_object: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionPipelineObject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>]]

pipeline_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_object DatapipelinePipelineDefinition#pipeline_object}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter_object`<sup>Optional</sup> <a name="parameter_object" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterObject"></a>

```python
parameter_object: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterObject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>]]

parameter_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_object DatapipelinePipelineDefinition#parameter_object}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterValue"></a>

```python
parameter_value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>]]

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_value DatapipelinePipelineDefinition#parameter_value}

---

### DatapipelinePipelineDefinitionParameterObject <a name="DatapipelinePipelineDefinitionParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject(
  id: str,
  attribute: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterObjectAttribute]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.attribute">attribute</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>]]</code> | attribute block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.attribute"></a>

```python
attribute: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterObjectAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>]]

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#attribute DatapipelinePipelineDefinition#attribute}

---

### DatapipelinePipelineDefinitionParameterObjectAttribute <a name="DatapipelinePipelineDefinitionParameterObjectAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute(
  key: str,
  string_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}.

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

### DatapipelinePipelineDefinitionParameterValue <a name="DatapipelinePipelineDefinitionParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue(
  id: str,
  string_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

### DatapipelinePipelineDefinitionPipelineObject <a name="DatapipelinePipelineDefinitionPipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject(
  id: str,
  name: str,
  field: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionPipelineObjectField]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#name DatapipelinePipelineDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.field">field</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>]]</code> | field block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#name DatapipelinePipelineDefinition#name}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.field"></a>

```python
field: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionPipelineObjectField]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>]]

field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#field DatapipelinePipelineDefinition#field}

---

### DatapipelinePipelineDefinitionPipelineObjectField <a name="DatapipelinePipelineDefinitionPipelineObjectField" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField(
  key: str,
  ref_value: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.refValue">ref_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#ref_value DatapipelinePipelineDefinition#ref_value}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}.

---

##### `ref_value`<sup>Optional</sup> <a name="ref_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.refValue"></a>

```python
ref_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#ref_value DatapipelinePipelineDefinition#ref_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatapipelinePipelineDefinitionParameterObjectAttributeList <a name="DatapipelinePipelineDefinitionParameterObjectAttributeList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterObjectAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>]]

---


### DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference <a name="DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DatapipelinePipelineDefinitionParameterObjectAttribute, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>, cdktf.IResolvable]

---


### DatapipelinePipelineDefinitionParameterObjectList <a name="DatapipelinePipelineDefinitionParameterObjectList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatapipelinePipelineDefinitionParameterObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterObject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>]]

---


### DatapipelinePipelineDefinitionParameterObjectOutputReference <a name="DatapipelinePipelineDefinitionParameterObjectOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute">put_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attribute` <a name="put_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute"></a>

```python
def put_attribute(
  value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterObjectAttribute]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>]]

---

##### `reset_attribute` <a name="reset_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList">DatapipelinePipelineDefinitionParameterObjectAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attributeInput">attribute_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute"></a>

```python
attribute: DatapipelinePipelineDefinitionParameterObjectAttributeList
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList">DatapipelinePipelineDefinitionParameterObjectAttributeList</a>

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attributeInput"></a>

```python
attribute_input: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterObjectAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute">DatapipelinePipelineDefinitionParameterObjectAttribute</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DatapipelinePipelineDefinitionParameterObject, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject">DatapipelinePipelineDefinitionParameterObject</a>, cdktf.IResolvable]

---


### DatapipelinePipelineDefinitionParameterValueList <a name="DatapipelinePipelineDefinitionParameterValueList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatapipelinePipelineDefinitionParameterValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionParameterValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>]]

---


### DatapipelinePipelineDefinitionParameterValueOutputReference <a name="DatapipelinePipelineDefinitionParameterValueOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DatapipelinePipelineDefinitionParameterValue, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue">DatapipelinePipelineDefinitionParameterValue</a>, cdktf.IResolvable]

---


### DatapipelinePipelineDefinitionPipelineObjectFieldList <a name="DatapipelinePipelineDefinitionPipelineObjectFieldList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionPipelineObjectField]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>]]

---


### DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference <a name="DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetRefValue">reset_ref_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ref_value` <a name="reset_ref_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetRefValue"></a>

```python
def reset_ref_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValueInput">ref_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue">ref_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `ref_value_input`<sup>Optional</sup> <a name="ref_value_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValueInput"></a>

```python
ref_value_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `ref_value`<sup>Required</sup> <a name="ref_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue"></a>

```python
ref_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DatapipelinePipelineDefinitionPipelineObjectField, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>, cdktf.IResolvable]

---


### DatapipelinePipelineDefinitionPipelineObjectList <a name="DatapipelinePipelineDefinitionPipelineObjectList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatapipelinePipelineDefinitionPipelineObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionPipelineObject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>]]

---


### DatapipelinePipelineDefinitionPipelineObjectOutputReference <a name="DatapipelinePipelineDefinitionPipelineObjectOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datapipeline_pipeline_definition

datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField">put_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resetField">reset_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field` <a name="put_field" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField"></a>

```python
def put_field(
  value: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionPipelineObjectField]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>]]

---

##### `reset_field` <a name="reset_field" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resetField"></a>

```python
def reset_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList">DatapipelinePipelineDefinitionPipelineObjectFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fieldInput">field_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field"></a>

```python
field: DatapipelinePipelineDefinitionPipelineObjectFieldList
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList">DatapipelinePipelineDefinitionPipelineObjectFieldList</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fieldInput"></a>

```python
field_input: typing.Union[IResolvable, typing.List[DatapipelinePipelineDefinitionPipelineObjectField]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField">DatapipelinePipelineDefinitionPipelineObjectField</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DatapipelinePipelineDefinitionPipelineObject, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject">DatapipelinePipelineDefinitionPipelineObject</a>, cdktf.IResolvable]

---



