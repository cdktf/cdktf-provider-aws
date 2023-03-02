# `fsxOntapStorageVirtualMachine` Submodule <a name="`fsxOntapStorageVirtualMachine` Submodule" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOntapStorageVirtualMachine <a name="FsxOntapStorageVirtualMachine" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine aws_fsx_ontap_storage_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file_system_id: str,
  name: str,
  active_directory_configuration: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration = None,
  id: str = None,
  root_volume_security_style: str = None,
  svm_admin_password: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxOntapStorageVirtualMachineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#file_system_id FsxOntapStorageVirtualMachine#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#name FsxOntapStorageVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.activeDirectoryConfiguration">active_directory_configuration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a></code> | active_directory_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#id FsxOntapStorageVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.rootVolumeSecurityStyle">root_volume_security_style</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#root_volume_security_style FsxOntapStorageVirtualMachine#root_volume_security_style}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.svmAdminPassword">svm_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#svm_admin_password FsxOntapStorageVirtualMachine#svm_admin_password}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags FsxOntapStorageVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags_all FsxOntapStorageVirtualMachine#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts">FsxOntapStorageVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#file_system_id FsxOntapStorageVirtualMachine#file_system_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#name FsxOntapStorageVirtualMachine#name}.

---

##### `active_directory_configuration`<sup>Optional</sup> <a name="active_directory_configuration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.activeDirectoryConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a>

active_directory_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#active_directory_configuration FsxOntapStorageVirtualMachine#active_directory_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#id FsxOntapStorageVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `root_volume_security_style`<sup>Optional</sup> <a name="root_volume_security_style" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.rootVolumeSecurityStyle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#root_volume_security_style FsxOntapStorageVirtualMachine#root_volume_security_style}.

---

##### `svm_admin_password`<sup>Optional</sup> <a name="svm_admin_password" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.svmAdminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#svm_admin_password FsxOntapStorageVirtualMachine#svm_admin_password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags FsxOntapStorageVirtualMachine#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags_all FsxOntapStorageVirtualMachine#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts">FsxOntapStorageVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#timeouts FsxOntapStorageVirtualMachine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putActiveDirectoryConfiguration">put_active_directory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetActiveDirectoryConfiguration">reset_active_directory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetRootVolumeSecurityStyle">reset_root_volume_security_style</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetSvmAdminPassword">reset_svm_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_active_directory_configuration` <a name="put_active_directory_configuration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putActiveDirectoryConfiguration"></a>

```python
def put_active_directory_configuration(
  netbios_name: str = None,
  self_managed_active_directory_configuration: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration = None
) -> None
```

###### `netbios_name`<sup>Optional</sup> <a name="netbios_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putActiveDirectoryConfiguration.parameter.netbiosName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#netbios_name FsxOntapStorageVirtualMachine#netbios_name}.

---

###### `self_managed_active_directory_configuration`<sup>Optional</sup> <a name="self_managed_active_directory_configuration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putActiveDirectoryConfiguration.parameter.selfManagedActiveDirectoryConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

self_managed_active_directory_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#self_managed_active_directory_configuration FsxOntapStorageVirtualMachine#self_managed_active_directory_configuration}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#create FsxOntapStorageVirtualMachine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#delete FsxOntapStorageVirtualMachine#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#update FsxOntapStorageVirtualMachine#update}.

---

##### `reset_active_directory_configuration` <a name="reset_active_directory_configuration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetActiveDirectoryConfiguration"></a>

```python
def reset_active_directory_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_root_volume_security_style` <a name="reset_root_volume_security_style" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetRootVolumeSecurityStyle"></a>

```python
def reset_root_volume_security_style() -> None
```

##### `reset_svm_admin_password` <a name="reset_svm_admin_password" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetSvmAdminPassword"></a>

