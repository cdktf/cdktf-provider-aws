# `codepipelineCustomActionType` Submodule <a name="`codepipelineCustomActionType` Submodule" id="@cdktf/provider-aws.codepipelineCustomActionType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineCustomActionType <a name="CodepipelineCustomActionType" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type aws_codepipeline_custom_action_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionType(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: str,
  input_artifact_details: CodepipelineCustomActionTypeInputArtifactDetails,
  output_artifact_details: CodepipelineCustomActionTypeOutputArtifactDetails,
  provider_name: str,
  version: str,
  configuration_property: typing.Union[IResolvable, typing.List[CodepipelineCustomActionTypeConfigurationProperty]] = None,
  id: str = None,
  settings: CodepipelineCustomActionTypeSettings = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.inputArtifactDetails">input_artifact_details</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | input_artifact_details block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.outputArtifactDetails">output_artifact_details</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | output_artifact_details block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.configurationProperty">configuration_property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>]]</code> | configuration_property block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#id CodepipelineCustomActionType#id}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags_all CodepipelineCustomActionType#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.category"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}.

---

##### `input_artifact_details`<sup>Required</sup> <a name="input_artifact_details" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.inputArtifactDetails"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

input_artifact_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#input_artifact_details CodepipelineCustomActionType#input_artifact_details}

---

##### `output_artifact_details`<sup>Required</sup> <a name="output_artifact_details" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.outputArtifactDetails"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

output_artifact_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#output_artifact_details CodepipelineCustomActionType#output_artifact_details}

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.providerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}.

---

##### `configuration_property`<sup>Optional</sup> <a name="configuration_property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.configurationProperty"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>]]

configuration_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#configuration_property CodepipelineCustomActionType#configuration_property}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#id CodepipelineCustomActionType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#settings CodepipelineCustomActionType#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags_all CodepipelineCustomActionType#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperty">put_configuration_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails">put_input_artifact_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails">put_output_artifact_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperty">reset_configuration_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_configuration_property` <a name="put_configuration_property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperty"></a>

```python
def put_configuration_property(
  value: typing.Union[IResolvable, typing.List[CodepipelineCustomActionTypeConfigurationProperty]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperty.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>]]

---

##### `put_input_artifact_details` <a name="put_input_artifact_details" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails"></a>

```python
def put_input_artifact_details(
  maximum_count: typing.Union[int, float],
  minimum_count: typing.Union[int, float]
) -> None
```

###### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails.parameter.maximumCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}.

---

###### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails.parameter.minimumCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}.

---

##### `put_output_artifact_details` <a name="put_output_artifact_details" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails"></a>

```python
def put_output_artifact_details(
  maximum_count: typing.Union[int, float],
  minimum_count: typing.Union[int, float]
) -> None
```

###### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails.parameter.maximumCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}.

---

###### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails.parameter.minimumCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}.

---

##### `put_settings` <a name="put_settings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings"></a>

```python
def put_settings(
  entity_url_template: str = None,
  execution_url_template: str = None,
  revision_url_template: str = None,
  third_party_configuration_url: str = None
) -> None
```

###### `entity_url_template`<sup>Optional</sup> <a name="entity_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.entityUrlTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}.

---

###### `execution_url_template`<sup>Optional</sup> <a name="execution_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.executionUrlTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}.

---

###### `revision_url_template`<sup>Optional</sup> <a name="revision_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.revisionUrlTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}.

---

###### `third_party_configuration_url`<sup>Optional</sup> <a name="third_party_configuration_url" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.thirdPartyConfigurationUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}.

---

##### `reset_configuration_property` <a name="reset_configuration_property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperty"></a>

```python
def reset_configuration_property() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperty">configuration_property</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList">CodepipelineCustomActionTypeConfigurationPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails">input_artifact_details</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails">output_artifact_details</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertyInput">configuration_property_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput">input_artifact_details_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput">output_artifact_details_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput">settings_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration_property`<sup>Required</sup> <a name="configuration_property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperty"></a>

```python
configuration_property: CodepipelineCustomActionTypeConfigurationPropertyList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList">CodepipelineCustomActionTypeConfigurationPropertyList</a>

---

##### `input_artifact_details`<sup>Required</sup> <a name="input_artifact_details" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails"></a>

