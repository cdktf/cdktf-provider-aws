# `imagebuilderComponent` Submodule <a name="`imagebuilderComponent` Submodule" id="@cdktf/provider-aws.imagebuilderComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderComponent <a name="ImagebuilderComponent" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component aws_imagebuilder_component}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_component

imagebuilderComponent.ImagebuilderComponent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  platform: str,
  version: str,
  change_description: str = None,
  data: str = None,
  description: str = None,
  id: str = None,
  kms_key_id: str = None,
  skip_destroy: typing.Union[bool, IResolvable] = None,
  supported_os_versions: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#name ImagebuilderComponent#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#platform ImagebuilderComponent#platform}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#version ImagebuilderComponent#version}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.changeDescription">change_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#change_description ImagebuilderComponent#change_description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#data ImagebuilderComponent#data}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#description ImagebuilderComponent#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#id ImagebuilderComponent#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.skipDestroy">skip_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#skip_destroy ImagebuilderComponent#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.supportedOsVersions">supported_os_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#tags ImagebuilderComponent#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#tags_all ImagebuilderComponent#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#uri ImagebuilderComponent#uri}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#name ImagebuilderComponent#name}.

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.platform"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#platform ImagebuilderComponent#platform}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#version ImagebuilderComponent#version}.

---

##### `change_description`<sup>Optional</sup> <a name="change_description" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.changeDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#change_description ImagebuilderComponent#change_description}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.data"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#data ImagebuilderComponent#data}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#description ImagebuilderComponent#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#id ImagebuilderComponent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}.

---

##### `skip_destroy`<sup>Optional</sup> <a name="skip_destroy" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.skipDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#skip_destroy ImagebuilderComponent#skip_destroy}.

---

##### `supported_os_versions`<sup>Optional</sup> <a name="supported_os_versions" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.supportedOsVersions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#tags ImagebuilderComponent#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#tags_all ImagebuilderComponent#tags_all}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#uri ImagebuilderComponent#uri}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription">reset_change_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetSkipDestroy">reset_skip_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions">reset_supported_os_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetUri">reset_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_change_description` <a name="reset_change_description" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription"></a>

```python
def reset_change_description() -> None
```

##### `reset_data` <a name="reset_data" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_skip_destroy` <a name="reset_skip_destroy" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetSkipDestroy"></a>

```python
def reset_skip_destroy() -> None
```

##### `reset_supported_os_versions` <a name="reset_supported_os_versions" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions"></a>

```python
def reset_supported_os_versions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetUri"></a>

```python
def reset_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ImagebuilderComponent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_component

imagebuilderComponent.ImagebuilderComponent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_component

imagebuilderComponent.ImagebuilderComponent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_component

imagebuilderComponent.ImagebuilderComponent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_component

imagebuilderComponent.ImagebuilderComponent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ImagebuilderComponent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ImagebuilderComponent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ImagebuilderComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ImagebuilderComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dateCreated">date_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput">change_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.skipDestroyInput">skip_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput">supported_os_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.changeDescription">change_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.skipDestroy">skip_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions">supported_os_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `date_created`<sup>Required</sup> <a name="date_created" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dateCreated"></a>

```python
date_created: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `change_description_input`<sup>Optional</sup> <a name="change_description_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput"></a>

```python
change_description_input: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `skip_destroy_input`<sup>Optional</sup> <a name="skip_destroy_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.skipDestroyInput"></a>

```python
skip_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supported_os_versions_input`<sup>Optional</sup> <a name="supported_os_versions_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput"></a>

```python
supported_os_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `change_description`<sup>Required</sup> <a name="change_description" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.changeDescription"></a>

```python
change_description: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `skip_destroy`<sup>Required</sup> <a name="skip_destroy" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.skipDestroy"></a>

```python
skip_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supported_os_versions`<sup>Required</sup> <a name="supported_os_versions" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions"></a>

```python
supported_os_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderComponentConfig <a name="ImagebuilderComponentConfig" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import imagebuilder_component

imagebuilderComponent.ImagebuilderComponentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  platform: str,
  version: str,
  change_description: str = None,
  data: str = None,
  description: str = None,
  id: str = None,
  kms_key_id: str = None,
  skip_destroy: typing.Union[bool, IResolvable] = None,
  supported_os_versions: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#name ImagebuilderComponent#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#platform ImagebuilderComponent#platform}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#version ImagebuilderComponent#version}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription">change_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#change_description ImagebuilderComponent#change_description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#data ImagebuilderComponent#data}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#description ImagebuilderComponent#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#id ImagebuilderComponent#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.skipDestroy">skip_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#skip_destroy ImagebuilderComponent#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions">supported_os_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#tags ImagebuilderComponent#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#tags_all ImagebuilderComponent#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#uri ImagebuilderComponent#uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#name ImagebuilderComponent#name}.

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#platform ImagebuilderComponent#platform}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#version ImagebuilderComponent#version}.

---

##### `change_description`<sup>Optional</sup> <a name="change_description" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription"></a>

```python
change_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#change_description ImagebuilderComponent#change_description}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.data"></a>

```python
data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#data ImagebuilderComponent#data}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#description ImagebuilderComponent#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#id ImagebuilderComponent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}.

---

##### `skip_destroy`<sup>Optional</sup> <a name="skip_destroy" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.skipDestroy"></a>

```python
skip_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#skip_destroy ImagebuilderComponent#skip_destroy}.

---

##### `supported_os_versions`<sup>Optional</sup> <a name="supported_os_versions" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions"></a>

```python
supported_os_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#tags ImagebuilderComponent#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#tags_all ImagebuilderComponent#tags_all}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/imagebuilder_component#uri ImagebuilderComponent#uri}.

---