```python
def reset_svm_admin_password() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.activeDirectoryConfiguration">active_directory_configuration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList">FsxOntapStorageVirtualMachineEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.subtype">subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference">FsxOntapStorageVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.activeDirectoryConfigurationInput">active_directory_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.rootVolumeSecurityStyleInput">root_volume_security_style_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.svmAdminPasswordInput">svm_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts">FsxOntapStorageVirtualMachineTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.rootVolumeSecurityStyle">root_volume_security_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.svmAdminPassword">svm_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_directory_configuration`<sup>Required</sup> <a name="active_directory_configuration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.activeDirectoryConfiguration"></a>

```python
active_directory_configuration: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.endpoints"></a>

```python
endpoints: FsxOntapStorageVirtualMachineEndpointsList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList">FsxOntapStorageVirtualMachineEndpointsList</a>

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.timeouts"></a>

```python
timeouts: FsxOntapStorageVirtualMachineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference">FsxOntapStorageVirtualMachineTimeoutsOutputReference</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `active_directory_configuration_input`<sup>Optional</sup> <a name="active_directory_configuration_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.activeDirectoryConfigurationInput"></a>

```python
active_directory_configuration_input: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a>

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `root_volume_security_style_input`<sup>Optional</sup> <a name="root_volume_security_style_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.rootVolumeSecurityStyleInput"></a>

```python
root_volume_security_style_input: str
```

- *Type:* str

---

##### `svm_admin_password_input`<sup>Optional</sup> <a name="svm_admin_password_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.svmAdminPasswordInput"></a>

```python
svm_admin_password_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[FsxOntapStorageVirtualMachineTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts">FsxOntapStorageVirtualMachineTimeouts</a>, cdktf.IResolvable]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `root_volume_security_style`<sup>Required</sup> <a name="root_volume_security_style" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.rootVolumeSecurityStyle"></a>

```python
root_volume_security_style: str
```

- *Type:* str

---

##### `svm_admin_password`<sup>Required</sup> <a name="svm_admin_password" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.svmAdminPassword"></a>

```python
svm_admin_password: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOntapStorageVirtualMachineActiveDirectoryConfiguration <a name="FsxOntapStorageVirtualMachineActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration(
  netbios_name: str = None,
  self_managed_active_directory_configuration: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration.property.netbiosName">netbios_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#netbios_name FsxOntapStorageVirtualMachine#netbios_name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration.property.selfManagedActiveDirectoryConfiguration">self_managed_active_directory_configuration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | self_managed_active_directory_configuration block. |

---

##### `netbios_name`<sup>Optional</sup> <a name="netbios_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration.property.netbiosName"></a>

```python
netbios_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#netbios_name FsxOntapStorageVirtualMachine#netbios_name}.

---

##### `self_managed_active_directory_configuration`<sup>Optional</sup> <a name="self_managed_active_directory_configuration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration.property.selfManagedActiveDirectoryConfiguration"></a>

```python
self_managed_active_directory_configuration: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

self_managed_active_directory_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#self_managed_active_directory_configuration FsxOntapStorageVirtualMachine#self_managed_active_directory_configuration}

---

### FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration <a name="FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration(
  dns_ips: typing.List[str],
  domain_name: str,
  password: str,
  username: str,
  file_system_administrators_group: str = None,
  organizational_unit_distinguished_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#dns_ips FsxOntapStorageVirtualMachine#dns_ips}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#domain_name FsxOntapStorageVirtualMachine#domain_name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#password FsxOntapStorageVirtualMachine#password}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#username FsxOntapStorageVirtualMachine#username}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup">file_system_administrators_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#file_system_administrators_group FsxOntapStorageVirtualMachine#file_system_administrators_group}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#organizational_unit_distinguished_name FsxOntapStorageVirtualMachine#organizational_unit_distinguished_name}. |

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#dns_ips FsxOntapStorageVirtualMachine#dns_ips}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#domain_name FsxOntapStorageVirtualMachine#domain_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#password FsxOntapStorageVirtualMachine#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#username FsxOntapStorageVirtualMachine#username}.

