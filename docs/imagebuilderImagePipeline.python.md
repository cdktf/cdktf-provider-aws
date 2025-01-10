# `imagebuilderImagePipeline` Submodule <a name="`imagebuilderImagePipeline` Submodule" id="@cdktf/provider-aws.imagebuilderImagePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImagePipeline <a name="ImagebuilderImagePipeline" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline aws_imagebuilder_image_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipeline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  infrastructure_configuration_arn: str,
  name: str,
  container_recipe_arn: str = None,
  description: str = None,
  distribution_configuration_arn: str = None,
  enhanced_image_metadata_enabled: typing.Union[bool, IResolvable] = None,
  execution_role: str = None,
  id: str = None,
  image_recipe_arn: str = None,
  image_scanning_configuration: ImagebuilderImagePipelineImageScanningConfiguration = None,
  image_tests_configuration: ImagebuilderImagePipelineImageTestsConfiguration = None,
  schedule: ImagebuilderImagePipelineSchedule = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  workflow: typing.Union[IResolvable, typing.List[ImagebuilderImagePipelineWorkflow]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.infrastructureConfigurationArn">infrastructure_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.containerRecipeArn">container_recipe_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.distributionConfigurationArn">distribution_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.enhancedImageMetadataEnabled">enhanced_image_metadata_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.executionRole">execution_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#execution_role ImagebuilderImagePipeline#execution_role}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#id ImagebuilderImagePipeline#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.imageRecipeArn">image_recipe_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.imageScanningConfiguration">image_scanning_configuration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a></code> | image_scanning_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.imageTestsConfiguration">image_tests_configuration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | image_tests_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#tags_all ImagebuilderImagePipeline#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.workflow">workflow</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>]]</code> | workflow block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `infrastructure_configuration_arn`<sup>Required</sup> <a name="infrastructure_configuration_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.infrastructureConfigurationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}.

---

##### `container_recipe_arn`<sup>Optional</sup> <a name="container_recipe_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.containerRecipeArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}.

---

##### `distribution_configuration_arn`<sup>Optional</sup> <a name="distribution_configuration_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.distributionConfigurationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}.

---

##### `enhanced_image_metadata_enabled`<sup>Optional</sup> <a name="enhanced_image_metadata_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.enhancedImageMetadataEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}.

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.executionRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#execution_role ImagebuilderImagePipeline#execution_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#id ImagebuilderImagePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_recipe_arn`<sup>Optional</sup> <a name="image_recipe_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.imageRecipeArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}.

---

##### `image_scanning_configuration`<sup>Optional</sup> <a name="image_scanning_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.imageScanningConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

image_scanning_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_scanning_configuration ImagebuilderImagePipeline#image_scanning_configuration}

---

##### `image_tests_configuration`<sup>Optional</sup> <a name="image_tests_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.imageTestsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

image_tests_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#schedule ImagebuilderImagePipeline#schedule}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#tags_all ImagebuilderImagePipeline#tags_all}.

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.workflow"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>]]

workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#workflow ImagebuilderImagePipeline#workflow}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration">put_image_scanning_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration">put_image_tests_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflow">put_workflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetContainerRecipeArn">reset_container_recipe_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDistributionConfigurationArn">reset_distribution_configuration_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetEnhancedImageMetadataEnabled">reset_enhanced_image_metadata_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetExecutionRole">reset_execution_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageRecipeArn">reset_image_recipe_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageScanningConfiguration">reset_image_scanning_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageTestsConfiguration">reset_image_tests_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetWorkflow">reset_workflow</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_image_scanning_configuration` <a name="put_image_scanning_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration"></a>

```python
def put_image_scanning_configuration(
  ecr_configuration: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration = None,
  image_scanning_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `ecr_configuration`<sup>Optional</sup> <a name="ecr_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration.parameter.ecrConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

ecr_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#ecr_configuration ImagebuilderImagePipeline#ecr_configuration}

---

###### `image_scanning_enabled`<sup>Optional</sup> <a name="image_scanning_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration.parameter.imageScanningEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled ImagebuilderImagePipeline#image_scanning_enabled}.

---

##### `put_image_tests_configuration` <a name="put_image_tests_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration"></a>

```python
def put_image_tests_configuration(
  image_tests_enabled: typing.Union[bool, IResolvable] = None,
  timeout_minutes: typing.Union[int, float] = None
) -> None
```

###### `image_tests_enabled`<sup>Optional</sup> <a name="image_tests_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration.parameter.imageTestsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}.

---

###### `timeout_minutes`<sup>Optional</sup> <a name="timeout_minutes" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration.parameter.timeoutMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule"></a>

```python
def put_schedule(
  schedule_expression: str,
  pipeline_execution_start_condition: str = None,
  timezone: str = None
) -> None
```

###### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule.parameter.scheduleExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}.

---

###### `pipeline_execution_start_condition`<sup>Optional</sup> <a name="pipeline_execution_start_condition" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule.parameter.pipelineExecutionStartCondition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}.

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#timezone ImagebuilderImagePipeline#timezone}.

---

##### `put_workflow` <a name="put_workflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflow"></a>

```python
def put_workflow(
  value: typing.Union[IResolvable, typing.List[ImagebuilderImagePipelineWorkflow]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflow.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>]]

---

##### `reset_container_recipe_arn` <a name="reset_container_recipe_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetContainerRecipeArn"></a>

```python
def reset_container_recipe_arn() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_distribution_configuration_arn` <a name="reset_distribution_configuration_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDistributionConfigurationArn"></a>

```python
def reset_distribution_configuration_arn() -> None
```

##### `reset_enhanced_image_metadata_enabled` <a name="reset_enhanced_image_metadata_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetEnhancedImageMetadataEnabled"></a>

```python
def reset_enhanced_image_metadata_enabled() -> None
```

##### `reset_execution_role` <a name="reset_execution_role" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetExecutionRole"></a>

```python
def reset_execution_role() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_recipe_arn` <a name="reset_image_recipe_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageRecipeArn"></a>

```python
def reset_image_recipe_arn() -> None
```

##### `reset_image_scanning_configuration` <a name="reset_image_scanning_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageScanningConfiguration"></a>

```python
def reset_image_scanning_configuration() -> None
```

##### `reset_image_tests_configuration` <a name="reset_image_tests_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageTestsConfiguration"></a>

```python
def reset_image_tests_configuration() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_workflow` <a name="reset_workflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetWorkflow"></a>

```python
def reset_workflow() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ImagebuilderImagePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ImagebuilderImagePipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ImagebuilderImagePipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ImagebuilderImagePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ImagebuilderImagePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateCreated">date_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateLastRun">date_last_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateNextRun">date_next_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateUpdated">date_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfiguration">image_scanning_configuration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfiguration">image_tests_configuration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference">ImagebuilderImagePipelineImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference">ImagebuilderImagePipelineScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflow">workflow</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList">ImagebuilderImagePipelineWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArnInput">container_recipe_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArnInput">distribution_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabledInput">enhanced_image_metadata_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArnInput">image_recipe_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfigurationInput">image_scanning_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfigurationInput">image_tests_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArnInput">infrastructure_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflowInput">workflow_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArn">container_recipe_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArn">distribution_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabled">enhanced_image_metadata_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArn">image_recipe_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArn">infrastructure_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `date_created`<sup>Required</sup> <a name="date_created" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateCreated"></a>

```python
date_created: str
```

- *Type:* str

---

##### `date_last_run`<sup>Required</sup> <a name="date_last_run" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateLastRun"></a>

```python
date_last_run: str
```

- *Type:* str

---

##### `date_next_run`<sup>Required</sup> <a name="date_next_run" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateNextRun"></a>

```python
date_next_run: str
```

- *Type:* str

---

##### `date_updated`<sup>Required</sup> <a name="date_updated" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateUpdated"></a>

```python
date_updated: str
```

- *Type:* str

---

##### `image_scanning_configuration`<sup>Required</sup> <a name="image_scanning_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfiguration"></a>

```python
image_scanning_configuration: ImagebuilderImagePipelineImageScanningConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationOutputReference</a>

---

##### `image_tests_configuration`<sup>Required</sup> <a name="image_tests_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfiguration"></a>

```python
image_tests_configuration: ImagebuilderImagePipelineImageTestsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference">ImagebuilderImagePipelineImageTestsConfigurationOutputReference</a>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.schedule"></a>

```python
schedule: ImagebuilderImagePipelineScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference">ImagebuilderImagePipelineScheduleOutputReference</a>

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflow"></a>

```python
workflow: ImagebuilderImagePipelineWorkflowList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList">ImagebuilderImagePipelineWorkflowList</a>

---

##### `container_recipe_arn_input`<sup>Optional</sup> <a name="container_recipe_arn_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArnInput"></a>

```python
container_recipe_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `distribution_configuration_arn_input`<sup>Optional</sup> <a name="distribution_configuration_arn_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArnInput"></a>

```python
distribution_configuration_arn_input: str
```

- *Type:* str

---

##### `enhanced_image_metadata_enabled_input`<sup>Optional</sup> <a name="enhanced_image_metadata_enabled_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabledInput"></a>

```python
enhanced_image_metadata_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_recipe_arn_input`<sup>Optional</sup> <a name="image_recipe_arn_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArnInput"></a>

```python
image_recipe_arn_input: str
```

- *Type:* str

---

##### `image_scanning_configuration_input`<sup>Optional</sup> <a name="image_scanning_configuration_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfigurationInput"></a>

```python
image_scanning_configuration_input: ImagebuilderImagePipelineImageScanningConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

---

##### `image_tests_configuration_input`<sup>Optional</sup> <a name="image_tests_configuration_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfigurationInput"></a>

```python
image_tests_configuration_input: ImagebuilderImagePipelineImageTestsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

---

##### `infrastructure_configuration_arn_input`<sup>Optional</sup> <a name="infrastructure_configuration_arn_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArnInput"></a>

```python
infrastructure_configuration_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.scheduleInput"></a>

```python
schedule_input: ImagebuilderImagePipelineSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workflow_input`<sup>Optional</sup> <a name="workflow_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflowInput"></a>

```python
workflow_input: typing.Union[IResolvable, typing.List[ImagebuilderImagePipelineWorkflow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>]]

---

##### `container_recipe_arn`<sup>Required</sup> <a name="container_recipe_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArn"></a>

```python
container_recipe_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distribution_configuration_arn`<sup>Required</sup> <a name="distribution_configuration_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArn"></a>

```python
distribution_configuration_arn: str
```

- *Type:* str

---

##### `enhanced_image_metadata_enabled`<sup>Required</sup> <a name="enhanced_image_metadata_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabled"></a>

```python
enhanced_image_metadata_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_recipe_arn`<sup>Required</sup> <a name="image_recipe_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArn"></a>

```python
image_recipe_arn: str
```

- *Type:* str

---

##### `infrastructure_configuration_arn`<sup>Required</sup> <a name="infrastructure_configuration_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArn"></a>

```python
infrastructure_configuration_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImagePipelineConfig <a name="ImagebuilderImagePipelineConfig" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  infrastructure_configuration_arn: str,
  name: str,
  container_recipe_arn: str = None,
  description: str = None,
  distribution_configuration_arn: str = None,
  enhanced_image_metadata_enabled: typing.Union[bool, IResolvable] = None,
  execution_role: str = None,
  id: str = None,
  image_recipe_arn: str = None,
  image_scanning_configuration: ImagebuilderImagePipelineImageScanningConfiguration = None,
  image_tests_configuration: ImagebuilderImagePipelineImageTestsConfiguration = None,
  schedule: ImagebuilderImagePipelineSchedule = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  workflow: typing.Union[IResolvable, typing.List[ImagebuilderImagePipelineWorkflow]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.infrastructureConfigurationArn">infrastructure_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.containerRecipeArn">container_recipe_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.distributionConfigurationArn">distribution_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.enhancedImageMetadataEnabled">enhanced_image_metadata_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.executionRole">execution_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#execution_role ImagebuilderImagePipeline#execution_role}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#id ImagebuilderImagePipeline#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageRecipeArn">image_recipe_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageScanningConfiguration">image_scanning_configuration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a></code> | image_scanning_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTestsConfiguration">image_tests_configuration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | image_tests_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#tags_all ImagebuilderImagePipeline#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.workflow">workflow</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>]]</code> | workflow block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `infrastructure_configuration_arn`<sup>Required</sup> <a name="infrastructure_configuration_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.infrastructureConfigurationArn"></a>

```python
infrastructure_configuration_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}.

