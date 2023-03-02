# `kinesisAnalyticsApplication` Submodule <a name="`kinesisAnalyticsApplication` Submodule" id="@cdktf/provider-aws.kinesisAnalyticsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisAnalyticsApplication <a name="KinesisAnalyticsApplication" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application aws_kinesis_analytics_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  cloudwatch_logging_options: KinesisAnalyticsApplicationCloudwatchLoggingOptions = None,
  code: str = None,
  description: str = None,
  id: str = None,
  inputs: KinesisAnalyticsApplicationInputs = None,
  outputs: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationOutputs]] = None,
  reference_data_sources: KinesisAnalyticsApplicationReferenceDataSources = None,
  start_application: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.cloudwatchLoggingOptions">cloudwatch_logging_options</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a></code> | cloudwatch_logging_options block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#code KinesisAnalyticsApplication#code}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#description KinesisAnalyticsApplication#description}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#id KinesisAnalyticsApplication#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.inputs">inputs</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a></code> | inputs block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.outputs">outputs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>]]</code> | outputs block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.referenceDataSources">reference_data_sources</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a></code> | reference_data_sources block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.startApplication">start_application</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#start_application KinesisAnalyticsApplication#start_application}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags KinesisAnalyticsApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags_all KinesisAnalyticsApplication#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `cloudwatch_logging_options`<sup>Optional</sup> <a name="cloudwatch_logging_options" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.cloudwatchLoggingOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

cloudwatch_logging_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#cloudwatch_logging_options KinesisAnalyticsApplication#cloudwatch_logging_options}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.code"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#code KinesisAnalyticsApplication#code}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#description KinesisAnalyticsApplication#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#id KinesisAnalyticsApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.inputs"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

inputs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#inputs KinesisAnalyticsApplication#inputs}

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.outputs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>]]

outputs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#outputs KinesisAnalyticsApplication#outputs}

---

##### `reference_data_sources`<sup>Optional</sup> <a name="reference_data_sources" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.referenceDataSources"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

reference_data_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#reference_data_sources KinesisAnalyticsApplication#reference_data_sources}

---

##### `start_application`<sup>Optional</sup> <a name="start_application" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.startApplication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#start_application KinesisAnalyticsApplication#start_application}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags KinesisAnalyticsApplication#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags_all KinesisAnalyticsApplication#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putCloudwatchLoggingOptions">put_cloudwatch_logging_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs">put_inputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putOutputs">put_outputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putReferenceDataSources">put_reference_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCloudwatchLoggingOptions">reset_cloudwatch_logging_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetInputs">reset_inputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOutputs">reset_outputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetReferenceDataSources">reset_reference_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetStartApplication">reset_start_application</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cloudwatch_logging_options` <a name="put_cloudwatch_logging_options" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putCloudwatchLoggingOptions"></a>

```python
def put_cloudwatch_logging_options(
  log_stream_arn: str,
  role_arn: str
) -> None
```

###### `log_stream_arn`<sup>Required</sup> <a name="log_stream_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putCloudwatchLoggingOptions.parameter.logStreamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putCloudwatchLoggingOptions.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

##### `put_inputs` <a name="put_inputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs"></a>

```python
def put_inputs(
  name_prefix: str,
  schema: KinesisAnalyticsApplicationInputsSchema,
  kinesis_firehose: KinesisAnalyticsApplicationInputsKinesisFirehose = None,
  kinesis_stream: KinesisAnalyticsApplicationInputsKinesisStream = None,
  parallelism: KinesisAnalyticsApplicationInputsParallelism = None,
  processing_configuration: KinesisAnalyticsApplicationInputsProcessingConfiguration = None,
  starting_position_configuration: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsStartingPositionConfiguration]] = None
) -> None
```

###### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name_prefix KinesisAnalyticsApplication#name_prefix}.

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs.parameter.schema"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}

---

###### `kinesis_firehose`<sup>Optional</sup> <a name="kinesis_firehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs.parameter.kinesisFirehose"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

kinesis_firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}

---

###### `kinesis_stream`<sup>Optional</sup> <a name="kinesis_stream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs.parameter.kinesisStream"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

kinesis_stream block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}

---

###### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs.parameter.parallelism"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

parallelism block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#parallelism KinesisAnalyticsApplication#parallelism}

---

###### `processing_configuration`<sup>Optional</sup> <a name="processing_configuration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs.parameter.processingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

processing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#processing_configuration KinesisAnalyticsApplication#processing_configuration}

---

###### `starting_position_configuration`<sup>Optional</sup> <a name="starting_position_configuration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs.parameter.startingPositionConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>]]

starting_position_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}

---

##### `put_outputs` <a name="put_outputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putOutputs"></a>

```python
def put_outputs(
  value: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationOutputs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putOutputs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>]]

---

##### `put_reference_data_sources` <a name="put_reference_data_sources" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putReferenceDataSources"></a>

```python
def put_reference_data_sources(
  s3: KinesisAnalyticsApplicationReferenceDataSourcesS3,
  schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema,
  table_name: str
) -> None
```

###### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putReferenceDataSources.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#s3 KinesisAnalyticsApplication#s3}

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putReferenceDataSources.parameter.schema"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}

---

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putReferenceDataSources.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#table_name KinesisAnalyticsApplication#table_name}.

---

##### `reset_cloudwatch_logging_options` <a name="reset_cloudwatch_logging_options" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCloudwatchLoggingOptions"></a>

```python
def reset_cloudwatch_logging_options() -> None
```

##### `reset_code` <a name="reset_code" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inputs` <a name="reset_inputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetInputs"></a>

```python
def reset_inputs() -> None
```

##### `reset_outputs` <a name="reset_outputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOutputs"></a>

```python
def reset_outputs() -> None
```

##### `reset_reference_data_sources` <a name="reset_reference_data_sources" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetReferenceDataSources"></a>

```python
def reset_reference_data_sources() -> None
```

##### `reset_start_application` <a name="reset_start_application" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetStartApplication"></a>

