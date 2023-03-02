# `datasyncLocationFsxLustreFileSystem` Submodule <a name="`datasyncLocationFsxLustreFileSystem` Submodule" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxLustreFileSystem <a name="DatasyncLocationFsxLustreFileSystem" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system aws_datasync_location_fsx_lustre_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_fsx_lustre_file_system

datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fsx_filesystem_arn: str,
  security_group_arns: typing.List[str],
  id: str = None,
  subdirectory: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.fsxFilesystemArn">fsx_filesystem_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#fsx_filesystem_arn DatasyncLocationFsxLustreFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#security_group_arns DatasyncLocationFsxLustreFileSystem#security_group_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#id DatasyncLocationFsxLustreFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#subdirectory DatasyncLocationFsxLustreFileSystem#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags DatasyncLocationFsxLustreFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags_all DatasyncLocationFsxLustreFileSystem#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fsx_filesystem_arn`<sup>Required</sup> <a name="fsx_filesystem_arn" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.fsxFilesystemArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#fsx_filesystem_arn DatasyncLocationFsxLustreFileSystem#fsx_filesystem_arn}.

---

##### `security_group_arns`<sup>Required</sup> <a name="security_group_arns" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.securityGroupArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#security_group_arns DatasyncLocationFsxLustreFileSystem#security_group_arns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#id DatasyncLocationFsxLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.subdirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#subdirectory DatasyncLocationFsxLustreFileSystem#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags DatasyncLocationFsxLustreFileSystem#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags_all DatasyncLocationFsxLustreFileSystem#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetSubdirectory">reset_subdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_subdirectory` <a name="reset_subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetSubdirectory"></a>

```python
def reset_subdirectory() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_fsx_lustre_file_system

datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_fsx_lustre_file_system

datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_fsx_lustre_file_system

datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArnInput">fsx_filesystem_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArnsInput">security_group_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectoryInput">subdirectory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArn">fsx_filesystem_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectory">subdirectory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `fsx_filesystem_arn_input`<sup>Optional</sup> <a name="fsx_filesystem_arn_input" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArnInput"></a>

```python
fsx_filesystem_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `security_group_arns_input`<sup>Optional</sup> <a name="security_group_arns_input" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArnsInput"></a>

```python
security_group_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subdirectory_input`<sup>Optional</sup> <a name="subdirectory_input" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectoryInput"></a>

```python
subdirectory_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fsx_filesystem_arn`<sup>Required</sup> <a name="fsx_filesystem_arn" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArn"></a>

```python
fsx_filesystem_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_group_arns`<sup>Required</sup> <a name="security_group_arns" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArns"></a>

```python
security_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxLustreFileSystemConfig <a name="DatasyncLocationFsxLustreFileSystemConfig" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_fsx_lustre_file_system

datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fsx_filesystem_arn: str,
  security_group_arns: typing.List[str],
  id: str = None,
  subdirectory: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.fsxFilesystemArn">fsx_filesystem_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#fsx_filesystem_arn DatasyncLocationFsxLustreFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#security_group_arns DatasyncLocationFsxLustreFileSystem#security_group_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#id DatasyncLocationFsxLustreFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.subdirectory">subdirectory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#subdirectory DatasyncLocationFsxLustreFileSystem#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags DatasyncLocationFsxLustreFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags_all DatasyncLocationFsxLustreFileSystem#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fsx_filesystem_arn`<sup>Required</sup> <a name="fsx_filesystem_arn" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.fsxFilesystemArn"></a>

```python
fsx_filesystem_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#fsx_filesystem_arn DatasyncLocationFsxLustreFileSystem#fsx_filesystem_arn}.

---

##### `security_group_arns`<sup>Required</sup> <a name="security_group_arns" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.securityGroupArns"></a>

```python
security_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#security_group_arns DatasyncLocationFsxLustreFileSystem#security_group_arns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#id DatasyncLocationFsxLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#subdirectory DatasyncLocationFsxLustreFileSystem#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags DatasyncLocationFsxLustreFileSystem#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags_all DatasyncLocationFsxLustreFileSystem#tags_all}.

---



