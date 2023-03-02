# `fsxOntapVolume` Submodule <a name="`fsxOntapVolume` Submodule" id="@cdktf/provider-aws.fsxOntapVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOntapVolume <a name="FsxOntapVolume" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume aws_fsx_ontap_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_volume

fsxOntapVolume.FsxOntapVolume(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  junction_path: str,
  name: str,
  size_in_megabytes: typing.Union[int, float],
  storage_efficiency_enabled: typing.Union[bool, IResolvable],
  storage_virtual_machine_id: str,
  id: str = None,
  security_style: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tiering_policy: FsxOntapVolumeTieringPolicy = None,
  timeouts: FsxOntapVolumeTimeouts = None,
  volume_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.junctionPath">junction_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#name FsxOntapVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.sizeInMegabytes">size_in_megabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.storageEfficiencyEnabled">storage_efficiency_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.storageVirtualMachineId">storage_virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#id FsxOntapVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.securityStyle">security_style</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#security_style FsxOntapVolume#security_style}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags FsxOntapVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `junction_path`<sup>Required</sup> <a name="junction_path" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.junctionPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#name FsxOntapVolume#name}.

---

##### `size_in_megabytes`<sup>Required</sup> <a name="size_in_megabytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.sizeInMegabytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}.

---

##### `storage_efficiency_enabled`<sup>Required</sup> <a name="storage_efficiency_enabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.storageEfficiencyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}.

---

##### `storage_virtual_machine_id`<sup>Required</sup> <a name="storage_virtual_machine_id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.storageVirtualMachineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#id FsxOntapVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_style`<sup>Optional</sup> <a name="security_style" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.securityStyle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#security_style FsxOntapVolume#security_style}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags FsxOntapVolume#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}.

---

##### `tiering_policy`<sup>Optional</sup> <a name="tiering_policy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tieringPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tiering_policy FsxOntapVolume#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#timeouts FsxOntapVolume#timeouts}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy">put_tiering_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSecurityStyle">reset_security_style</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTieringPolicy">reset_tiering_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_tiering_policy` <a name="put_tiering_policy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy"></a>

```python
def put_tiering_policy(
  cooling_period: typing.Union[int, float] = None,
  name: str = None
) -> None
```

###### `cooling_period`<sup>Optional</sup> <a name="cooling_period" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy.parameter.coolingPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#name FsxOntapVolume#name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#create FsxOntapVolume#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#delete FsxOntapVolume#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#update FsxOntapVolume#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_security_style` <a name="reset_security_style" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSecurityStyle"></a>

```python
def reset_security_style() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_tiering_policy` <a name="reset_tiering_policy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTieringPolicy"></a>

```python
def reset_tiering_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_volume

fsxOntapVolume.FsxOntapVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_volume

fsxOntapVolume.FsxOntapVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_volume

fsxOntapVolume.FsxOntapVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.flexcacheEndpointType">flexcache_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeType">ontap_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference">FsxOntapVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference">FsxOntapVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPathInput">junction_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyleInput">security_style_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytesInput">size_in_megabytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabledInput">storage_efficiency_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineIdInput">storage_virtual_machine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicyInput">tiering_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPath">junction_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyle">security_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytes">size_in_megabytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabled">storage_efficiency_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineId">storage_virtual_machine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `flexcache_endpoint_type`<sup>Required</sup> <a name="flexcache_endpoint_type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.flexcacheEndpointType"></a>

```python
flexcache_endpoint_type: str
```

- *Type:* str

---

##### `ontap_volume_type`<sup>Required</sup> <a name="ontap_volume_type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeType"></a>

```python
ontap_volume_type: str
```

- *Type:* str

---

##### `tiering_policy`<sup>Required</sup> <a name="tiering_policy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicy"></a>

```python
tiering_policy: FsxOntapVolumeTieringPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference">FsxOntapVolumeTieringPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeouts"></a>

```python
timeouts: FsxOntapVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference">FsxOntapVolumeTimeoutsOutputReference</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `junction_path_input`<sup>Optional</sup> <a name="junction_path_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPathInput"></a>

```python
junction_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `security_style_input`<sup>Optional</sup> <a name="security_style_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyleInput"></a>

```python
security_style_input: str
```

- *Type:* str

---

##### `size_in_megabytes_input`<sup>Optional</sup> <a name="size_in_megabytes_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytesInput"></a>

```python
size_in_megabytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_efficiency_enabled_input`<sup>Optional</sup> <a name="storage_efficiency_enabled_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabledInput"></a>

```python
storage_efficiency_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_virtual_machine_id_input`<sup>Optional</sup> <a name="storage_virtual_machine_id_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineIdInput"></a>

```python
storage_virtual_machine_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tiering_policy_input`<sup>Optional</sup> <a name="tiering_policy_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicyInput"></a>

```python
tiering_policy_input: FsxOntapVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[FsxOntapVolumeTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>, cdktf.IResolvable]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `junction_path`<sup>Required</sup> <a name="junction_path" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPath"></a>

```python
junction_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `security_style`<sup>Required</sup> <a name="security_style" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

---

##### `size_in_megabytes`<sup>Required</sup> <a name="size_in_megabytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytes"></a>

```python
size_in_megabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_efficiency_enabled`<sup>Required</sup> <a name="storage_efficiency_enabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabled"></a>

```python
storage_efficiency_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_virtual_machine_id`<sup>Required</sup> <a name="storage_virtual_machine_id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineId"></a>

```python
storage_virtual_machine_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOntapVolumeConfig <a name="FsxOntapVolumeConfig" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_volume

fsxOntapVolume.FsxOntapVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  junction_path: str,
  name: str,
  size_in_megabytes: typing.Union[int, float],
  storage_efficiency_enabled: typing.Union[bool, IResolvable],
  storage_virtual_machine_id: str,
  id: str = None,
  security_style: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tiering_policy: FsxOntapVolumeTieringPolicy = None,
  timeouts: FsxOntapVolumeTimeouts = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.junctionPath">junction_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#name FsxOntapVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInMegabytes">size_in_megabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageEfficiencyEnabled">storage_efficiency_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageVirtualMachineId">storage_virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#id FsxOntapVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.securityStyle">security_style</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#security_style FsxOntapVolume#security_style}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags FsxOntapVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `junction_path`<sup>Required</sup> <a name="junction_path" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.junctionPath"></a>

```python
junction_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#name FsxOntapVolume#name}.

---

##### `size_in_megabytes`<sup>Required</sup> <a name="size_in_megabytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInMegabytes"></a>

```python
size_in_megabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}.

---

##### `storage_efficiency_enabled`<sup>Required</sup> <a name="storage_efficiency_enabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageEfficiencyEnabled"></a>

```python
storage_efficiency_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}.