```python
def reset_start_application() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptions">cloudwatch_logging_options</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference">KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.createTimestamp">create_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputs">inputs</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference">KinesisAnalyticsApplicationInputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lastUpdateTimestamp">last_update_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputs">outputs</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList">KinesisAnalyticsApplicationOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSources">reference_data_sources</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptionsInput">cloudwatch_logging_options_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputsInput">inputs_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputsInput">outputs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSourcesInput">reference_data_sources_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplicationInput">start_application_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplication">start_application</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_logging_options`<sup>Required</sup> <a name="cloudwatch_logging_options" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptions"></a>

```python
cloudwatch_logging_options: KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference">KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference</a>

---

##### `create_timestamp`<sup>Required</sup> <a name="create_timestamp" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.createTimestamp"></a>

```python
create_timestamp: str
```

- *Type:* str

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputs"></a>

```python
inputs: KinesisAnalyticsApplicationInputsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference">KinesisAnalyticsApplicationInputsOutputReference</a>

---

##### `last_update_timestamp`<sup>Required</sup> <a name="last_update_timestamp" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lastUpdateTimestamp"></a>

```python
last_update_timestamp: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputs"></a>

```python
outputs: KinesisAnalyticsApplicationOutputsList
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList">KinesisAnalyticsApplicationOutputsList</a>

---

##### `reference_data_sources`<sup>Required</sup> <a name="reference_data_sources" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSources"></a>

```python
reference_data_sources: KinesisAnalyticsApplicationReferenceDataSourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloudwatch_logging_options_input`<sup>Optional</sup> <a name="cloudwatch_logging_options_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptionsInput"></a>

```python
cloudwatch_logging_options_input: KinesisAnalyticsApplicationCloudwatchLoggingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inputs_input`<sup>Optional</sup> <a name="inputs_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputsInput"></a>

```python
inputs_input: KinesisAnalyticsApplicationInputs
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `outputs_input`<sup>Optional</sup> <a name="outputs_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputsInput"></a>

```python
outputs_input: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationOutputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>]]

---

##### `reference_data_sources_input`<sup>Optional</sup> <a name="reference_data_sources_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSourcesInput"></a>

```python
reference_data_sources_input: KinesisAnalyticsApplicationReferenceDataSources
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

---

##### `start_application_input`<sup>Optional</sup> <a name="start_application_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplicationInput"></a>

```python
start_application_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_application`<sup>Required</sup> <a name="start_application" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplication"></a>

```python
start_application: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisAnalyticsApplicationCloudwatchLoggingOptions <a name="KinesisAnalyticsApplicationCloudwatchLoggingOptions" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions(
  log_stream_arn: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.logStreamArn">log_stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `log_stream_arn`<sup>Required</sup> <a name="log_stream_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.logStreamArn"></a>

```python
log_stream_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationConfig <a name="KinesisAnalyticsApplicationConfig" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  cloudwatch_logging_options: KinesisAnalyticsApplicationCloudwatchLoggingOptions = None,
  code: str = None,
  description: str = None,
  id: str = None,
  inputs: KinesisAnalyticsApplicationInputs = None,
  outputs: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationOutputs]] = None,
  reference_data_sources: KinesisAnalyticsApplicationReferenceDataSources = None,
  start_application: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.cloudwatchLoggingOptions">cloudwatch_logging_options</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a></code> | cloudwatch_logging_options block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#code KinesisAnalyticsApplication#code}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#description KinesisAnalyticsApplication#description}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#id KinesisAnalyticsApplication#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.inputs">inputs</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a></code> | inputs block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.outputs">outputs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>]]</code> | outputs block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.referenceDataSources">reference_data_sources</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a></code> | reference_data_sources block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.startApplication">start_application</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#start_application KinesisAnalyticsApplication#start_application}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags KinesisAnalyticsApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags_all KinesisAnalyticsApplication#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `cloudwatch_logging_options`<sup>Optional</sup> <a name="cloudwatch_logging_options" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.cloudwatchLoggingOptions"></a>

```python
cloudwatch_logging_options: KinesisAnalyticsApplicationCloudwatchLoggingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

cloudwatch_logging_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#cloudwatch_logging_options KinesisAnalyticsApplication#cloudwatch_logging_options}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.code"></a>

```python
code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#code KinesisAnalyticsApplication#code}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#description KinesisAnalyticsApplication#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#id KinesisAnalyticsApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.inputs"></a>

```python
inputs: KinesisAnalyticsApplicationInputs
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

inputs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#inputs KinesisAnalyticsApplication#inputs}

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.outputs"></a>

```python
outputs: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationOutputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>]]

outputs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#outputs KinesisAnalyticsApplication#outputs}

---

##### `reference_data_sources`<sup>Optional</sup> <a name="reference_data_sources" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.referenceDataSources"></a>

```python
reference_data_sources: KinesisAnalyticsApplicationReferenceDataSources
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

reference_data_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#reference_data_sources KinesisAnalyticsApplication#reference_data_sources}

---

##### `start_application`<sup>Optional</sup> <a name="start_application" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.startApplication"></a>

```python
start_application: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#start_application KinesisAnalyticsApplication#start_application}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags KinesisAnalyticsApplication#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags_all KinesisAnalyticsApplication#tags_all}.

---

### KinesisAnalyticsApplicationInputs <a name="KinesisAnalyticsApplicationInputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs(
  name_prefix: str,
  schema: KinesisAnalyticsApplicationInputsSchema,
  kinesis_firehose: KinesisAnalyticsApplicationInputsKinesisFirehose = None,
  kinesis_stream: KinesisAnalyticsApplicationInputsKinesisStream = None,
  parallelism: KinesisAnalyticsApplicationInputsParallelism = None,
  processing_configuration: KinesisAnalyticsApplicationInputsProcessingConfiguration = None,
  starting_position_configuration: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsStartingPositionConfiguration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name_prefix KinesisAnalyticsApplication#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisFirehose">kinesis_firehose</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a></code> | kinesis_firehose block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisStream">kinesis_stream</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a></code> | kinesis_stream block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.parallelism">parallelism</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a></code> | parallelism block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.processingConfiguration">processing_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a></code> | processing_configuration block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.startingPositionConfiguration">starting_position_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>]]</code> | starting_position_configuration block. |

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name_prefix KinesisAnalyticsApplication#name_prefix}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.schema"></a>

```python
schema: KinesisAnalyticsApplicationInputsSchema
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}

---

