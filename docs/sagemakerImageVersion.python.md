# `sagemakerImageVersion` Submodule <a name="`sagemakerImageVersion` Submodule" id="@cdktf/provider-aws.sagemakerImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerImageVersion <a name="SagemakerImageVersion" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version aws_sagemaker_image_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_image_version

sagemakerImageVersion.SagemakerImageVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_image: str,
  image_name: str,
  aliases: typing.List[str] = None,
  horovod: typing.Union[bool, IResolvable] = None,
  id: str = None,
  job_type: str = None,
  ml_framework: str = None,
  processor: str = None,
  programming_lang: str = None,
  region: str = None,
  release_notes: str = None,
  vendor_guidance: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.baseImage">base_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.aliases">aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.horovod">horovod</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#id SagemakerImageVersion#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.jobType">job_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.mlFramework">ml_framework</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.processor">processor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.programmingLang">programming_lang</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.releaseNotes">release_notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.vendorGuidance">vendor_guidance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_image`<sup>Required</sup> <a name="base_image" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.baseImage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.imageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}.

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.aliases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}.

---

##### `horovod`<sup>Optional</sup> <a name="horovod" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.horovod"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#id SagemakerImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_type`<sup>Optional</sup> <a name="job_type" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.jobType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}.

---

##### `ml_framework`<sup>Optional</sup> <a name="ml_framework" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.mlFramework"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}.

---

##### `processor`<sup>Optional</sup> <a name="processor" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.processor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}.

---

##### `programming_lang`<sup>Optional</sup> <a name="programming_lang" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.programmingLang"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#region SagemakerImageVersion#region}

---

##### `release_notes`<sup>Optional</sup> <a name="release_notes" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.releaseNotes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}.

---

##### `vendor_guidance`<sup>Optional</sup> <a name="vendor_guidance" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.vendorGuidance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetAliases">reset_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetHorovod">reset_horovod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetJobType">reset_job_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework">reset_ml_framework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProcessor">reset_processor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang">reset_programming_lang</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes">reset_release_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance">reset_vendor_guidance</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_aliases` <a name="reset_aliases" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetAliases"></a>

```python
def reset_aliases() -> None
```

##### `reset_horovod` <a name="reset_horovod" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetHorovod"></a>

```python
def reset_horovod() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_type` <a name="reset_job_type" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetJobType"></a>

```python
def reset_job_type() -> None
```

##### `reset_ml_framework` <a name="reset_ml_framework" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework"></a>

```python
def reset_ml_framework() -> None
```

##### `reset_processor` <a name="reset_processor" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProcessor"></a>

```python
def reset_processor() -> None
```

##### `reset_programming_lang` <a name="reset_programming_lang" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang"></a>

```python
def reset_programming_lang() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_release_notes` <a name="reset_release_notes" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes"></a>

```python
def reset_release_notes() -> None
```

##### `reset_vendor_guidance` <a name="reset_vendor_guidance" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance"></a>

```python
def reset_vendor_guidance() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SagemakerImageVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_image_version

sagemakerImageVersion.SagemakerImageVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_image_version

sagemakerImageVersion.SagemakerImageVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_image_version

sagemakerImageVersion.SagemakerImageVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_image_version

sagemakerImageVersion.SagemakerImageVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SagemakerImageVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerImageVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.containerImage">container_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageArn">image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput">aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput">base_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput">horovod_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput">job_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput">ml_framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processorInput">processor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput">programming_lang_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput">release_notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput">vendor_guidance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImage">base_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovod">horovod</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobType">job_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework">ml_framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processor">processor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang">programming_lang</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes">release_notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance">vendor_guidance</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.containerImage"></a>

```python
container_image: str
```

- *Type:* str

---

##### `image_arn`<sup>Required</sup> <a name="image_arn" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageArn"></a>

```python
image_arn: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aliases_input`<sup>Optional</sup> <a name="aliases_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput"></a>

```python
aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `base_image_input`<sup>Optional</sup> <a name="base_image_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput"></a>

```python
base_image_input: str
```

- *Type:* str

---

##### `horovod_input`<sup>Optional</sup> <a name="horovod_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput"></a>

```python
horovod_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `job_type_input`<sup>Optional</sup> <a name="job_type_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput"></a>

```python
job_type_input: str
```

- *Type:* str

---

##### `ml_framework_input`<sup>Optional</sup> <a name="ml_framework_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput"></a>

```python
ml_framework_input: str
```

- *Type:* str

---

##### `processor_input`<sup>Optional</sup> <a name="processor_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processorInput"></a>

```python
processor_input: str
```

- *Type:* str

---

##### `programming_lang_input`<sup>Optional</sup> <a name="programming_lang_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput"></a>

```python
programming_lang_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `release_notes_input`<sup>Optional</sup> <a name="release_notes_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput"></a>

```python
release_notes_input: str
```

- *Type:* str

---

##### `vendor_guidance_input`<sup>Optional</sup> <a name="vendor_guidance_input" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput"></a>

```python
vendor_guidance_input: str
```

- *Type:* str

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `base_image`<sup>Required</sup> <a name="base_image" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImage"></a>

```python
base_image: str
```

- *Type:* str

---

##### `horovod`<sup>Required</sup> <a name="horovod" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovod"></a>

```python
horovod: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobType"></a>

```python
job_type: str
```

- *Type:* str

---

##### `ml_framework`<sup>Required</sup> <a name="ml_framework" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework"></a>

```python
ml_framework: str
```

- *Type:* str

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processor"></a>

```python
processor: str
```

- *Type:* str

---

##### `programming_lang`<sup>Required</sup> <a name="programming_lang" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang"></a>

```python
programming_lang: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `release_notes`<sup>Required</sup> <a name="release_notes" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes"></a>

```python
release_notes: str
```

- *Type:* str

---

##### `vendor_guidance`<sup>Required</sup> <a name="vendor_guidance" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance"></a>

```python
vendor_guidance: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerImageVersionConfig <a name="SagemakerImageVersionConfig" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_image_version

sagemakerImageVersion.SagemakerImageVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_image: str,
  image_name: str,
  aliases: typing.List[str] = None,
  horovod: typing.Union[bool, IResolvable] = None,
  id: str = None,
  job_type: str = None,
  ml_framework: str = None,
  processor: str = None,
  programming_lang: str = None,
  region: str = None,
  release_notes: str = None,
  vendor_guidance: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage">base_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod">horovod</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#id SagemakerImageVersion#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType">job_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework">ml_framework</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor">processor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang">programming_lang</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes">release_notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance">vendor_guidance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_image`<sup>Required</sup> <a name="base_image" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage"></a>

```python
base_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}.

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}.

---

##### `horovod`<sup>Optional</sup> <a name="horovod" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod"></a>

```python
horovod: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#id SagemakerImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_type`<sup>Optional</sup> <a name="job_type" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType"></a>

```python
job_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}.

---

##### `ml_framework`<sup>Optional</sup> <a name="ml_framework" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework"></a>

```python
ml_framework: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}.

---

##### `processor`<sup>Optional</sup> <a name="processor" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor"></a>

```python
processor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}.

---

##### `programming_lang`<sup>Optional</sup> <a name="programming_lang" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang"></a>

```python
programming_lang: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#region SagemakerImageVersion#region}

---

##### `release_notes`<sup>Optional</sup> <a name="release_notes" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes"></a>

```python
release_notes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}.

---

##### `vendor_guidance`<sup>Optional</sup> <a name="vendor_guidance" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance"></a>

```python
vendor_guidance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}.

---