---

##### `file_system_administrators_group`<sup>Optional</sup> <a name="file_system_administrators_group" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup"></a>

```python
file_system_administrators_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#file_system_administrators_group FsxOntapStorageVirtualMachine#file_system_administrators_group}.

---

##### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#organizational_unit_distinguished_name FsxOntapStorageVirtualMachine#organizational_unit_distinguished_name}.

---

### FsxOntapStorageVirtualMachineConfig <a name="FsxOntapStorageVirtualMachineConfig" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file_system_id: str,
  name: str,
  active_directory_configuration: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration = None,
  id: str = None,
  root_volume_security_style: str = None,
  svm_admin_password: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxOntapStorageVirtualMachineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#file_system_id FsxOntapStorageVirtualMachine#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#name FsxOntapStorageVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.activeDirectoryConfiguration">active_directory_configuration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a></code> | active_directory_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#id FsxOntapStorageVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.rootVolumeSecurityStyle">root_volume_security_style</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#root_volume_security_style FsxOntapStorageVirtualMachine#root_volume_security_style}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.svmAdminPassword">svm_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#svm_admin_password FsxOntapStorageVirtualMachine#svm_admin_password}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags FsxOntapStorageVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags_all FsxOntapStorageVirtualMachine#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts">FsxOntapStorageVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#file_system_id FsxOntapStorageVirtualMachine#file_system_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#name FsxOntapStorageVirtualMachine#name}.

---

##### `active_directory_configuration`<sup>Optional</sup> <a name="active_directory_configuration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.activeDirectoryConfiguration"></a>

```python
active_directory_configuration: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a>

active_directory_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#active_directory_configuration FsxOntapStorageVirtualMachine#active_directory_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#id FsxOntapStorageVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `root_volume_security_style`<sup>Optional</sup> <a name="root_volume_security_style" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.rootVolumeSecurityStyle"></a>

```python
root_volume_security_style: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#root_volume_security_style FsxOntapStorageVirtualMachine#root_volume_security_style}.

---

##### `svm_admin_password`<sup>Optional</sup> <a name="svm_admin_password" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.svmAdminPassword"></a>

```python
svm_admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#svm_admin_password FsxOntapStorageVirtualMachine#svm_admin_password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags FsxOntapStorageVirtualMachine#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags_all FsxOntapStorageVirtualMachine#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.timeouts"></a>

```python
timeouts: FsxOntapStorageVirtualMachineTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts">FsxOntapStorageVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#timeouts FsxOntapStorageVirtualMachine#timeouts}

---

### FsxOntapStorageVirtualMachineEndpoints <a name="FsxOntapStorageVirtualMachineEndpoints" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpoints()
```


### FsxOntapStorageVirtualMachineEndpointsIscsi <a name="FsxOntapStorageVirtualMachineEndpointsIscsi" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsi.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsi()
```


### FsxOntapStorageVirtualMachineEndpointsManagement <a name="FsxOntapStorageVirtualMachineEndpointsManagement" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagement()
```


### FsxOntapStorageVirtualMachineEndpointsNfs <a name="FsxOntapStorageVirtualMachineEndpointsNfs" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfs()
```


### FsxOntapStorageVirtualMachineEndpointsSmb <a name="FsxOntapStorageVirtualMachineEndpointsSmb" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmb.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmb()
```


### FsxOntapStorageVirtualMachineTimeouts <a name="FsxOntapStorageVirtualMachineTimeouts" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#create FsxOntapStorageVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#delete FsxOntapStorageVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#update FsxOntapStorageVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#create FsxOntapStorageVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#delete FsxOntapStorageVirtualMachine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#update FsxOntapStorageVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference <a name="FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration">put_self_managed_active_directory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetNetbiosName">reset_netbios_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetSelfManagedActiveDirectoryConfiguration">reset_self_managed_active_directory_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_self_managed_active_directory_configuration` <a name="put_self_managed_active_directory_configuration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration"></a>