##### `kinesis_firehose`<sup>Optional</sup> <a name="kinesis_firehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisFirehose"></a>

```python
kinesis_firehose: KinesisAnalyticsApplicationInputsKinesisFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

kinesis_firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}

---

##### `kinesis_stream`<sup>Optional</sup> <a name="kinesis_stream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisStream"></a>

```python
kinesis_stream: KinesisAnalyticsApplicationInputsKinesisStream
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

kinesis_stream block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.parallelism"></a>

```python
parallelism: KinesisAnalyticsApplicationInputsParallelism
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

parallelism block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#parallelism KinesisAnalyticsApplication#parallelism}

---

##### `processing_configuration`<sup>Optional</sup> <a name="processing_configuration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.processingConfiguration"></a>

```python
processing_configuration: KinesisAnalyticsApplicationInputsProcessingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

processing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#processing_configuration KinesisAnalyticsApplication#processing_configuration}

---

##### `starting_position_configuration`<sup>Optional</sup> <a name="starting_position_configuration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.startingPositionConfiguration"></a>

```python
starting_position_configuration: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsStartingPositionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>]]

starting_position_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}

---

### KinesisAnalyticsApplicationInputsKinesisFirehose <a name="KinesisAnalyticsApplicationInputsKinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose(
  resource_arn: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationInputsKinesisStream <a name="KinesisAnalyticsApplicationInputsKinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream(
  resource_arn: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationInputsParallelism <a name="KinesisAnalyticsApplicationInputsParallelism" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism(
  count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#count KinesisAnalyticsApplication#count}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#count KinesisAnalyticsApplication#count}.

---

### KinesisAnalyticsApplicationInputsProcessingConfiguration <a name="KinesisAnalyticsApplicationInputsProcessingConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration(
  lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration.property.lambda">lambda</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a></code> | lambda block. |

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration.property.lambda"></a>

```python
lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

lambda block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#lambda KinesisAnalyticsApplication#lambda}

---

### KinesisAnalyticsApplicationInputsProcessingConfigurationLambda <a name="KinesisAnalyticsApplicationInputsProcessingConfigurationLambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda(
  resource_arn: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationInputsSchema <a name="KinesisAnalyticsApplicationInputsSchema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema(
  record_columns: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsSchemaRecordColumns]],
  record_format: KinesisAnalyticsApplicationInputsSchemaRecordFormat,
  record_encoding: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordColumns">record_columns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>]]</code> | record_columns block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordFormat">record_format</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a></code> | record_format block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordEncoding">record_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}. |

---

##### `record_columns`<sup>Required</sup> <a name="record_columns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordColumns"></a>

```python
record_columns: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsSchemaRecordColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>]]

record_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}

---

##### `record_format`<sup>Required</sup> <a name="record_format" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordFormat"></a>

```python
record_format: KinesisAnalyticsApplicationInputsSchemaRecordFormat
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

record_format block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}

---

##### `record_encoding`<sup>Optional</sup> <a name="record_encoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordEncoding"></a>

```python
record_encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}.

---

### KinesisAnalyticsApplicationInputsSchemaRecordColumns <a name="KinesisAnalyticsApplicationInputsSchemaRecordColumns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns(
  name: str,
  sql_type: str,
  mapping: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.sqlType">sql_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.mapping">mapping</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `sql_type`<sup>Required</sup> <a name="sql_type" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.sqlType"></a>

```python
sql_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}.

---

##### `mapping`<sup>Optional</sup> <a name="mapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.mapping"></a>

```python
mapping: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}.

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormat <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormat" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat(
  mapping_parameters: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat.property.mappingParameters">mapping_parameters</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a></code> | mapping_parameters block. |

---

##### `mapping_parameters`<sup>Optional</sup> <a name="mapping_parameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat.property.mappingParameters"></a>

```python
mapping_parameters: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

mapping_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters(
  csv: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv = None,
  json: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.csv">csv</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a></code> | csv block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.json">json</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a></code> | json block. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.csv"></a>

```python
csv: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

csv block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.json"></a>

```python
json: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

json block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#json KinesisAnalyticsApplication#json}

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv(
  record_column_delimiter: str,
  record_row_delimiter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter">record_column_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter">record_row_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}. |

---

##### `record_column_delimiter`<sup>Required</sup> <a name="record_column_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter"></a>

```python
record_column_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}.

---

##### `record_row_delimiter`<sup>Required</sup> <a name="record_row_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter"></a>

```python
record_row_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}.

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson(
  record_row_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson.property.recordRowPath">record_row_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}. |

---

##### `record_row_path`<sup>Required</sup> <a name="record_row_path" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson.property.recordRowPath"></a>

```python
record_row_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}.

---

### KinesisAnalyticsApplicationInputsStartingPositionConfiguration <a name="KinesisAnalyticsApplicationInputsStartingPositionConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration(
  starting_position: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration.property.startingPosition">starting_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#starting_position KinesisAnalyticsApplication#starting_position}. |

---

##### `starting_position`<sup>Optional</sup> <a name="starting_position" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration.property.startingPosition"></a>

```python
starting_position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#starting_position KinesisAnalyticsApplication#starting_position}.

---

### KinesisAnalyticsApplicationOutputs <a name="KinesisAnalyticsApplicationOutputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs(
  name: str,
  schema: KinesisAnalyticsApplicationOutputsSchema,
  kinesis_firehose: KinesisAnalyticsApplicationOutputsKinesisFirehose = None,
  kinesis_stream: KinesisAnalyticsApplicationOutputsKinesisStream = None,
  lambda: KinesisAnalyticsApplicationOutputsLambda = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisFirehose">kinesis_firehose</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a></code> | kinesis_firehose block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisStream">kinesis_stream</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a></code> | kinesis_stream block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.lambda">lambda</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a></code> | lambda block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.schema"></a>

```python
schema: KinesisAnalyticsApplicationOutputsSchema
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}

---

##### `kinesis_firehose`<sup>Optional</sup> <a name="kinesis_firehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisFirehose"></a>

```python
kinesis_firehose: KinesisAnalyticsApplicationOutputsKinesisFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a>

kinesis_firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}

---

##### `kinesis_stream`<sup>Optional</sup> <a name="kinesis_stream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisStream"></a>

