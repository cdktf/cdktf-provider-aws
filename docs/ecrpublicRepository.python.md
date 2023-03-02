# `ecrpublicRepository` Submodule <a name="`ecrpublicRepository` Submodule" id="@cdktf/provider-aws.ecrpublicRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrpublicRepository <a name="EcrpublicRepository" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository aws_ecrpublic_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecrpublic_repository

ecrpublicRepository.EcrpublicRepository(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository_name: str,
  catalog_data: EcrpublicRepositoryCatalogData = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EcrpublicRepositoryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.catalogData">catalog_data</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | catalog_data block. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.repositoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}.

---

##### `catalog_data`<sup>Optional</sup> <a name="catalog_data" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.catalogData"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

catalog_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#catalog_data EcrpublicRepository#catalog_data}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#timeouts EcrpublicRepository#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData">put_catalog_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetCatalogData">reset_catalog_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_catalog_data` <a name="put_catalog_data" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData"></a>

```python
def put_catalog_data(
  about_text: str = None,
  architectures: typing.List[str] = None,
  description: str = None,
  logo_image_blob: str = None,
  operating_systems: typing.List[str] = None,
  usage_text: str = None
) -> None
```

###### `about_text`<sup>Optional</sup> <a name="about_text" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData.parameter.aboutText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}.

---

###### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData.parameter.architectures"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}.

---

###### `logo_image_blob`<sup>Optional</sup> <a name="logo_image_blob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData.parameter.logoImageBlob"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}.

---

###### `operating_systems`<sup>Optional</sup> <a name="operating_systems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData.parameter.operatingSystems"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}.

---

###### `usage_text`<sup>Optional</sup> <a name="usage_text" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData.parameter.usageText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}.

---

##### `reset_catalog_data` <a name="reset_catalog_data" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetCatalogData"></a>

```python
def reset_catalog_data() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ecrpublic_repository

ecrpublicRepository.EcrpublicRepository.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ecrpublic_repository

ecrpublicRepository.EcrpublicRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ecrpublic_repository

ecrpublicRepository.EcrpublicRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogData">catalog_data</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference">EcrpublicRepositoryCatalogDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryUri">repository_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference">EcrpublicRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogDataInput">catalog_data_input</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `catalog_data`<sup>Required</sup> <a name="catalog_data" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogData"></a>

```python
catalog_data: EcrpublicRepositoryCatalogDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference">EcrpublicRepositoryCatalogDataOutputReference</a>

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `repository_uri`<sup>Required</sup> <a name="repository_uri" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryUri"></a>

```python
repository_uri: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeouts"></a>

```python
timeouts: EcrpublicRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference">EcrpublicRepositoryTimeoutsOutputReference</a>

---

##### `catalog_data_input`<sup>Optional</sup> <a name="catalog_data_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogDataInput"></a>

```python
catalog_data_input: EcrpublicRepositoryCatalogData
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[EcrpublicRepositoryTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>, cdktf.IResolvable]

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcrpublicRepositoryCatalogData <a name="EcrpublicRepositoryCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecrpublic_repository

ecrpublicRepository.EcrpublicRepositoryCatalogData(
  about_text: str = None,
  architectures: typing.List[str] = None,
  description: str = None,
  logo_image_blob: str = None,
  operating_systems: typing.List[str] = None,
  usage_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.aboutText">about_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.logoImageBlob">logo_image_blob</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.operatingSystems">operating_systems</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.usageText">usage_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}. |

---

##### `about_text`<sup>Optional</sup> <a name="about_text" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.aboutText"></a>

```python
about_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}.

---

##### `logo_image_blob`<sup>Optional</sup> <a name="logo_image_blob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.logoImageBlob"></a>

```python
logo_image_blob: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}.

---

##### `operating_systems`<sup>Optional</sup> <a name="operating_systems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.operatingSystems"></a>

```python
operating_systems: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}.

---

##### `usage_text`<sup>Optional</sup> <a name="usage_text" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.usageText"></a>

```python
usage_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}.

---

### EcrpublicRepositoryConfig <a name="EcrpublicRepositoryConfig" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecrpublic_repository

ecrpublicRepository.EcrpublicRepositoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository_name: str,
  catalog_data: EcrpublicRepositoryCatalogData = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EcrpublicRepositoryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.catalogData">catalog_data</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | catalog_data block. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}.

---

##### `catalog_data`<sup>Optional</sup> <a name="catalog_data" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.catalogData"></a>

```python
catalog_data: EcrpublicRepositoryCatalogData
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

catalog_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#catalog_data EcrpublicRepository#catalog_data}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.timeouts"></a>

```python
timeouts: EcrpublicRepositoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#timeouts EcrpublicRepository#timeouts}

---

### EcrpublicRepositoryTimeouts <a name="EcrpublicRepositoryTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecrpublic_repository

ecrpublicRepository.EcrpublicRepositoryTimeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrpublicRepositoryCatalogDataOutputReference <a name="EcrpublicRepositoryCatalogDataOutputReference" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecrpublic_repository

ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetAboutText">reset_about_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetArchitectures">reset_architectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetLogoImageBlob">reset_logo_image_blob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetOperatingSystems">reset_operating_systems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetUsageText">reset_usage_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_about_text` <a name="reset_about_text" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetAboutText"></a>

```python
def reset_about_text() -> None
```

##### `reset_architectures` <a name="reset_architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetArchitectures"></a>

```python
def reset_architectures() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_logo_image_blob` <a name="reset_logo_image_blob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetLogoImageBlob"></a>

```python
def reset_logo_image_blob() -> None
```

##### `reset_operating_systems` <a name="reset_operating_systems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetOperatingSystems"></a>

```python
def reset_operating_systems() -> None
```

##### `reset_usage_text` <a name="reset_usage_text" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetUsageText"></a>

```python
def reset_usage_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutTextInput">about_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architecturesInput">architectures_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlobInput">logo_image_blob_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystemsInput">operating_systems_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageTextInput">usage_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutText">about_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlob">logo_image_blob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystems">operating_systems</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageText">usage_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `about_text_input`<sup>Optional</sup> <a name="about_text_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutTextInput"></a>

```python
about_text_input: str
```

- *Type:* str

---

##### `architectures_input`<sup>Optional</sup> <a name="architectures_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architecturesInput"></a>

```python
architectures_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `logo_image_blob_input`<sup>Optional</sup> <a name="logo_image_blob_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlobInput"></a>

```python
logo_image_blob_input: str
```

- *Type:* str

---

##### `operating_systems_input`<sup>Optional</sup> <a name="operating_systems_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystemsInput"></a>

```python
operating_systems_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `usage_text_input`<sup>Optional</sup> <a name="usage_text_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageTextInput"></a>

```python
usage_text_input: str
```

- *Type:* str

---

##### `about_text`<sup>Required</sup> <a name="about_text" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutText"></a>

```python
about_text: str
```

- *Type:* str

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `logo_image_blob`<sup>Required</sup> <a name="logo_image_blob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlob"></a>

```python
logo_image_blob: str
```

- *Type:* str

---

##### `operating_systems`<sup>Required</sup> <a name="operating_systems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystems"></a>

```python
operating_systems: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `usage_text`<sup>Required</sup> <a name="usage_text" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageText"></a>

```python
usage_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.internalValue"></a>

```python
internal_value: EcrpublicRepositoryCatalogData
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---


### EcrpublicRepositoryTimeoutsOutputReference <a name="EcrpublicRepositoryTimeoutsOutputReference" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecrpublic_repository

ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcrpublicRepositoryTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>, cdktf.IResolvable]

---