---

##### `container_recipe_arn`<sup>Optional</sup> <a name="container_recipe_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.containerRecipeArn"></a>

```python
container_recipe_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}.

---

##### `distribution_configuration_arn`<sup>Optional</sup> <a name="distribution_configuration_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.distributionConfigurationArn"></a>

```python
distribution_configuration_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}.

---

##### `enhanced_image_metadata_enabled`<sup>Optional</sup> <a name="enhanced_image_metadata_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.enhancedImageMetadataEnabled"></a>

```python
enhanced_image_metadata_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}.

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#execution_role ImagebuilderImagePipeline#execution_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#id ImagebuilderImagePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_recipe_arn`<sup>Optional</sup> <a name="image_recipe_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageRecipeArn"></a>

```python
image_recipe_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}.

---

##### `image_scanning_configuration`<sup>Optional</sup> <a name="image_scanning_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageScanningConfiguration"></a>

```python
image_scanning_configuration: ImagebuilderImagePipelineImageScanningConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

image_scanning_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_scanning_configuration ImagebuilderImagePipeline#image_scanning_configuration}

---

##### `image_tests_configuration`<sup>Optional</sup> <a name="image_tests_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTestsConfiguration"></a>

```python
image_tests_configuration: ImagebuilderImagePipelineImageTestsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

image_tests_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.schedule"></a>

```python
schedule: ImagebuilderImagePipelineSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#schedule ImagebuilderImagePipeline#schedule}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#tags_all ImagebuilderImagePipeline#tags_all}.

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.workflow"></a>

