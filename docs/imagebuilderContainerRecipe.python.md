# `imagebuilderContainerRecipe` Submodule <a name="`imagebuilderContainerRecipe` Submodule" id="@cdktf/provider-aws.imagebuilderContainerRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderContainerRecipe <a name="ImagebuilderContainerRecipe" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe aws_imagebuilder_container_recipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipe(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  component: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeComponent]],
  container_type: str,
  name: str,
  parent_image: str,
  target_repository: ImagebuilderContainerRecipeTargetRepository,
  version: str,
  description: str = None,
  dockerfile_template_data: str = None,
  dockerfile_template_uri: str = None,
  id: str = None,
  instance_configuration: ImagebuilderContainerRecipeInstanceConfiguration = None,
  kms_key_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  working_directory: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.component">component</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent">ImagebuilderContainerRecipeComponent</a>]]</code> | component block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.containerType">container_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#container_type ImagebuilderContainerRecipe#container_type}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.parentImage">parent_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#parent_image ImagebuilderContainerRecipe#parent_image}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.targetRepository">target_repository</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | target_repository block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#version ImagebuilderContainerRecipe#version}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#description ImagebuilderContainerRecipe#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.dockerfileTemplateData">dockerfile_template_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.dockerfileTemplateUri">dockerfile_template_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#id ImagebuilderContainerRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.instanceConfiguration">instance_configuration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | instance_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags ImagebuilderContainerRecipe#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags_all ImagebuilderContainerRecipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#working_directory ImagebuilderContainerRecipe#working_directory}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.component"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent">ImagebuilderContainerRecipeComponent</a>]]

component block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#component ImagebuilderContainerRecipe#component}

---

##### `container_type`<sup>Required</sup> <a name="container_type" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.containerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#container_type ImagebuilderContainerRecipe#container_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}.

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.parentImage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#parent_image ImagebuilderContainerRecipe#parent_image}.

---

##### `target_repository`<sup>Required</sup> <a name="target_repository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.targetRepository"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

target_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#target_repository ImagebuilderContainerRecipe#target_repository}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#version ImagebuilderContainerRecipe#version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#description ImagebuilderContainerRecipe#description}.

---

##### `dockerfile_template_data`<sup>Optional</sup> <a name="dockerfile_template_data" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.dockerfileTemplateData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}.

---

##### `dockerfile_template_uri`<sup>Optional</sup> <a name="dockerfile_template_uri" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.dockerfileTemplateUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#id ImagebuilderContainerRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_configuration`<sup>Optional</sup> <a name="instance_configuration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.instanceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

instance_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#instance_configuration ImagebuilderContainerRecipe#instance_configuration}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags ImagebuilderContainerRecipe#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags_all ImagebuilderContainerRecipe#tags_all}.

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.workingDirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#working_directory ImagebuilderContainerRecipe#working_directory}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponent">put_component</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration">put_instance_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository">put_target_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateData">reset_dockerfile_template_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateUri">reset_dockerfile_template_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetInstanceConfiguration">reset_instance_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_component` <a name="put_component" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponent"></a>

```python
def put_component(
  value: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeComponent]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponent.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent">ImagebuilderContainerRecipeComponent</a>]]

---

##### `put_instance_configuration` <a name="put_instance_configuration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration"></a>

```python
def put_instance_configuration(
  block_device_mapping: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping]] = None,
  image: str = None
) -> None
```

###### `block_device_mapping`<sup>Optional</sup> <a name="block_device_mapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration.parameter.blockDeviceMapping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>]]

block_device_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#block_device_mapping ImagebuilderContainerRecipe#block_device_mapping}

---

###### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration.parameter.image"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#image ImagebuilderContainerRecipe#image}.

---

##### `put_target_repository` <a name="put_target_repository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository"></a>

```python
def put_target_repository(
  repository_name: str,
  service: str
) -> None
```

###### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository.parameter.repositoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#repository_name ImagebuilderContainerRecipe#repository_name}.

---

###### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#service ImagebuilderContainerRecipe#service}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dockerfile_template_data` <a name="reset_dockerfile_template_data" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateData"></a>

```python
def reset_dockerfile_template_data() -> None
```

##### `reset_dockerfile_template_uri` <a name="reset_dockerfile_template_uri" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateUri"></a>

```python
def reset_dockerfile_template_uri() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_configuration` <a name="reset_instance_configuration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetInstanceConfiguration"></a>