---

##### `storage_virtual_machine_id`<sup>Required</sup> <a name="storage_virtual_machine_id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageVirtualMachineId"></a>

```python
storage_virtual_machine_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#id FsxOntapVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_style`<sup>Optional</sup> <a name="security_style" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#security_style FsxOntapVolume#security_style}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags FsxOntapVolume#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}.

---

##### `tiering_policy`<sup>Optional</sup> <a name="tiering_policy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tieringPolicy"></a>

```python
tiering_policy: FsxOntapVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tiering_policy FsxOntapVolume#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.timeouts"></a>

```python
timeouts: FsxOntapVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#timeouts FsxOntapVolume#timeouts}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}.

---

### FsxOntapVolumeTieringPolicy <a name="FsxOntapVolumeTieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_volume

fsxOntapVolume.FsxOntapVolumeTieringPolicy(
  cooling_period: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.coolingPeriod">cooling_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#name FsxOntapVolume#name}. |

---

##### `cooling_period`<sup>Optional</sup> <a name="cooling_period" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.coolingPeriod"></a>

```python
cooling_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#name FsxOntapVolume#name}.

---

### FsxOntapVolumeTimeouts <a name="FsxOntapVolumeTimeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_volume

fsxOntapVolume.FsxOntapVolumeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#create FsxOntapVolume#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#delete FsxOntapVolume#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#update FsxOntapVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#create FsxOntapVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#delete FsxOntapVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#update FsxOntapVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOntapVolumeTieringPolicyOutputReference <a name="FsxOntapVolumeTieringPolicyOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_volume

fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetCoolingPeriod">reset_cooling_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cooling_period` <a name="reset_cooling_period" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetCoolingPeriod"></a>

```python
def reset_cooling_period() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriodInput">cooling_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriod">cooling_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooling_period_input`<sup>Optional</sup> <a name="cooling_period_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriodInput"></a>

```python
cooling_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `cooling_period`<sup>Required</sup> <a name="cooling_period" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriod"></a>

```python
cooling_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.internalValue"></a>

```python
internal_value: FsxOntapVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---


### FsxOntapVolumeTimeoutsOutputReference <a name="FsxOntapVolumeTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_ontap_volume

fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxOntapVolumeTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>, cdktf.IResolvable]

---



