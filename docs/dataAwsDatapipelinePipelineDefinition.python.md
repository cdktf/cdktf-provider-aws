# `dataAwsDatapipelinePipelineDefinition` Submodule <a name="`dataAwsDatapipelinePipelineDefinition` Submodule" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDatapipelinePipelineDefinition <a name="DataAwsDatapipelinePipelineDefinition" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition(
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
  id: str = None,
  parameter_value: typing.Union[IResolvable, typing.List[DataAwsDatapipelinePipelineDefinitionParameterValue]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.parameterValue">parameter_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>]]</code> | parameter_value block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.pipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.parameterValue"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>]]

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#parameter_value DataAwsDatapipelinePipelineDefinition#parameter_value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue">put_parameter_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_parameter_value` <a name="put_parameter_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue"></a>

```python
def put_parameter_value(
  value: typing.Union[IResolvable, typing.List[DataAwsDatapipelinePipelineDefinitionParameterValue]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterObject">parameter_object</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList">DataAwsDatapipelinePipelineDefinitionParameterObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList">DataAwsDatapipelinePipelineDefinitionParameterValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineObject">pipeline_object</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList">DataAwsDatapipelinePipelineDefinitionPipelineObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValueInput">parameter_value_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineIdInput">pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `parameter_object`<sup>Required</sup> <a name="parameter_object" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterObject"></a>

```python
parameter_object: DataAwsDatapipelinePipelineDefinitionParameterObjectList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList">DataAwsDatapipelinePipelineDefinitionParameterObjectList</a>

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValue"></a>

```python
parameter_value: DataAwsDatapipelinePipelineDefinitionParameterValueList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList">DataAwsDatapipelinePipelineDefinitionParameterValueList</a>

---

##### `pipeline_object`<sup>Required</sup> <a name="pipeline_object" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineObject"></a>

```python
pipeline_object: DataAwsDatapipelinePipelineDefinitionPipelineObjectList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList">DataAwsDatapipelinePipelineDefinitionPipelineObjectList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValueInput"></a>

```python
parameter_value_input: typing.Union[IResolvable, typing.List[DataAwsDatapipelinePipelineDefinitionParameterValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>]]

---

##### `pipeline_id_input`<sup>Optional</sup> <a name="pipeline_id_input" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineIdInput"></a>

```python
pipeline_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDatapipelinePipelineDefinitionConfig <a name="DataAwsDatapipelinePipelineDefinitionConfig" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pipeline_id: str,
  id: str = None,
  parameter_value: typing.Union[IResolvable, typing.List[DataAwsDatapipelinePipelineDefinitionParameterValue]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.parameterValue">parameter_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>]]</code> | parameter_value block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.parameterValue"></a>

```python
parameter_value: typing.Union[IResolvable, typing.List[DataAwsDatapipelinePipelineDefinitionParameterValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>]]

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#parameter_value DataAwsDatapipelinePipelineDefinition#parameter_value}

---

### DataAwsDatapipelinePipelineDefinitionParameterObject <a name="DataAwsDatapipelinePipelineDefinitionParameterObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject()
```


### DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute()
```


### DataAwsDatapipelinePipelineDefinitionParameterValue <a name="DataAwsDatapipelinePipelineDefinitionParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue()
```


### DataAwsDatapipelinePipelineDefinitionPipelineObject <a name="DataAwsDatapipelinePipelineDefinitionPipelineObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject()
```


### DataAwsDatapipelinePipelineDefinitionPipelineObjectField <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectField" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute">DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute">DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute</a>

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectList <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList">DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject">DataAwsDatapipelinePipelineDefinitionParameterObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute"></a>

```python
attribute: DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList">DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsDatapipelinePipelineDefinitionParameterObject
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject">DataAwsDatapipelinePipelineDefinitionParameterObject</a>

---


### DataAwsDatapipelinePipelineDefinitionParameterValueList <a name="DataAwsDatapipelinePipelineDefinitionParameterValueList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsDatapipelinePipelineDefinitionParameterValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>]]

---


### DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsDatapipelinePipelineDefinitionParameterValue, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue">DataAwsDatapipelinePipelineDefinitionParameterValue</a>, cdktf.IResolvable]

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue">ref_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField">DataAwsDatapipelinePipelineDefinitionPipelineObjectField</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `ref_value`<sup>Required</sup> <a name="ref_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue"></a>

```python
ref_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsDatapipelinePipelineDefinitionPipelineObjectField
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField">DataAwsDatapipelinePipelineDefinitionPipelineObjectField</a>

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectList <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_datapipeline_pipeline_definition

dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList">DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject">DataAwsDatapipelinePipelineDefinitionPipelineObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field"></a>

```python
field: DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList">DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsDatapipelinePipelineDefinitionPipelineObject
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject">DataAwsDatapipelinePipelineDefinitionPipelineObject</a>

---