```python
def put_self_managed_active_directory_configuration(
  dns_ips: typing.List[str],
  domain_name: str,
  password: str,
  username: str,
  file_system_administrators_group: str = None,
  organizational_unit_distinguished_name: str = None
) -> None
```

###### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.dnsIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#dns_ips FsxOntapStorageVirtualMachine#dns_ips}.

---

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#domain_name FsxOntapStorageVirtualMachine#domain_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#password FsxOntapStorageVirtualMachine#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#username FsxOntapStorageVirtualMachine#username}.

---

###### `file_system_administrators_group`<sup>Optional</sup> <a name="file_system_administrators_group" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.fileSystemAdministratorsGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#file_system_administrators_group FsxOntapStorageVirtualMachine#file_system_administrators_group}.

---

###### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.organizationalUnitDistinguishedName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#organizational_unit_distinguished_name FsxOntapStorageVirtualMachine#organizational_unit_distinguished_name}.

---

##### `reset_netbios_name` <a name="reset_netbios_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetNetbiosName"></a>

```python
def reset_netbios_name() -> None
```

##### `reset_self_managed_active_directory_configuration` <a name="reset_self_managed_active_directory_configuration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetSelfManagedActiveDirectoryConfiguration"></a>

```python
def reset_self_managed_active_directory_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration">self_managed_active_directory_configuration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosNameInput">netbios_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfigurationInput">self_managed_active_directory_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosName">netbios_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `self_managed_active_directory_configuration`<sup>Required</sup> <a name="self_managed_active_directory_configuration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration"></a>

```python
self_managed_active_directory_configuration: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference</a>

---

##### `netbios_name_input`<sup>Optional</sup> <a name="netbios_name_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosNameInput"></a>

```python
netbios_name_input: str
```

- *Type:* str

---

##### `self_managed_active_directory_configuration_input`<sup>Optional</sup> <a name="self_managed_active_directory_configuration_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfigurationInput"></a>

```python
self_managed_active_directory_configuration_input: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---

##### `netbios_name`<sup>Required</sup> <a name="netbios_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosName"></a>

```python
netbios_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a>

---


### FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference <a name="FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetFileSystemAdministratorsGroup">reset_file_system_administrators_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName">reset_organizational_unit_distinguished_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_system_administrators_group` <a name="reset_file_system_administrators_group" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetFileSystemAdministratorsGroup"></a>

```python
def reset_file_system_administrators_group() -> None
```

##### `reset_organizational_unit_distinguished_name` <a name="reset_organizational_unit_distinguished_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```python
def reset_organizational_unit_distinguished_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIpsInput">dns_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroupInput">file_system_administrators_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput">organizational_unit_distinguished_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup">file_system_administrators_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_ips_input`<sup>Optional</sup> <a name="dns_ips_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIpsInput"></a>

```python
dns_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `file_system_administrators_group_input`<sup>Optional</sup> <a name="file_system_administrators_group_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroupInput"></a>

```python
file_system_administrators_group_input: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name_input`<sup>Optional</sup> <a name="organizational_unit_distinguished_name_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```python
organizational_unit_distinguished_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `file_system_administrators_group`<sup>Required</sup> <a name="file_system_administrators_group" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup"></a>

```python
file_system_administrators_group: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name`<sup>Required</sup> <a name="organizational_unit_distinguished_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---


### FsxOntapStorageVirtualMachineEndpointsIscsiList <a name="FsxOntapStorageVirtualMachineEndpointsIscsiList" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference <a name="FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsi">FsxOntapStorageVirtualMachineEndpointsIscsi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.internalValue"></a>