```python
input_artifact_details: CodepipelineCustomActionTypeInputArtifactDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a>

---

##### `output_artifact_details`<sup>Required</sup> <a name="output_artifact_details" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails"></a>

```python
output_artifact_details: CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings"></a>

```python
settings: CodepipelineCustomActionTypeSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a>

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `configuration_property_input`<sup>Optional</sup> <a name="configuration_property_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertyInput"></a>

```python
configuration_property_input: typing.Union[IResolvable, typing.List[CodepipelineCustomActionTypeConfigurationProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_artifact_details_input`<sup>Optional</sup> <a name="input_artifact_details_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput"></a>

```python
input_artifact_details_input: CodepipelineCustomActionTypeInputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---

##### `output_artifact_details_input`<sup>Optional</sup> <a name="output_artifact_details_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput"></a>

```python
output_artifact_details_input: CodepipelineCustomActionTypeOutputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput"></a>

```python
settings_input: CodepipelineCustomActionTypeSettings
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineCustomActionTypeConfig <a name="CodepipelineCustomActionTypeConfig" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: str,
  input_artifact_details: CodepipelineCustomActionTypeInputArtifactDetails,
  output_artifact_details: CodepipelineCustomActionTypeOutputArtifactDetails,
  provider_name: str,
  version: str,
  configuration_property: typing.Union[IResolvable, typing.List[CodepipelineCustomActionTypeConfigurationProperty]] = None,
  id: str = None,
  settings: CodepipelineCustomActionTypeSettings = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails">input_artifact_details</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | input_artifact_details block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails">output_artifact_details</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | output_artifact_details block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperty">configuration_property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>]]</code> | configuration_property block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#id CodepipelineCustomActionType#id}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags_all CodepipelineCustomActionType#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}.

---

##### `input_artifact_details`<sup>Required</sup> <a name="input_artifact_details" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails"></a>

```python
input_artifact_details: CodepipelineCustomActionTypeInputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

input_artifact_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#input_artifact_details CodepipelineCustomActionType#input_artifact_details}

---

##### `output_artifact_details`<sup>Required</sup> <a name="output_artifact_details" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails"></a>

```python
output_artifact_details: CodepipelineCustomActionTypeOutputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

output_artifact_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#output_artifact_details CodepipelineCustomActionType#output_artifact_details}

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}.

---

##### `configuration_property`<sup>Optional</sup> <a name="configuration_property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperty"></a>

```python
configuration_property: typing.Union[IResolvable, typing.List[CodepipelineCustomActionTypeConfigurationProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>]]

configuration_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#configuration_property CodepipelineCustomActionType#configuration_property}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#id CodepipelineCustomActionType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings"></a>

```python
settings: CodepipelineCustomActionTypeSettings
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#settings CodepipelineCustomActionType#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags_all CodepipelineCustomActionType#tags_all}.

---

### CodepipelineCustomActionTypeConfigurationProperty <a name="CodepipelineCustomActionTypeConfigurationProperty" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty(
  key: typing.Union[bool, IResolvable],
  name: str,
  required: typing.Union[bool, IResolvable],
  secret: typing.Union[bool, IResolvable],
  description: str = None,
  queryable: typing.Union[bool, IResolvable] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.key">key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.secret">secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.queryable">queryable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.key"></a>

```python
key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}.

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.secret"></a>

```python
secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}.

---

##### `queryable`<sup>Optional</sup> <a name="queryable" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.queryable"></a>

```python
queryable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}.

---

### CodepipelineCustomActionTypeInputArtifactDetails <a name="CodepipelineCustomActionTypeInputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails(
  maximum_count: typing.Union[int, float],
  minimum_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}. |

---

##### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}.

---

##### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}.

---

### CodepipelineCustomActionTypeOutputArtifactDetails <a name="CodepipelineCustomActionTypeOutputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails(
  maximum_count: typing.Union[int, float],
  minimum_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}. |

---

##### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}.

---

##### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}.

---

### CodepipelineCustomActionTypeSettings <a name="CodepipelineCustomActionTypeSettings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeSettings(
  entity_url_template: str = None,
  execution_url_template: str = None,
  revision_url_template: str = None,
  third_party_configuration_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate">entity_url_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate">execution_url_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate">revision_url_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl">third_party_configuration_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}. |

---

##### `entity_url_template`<sup>Optional</sup> <a name="entity_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate"></a>

```python
entity_url_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}.

