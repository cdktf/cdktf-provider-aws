# `transcribeLanguageModel` Submodule <a name="`transcribeLanguageModel` Submodule" id="@cdktf/provider-aws.transcribeLanguageModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeLanguageModel <a name="TranscribeLanguageModel" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model aws_transcribe_language_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transcribe_language_model

transcribeLanguageModel.TranscribeLanguageModel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_model_name: str,
  input_data_config: TranscribeLanguageModelInputDataConfig,
  language_code: str,
  model_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: TranscribeLanguageModelTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.baseModelName">base_model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.modelName">model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_model_name`<sup>Required</sup> <a name="base_model_name" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.baseModelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}.

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.inputDataConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#input_data_config TranscribeLanguageModel#input_data_config}

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.languageCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}.

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.modelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#timeouts TranscribeLanguageModel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig">put_input_data_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_input_data_config` <a name="put_input_data_config" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig"></a>

```python
def put_input_data_config(
  data_access_role_arn: str,
  s3_uri: str,
  tuning_data_s3_uri: str = None
) -> None
```

###### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig.parameter.dataAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#data_access_role_arn TranscribeLanguageModel#data_access_role_arn}.

---

###### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig.parameter.s3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#s3_uri TranscribeLanguageModel#s3_uri}.

---

###### `tuning_data_s3_uri`<sup>Optional</sup> <a name="tuning_data_s3_uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig.parameter.tuningDataS3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tuning_data_s3_uri TranscribeLanguageModel#tuning_data_s3_uri}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#create TranscribeLanguageModel#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import transcribe_language_model

transcribeLanguageModel.TranscribeLanguageModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import transcribe_language_model

transcribeLanguageModel.TranscribeLanguageModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import transcribe_language_model

transcribeLanguageModel.TranscribeLanguageModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference">TranscribeLanguageModelInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference">TranscribeLanguageModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelNameInput">base_model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfigInput">input_data_config_input</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelName">base_model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfig"></a>

```python
input_data_config: TranscribeLanguageModelInputDataConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference">TranscribeLanguageModelInputDataConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeouts"></a>

```python
timeouts: TranscribeLanguageModelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference">TranscribeLanguageModelTimeoutsOutputReference</a>

---

##### `base_model_name_input`<sup>Optional</sup> <a name="base_model_name_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelNameInput"></a>

```python
base_model_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_data_config_input`<sup>Optional</sup> <a name="input_data_config_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfigInput"></a>

```python
input_data_config_input: TranscribeLanguageModelInputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[TranscribeLanguageModelTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>, cdktf.IResolvable]

---

##### `base_model_name`<sup>Required</sup> <a name="base_model_name" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelName"></a>

```python
base_model_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeLanguageModelConfig <a name="TranscribeLanguageModelConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transcribe_language_model

transcribeLanguageModel.TranscribeLanguageModelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_model_name: str,
  input_data_config: TranscribeLanguageModelInputDataConfig,
  language_code: str,
  model_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: TranscribeLanguageModelTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.baseModelName">base_model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.modelName">model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_model_name`<sup>Required</sup> <a name="base_model_name" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.baseModelName"></a>

```python
base_model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}.

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.inputDataConfig"></a>

```python
input_data_config: TranscribeLanguageModelInputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#input_data_config TranscribeLanguageModel#input_data_config}

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}.

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.timeouts"></a>

```python
timeouts: TranscribeLanguageModelTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#timeouts TranscribeLanguageModel#timeouts}

---

### TranscribeLanguageModelInputDataConfig <a name="TranscribeLanguageModelInputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transcribe_language_model

transcribeLanguageModel.TranscribeLanguageModelInputDataConfig(
  data_access_role_arn: str,
  s3_uri: str,
  tuning_data_s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#data_access_role_arn TranscribeLanguageModel#data_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.s3Uri">s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#s3_uri TranscribeLanguageModel#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.tuningDataS3Uri">tuning_data_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tuning_data_s3_uri TranscribeLanguageModel#tuning_data_s3_uri}. |

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#data_access_role_arn TranscribeLanguageModel#data_access_role_arn}.

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#s3_uri TranscribeLanguageModel#s3_uri}.

---

##### `tuning_data_s3_uri`<sup>Optional</sup> <a name="tuning_data_s3_uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.tuningDataS3Uri"></a>

```python
tuning_data_s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tuning_data_s3_uri TranscribeLanguageModel#tuning_data_s3_uri}.

---

### TranscribeLanguageModelTimeouts <a name="TranscribeLanguageModelTimeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transcribe_language_model

transcribeLanguageModel.TranscribeLanguageModelTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#create TranscribeLanguageModel#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#create TranscribeLanguageModel#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeLanguageModelInputDataConfigOutputReference <a name="TranscribeLanguageModelInputDataConfigOutputReference" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transcribe_language_model

transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resetTuningDataS3Uri">reset_tuning_data_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tuning_data_s3_uri` <a name="reset_tuning_data_s3_uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resetTuningDataS3Uri"></a>

```python
def reset_tuning_data_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArnInput">data_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3UriInput">tuning_data_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3Uri">tuning_data_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_access_role_arn_input`<sup>Optional</sup> <a name="data_access_role_arn_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArnInput"></a>

```python
data_access_role_arn_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `tuning_data_s3_uri_input`<sup>Optional</sup> <a name="tuning_data_s3_uri_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3UriInput"></a>

```python
tuning_data_s3_uri_input: str
```

- *Type:* str

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `tuning_data_s3_uri`<sup>Required</sup> <a name="tuning_data_s3_uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3Uri"></a>

```python
tuning_data_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: TranscribeLanguageModelInputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

---


### TranscribeLanguageModelTimeoutsOutputReference <a name="TranscribeLanguageModelTimeoutsOutputReference" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transcribe_language_model

transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[TranscribeLanguageModelTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>, cdktf.IResolvable]

---