```python
def reset_instance_configuration() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipe.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.component">component</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList">ImagebuilderContainerRecipeComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dateCreated">date_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfiguration">instance_configuration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference">ImagebuilderContainerRecipeInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepository">target_repository</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference">ImagebuilderContainerRecipeTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.componentInput">component_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent">ImagebuilderContainerRecipeComponent</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerTypeInput">container_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateDataInput">dockerfile_template_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUriInput">dockerfile_template_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfigurationInput">instance_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImageInput">parent_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepositoryInput">target_repository_input</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerType">container_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateData">dockerfile_template_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUri">dockerfile_template_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImage">parent_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.component"></a>

```python
component: ImagebuilderContainerRecipeComponentList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList">ImagebuilderContainerRecipeComponentList</a>

---

##### `date_created`<sup>Required</sup> <a name="date_created" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dateCreated"></a>

```python
date_created: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `instance_configuration`<sup>Required</sup> <a name="instance_configuration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfiguration"></a>

```python
instance_configuration: ImagebuilderContainerRecipeInstanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference">ImagebuilderContainerRecipeInstanceConfigurationOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `target_repository`<sup>Required</sup> <a name="target_repository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepository"></a>

```python
target_repository: ImagebuilderContainerRecipeTargetRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference">ImagebuilderContainerRecipeTargetRepositoryOutputReference</a>

---

##### `component_input`<sup>Optional</sup> <a name="component_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.componentInput"></a>

```python
component_input: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent">ImagebuilderContainerRecipeComponent</a>]]

---

##### `container_type_input`<sup>Optional</sup> <a name="container_type_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerTypeInput"></a>

```python
container_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dockerfile_template_data_input`<sup>Optional</sup> <a name="dockerfile_template_data_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateDataInput"></a>

```python
dockerfile_template_data_input: str
```

- *Type:* str

---

##### `dockerfile_template_uri_input`<sup>Optional</sup> <a name="dockerfile_template_uri_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUriInput"></a>

```python
dockerfile_template_uri_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_configuration_input`<sup>Optional</sup> <a name="instance_configuration_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfigurationInput"></a>

```python
instance_configuration_input: ImagebuilderContainerRecipeInstanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_image_input`<sup>Optional</sup> <a name="parent_image_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImageInput"></a>

```python
parent_image_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_repository_input`<sup>Optional</sup> <a name="target_repository_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepositoryInput"></a>

```python
target_repository_input: ImagebuilderContainerRecipeTargetRepository
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `container_type`<sup>Required</sup> <a name="container_type" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerType"></a>

```python
container_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dockerfile_template_data`<sup>Required</sup> <a name="dockerfile_template_data" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateData"></a>

```python
dockerfile_template_data: str
```

- *Type:* str

---

##### `dockerfile_template_uri`<sup>Required</sup> <a name="dockerfile_template_uri" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUri"></a>

```python
dockerfile_template_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImage"></a>

```python
parent_image: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderContainerRecipeComponent <a name="ImagebuilderContainerRecipeComponent" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent(
  component_arn: str,
  parameter: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeComponentParameter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.componentArn">component_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#component_arn ImagebuilderContainerRecipe#component_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter">ImagebuilderContainerRecipeComponentParameter</a>]]</code> | parameter block. |

---

##### `component_arn`<sup>Required</sup> <a name="component_arn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.componentArn"></a>

```python
component_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#component_arn ImagebuilderContainerRecipe#component_arn}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeComponentParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter">ImagebuilderContainerRecipeComponentParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#parameter ImagebuilderContainerRecipe#parameter}

---

### ImagebuilderContainerRecipeComponentParameter <a name="ImagebuilderContainerRecipeComponentParameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#value ImagebuilderContainerRecipe#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#value ImagebuilderContainerRecipe#value}.

---

### ImagebuilderContainerRecipeConfig <a name="ImagebuilderContainerRecipeConfig" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  component: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeComponent]],
  container_type: str,
  name: str,
  parent_image: str,
  target_repository: ImagebuilderContainerRecipeTargetRepository,
  version: str,
  description: str = None,
  dockerfile_template_data: str = None,
  dockerfile_template_uri: str = None,
  id: str = None,
  instance_configuration: ImagebuilderContainerRecipeInstanceConfiguration = None,
  kms_key_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.component">component</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent">ImagebuilderContainerRecipeComponent</a>]]</code> | component block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.containerType">container_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#container_type ImagebuilderContainerRecipe#container_type}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.parentImage">parent_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#parent_image ImagebuilderContainerRecipe#parent_image}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.targetRepository">target_repository</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | target_repository block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#version ImagebuilderContainerRecipe#version}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#description ImagebuilderContainerRecipe#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateData">dockerfile_template_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateUri">dockerfile_template_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#id ImagebuilderContainerRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.instanceConfiguration">instance_configuration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | instance_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags ImagebuilderContainerRecipe#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags_all ImagebuilderContainerRecipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#working_directory ImagebuilderContainerRecipe#working_directory}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.component"></a>