```python
workflow: typing.Union[IResolvable, typing.List[ImagebuilderImagePipelineWorkflow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>]]

workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#workflow ImagebuilderImagePipeline#workflow}

---

### ImagebuilderImagePipelineImageScanningConfiguration <a name="ImagebuilderImagePipelineImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration(
  ecr_configuration: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration = None,
  image_scanning_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.ecrConfiguration">ecr_configuration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | ecr_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.imageScanningEnabled">image_scanning_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled ImagebuilderImagePipeline#image_scanning_enabled}. |

---

##### `ecr_configuration`<sup>Optional</sup> <a name="ecr_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.ecrConfiguration"></a>

```python
ecr_configuration: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

ecr_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#ecr_configuration ImagebuilderImagePipeline#ecr_configuration}

---

##### `image_scanning_enabled`<sup>Optional</sup> <a name="image_scanning_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.imageScanningEnabled"></a>

```python
image_scanning_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled ImagebuilderImagePipeline#image_scanning_enabled}.

---

### ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration <a name="ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration(
  container_tags: typing.List[str] = None,
  repository_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.containerTags">container_tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#container_tags ImagebuilderImagePipeline#container_tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#repository_name ImagebuilderImagePipeline#repository_name}. |

---

##### `container_tags`<sup>Optional</sup> <a name="container_tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.containerTags"></a>

```python
container_tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#container_tags ImagebuilderImagePipeline#container_tags}.

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#repository_name ImagebuilderImagePipeline#repository_name}.