```python
internal_value: FsxOntapStorageVirtualMachineEndpointsIscsi
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsi">FsxOntapStorageVirtualMachineEndpointsIscsi</a>

---


### FsxOntapStorageVirtualMachineEndpointsList <a name="FsxOntapStorageVirtualMachineEndpointsList" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxOntapStorageVirtualMachineEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FsxOntapStorageVirtualMachineEndpointsManagementList <a name="FsxOntapStorageVirtualMachineEndpointsManagementList" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxOntapStorageVirtualMachineEndpointsManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FsxOntapStorageVirtualMachineEndpointsManagementOutputReference <a name="FsxOntapStorageVirtualMachineEndpointsManagementOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagement">FsxOntapStorageVirtualMachineEndpointsManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.internalValue"></a>

```python
internal_value: FsxOntapStorageVirtualMachineEndpointsManagement
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagement">FsxOntapStorageVirtualMachineEndpointsManagement</a>

---


### FsxOntapStorageVirtualMachineEndpointsNfsList <a name="FsxOntapStorageVirtualMachineEndpointsNfsList" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxOntapStorageVirtualMachineEndpointsNfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FsxOntapStorageVirtualMachineEndpointsNfsOutputReference <a name="FsxOntapStorageVirtualMachineEndpointsNfsOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfs">FsxOntapStorageVirtualMachineEndpointsNfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.internalValue"></a>

```python
internal_value: FsxOntapStorageVirtualMachineEndpointsNfs
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfs">FsxOntapStorageVirtualMachineEndpointsNfs</a>

---


### FsxOntapStorageVirtualMachineEndpointsOutputReference <a name="FsxOntapStorageVirtualMachineEndpointsOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList">FsxOntapStorageVirtualMachineEndpointsIscsiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.management">management</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList">FsxOntapStorageVirtualMachineEndpointsManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList">FsxOntapStorageVirtualMachineEndpointsNfsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.smb">smb</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList">FsxOntapStorageVirtualMachineEndpointsSmbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpoints">FsxOntapStorageVirtualMachineEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iscsi`<sup>Required</sup> <a name="iscsi" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.iscsi"></a>

```python
iscsi: FsxOntapStorageVirtualMachineEndpointsIscsiList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList">FsxOntapStorageVirtualMachineEndpointsIscsiList</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.management"></a>

```python
management: FsxOntapStorageVirtualMachineEndpointsManagementList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList">FsxOntapStorageVirtualMachineEndpointsManagementList</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.nfs"></a>

```python
nfs: FsxOntapStorageVirtualMachineEndpointsNfsList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList">FsxOntapStorageVirtualMachineEndpointsNfsList</a>

---

##### `smb`<sup>Required</sup> <a name="smb" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.smb"></a>

```python
smb: FsxOntapStorageVirtualMachineEndpointsSmbList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList">FsxOntapStorageVirtualMachineEndpointsSmbList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: FsxOntapStorageVirtualMachineEndpoints
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpoints">FsxOntapStorageVirtualMachineEndpoints</a>

---


### FsxOntapStorageVirtualMachineEndpointsSmbList <a name="FsxOntapStorageVirtualMachineEndpointsSmbList" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxOntapStorageVirtualMachineEndpointsSmbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FsxOntapStorageVirtualMachineEndpointsSmbOutputReference <a name="FsxOntapStorageVirtualMachineEndpointsSmbOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmb">FsxOntapStorageVirtualMachineEndpointsSmb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.internalValue"></a>

```python
internal_value: FsxOntapStorageVirtualMachineEndpointsSmb
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmb">FsxOntapStorageVirtualMachineEndpointsSmb</a>

---


### FsxOntapStorageVirtualMachineTimeoutsOutputReference <a name="FsxOntapStorageVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_storage_virtual_machine

fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts">FsxOntapStorageVirtualMachineTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxOntapStorageVirtualMachineTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts">FsxOntapStorageVirtualMachineTimeouts</a>, cdktf.IResolvable]

---



