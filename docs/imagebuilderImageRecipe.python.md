# `imagebuilderImageRecipe` Submodule <a name="`imagebuilderImageRecipe` Submodule" id="@cdktf/provider-aws.imagebuilderImageRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImageRecipe <a name="ImagebuilderImageRecipe" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe aws_imagebuilder_image_recipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipe(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  component: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeComponent]],
  name: str,
  parent_image: str,
  version: str,
  block_device_mapping: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeBlockDeviceMapping]] = None,
  description: str = None,
  id: str = None,
  systems_manager_agent: ImagebuilderImageRecipeSystemsManagerAgent = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_data_base64: str = None,
  working_directory: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.component">component</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>]]</code> | component block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.parentImage">parent_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.blockDeviceMapping">block_device_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>]]</code> | block_device_mapping block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#id ImagebuilderImageRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.systemsManagerAgent">systems_manager_agent</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a></code> | systems_manager_agent block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags_all ImagebuilderImageRecipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.userDataBase64">user_data_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#user_data_base64 ImagebuilderImageRecipe#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.component"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>]]

component block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#component ImagebuilderImageRecipe#component}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}.

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.parentImage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}.

---

##### `block_device_mapping`<sup>Optional</sup> <a name="block_device_mapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.blockDeviceMapping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>]]

block_device_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#block_device_mapping ImagebuilderImageRecipe#block_device_mapping}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#id ImagebuilderImageRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `systems_manager_agent`<sup>Optional</sup> <a name="systems_manager_agent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.systemsManagerAgent"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a>

systems_manager_agent block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#systems_manager_agent ImagebuilderImageRecipe#systems_manager_agent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags_all ImagebuilderImageRecipe#tags_all}.

---

##### `user_data_base64`<sup>Optional</sup> <a name="user_data_base64" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.userDataBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#user_data_base64 ImagebuilderImageRecipe#user_data_base64}.

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.workingDirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMapping">put_block_device_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponent">put_component</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putSystemsManagerAgent">put_systems_manager_agent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMapping">reset_block_device_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetSystemsManagerAgent">reset_systems_manager_agent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetUserDataBase64">reset_user_data_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_block_device_mapping` <a name="put_block_device_mapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMapping"></a>

```python
def put_block_device_mapping(
  value: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeBlockDeviceMapping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMapping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>]]

---

##### `put_component` <a name="put_component" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponent"></a>

```python
def put_component(
  value: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeComponent]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponent.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>]]

---

##### `put_systems_manager_agent` <a name="put_systems_manager_agent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putSystemsManagerAgent"></a>

```python
def put_systems_manager_agent(
  uninstall_after_build: typing.Union[bool, IResolvable]
) -> None
```

###### `uninstall_after_build`<sup>Required</sup> <a name="uninstall_after_build" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.putSystemsManagerAgent.parameter.uninstallAfterBuild"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}.

---

##### `reset_block_device_mapping` <a name="reset_block_device_mapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMapping"></a>

```python
def reset_block_device_mapping() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_systems_manager_agent` <a name="reset_systems_manager_agent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetSystemsManagerAgent"></a>

```python
def reset_systems_manager_agent() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_user_data_base64` <a name="reset_user_data_base64" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetUserDataBase64"></a>

```python
def reset_user_data_base64() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipe.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMapping">block_device_mapping</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList">ImagebuilderImageRecipeBlockDeviceMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.component">component</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList">ImagebuilderImageRecipeComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dateCreated">date_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.systemsManagerAgent">systems_manager_agent</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference">ImagebuilderImageRecipeSystemsManagerAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingInput">block_device_mapping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentInput">component_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput">parent_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.systemsManagerAgentInput">systems_manager_agent_input</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.userDataBase64Input">user_data_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage">parent_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.userDataBase64">user_data_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `block_device_mapping`<sup>Required</sup> <a name="block_device_mapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMapping"></a>

```python
block_device_mapping: ImagebuilderImageRecipeBlockDeviceMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList">ImagebuilderImageRecipeBlockDeviceMappingList</a>

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.component"></a>

```python
component: ImagebuilderImageRecipeComponentList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList">ImagebuilderImageRecipeComponentList</a>

---

##### `date_created`<sup>Required</sup> <a name="date_created" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dateCreated"></a>

```python
date_created: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `systems_manager_agent`<sup>Required</sup> <a name="systems_manager_agent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.systemsManagerAgent"></a>

```python
systems_manager_agent: ImagebuilderImageRecipeSystemsManagerAgentOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference">ImagebuilderImageRecipeSystemsManagerAgentOutputReference</a>

---

##### `block_device_mapping_input`<sup>Optional</sup> <a name="block_device_mapping_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingInput"></a>