```python
kinesis_stream: KinesisAnalyticsApplicationOutputsKinesisStream
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a>

kinesis_stream block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.lambda"></a>

```python
lambda: KinesisAnalyticsApplicationOutputsLambda
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a>

lambda block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#lambda KinesisAnalyticsApplication#lambda}

---

### KinesisAnalyticsApplicationOutputsKinesisFirehose <a name="KinesisAnalyticsApplicationOutputsKinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose(
  resource_arn: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationOutputsKinesisStream <a name="KinesisAnalyticsApplicationOutputsKinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream(
  resource_arn: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationOutputsLambda <a name="KinesisAnalyticsApplicationOutputsLambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda(
  resource_arn: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationOutputsSchema <a name="KinesisAnalyticsApplicationOutputsSchema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema(
  record_format_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema.property.recordFormatType">record_format_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format_type KinesisAnalyticsApplication#record_format_type}. |

---

##### `record_format_type`<sup>Required</sup> <a name="record_format_type" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema.property.recordFormatType"></a>

```python
record_format_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format_type KinesisAnalyticsApplication#record_format_type}.

---

### KinesisAnalyticsApplicationReferenceDataSources <a name="KinesisAnalyticsApplicationReferenceDataSources" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources(
  s3: KinesisAnalyticsApplicationReferenceDataSourcesS3,
  schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema,
  table_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#table_name KinesisAnalyticsApplication#table_name}. |

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.s3"></a>

```python
s3: KinesisAnalyticsApplicationReferenceDataSourcesS3
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#s3 KinesisAnalyticsApplication#s3}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.schema"></a>

```python
schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#table_name KinesisAnalyticsApplication#table_name}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesS3 <a name="KinesisAnalyticsApplicationReferenceDataSourcesS3" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3(
  bucket_arn: str,
  file_key: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.bucketArn">bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#bucket_arn KinesisAnalyticsApplication#bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.fileKey">file_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#file_key KinesisAnalyticsApplication#file_key}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#bucket_arn KinesisAnalyticsApplication#bucket_arn}.

---

##### `file_key`<sup>Required</sup> <a name="file_key" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.fileKey"></a>

```python
file_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#file_key KinesisAnalyticsApplication#file_key}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchema <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema(
  record_columns: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns]],
  record_format: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat,
  record_encoding: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordColumns">record_columns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>]]</code> | record_columns block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordFormat">record_format</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a></code> | record_format block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordEncoding">record_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}. |

---

##### `record_columns`<sup>Required</sup> <a name="record_columns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordColumns"></a>

```python
record_columns: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>]]

record_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}

---

##### `record_format`<sup>Required</sup> <a name="record_format" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordFormat"></a>

```python
record_format: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

record_format block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}

---

##### `record_encoding`<sup>Optional</sup> <a name="record_encoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordEncoding"></a>

```python
record_encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns(
  name: str,
  sql_type: str,
  mapping: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.sqlType">sql_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.mapping">mapping</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `sql_type`<sup>Required</sup> <a name="sql_type" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.sqlType"></a>

```python
sql_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}.

---

##### `mapping`<sup>Optional</sup> <a name="mapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.mapping"></a>

```python
mapping: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat(
  mapping_parameters: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat.property.mappingParameters">mapping_parameters</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a></code> | mapping_parameters block. |

---

##### `mapping_parameters`<sup>Optional</sup> <a name="mapping_parameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat.property.mappingParameters"></a>

```python
mapping_parameters: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

mapping_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters(
  csv: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv = None,
  json: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.csv">csv</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a></code> | csv block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.json">json</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a></code> | json block. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.csv"></a>

```python
csv: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

csv block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.json"></a>

```python
json: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

json block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#json KinesisAnalyticsApplication#json}

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv(
  record_column_delimiter: str,
  record_row_delimiter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter">record_column_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter">record_row_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}. |

---

##### `record_column_delimiter`<sup>Required</sup> <a name="record_column_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter"></a>

```python
record_column_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}.

---

##### `record_row_delimiter`<sup>Required</sup> <a name="record_row_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter"></a>

```python
record_row_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson(
  record_row_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson.property.recordRowPath">record_row_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}. |

---

##### `record_row_path`<sup>Required</sup> <a name="record_row_path" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson.property.recordRowPath"></a>

```python
record_row_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference <a name="KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArnInput">log_stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArn">log_stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_stream_arn_input`<sup>Optional</sup> <a name="log_stream_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArnInput"></a>

```python
log_stream_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `log_stream_arn`<sup>Required</sup> <a name="log_stream_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArn"></a>

```python
log_stream_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationCloudwatchLoggingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

---


### KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference <a name="KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationInputsKinesisFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

---


### KinesisAnalyticsApplicationInputsKinesisStreamOutputReference <a name="KinesisAnalyticsApplicationInputsKinesisStreamOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationInputsKinesisStream
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

---


### KinesisAnalyticsApplicationInputsOutputReference <a name="KinesisAnalyticsApplicationInputsOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisFirehose">put_kinesis_firehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisStream">put_kinesis_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putParallelism">put_parallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putProcessingConfiguration">put_processing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putStartingPositionConfiguration">put_starting_position_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisFirehose">reset_kinesis_firehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisStream">reset_kinesis_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetParallelism">reset_parallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetProcessingConfiguration">reset_processing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetStartingPositionConfiguration">reset_starting_position_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kinesis_firehose` <a name="put_kinesis_firehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisFirehose"></a>

```python
def put_kinesis_firehose(
  resource_arn: str,
  role_arn: str
) -> None
```

###### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisFirehose.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisFirehose.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

##### `put_kinesis_stream` <a name="put_kinesis_stream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisStream"></a>

```python
def put_kinesis_stream(
  resource_arn: str,
  role_arn: str
) -> None
```

###### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisStream.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisStream.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

##### `put_parallelism` <a name="put_parallelism" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putParallelism"></a>

```python
def put_parallelism(
  count: typing.Union[int, float] = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putParallelism.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#count KinesisAnalyticsApplication#count}.

---

##### `put_processing_configuration` <a name="put_processing_configuration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putProcessingConfiguration"></a>

```python
def put_processing_configuration(
  lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda
) -> None
```

###### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putProcessingConfiguration.parameter.lambda"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

lambda block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#lambda KinesisAnalyticsApplication#lambda}

---

##### `put_schema` <a name="put_schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putSchema"></a>

```python
def put_schema(
  record_columns: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsSchemaRecordColumns]],
  record_format: KinesisAnalyticsApplicationInputsSchemaRecordFormat,
  record_encoding: str = None
) -> None
```

###### `record_columns`<sup>Required</sup> <a name="record_columns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putSchema.parameter.recordColumns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>]]

record_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}

---

###### `record_format`<sup>Required</sup> <a name="record_format" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putSchema.parameter.recordFormat"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

record_format block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}

---

###### `record_encoding`<sup>Optional</sup> <a name="record_encoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putSchema.parameter.recordEncoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}.

---

##### `put_starting_position_configuration` <a name="put_starting_position_configuration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putStartingPositionConfiguration"></a>

```python
def put_starting_position_configuration(
  value: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsStartingPositionConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putStartingPositionConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>]]