---

### ImagebuilderImagePipelineImageTestsConfiguration <a name="ImagebuilderImagePipelineImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration(
  image_tests_enabled: typing.Union[bool, IResolvable] = None,
  timeout_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.imageTestsEnabled">image_tests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.timeoutMinutes">timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}. |

---

##### `image_tests_enabled`<sup>Optional</sup> <a name="image_tests_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.imageTestsEnabled"></a>

```python
image_tests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}.

---

##### `timeout_minutes`<sup>Optional</sup> <a name="timeout_minutes" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.timeoutMinutes"></a>

```python
timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}.

---

### ImagebuilderImagePipelineSchedule <a name="ImagebuilderImagePipelineSchedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule(
  schedule_expression: str,
  pipeline_execution_start_condition: str = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.pipelineExecutionStartCondition">pipeline_execution_start_condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#timezone ImagebuilderImagePipeline#timezone}. |

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}.

---

##### `pipeline_execution_start_condition`<sup>Optional</sup> <a name="pipeline_execution_start_condition" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.pipelineExecutionStartCondition"></a>

```python
pipeline_execution_start_condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#timezone ImagebuilderImagePipeline#timezone}.

---

### ImagebuilderImagePipelineWorkflow <a name="ImagebuilderImagePipelineWorkflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow(
  workflow_arn: str,
  on_failure: str = None,
  parallel_group: str = None,
  parameter: typing.Union[IResolvable, typing.List[ImagebuilderImagePipelineWorkflowParameter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.workflowArn">workflow_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#workflow_arn ImagebuilderImagePipeline#workflow_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.onFailure">on_failure</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#on_failure ImagebuilderImagePipeline#on_failure}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parallelGroup">parallel_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#parallel_group ImagebuilderImagePipeline#parallel_group}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>]]</code> | parameter block. |

---

##### `workflow_arn`<sup>Required</sup> <a name="workflow_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.workflowArn"></a>

```python
workflow_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#workflow_arn ImagebuilderImagePipeline#workflow_arn}.