```python
block_device_mapping_input: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeBlockDeviceMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>]]

---

##### `component_input`<sup>Optional</sup> <a name="component_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentInput"></a>

```python
component_input: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_image_input`<sup>Optional</sup> <a name="parent_image_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput"></a>

```python
parent_image_input: str
```

- *Type:* str

---

##### `systems_manager_agent_input`<sup>Optional</sup> <a name="systems_manager_agent_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.systemsManagerAgentInput"></a>

```python
systems_manager_agent_input: ImagebuilderImageRecipeSystemsManagerAgent
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_data_base64_input`<sup>Optional</sup> <a name="user_data_base64_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.userDataBase64Input"></a>

```python
user_data_base64_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage"></a>

```python
parent_image: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_data_base64`<sup>Required</sup> <a name="user_data_base64" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.userDataBase64"></a>

```python
user_data_base64: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImageRecipeBlockDeviceMapping <a name="ImagebuilderImageRecipeBlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping(
  device_name: str = None,
  ebs: ImagebuilderImageRecipeBlockDeviceMappingEbs = None,
  no_device: typing.Union[bool, IResolvable] = None,
  virtual_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#device_name ImagebuilderImageRecipe#device_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#no_device ImagebuilderImageRecipe#no_device}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#virtual_name ImagebuilderImageRecipe#virtual_name}. |

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#device_name ImagebuilderImageRecipe#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.ebs"></a>

```python
ebs: ImagebuilderImageRecipeBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#ebs ImagebuilderImageRecipe#ebs}

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#no_device ImagebuilderImageRecipe#no_device}.

---

##### `virtual_name`<sup>Optional</sup> <a name="virtual_name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#virtual_name ImagebuilderImageRecipe#virtual_name}.

---

### ImagebuilderImageRecipeBlockDeviceMappingEbs <a name="ImagebuilderImageRecipeBlockDeviceMappingEbs" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs(
  delete_on_termination: str = None,
  encrypted: str = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.deleteOnTermination">delete_on_termination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.encrypted">encrypted</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#encrypted ImagebuilderImageRecipe#encrypted}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#iops ImagebuilderImageRecipe#iops}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#kms_key_id ImagebuilderImageRecipe#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#snapshot_id ImagebuilderImageRecipe#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#throughput ImagebuilderImageRecipe#throughput}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#volume_size ImagebuilderImageRecipe#volume_size}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#volume_type ImagebuilderImageRecipe#volume_type}. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.deleteOnTermination"></a>

```python
delete_on_termination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.encrypted"></a>

```python
encrypted: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#encrypted ImagebuilderImageRecipe#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#iops ImagebuilderImageRecipe#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#kms_key_id ImagebuilderImageRecipe#kms_key_id}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#snapshot_id ImagebuilderImageRecipe#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#throughput ImagebuilderImageRecipe#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#volume_size ImagebuilderImageRecipe#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#volume_type ImagebuilderImageRecipe#volume_type}.

---

### ImagebuilderImageRecipeComponent <a name="ImagebuilderImageRecipeComponent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponent(
  component_arn: str,
  parameter: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeComponentParameter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent.property.componentArn">component_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#component_arn ImagebuilderImageRecipe#component_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>]]</code> | parameter block. |

---

##### `component_arn`<sup>Required</sup> <a name="component_arn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent.property.componentArn"></a>

```python
component_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#component_arn ImagebuilderImageRecipe#component_arn}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeComponentParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#parameter ImagebuilderImageRecipe#parameter}

---

### ImagebuilderImageRecipeComponentParameter <a name="ImagebuilderImageRecipeComponentParameter" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#value ImagebuilderImageRecipe#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#value ImagebuilderImageRecipe#value}.

---

### ImagebuilderImageRecipeConfig <a name="ImagebuilderImageRecipeConfig" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  component: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeComponent]],
  name: str,
  parent_image: str,
  version: str,
  block_device_mapping: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeBlockDeviceMapping]] = None,
  description: str = None,
  id: str = None,
  systems_manager_agent: ImagebuilderImageRecipeSystemsManagerAgent = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_data_base64: str = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.component">component</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>]]</code> | component block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage">parent_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMapping">block_device_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>]]</code> | block_device_mapping block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#id ImagebuilderImageRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.systemsManagerAgent">systems_manager_agent</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a></code> | systems_manager_agent block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags_all ImagebuilderImageRecipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.userDataBase64">user_data_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#user_data_base64 ImagebuilderImageRecipe#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.component"></a>

```python
component: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>]]

component block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#component ImagebuilderImageRecipe#component}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}.

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage"></a>

```python
parent_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}.

---

##### `block_device_mapping`<sup>Optional</sup> <a name="block_device_mapping" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMapping"></a>

```python
block_device_mapping: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeBlockDeviceMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>]]

block_device_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#block_device_mapping ImagebuilderImageRecipe#block_device_mapping}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#id ImagebuilderImageRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `systems_manager_agent`<sup>Optional</sup> <a name="systems_manager_agent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.systemsManagerAgent"></a>

```python
systems_manager_agent: ImagebuilderImageRecipeSystemsManagerAgent
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a>

systems_manager_agent block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#systems_manager_agent ImagebuilderImageRecipe#systems_manager_agent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#tags_all ImagebuilderImageRecipe#tags_all}.

---

##### `user_data_base64`<sup>Optional</sup> <a name="user_data_base64" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.userDataBase64"></a>

```python
user_data_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#user_data_base64 ImagebuilderImageRecipe#user_data_base64}.

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}.