---

##### `reset_kinesis_firehose` <a name="reset_kinesis_firehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisFirehose"></a>

```python
def reset_kinesis_firehose() -> None
```

##### `reset_kinesis_stream` <a name="reset_kinesis_stream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisStream"></a>

```python
def reset_kinesis_stream() -> None
```

##### `reset_parallelism` <a name="reset_parallelism" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetParallelism"></a>

```python
def reset_parallelism() -> None
```

##### `reset_processing_configuration` <a name="reset_processing_configuration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetProcessingConfiguration"></a>

```python
def reset_processing_configuration() -> None
```

##### `reset_starting_position_configuration` <a name="reset_starting_position_configuration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetStartingPositionConfiguration"></a>

```python
def reset_starting_position_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehose">kinesis_firehose</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStream">kinesis_stream</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference">KinesisAnalyticsApplicationInputsKinesisStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelism">parallelism</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference">KinesisAnalyticsApplicationInputsParallelismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfiguration">processing_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference">KinesisAnalyticsApplicationInputsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfiguration">starting_position_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList">KinesisAnalyticsApplicationInputsStartingPositionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.streamNames">stream_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehoseInput">kinesis_firehose_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStreamInput">kinesis_stream_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelismInput">parallelism_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfigurationInput">processing_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schemaInput">schema_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfigurationInput">starting_position_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kinesis_firehose`<sup>Required</sup> <a name="kinesis_firehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehose"></a>

```python
kinesis_firehose: KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference</a>

---

##### `kinesis_stream`<sup>Required</sup> <a name="kinesis_stream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStream"></a>

```python
kinesis_stream: KinesisAnalyticsApplicationInputsKinesisStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference">KinesisAnalyticsApplicationInputsKinesisStreamOutputReference</a>

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelism"></a>

```python
parallelism: KinesisAnalyticsApplicationInputsParallelismOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference">KinesisAnalyticsApplicationInputsParallelismOutputReference</a>

---

##### `processing_configuration`<sup>Required</sup> <a name="processing_configuration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfiguration"></a>

```python
processing_configuration: KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schema"></a>

```python
schema: KinesisAnalyticsApplicationInputsSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference">KinesisAnalyticsApplicationInputsSchemaOutputReference</a>

---

##### `starting_position_configuration`<sup>Required</sup> <a name="starting_position_configuration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfiguration"></a>

```python
starting_position_configuration: KinesisAnalyticsApplicationInputsStartingPositionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList">KinesisAnalyticsApplicationInputsStartingPositionConfigurationList</a>

---

##### `stream_names`<sup>Required</sup> <a name="stream_names" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.streamNames"></a>

```python
stream_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kinesis_firehose_input`<sup>Optional</sup> <a name="kinesis_firehose_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehoseInput"></a>

```python
kinesis_firehose_input: KinesisAnalyticsApplicationInputsKinesisFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

---

##### `kinesis_stream_input`<sup>Optional</sup> <a name="kinesis_stream_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStreamInput"></a>

```python
kinesis_stream_input: KinesisAnalyticsApplicationInputsKinesisStream
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `parallelism_input`<sup>Optional</sup> <a name="parallelism_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelismInput"></a>

```python
parallelism_input: KinesisAnalyticsApplicationInputsParallelism
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

---

##### `processing_configuration_input`<sup>Optional</sup> <a name="processing_configuration_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfigurationInput"></a>

```python
processing_configuration_input: KinesisAnalyticsApplicationInputsProcessingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schemaInput"></a>

```python
schema_input: KinesisAnalyticsApplicationInputsSchema
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

---

##### `starting_position_configuration_input`<sup>Optional</sup> <a name="starting_position_configuration_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfigurationInput"></a>

```python
starting_position_configuration_input: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsStartingPositionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>]]

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationInputs
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

---


### KinesisAnalyticsApplicationInputsParallelismOutputReference <a name="KinesisAnalyticsApplicationInputsParallelismOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resetCount">reset_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resetCount"></a>

```python
def reset_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationInputsParallelism
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

---


### KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference <a name="KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

---


### KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference <a name="KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.putLambda">put_lambda</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda` <a name="put_lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.putLambda"></a>

```python
def put_lambda(
  resource_arn: str,
  role_arn: str
) -> None
```

###### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.putLambda.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.putLambda.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambdaInput">lambda_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambda"></a>

```python
lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference</a>

---

##### `lambda_input`<sup>Optional</sup> <a name="lambda_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambdaInput"></a>

```python
lambda_input: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationInputsProcessingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

---


### KinesisAnalyticsApplicationInputsSchemaOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordColumns">put_record_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordFormat">put_record_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resetRecordEncoding">reset_record_encoding</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_record_columns` <a name="put_record_columns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordColumns"></a>