---

##### `execution_url_template`<sup>Optional</sup> <a name="execution_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate"></a>

```python
execution_url_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}.

---

##### `revision_url_template`<sup>Optional</sup> <a name="revision_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate"></a>

```python
revision_url_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}.

---

##### `third_party_configuration_url`<sup>Optional</sup> <a name="third_party_configuration_url" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl"></a>

```python
third_party_configuration_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineCustomActionTypeConfigurationPropertyList <a name="CodepipelineCustomActionTypeConfigurationPropertyList" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineCustomActionTypeConfigurationPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineCustomActionTypeConfigurationProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>]]

---


### CodepipelineCustomActionTypeConfigurationPropertyOutputReference <a name="CodepipelineCustomActionTypeConfigurationPropertyOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetQueryable">reset_queryable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_queryable` <a name="reset_queryable" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetQueryable"></a>

```python
def reset_queryable() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.keyInput">key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryableInput">queryable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secretInput">secret_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.key">key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryable">queryable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secret">secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.keyInput"></a>

```python
key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `queryable_input`<sup>Optional</sup> <a name="queryable_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryableInput"></a>

```python
queryable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secretInput"></a>

```python
secret_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.key"></a>

```python
key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `queryable`<sup>Required</sup> <a name="queryable" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryable"></a>

```python
queryable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secret"></a>

```python
secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CodepipelineCustomActionTypeConfigurationProperty, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty">CodepipelineCustomActionTypeConfigurationProperty</a>, cdktf.IResolvable]

---


### CodepipelineCustomActionTypeInputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeInputArtifactDetailsOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput">maximum_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput">minimum_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_count_input`<sup>Optional</sup> <a name="maximum_count_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```python
maximum_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count_input`<sup>Optional</sup> <a name="minimum_count_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```python
minimum_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineCustomActionTypeInputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---


### CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput">maximum_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput">minimum_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_count_input`<sup>Optional</sup> <a name="maximum_count_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```python
maximum_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count_input`<sup>Optional</sup> <a name="minimum_count_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```python
minimum_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineCustomActionTypeOutputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---


### CodepipelineCustomActionTypeSettingsOutputReference <a name="CodepipelineCustomActionTypeSettingsOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate">reset_entity_url_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate">reset_execution_url_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate">reset_revision_url_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl">reset_third_party_configuration_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity_url_template` <a name="reset_entity_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate"></a>

```python
def reset_entity_url_template() -> None
```

##### `reset_execution_url_template` <a name="reset_execution_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate"></a>

```python
def reset_execution_url_template() -> None
```

##### `reset_revision_url_template` <a name="reset_revision_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate"></a>

```python
def reset_revision_url_template() -> None
```

##### `reset_third_party_configuration_url` <a name="reset_third_party_configuration_url" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl"></a>

```python
def reset_third_party_configuration_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput">entity_url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput">execution_url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput">revision_url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput">third_party_configuration_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate">entity_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate">execution_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate">revision_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl">third_party_configuration_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_url_template_input`<sup>Optional</sup> <a name="entity_url_template_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput"></a>

```python
entity_url_template_input: str
```

- *Type:* str

---

##### `execution_url_template_input`<sup>Optional</sup> <a name="execution_url_template_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput"></a>

```python
execution_url_template_input: str
```

- *Type:* str

---

##### `revision_url_template_input`<sup>Optional</sup> <a name="revision_url_template_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput"></a>

```python
revision_url_template_input: str
```

- *Type:* str

---

##### `third_party_configuration_url_input`<sup>Optional</sup> <a name="third_party_configuration_url_input" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput"></a>

```python
third_party_configuration_url_input: str
```

- *Type:* str

---

##### `entity_url_template`<sup>Required</sup> <a name="entity_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate"></a>

```python
entity_url_template: str
```

- *Type:* str

---

##### `execution_url_template`<sup>Required</sup> <a name="execution_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate"></a>

```python
execution_url_template: str
```

- *Type:* str

---

##### `revision_url_template`<sup>Required</sup> <a name="revision_url_template" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate"></a>

```python
revision_url_template: str
```

- *Type:* str

---

##### `third_party_configuration_url`<sup>Required</sup> <a name="third_party_configuration_url" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl"></a>

```python
third_party_configuration_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineCustomActionTypeSettings
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---