```python
component: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent">ImagebuilderContainerRecipeComponent</a>]]

component block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#component ImagebuilderContainerRecipe#component}

---

##### `container_type`<sup>Required</sup> <a name="container_type" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.containerType"></a>

```python
container_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#container_type ImagebuilderContainerRecipe#container_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}.

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.parentImage"></a>

```python
parent_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#parent_image ImagebuilderContainerRecipe#parent_image}.

---

##### `target_repository`<sup>Required</sup> <a name="target_repository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.targetRepository"></a>

```python
target_repository: ImagebuilderContainerRecipeTargetRepository
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

target_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#target_repository ImagebuilderContainerRecipe#target_repository}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#version ImagebuilderContainerRecipe#version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#description ImagebuilderContainerRecipe#description}.

---

##### `dockerfile_template_data`<sup>Optional</sup> <a name="dockerfile_template_data" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateData"></a>

```python
dockerfile_template_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}.

---

##### `dockerfile_template_uri`<sup>Optional</sup> <a name="dockerfile_template_uri" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateUri"></a>

```python
dockerfile_template_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#id ImagebuilderContainerRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_configuration`<sup>Optional</sup> <a name="instance_configuration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.instanceConfiguration"></a>

```python
instance_configuration: ImagebuilderContainerRecipeInstanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

instance_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#instance_configuration ImagebuilderContainerRecipe#instance_configuration}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags ImagebuilderContainerRecipe#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags_all ImagebuilderContainerRecipe#tags_all}.

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#working_directory ImagebuilderContainerRecipe#working_directory}.

---

### ImagebuilderContainerRecipeInstanceConfiguration <a name="ImagebuilderContainerRecipeInstanceConfiguration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration(
  block_device_mapping: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping]] = None,
  image: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.blockDeviceMapping">block_device_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>]]</code> | block_device_mapping block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#image ImagebuilderContainerRecipe#image}. |

---

##### `block_device_mapping`<sup>Optional</sup> <a name="block_device_mapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.blockDeviceMapping"></a>

```python
block_device_mapping: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>]]

block_device_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#block_device_mapping ImagebuilderContainerRecipe#block_device_mapping}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#image ImagebuilderContainerRecipe#image}.

---

### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping(
  device_name: str = None,
  ebs: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs = None,
  no_device: typing.Union[bool, IResolvable] = None,
  virtual_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#device_name ImagebuilderContainerRecipe#device_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#no_device ImagebuilderContainerRecipe#no_device}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#virtual_name ImagebuilderContainerRecipe#virtual_name}. |

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#device_name ImagebuilderContainerRecipe#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.ebs"></a>

```python
ebs: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#ebs ImagebuilderContainerRecipe#ebs}

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#no_device ImagebuilderContainerRecipe#no_device}.

---

##### `virtual_name`<sup>Optional</sup> <a name="virtual_name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#virtual_name ImagebuilderContainerRecipe#virtual_name}.

---

### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs(
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
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.deleteOnTermination">delete_on_termination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#delete_on_termination ImagebuilderContainerRecipe#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.encrypted">encrypted</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#encrypted ImagebuilderContainerRecipe#encrypted}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#iops ImagebuilderContainerRecipe#iops}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#snapshot_id ImagebuilderContainerRecipe#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#throughput ImagebuilderContainerRecipe#throughput}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_size ImagebuilderContainerRecipe#volume_size}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_type ImagebuilderContainerRecipe#volume_type}. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.deleteOnTermination"></a>

```python
delete_on_termination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#delete_on_termination ImagebuilderContainerRecipe#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.encrypted"></a>