```python
def put_record_columns(
  value: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsSchemaRecordColumns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordColumns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>]]

---

##### `put_record_format` <a name="put_record_format" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordFormat"></a>

```python
def put_record_format(
  mapping_parameters: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters = None
) -> None
```

###### `mapping_parameters`<sup>Optional</sup> <a name="mapping_parameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordFormat.parameter.mappingParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

mapping_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}

---

##### `reset_record_encoding` <a name="reset_record_encoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resetRecordEncoding"></a>

```python
def reset_record_encoding() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumns">record_columns</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList">KinesisAnalyticsApplicationInputsSchemaRecordColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormat">record_format</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumnsInput">record_columns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncodingInput">record_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormatInput">record_format_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncoding">record_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_columns`<sup>Required</sup> <a name="record_columns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumns"></a>

```python
record_columns: KinesisAnalyticsApplicationInputsSchemaRecordColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList">KinesisAnalyticsApplicationInputsSchemaRecordColumnsList</a>

---

##### `record_format`<sup>Required</sup> <a name="record_format" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormat"></a>

```python
record_format: KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference</a>

---

##### `record_columns_input`<sup>Optional</sup> <a name="record_columns_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumnsInput"></a>

```python
record_columns_input: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsSchemaRecordColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>]]

---

##### `record_encoding_input`<sup>Optional</sup> <a name="record_encoding_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncodingInput"></a>

```python
record_encoding_input: str
```

- *Type:* str

---

##### `record_format_input`<sup>Optional</sup> <a name="record_format_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormatInput"></a>

```python
record_format_input: KinesisAnalyticsApplicationInputsSchemaRecordFormat
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

---

##### `record_encoding`<sup>Required</sup> <a name="record_encoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncoding"></a>

```python
record_encoding: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationInputsSchema
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordColumnsList <a name="KinesisAnalyticsApplicationInputsSchemaRecordColumnsList" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsSchemaRecordColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>]]

---


### KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resetMapping">reset_mapping</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mapping` <a name="reset_mapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resetMapping"></a>

```python
def reset_mapping() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mappingInput">mapping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlTypeInput">sql_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mapping">mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlType">sql_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mapping_input`<sup>Optional</sup> <a name="mapping_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mappingInput"></a>

```python
mapping_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sql_type_input`<sup>Optional</sup> <a name="sql_type_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlTypeInput"></a>

```python
sql_type_input: str
```

- *Type:* str

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mapping"></a>

```python
mapping: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sql_type`<sup>Required</sup> <a name="sql_type" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlType"></a>

```python
sql_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KinesisAnalyticsApplicationInputsSchemaRecordColumns, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns">KinesisAnalyticsApplicationInputsSchemaRecordColumns</a>, cdktf.IResolvable]

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput">record_column_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput">record_row_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter">record_column_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter">record_row_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_column_delimiter_input`<sup>Optional</sup> <a name="record_column_delimiter_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput"></a>

```python
record_column_delimiter_input: str
```

- *Type:* str

---

##### `record_row_delimiter_input`<sup>Optional</sup> <a name="record_row_delimiter_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput"></a>

```python
record_row_delimiter_input: str
```

- *Type:* str

---

##### `record_column_delimiter`<sup>Required</sup> <a name="record_column_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter"></a>

```python
record_column_delimiter: str
```

- *Type:* str

---

##### `record_row_delimiter`<sup>Required</sup> <a name="record_row_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter"></a>

```python
record_row_delimiter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput">record_row_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath">record_row_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_row_path_input`<sup>Optional</sup> <a name="record_row_path_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput"></a>

```python
record_row_path_input: str
```

- *Type:* str

---

##### `record_row_path`<sup>Required</sup> <a name="record_row_path" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath"></a>

```python
record_row_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putCsv">put_csv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetCsv">reset_csv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetJson">reset_json</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_csv` <a name="put_csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putCsv"></a>

```python
def put_csv(
  record_column_delimiter: str,
  record_row_delimiter: str
) -> None
```

###### `record_column_delimiter`<sup>Required</sup> <a name="record_column_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putCsv.parameter.recordColumnDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}.

---

###### `record_row_delimiter`<sup>Required</sup> <a name="record_row_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putCsv.parameter.recordRowDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}.

---

##### `put_json` <a name="put_json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putJson"></a>

```python
def put_json(
  record_row_path: str
) -> None
```

###### `record_row_path`<sup>Required</sup> <a name="record_row_path" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putJson.parameter.recordRowPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}.

---

##### `reset_csv` <a name="reset_csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetCsv"></a>

```python
def reset_csv() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetJson"></a>

```python
def reset_json() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.json">json</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csvInput">csv_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.jsonInput">json_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csv"></a>

```python
csv: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.json"></a>

```python
json: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference</a>

---

##### `csv_input`<sup>Optional</sup> <a name="csv_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csvInput"></a>

```python
csv_input: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.jsonInput"></a>

```python
json_input: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.putMappingParameters">put_mapping_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resetMappingParameters">reset_mapping_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mapping_parameters` <a name="put_mapping_parameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.putMappingParameters"></a>

```python
def put_mapping_parameters(
  csv: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv = None,
  json: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson = None
) -> None
```

###### `csv`<sup>Optional</sup> <a name="csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.putMappingParameters.parameter.csv"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

csv block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.putMappingParameters.parameter.json"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

json block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#json KinesisAnalyticsApplication#json}

---

##### `reset_mapping_parameters` <a name="reset_mapping_parameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resetMappingParameters"></a>

```python
def reset_mapping_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParameters">mapping_parameters</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.recordFormatType">record_format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParametersInput">mapping_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mapping_parameters`<sup>Required</sup> <a name="mapping_parameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParameters"></a>

```python
mapping_parameters: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference</a>

---

##### `record_format_type`<sup>Required</sup> <a name="record_format_type" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.recordFormatType"></a>

```python
record_format_type: str
```

- *Type:* str

---

##### `mapping_parameters_input`<sup>Optional</sup> <a name="mapping_parameters_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParametersInput"></a>

```python
mapping_parameters_input: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationInputsSchemaRecordFormat
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

---


### KinesisAnalyticsApplicationInputsStartingPositionConfigurationList <a name="KinesisAnalyticsApplicationInputsStartingPositionConfigurationList" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationInputsStartingPositionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>]]

---


### KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference <a name="KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resetStartingPosition">reset_starting_position</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_starting_position` <a name="reset_starting_position" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resetStartingPosition"></a>