---

##### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.onFailure"></a>

```python
on_failure: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#on_failure ImagebuilderImagePipeline#on_failure}.

---

##### `parallel_group`<sup>Optional</sup> <a name="parallel_group" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parallelGroup"></a>

```python
parallel_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#parallel_group ImagebuilderImagePipeline#parallel_group}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[ImagebuilderImagePipelineWorkflowParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#parameter ImagebuilderImagePipeline#parameter}

---

### ImagebuilderImagePipelineWorkflowParameter <a name="ImagebuilderImagePipelineWorkflowParameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#value ImagebuilderImagePipeline#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#value ImagebuilderImagePipeline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference <a name="ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags">reset_container_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName">reset_repository_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_tags` <a name="reset_container_tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags"></a>

```python
def reset_container_tags() -> None
```

##### `reset_repository_name` <a name="reset_repository_name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName"></a>

```python
def reset_repository_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput">container_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags">container_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_tags_input`<sup>Optional</sup> <a name="container_tags_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput"></a>

```python
container_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `container_tags`<sup>Required</sup> <a name="container_tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags"></a>

```python
container_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

---


### ImagebuilderImagePipelineImageScanningConfigurationOutputReference <a name="ImagebuilderImagePipelineImageScanningConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration">put_ecr_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetEcrConfiguration">reset_ecr_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetImageScanningEnabled">reset_image_scanning_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ecr_configuration` <a name="put_ecr_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration"></a>

```python
def put_ecr_configuration(
  container_tags: typing.List[str] = None,
  repository_name: str = None
) -> None
```

###### `container_tags`<sup>Optional</sup> <a name="container_tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration.parameter.containerTags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#container_tags ImagebuilderImagePipeline#container_tags}.

---

###### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration.parameter.repositoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/imagebuilder_image_pipeline#repository_name ImagebuilderImagePipeline#repository_name}.

---

##### `reset_ecr_configuration` <a name="reset_ecr_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetEcrConfiguration"></a>

```python
def reset_ecr_configuration() -> None
```

##### `reset_image_scanning_enabled` <a name="reset_image_scanning_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetImageScanningEnabled"></a>

```python
def reset_image_scanning_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration">ecr_configuration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfigurationInput">ecr_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabledInput">image_scanning_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled">image_scanning_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ecr_configuration`<sup>Required</sup> <a name="ecr_configuration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration"></a>

```python
ecr_configuration: ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a>

---

##### `ecr_configuration_input`<sup>Optional</sup> <a name="ecr_configuration_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfigurationInput"></a>

```python
ecr_configuration_input: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

---

##### `image_scanning_enabled_input`<sup>Optional</sup> <a name="image_scanning_enabled_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabledInput"></a>

```python
image_scanning_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `image_scanning_enabled`<sup>Required</sup> <a name="image_scanning_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled"></a>

```python
image_scanning_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ImagebuilderImagePipelineImageScanningConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

---


### ImagebuilderImagePipelineImageTestsConfigurationOutputReference <a name="ImagebuilderImagePipelineImageTestsConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetImageTestsEnabled">reset_image_tests_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetTimeoutMinutes">reset_timeout_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_tests_enabled` <a name="reset_image_tests_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetImageTestsEnabled"></a>

```python
def reset_image_tests_enabled() -> None
```