```python
encrypted: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#encrypted ImagebuilderContainerRecipe#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#iops ImagebuilderContainerRecipe#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#snapshot_id ImagebuilderContainerRecipe#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#throughput ImagebuilderContainerRecipe#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_size ImagebuilderContainerRecipe#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_type ImagebuilderContainerRecipe#volume_type}.

---

### ImagebuilderContainerRecipeTargetRepository <a name="ImagebuilderContainerRecipeTargetRepository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository(
  repository_name: str,
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#repository_name ImagebuilderContainerRecipe#repository_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#service ImagebuilderContainerRecipe#service}. |

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#repository_name ImagebuilderContainerRecipe#repository_name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#service ImagebuilderContainerRecipe#service}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderContainerRecipeComponentList <a name="ImagebuilderContainerRecipeComponentList" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderContainerRecipeComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent">ImagebuilderContainerRecipeComponent</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent">ImagebuilderContainerRecipeComponent</a>]]

---


### ImagebuilderContainerRecipeComponentOutputReference <a name="ImagebuilderContainerRecipeComponentOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resetParameter">reset_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeComponentParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter">ImagebuilderContainerRecipeComponentParameter</a>]]

---

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resetParameter"></a>

```python
def reset_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList">ImagebuilderContainerRecipeComponentParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArnInput">component_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter">ImagebuilderContainerRecipeComponentParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArn">component_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent">ImagebuilderContainerRecipeComponent</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameter"></a>

```python
parameter: ImagebuilderContainerRecipeComponentParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList">ImagebuilderContainerRecipeComponentParameterList</a>

---

##### `component_arn_input`<sup>Optional</sup> <a name="component_arn_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArnInput"></a>

```python
component_arn_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeComponentParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter">ImagebuilderContainerRecipeComponentParameter</a>]]

---

##### `component_arn`<sup>Required</sup> <a name="component_arn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArn"></a>

```python
component_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ImagebuilderContainerRecipeComponent, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent">ImagebuilderContainerRecipeComponent</a>, cdktf.IResolvable]

---


### ImagebuilderContainerRecipeComponentParameterList <a name="ImagebuilderContainerRecipeComponentParameterList" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderContainerRecipeComponentParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter">ImagebuilderContainerRecipeComponentParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeComponentParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter">ImagebuilderContainerRecipeComponentParameter</a>]]

---


### ImagebuilderContainerRecipeComponentParameterOutputReference <a name="ImagebuilderContainerRecipeComponentParameterOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter">ImagebuilderContainerRecipeComponentParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ImagebuilderContainerRecipeComponentParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter">ImagebuilderContainerRecipeComponentParameter</a>, cdktf.IResolvable]

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted">encrypted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encryptedInput"></a>

```python
encrypted_input: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted"></a>

```python
encrypted: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue"></a>

```python
internal_value: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>]]

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs">put_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetEbs">reset_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetVirtualName">reset_virtual_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs` <a name="put_ebs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs"></a>

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

###### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs.parameter.deleteOnTermination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#delete_on_termination ImagebuilderContainerRecipe#delete_on_termination}.

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs.parameter.encrypted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#encrypted ImagebuilderContainerRecipe#encrypted}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#iops ImagebuilderContainerRecipe#iops}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}.

---

###### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#snapshot_id ImagebuilderContainerRecipe#snapshot_id}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#throughput ImagebuilderContainerRecipe#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_size ImagebuilderContainerRecipe#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_type ImagebuilderContainerRecipe#volume_type}.

---

##### `reset_device_name` <a name="reset_device_name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_ebs` <a name="reset_ebs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetEbs"></a>

```python
def reset_ebs() -> None
```

##### `reset_no_device` <a name="reset_no_device" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_virtual_name` <a name="reset_virtual_name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetVirtualName"></a>

```python
def reset_virtual_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebsInput">ebs_input</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs"></a>

```python
ebs: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference</a>

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `ebs_input`<sup>Optional</sup> <a name="ebs_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebsInput"></a>

```python
ebs_input: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDeviceInput"></a>

```python
no_device_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>, cdktf.IResolvable]

---


### ImagebuilderContainerRecipeInstanceConfigurationOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMapping">put_block_device_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetBlockDeviceMapping">reset_block_device_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetImage">reset_image</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_block_device_mapping` <a name="put_block_device_mapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMapping"></a>

```python
def put_block_device_mapping(
  value: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMapping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>]]

---

##### `reset_block_device_mapping` <a name="reset_block_device_mapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetBlockDeviceMapping"></a>

```python
def reset_block_device_mapping() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetImage"></a>

```python
def reset_image() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping">block_device_mapping</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappingInput">block_device_mapping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_device_mapping`<sup>Required</sup> <a name="block_device_mapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping"></a>

```python
block_device_mapping: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a>

---

##### `block_device_mapping_input`<sup>Optional</sup> <a name="block_device_mapping_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappingInput"></a>

```python
block_device_mapping_input: typing.Union[IResolvable, typing.List[ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ImagebuilderContainerRecipeInstanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---


### ImagebuilderContainerRecipeTargetRepositoryOutputReference <a name="ImagebuilderContainerRecipeTargetRepositoryOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_container_recipe

imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: ImagebuilderContainerRecipeTargetRepository
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---