```python
def reset_starting_position() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPositionInput">starting_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPosition">starting_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `starting_position_input`<sup>Optional</sup> <a name="starting_position_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPositionInput"></a>

```python
starting_position_input: str
```

- *Type:* str

---

##### `starting_position`<sup>Required</sup> <a name="starting_position" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPosition"></a>

```python
starting_position: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KinesisAnalyticsApplicationInputsStartingPositionConfiguration, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration">KinesisAnalyticsApplicationInputsStartingPositionConfiguration</a>, cdktf.IResolvable]

---


### KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference <a name="KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationOutputsKinesisFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a>

---


### KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference <a name="KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationOutputsKinesisStream
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a>

---


### KinesisAnalyticsApplicationOutputsLambdaOutputReference <a name="KinesisAnalyticsApplicationOutputsLambdaOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationOutputsLambda
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a>

---


### KinesisAnalyticsApplicationOutputsList <a name="KinesisAnalyticsApplicationOutputsList" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisAnalyticsApplicationOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationOutputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>]]

---


### KinesisAnalyticsApplicationOutputsOutputReference <a name="KinesisAnalyticsApplicationOutputsOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisFirehose">put_kinesis_firehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisStream">put_kinesis_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putLambda">put_lambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisFirehose">reset_kinesis_firehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisStream">reset_kinesis_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetLambda">reset_lambda</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kinesis_firehose` <a name="put_kinesis_firehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisFirehose"></a>

```python
def put_kinesis_firehose(
  resource_arn: str,
  role_arn: str
) -> None
```

###### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisFirehose.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisFirehose.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

##### `put_kinesis_stream` <a name="put_kinesis_stream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisStream"></a>

```python
def put_kinesis_stream(
  resource_arn: str,
  role_arn: str
) -> None
```

###### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisStream.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisStream.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

##### `put_lambda` <a name="put_lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putLambda"></a>

```python
def put_lambda(
  resource_arn: str,
  role_arn: str
) -> None
```

###### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putLambda.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putLambda.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

##### `put_schema` <a name="put_schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putSchema"></a>

```python
def put_schema(
  record_format_type: str
) -> None
```

###### `record_format_type`<sup>Required</sup> <a name="record_format_type" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putSchema.parameter.recordFormatType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format_type KinesisAnalyticsApplication#record_format_type}.

---

##### `reset_kinesis_firehose` <a name="reset_kinesis_firehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisFirehose"></a>

```python
def reset_kinesis_firehose() -> None
```

##### `reset_kinesis_stream` <a name="reset_kinesis_stream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisStream"></a>

```python
def reset_kinesis_stream() -> None
```

##### `reset_lambda` <a name="reset_lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetLambda"></a>

```python
def reset_lambda() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehose">kinesis_firehose</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStream">kinesis_stream</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference">KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference">KinesisAnalyticsApplicationOutputsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference">KinesisAnalyticsApplicationOutputsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehoseInput">kinesis_firehose_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStreamInput">kinesis_stream_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambdaInput">lambda_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schemaInput">schema_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kinesis_firehose`<sup>Required</sup> <a name="kinesis_firehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehose"></a>

```python
kinesis_firehose: KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference</a>

---

##### `kinesis_stream`<sup>Required</sup> <a name="kinesis_stream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStream"></a>

```python
kinesis_stream: KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference">KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambda"></a>

```python
lambda: KinesisAnalyticsApplicationOutputsLambdaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference">KinesisAnalyticsApplicationOutputsLambdaOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schema"></a>

```python
schema: KinesisAnalyticsApplicationOutputsSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference">KinesisAnalyticsApplicationOutputsSchemaOutputReference</a>

---

##### `kinesis_firehose_input`<sup>Optional</sup> <a name="kinesis_firehose_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehoseInput"></a>

```python
kinesis_firehose_input: KinesisAnalyticsApplicationOutputsKinesisFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a>

---

##### `kinesis_stream_input`<sup>Optional</sup> <a name="kinesis_stream_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStreamInput"></a>

```python
kinesis_stream_input: KinesisAnalyticsApplicationOutputsKinesisStream
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a>

---

##### `lambda_input`<sup>Optional</sup> <a name="lambda_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambdaInput"></a>

```python
lambda_input: KinesisAnalyticsApplicationOutputsLambda
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schemaInput"></a>

```python
schema_input: KinesisAnalyticsApplicationOutputsSchema
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KinesisAnalyticsApplicationOutputs, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs">KinesisAnalyticsApplicationOutputs</a>, cdktf.IResolvable]

---


### KinesisAnalyticsApplicationOutputsSchemaOutputReference <a name="KinesisAnalyticsApplicationOutputsSchemaOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatTypeInput">record_format_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatType">record_format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_format_type_input`<sup>Optional</sup> <a name="record_format_type_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatTypeInput"></a>

```python
record_format_type_input: str
```

- *Type:* str

---

##### `record_format_type`<sup>Required</sup> <a name="record_format_type" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatType"></a>

```python
record_format_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationOutputsSchema
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putSchema">put_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putS3"></a>

```python
def put_s3(
  bucket_arn: str,
  file_key: str,
  role_arn: str
) -> None
```

###### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putS3.parameter.bucketArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#bucket_arn KinesisAnalyticsApplication#bucket_arn}.

---

###### `file_key`<sup>Required</sup> <a name="file_key" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putS3.parameter.fileKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#file_key KinesisAnalyticsApplication#file_key}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putS3.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

##### `put_schema` <a name="put_schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putSchema"></a>

```python
def put_schema(
  record_columns: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns]],
  record_format: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat,
  record_encoding: str = None
) -> None
```

###### `record_columns`<sup>Required</sup> <a name="record_columns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putSchema.parameter.recordColumns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>]]

record_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}

---

###### `record_format`<sup>Required</sup> <a name="record_format" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putSchema.parameter.recordFormat"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

record_format block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}

---

###### `record_encoding`<sup>Optional</sup> <a name="record_encoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putSchema.parameter.recordEncoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference">KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schemaInput">schema_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3"></a>

```python
s3: KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference">KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schema"></a>

```python
schema: KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3Input"></a>

```python
s3_input: KinesisAnalyticsApplicationReferenceDataSourcesS3
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schemaInput"></a>