##### `reset_timeout_minutes` <a name="reset_timeout_minutes" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetTimeoutMinutes"></a>

```python
def reset_timeout_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabledInput">image_tests_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutesInput">timeout_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled">image_tests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes">timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_tests_enabled_input`<sup>Optional</sup> <a name="image_tests_enabled_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabledInput"></a>

```python
image_tests_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_minutes_input`<sup>Optional</sup> <a name="timeout_minutes_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutesInput"></a>

```python
timeout_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image_tests_enabled`<sup>Required</sup> <a name="image_tests_enabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled"></a>

```python
image_tests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_minutes`<sup>Required</sup> <a name="timeout_minutes" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes"></a>

```python
timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ImagebuilderImagePipelineImageTestsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

---


### ImagebuilderImagePipelineScheduleOutputReference <a name="ImagebuilderImagePipelineScheduleOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetPipelineExecutionStartCondition">reset_pipeline_execution_start_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pipeline_execution_start_condition` <a name="reset_pipeline_execution_start_condition" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetPipelineExecutionStartCondition"></a>

```python
def reset_pipeline_execution_start_condition() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartConditionInput">pipeline_execution_start_condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition">pipeline_execution_start_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pipeline_execution_start_condition_input`<sup>Optional</sup> <a name="pipeline_execution_start_condition_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartConditionInput"></a>

```python
pipeline_execution_start_condition_input: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `pipeline_execution_start_condition`<sup>Required</sup> <a name="pipeline_execution_start_condition" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition"></a>

```python
pipeline_execution_start_condition: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.internalValue"></a>

```python
internal_value: ImagebuilderImagePipelineSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

---


### ImagebuilderImagePipelineWorkflowList <a name="ImagebuilderImagePipelineWorkflowList" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderImagePipelineWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ImagebuilderImagePipelineWorkflow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>]]

---


### ImagebuilderImagePipelineWorkflowOutputReference <a name="ImagebuilderImagePipelineWorkflowOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetOnFailure">reset_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParallelGroup">reset_parallel_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParameter">reset_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[ImagebuilderImagePipelineWorkflowParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>]]

---

##### `reset_on_failure` <a name="reset_on_failure" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetOnFailure"></a>

```python
def reset_on_failure() -> None
```

##### `reset_parallel_group` <a name="reset_parallel_group" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParallelGroup"></a>

```python
def reset_parallel_group() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParameter"></a>

```python
def reset_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList">ImagebuilderImagePipelineWorkflowParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailureInput">on_failure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroupInput">parallel_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArnInput">workflow_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailure">on_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroup">parallel_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArn">workflow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameter"></a>

```python
parameter: ImagebuilderImagePipelineWorkflowParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList">ImagebuilderImagePipelineWorkflowParameterList</a>

---

##### `on_failure_input`<sup>Optional</sup> <a name="on_failure_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailureInput"></a>

```python
on_failure_input: str
```

- *Type:* str

---

##### `parallel_group_input`<sup>Optional</sup> <a name="parallel_group_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroupInput"></a>

```python
parallel_group_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[ImagebuilderImagePipelineWorkflowParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>]]

---

##### `workflow_arn_input`<sup>Optional</sup> <a name="workflow_arn_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArnInput"></a>

```python
workflow_arn_input: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailure"></a>

```python
on_failure: str
```

- *Type:* str

---

##### `parallel_group`<sup>Required</sup> <a name="parallel_group" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroup"></a>

```python
parallel_group: str
```

- *Type:* str

---

##### `workflow_arn`<sup>Required</sup> <a name="workflow_arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArn"></a>

```python
workflow_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ImagebuilderImagePipelineWorkflow]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow">ImagebuilderImagePipelineWorkflow</a>]

---


### ImagebuilderImagePipelineWorkflowParameterList <a name="ImagebuilderImagePipelineWorkflowParameterList" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderImagePipelineWorkflowParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ImagebuilderImagePipelineWorkflowParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>]]

---


### ImagebuilderImagePipelineWorkflowParameterOutputReference <a name="ImagebuilderImagePipelineWorkflowParameterOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_image_pipeline

imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ImagebuilderImagePipelineWorkflowParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter">ImagebuilderImagePipelineWorkflowParameter</a>]

---