---

### ImagebuilderImageRecipeSystemsManagerAgent <a name="ImagebuilderImageRecipeSystemsManagerAgent" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent(
  uninstall_after_build: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent.property.uninstallAfterBuild">uninstall_after_build</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}. |

---

##### `uninstall_after_build`<sup>Required</sup> <a name="uninstall_after_build" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent.property.uninstallAfterBuild"></a>

```python
uninstall_after_build: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encrypted">encrypted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encryptedInput"></a>

```python
encrypted_input: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encrypted"></a>

```python
encrypted: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.internalValue"></a>

```python
internal_value: ImagebuilderImageRecipeBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a>

---


### ImagebuilderImageRecipeBlockDeviceMappingList <a name="ImagebuilderImageRecipeBlockDeviceMappingList" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderImageRecipeBlockDeviceMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeBlockDeviceMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>]]

---


### ImagebuilderImageRecipeBlockDeviceMappingOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingOutputReference" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs">put_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetEbs">reset_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetVirtualName">reset_virtual_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs` <a name="put_ebs" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs"></a>

```python
def put_ebs(
  delete_on_termination: str = None,
  encrypted: str = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs.parameter.deleteOnTermination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}.

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs.parameter.encrypted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#encrypted ImagebuilderImageRecipe#encrypted}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#iops ImagebuilderImageRecipe#iops}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#kms_key_id ImagebuilderImageRecipe#kms_key_id}.

---

###### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#snapshot_id ImagebuilderImageRecipe#snapshot_id}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#throughput ImagebuilderImageRecipe#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#volume_size ImagebuilderImageRecipe#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.putEbs.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe#volume_type ImagebuilderImageRecipe#volume_type}.

---

##### `reset_device_name` <a name="reset_device_name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_ebs` <a name="reset_ebs" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetEbs"></a>

```python
def reset_ebs() -> None
```

##### `reset_no_device` <a name="reset_no_device" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_virtual_name` <a name="reset_virtual_name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.resetVirtualName"></a>

```python
def reset_virtual_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebsInput">ebs_input</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebs"></a>

```python
ebs: ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference</a>

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `ebs_input`<sup>Optional</sup> <a name="ebs_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebsInput"></a>

```python
ebs_input: ImagebuilderImageRecipeBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingEbs">ImagebuilderImageRecipeBlockDeviceMappingEbs</a>

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDeviceInput"></a>

```python
no_device_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ImagebuilderImageRecipeBlockDeviceMapping, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMapping">ImagebuilderImageRecipeBlockDeviceMapping</a>, cdktf.IResolvable]

---


### ImagebuilderImageRecipeComponentList <a name="ImagebuilderImageRecipeComponentList" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderImageRecipeComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>]]

---


### ImagebuilderImageRecipeComponentOutputReference <a name="ImagebuilderImageRecipeComponentOutputReference" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.resetParameter">reset_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeComponentParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>]]

---

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.resetParameter"></a>

```python
def reset_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList">ImagebuilderImageRecipeComponentParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.componentArnInput">component_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.componentArn">component_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.parameter"></a>

```python
parameter: ImagebuilderImageRecipeComponentParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList">ImagebuilderImageRecipeComponentParameterList</a>

---

##### `component_arn_input`<sup>Optional</sup> <a name="component_arn_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.componentArnInput"></a>

```python
component_arn_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeComponentParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>]]

---

##### `component_arn`<sup>Required</sup> <a name="component_arn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.componentArn"></a>

```python
component_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ImagebuilderImageRecipeComponent, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponent">ImagebuilderImageRecipeComponent</a>, cdktf.IResolvable]

---


### ImagebuilderImageRecipeComponentParameterList <a name="ImagebuilderImageRecipeComponentParameterList" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderImageRecipeComponentParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ImagebuilderImageRecipeComponentParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>]]

---


### ImagebuilderImageRecipeComponentParameterOutputReference <a name="ImagebuilderImageRecipeComponentParameterOutputReference" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ImagebuilderImageRecipeComponentParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentParameter">ImagebuilderImageRecipeComponentParameter</a>, cdktf.IResolvable]

---


### ImagebuilderImageRecipeSystemsManagerAgentOutputReference <a name="ImagebuilderImageRecipeSystemsManagerAgentOutputReference" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput">uninstall_after_build_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.uninstallAfterBuild">uninstall_after_build</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uninstall_after_build_input`<sup>Optional</sup> <a name="uninstall_after_build_input" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput"></a>

```python
uninstall_after_build_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uninstall_after_build`<sup>Required</sup> <a name="uninstall_after_build" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.uninstallAfterBuild"></a>

```python
uninstall_after_build: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgentOutputReference.property.internalValue"></a>

```python
internal_value: ImagebuilderImageRecipeSystemsManagerAgent
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImageRecipe.ImagebuilderImageRecipeSystemsManagerAgent">ImagebuilderImageRecipeSystemsManagerAgent</a>

---