```python
schema_input: KinesisAnalyticsApplicationReferenceDataSourcesSchema
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationReferenceDataSources
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKeyInput">file_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKey">file_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `file_key_input`<sup>Optional</sup> <a name="file_key_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKeyInput"></a>

```python
file_key_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `file_key`<sup>Required</sup> <a name="file_key" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKey"></a>

```python
file_key: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationReferenceDataSourcesS3
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordColumns">put_record_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordFormat">put_record_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resetRecordEncoding">reset_record_encoding</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_record_columns` <a name="put_record_columns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordColumns"></a>

```python
def put_record_columns(
  value: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordColumns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>]]

---

##### `put_record_format` <a name="put_record_format" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordFormat"></a>

```python
def put_record_format(
  mapping_parameters: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters = None
) -> None
```

###### `mapping_parameters`<sup>Optional</sup> <a name="mapping_parameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordFormat.parameter.mappingParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

mapping_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}

---

##### `reset_record_encoding` <a name="reset_record_encoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resetRecordEncoding"></a>

```python
def reset_record_encoding() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumns">record_columns</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormat">record_format</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumnsInput">record_columns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncodingInput">record_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormatInput">record_format_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncoding">record_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_columns`<sup>Required</sup> <a name="record_columns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumns"></a>

```python
record_columns: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList</a>

---

##### `record_format`<sup>Required</sup> <a name="record_format" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormat"></a>

```python
record_format: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference</a>

---

##### `record_columns_input`<sup>Optional</sup> <a name="record_columns_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumnsInput"></a>

```python
record_columns_input: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>]]

---

##### `record_encoding_input`<sup>Optional</sup> <a name="record_encoding_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncodingInput"></a>

```python
record_encoding_input: str
```

- *Type:* str

---

##### `record_format_input`<sup>Optional</sup> <a name="record_format_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormatInput"></a>

```python
record_format_input: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

---

##### `record_encoding`<sup>Required</sup> <a name="record_encoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncoding"></a>

```python
record_encoding: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationReferenceDataSourcesSchema
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>]]

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resetMapping">reset_mapping</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mapping` <a name="reset_mapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resetMapping"></a>

```python
def reset_mapping() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mappingInput">mapping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlTypeInput">sql_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mapping">mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlType">sql_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mapping_input`<sup>Optional</sup> <a name="mapping_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mappingInput"></a>

```python
mapping_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sql_type_input`<sup>Optional</sup> <a name="sql_type_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlTypeInput"></a>

```python
sql_type_input: str
```

- *Type:* str

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mapping"></a>

```python
mapping: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sql_type`<sup>Required</sup> <a name="sql_type" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlType"></a>

```python
sql_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns</a>, cdktf.IResolvable]

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput">record_column_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput">record_row_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter">record_column_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter">record_row_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_column_delimiter_input`<sup>Optional</sup> <a name="record_column_delimiter_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput"></a>

```python
record_column_delimiter_input: str
```

- *Type:* str

---

##### `record_row_delimiter_input`<sup>Optional</sup> <a name="record_row_delimiter_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput"></a>

```python
record_row_delimiter_input: str
```

- *Type:* str

---

##### `record_column_delimiter`<sup>Required</sup> <a name="record_column_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter"></a>

```python
record_column_delimiter: str
```

- *Type:* str

---

##### `record_row_delimiter`<sup>Required</sup> <a name="record_row_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter"></a>

```python
record_row_delimiter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput">record_row_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath">record_row_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_row_path_input`<sup>Optional</sup> <a name="record_row_path_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput"></a>

```python
record_row_path_input: str
```

- *Type:* str

---

##### `record_row_path`<sup>Required</sup> <a name="record_row_path" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath"></a>

```python
record_row_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putCsv">put_csv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetCsv">reset_csv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetJson">reset_json</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_csv` <a name="put_csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putCsv"></a>

```python
def put_csv(
  record_column_delimiter: str,
  record_row_delimiter: str
) -> None
```

###### `record_column_delimiter`<sup>Required</sup> <a name="record_column_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putCsv.parameter.recordColumnDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}.

---

###### `record_row_delimiter`<sup>Required</sup> <a name="record_row_delimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putCsv.parameter.recordRowDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}.

---

##### `put_json` <a name="put_json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putJson"></a>

```python
def put_json(
  record_row_path: str
) -> None
```

###### `record_row_path`<sup>Required</sup> <a name="record_row_path" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putJson.parameter.recordRowPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}.

---

##### `reset_csv` <a name="reset_csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetCsv"></a>

```python
def reset_csv() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetJson"></a>

```python
def reset_json() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.json">json</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csvInput">csv_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.jsonInput">json_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csv"></a>

```python
csv: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.json"></a>

```python
json: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference</a>

---

##### `csv_input`<sup>Optional</sup> <a name="csv_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csvInput"></a>

```python
csv_input: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.jsonInput"></a>

```python
json_input: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesis_analytics_application

kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.putMappingParameters">put_mapping_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resetMappingParameters">reset_mapping_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mapping_parameters` <a name="put_mapping_parameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.putMappingParameters"></a>

```python
def put_mapping_parameters(
  csv: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv = None,
  json: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson = None
) -> None
```

###### `csv`<sup>Optional</sup> <a name="csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.putMappingParameters.parameter.csv"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

csv block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.putMappingParameters.parameter.json"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

json block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#json KinesisAnalyticsApplication#json}

---

##### `reset_mapping_parameters` <a name="reset_mapping_parameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resetMappingParameters"></a>

```python
def reset_mapping_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParameters">mapping_parameters</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.recordFormatType">record_format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParametersInput">mapping_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mapping_parameters`<sup>Required</sup> <a name="mapping_parameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParameters"></a>

```python
mapping_parameters: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference</a>

---

##### `record_format_type`<sup>Required</sup> <a name="record_format_type" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.recordFormatType"></a>

```python
record_format_type: str
```

- *Type:* str

---

##### `mapping_parameters_input`<sup>Optional</sup> <a name="mapping_parameters_input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParametersInput"></a>

```python
mapping_parameters_input: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.internalValue"></a>

```python
internal_value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

---



