# `ami` Submodule <a name="`ami` Submodule" id="@cdktf/provider-aws.ami"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ami <a name="Ami" id="@cdktf/provider-aws.ami.Ami"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami aws_ami}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.Ami.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.Ami(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  architecture: str = None,
  boot_mode: str = None,
  deprecation_time: str = None,
  description: str = None,
  ebs_block_device: typing.Union[IResolvable, typing.List[AmiEbsBlockDevice]] = None,
  ena_support: typing.Union[bool, IResolvable] = None,
  ephemeral_block_device: typing.Union[IResolvable, typing.List[AmiEphemeralBlockDevice]] = None,
  id: str = None,
  image_location: str = None,
  imds_support: str = None,
  kernel_id: str = None,
  ramdisk_id: str = None,
  root_device_name: str = None,
  sriov_net_support: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: AmiTimeouts = None,
  tpm_support: str = None,
  virtualization_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#name Ami#name}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#architecture Ami#architecture}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.bootMode">boot_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#boot_mode Ami#boot_mode}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.deprecationTime">deprecation_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#deprecation_time Ami#deprecation_time}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#description Ami#description}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.ebsBlockDevice">ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>]]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.enaSupport">ena_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ena_support Ami#ena_support}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>]]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#id Ami#id}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.imageLocation">image_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#image_location Ami#image_location}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.imdsSupport">imds_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#imds_support Ami#imds_support}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.kernelId">kernel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#kernel_id Ami#kernel_id}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.ramdiskId">ramdisk_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ramdisk_id Ami#ramdisk_id}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.rootDeviceName">root_device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#root_device_name Ami#root_device_name}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.sriovNetSupport">sriov_net_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#sriov_net_support Ami#sriov_net_support}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags Ami#tags}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags_all Ami#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.tpmSupport">tpm_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tpm_support Ami#tpm_support}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.virtualizationType">virtualization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtualization_type Ami#virtualization_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#name Ami#name}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.architecture"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#architecture Ami#architecture}.

---

##### `boot_mode`<sup>Optional</sup> <a name="boot_mode" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.bootMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#boot_mode Ami#boot_mode}.

---

##### `deprecation_time`<sup>Optional</sup> <a name="deprecation_time" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.deprecationTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#deprecation_time Ami#deprecation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#description Ami#description}.

---

##### `ebs_block_device`<sup>Optional</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.ebsBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>]]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ebs_block_device Ami#ebs_block_device}

---

##### `ena_support`<sup>Optional</sup> <a name="ena_support" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.enaSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ena_support Ami#ena_support}.

---

##### `ephemeral_block_device`<sup>Optional</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.ephemeralBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>]]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ephemeral_block_device Ami#ephemeral_block_device}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#id Ami#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_location`<sup>Optional</sup> <a name="image_location" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.imageLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#image_location Ami#image_location}.

---

##### `imds_support`<sup>Optional</sup> <a name="imds_support" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.imdsSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#imds_support Ami#imds_support}.

---

##### `kernel_id`<sup>Optional</sup> <a name="kernel_id" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.kernelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#kernel_id Ami#kernel_id}.

---

##### `ramdisk_id`<sup>Optional</sup> <a name="ramdisk_id" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.ramdiskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ramdisk_id Ami#ramdisk_id}.

---

##### `root_device_name`<sup>Optional</sup> <a name="root_device_name" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.rootDeviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#root_device_name Ami#root_device_name}.

---

##### `sriov_net_support`<sup>Optional</sup> <a name="sriov_net_support" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.sriovNetSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#sriov_net_support Ami#sriov_net_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags Ami#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags_all Ami#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#timeouts Ami#timeouts}

---

##### `tpm_support`<sup>Optional</sup> <a name="tpm_support" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.tpmSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tpm_support Ami#tpm_support}.

---

##### `virtualization_type`<sup>Optional</sup> <a name="virtualization_type" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.virtualizationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtualization_type Ami#virtualization_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.Ami.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.putEbsBlockDevice">put_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.putEphemeralBlockDevice">put_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetArchitecture">reset_architecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetBootMode">reset_boot_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetDeprecationTime">reset_deprecation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetEbsBlockDevice">reset_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetEnaSupport">reset_ena_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetEphemeralBlockDevice">reset_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetImageLocation">reset_image_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetImdsSupport">reset_imds_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetKernelId">reset_kernel_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetRamdiskId">reset_ramdisk_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetRootDeviceName">reset_root_device_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetSriovNetSupport">reset_sriov_net_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetTpmSupport">reset_tpm_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetVirtualizationType">reset_virtualization_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ami.Ami.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ami.Ami.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ami.Ami.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ami.Ami.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ami.Ami.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ami.Ami.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ami.Ami.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ami.Ami.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ami.Ami.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ami.Ami.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.Ami.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ami.Ami.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.Ami.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ami.Ami.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.Ami.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ami.Ami.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.Ami.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ami.Ami.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.Ami.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ami.Ami.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.Ami.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ami.Ami.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.Ami.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ami.Ami.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.Ami.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ami.Ami.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.Ami.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ami.Ami.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.Ami.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_ebs_block_device` <a name="put_ebs_block_device" id="@cdktf/provider-aws.ami.Ami.putEbsBlockDevice"></a>

```python
def put_ebs_block_device(
  value: typing.Union[IResolvable, typing.List[AmiEbsBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ami.Ami.putEbsBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>]]

---

##### `put_ephemeral_block_device` <a name="put_ephemeral_block_device" id="@cdktf/provider-aws.ami.Ami.putEphemeralBlockDevice"></a>

```python
def put_ephemeral_block_device(
  value: typing.Union[IResolvable, typing.List[AmiEphemeralBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ami.Ami.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ami.Ami.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ami.Ami.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#create Ami#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ami.Ami.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#delete Ami#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ami.Ami.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#update Ami#update}.

---

##### `reset_architecture` <a name="reset_architecture" id="@cdktf/provider-aws.ami.Ami.resetArchitecture"></a>

```python
def reset_architecture() -> None
```

##### `reset_boot_mode` <a name="reset_boot_mode" id="@cdktf/provider-aws.ami.Ami.resetBootMode"></a>

```python
def reset_boot_mode() -> None
```

##### `reset_deprecation_time` <a name="reset_deprecation_time" id="@cdktf/provider-aws.ami.Ami.resetDeprecationTime"></a>

```python
def reset_deprecation_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ami.Ami.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ebs_block_device` <a name="reset_ebs_block_device" id="@cdktf/provider-aws.ami.Ami.resetEbsBlockDevice"></a>

```python
def reset_ebs_block_device() -> None
```

##### `reset_ena_support` <a name="reset_ena_support" id="@cdktf/provider-aws.ami.Ami.resetEnaSupport"></a>

```python
def reset_ena_support() -> None
```

##### `reset_ephemeral_block_device` <a name="reset_ephemeral_block_device" id="@cdktf/provider-aws.ami.Ami.resetEphemeralBlockDevice"></a>

```python
def reset_ephemeral_block_device() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ami.Ami.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_location` <a name="reset_image_location" id="@cdktf/provider-aws.ami.Ami.resetImageLocation"></a>

```python
def reset_image_location() -> None
```

##### `reset_imds_support` <a name="reset_imds_support" id="@cdktf/provider-aws.ami.Ami.resetImdsSupport"></a>

```python
def reset_imds_support() -> None
```

##### `reset_kernel_id` <a name="reset_kernel_id" id="@cdktf/provider-aws.ami.Ami.resetKernelId"></a>

```python
def reset_kernel_id() -> None
```

##### `reset_ramdisk_id` <a name="reset_ramdisk_id" id="@cdktf/provider-aws.ami.Ami.resetRamdiskId"></a>

```python
def reset_ramdisk_id() -> None
```

##### `reset_root_device_name` <a name="reset_root_device_name" id="@cdktf/provider-aws.ami.Ami.resetRootDeviceName"></a>

```python
def reset_root_device_name() -> None
```

##### `reset_sriov_net_support` <a name="reset_sriov_net_support" id="@cdktf/provider-aws.ami.Ami.resetSriovNetSupport"></a>

```python
def reset_sriov_net_support() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ami.Ami.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ami.Ami.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ami.Ami.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tpm_support` <a name="reset_tpm_support" id="@cdktf/provider-aws.ami.Ami.resetTpmSupport"></a>

```python
def reset_tpm_support() -> None
```

##### `reset_virtualization_type` <a name="reset_virtualization_type" id="@cdktf/provider-aws.ami.Ami.resetVirtualizationType"></a>

```python
def reset_virtualization_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.Ami.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ami.Ami.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.Ami.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ami.Ami.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ami.Ami.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.Ami.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ami.Ami.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ami.Ami.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.Ami.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ami.Ami.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ebsBlockDevice">ebs_block_device</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList">AmiEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList">AmiEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.hypervisor">hypervisor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imageOwnerAlias">image_owner_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imageType">image_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.manageEbsSnapshots">manage_ebs_snapshots</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.platformDetails">platform_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.public">public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.rootSnapshotId">root_snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference">AmiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.usageOperation">usage_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.bootModeInput">boot_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.deprecationTimeInput">deprecation_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ebsBlockDeviceInput">ebs_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.enaSupportInput">ena_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ephemeralBlockDeviceInput">ephemeral_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imageLocationInput">image_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imdsSupportInput">imds_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.kernelIdInput">kernel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ramdiskIdInput">ramdisk_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.rootDeviceNameInput">root_device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.sriovNetSupportInput">sriov_net_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tpmSupportInput">tpm_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.virtualizationTypeInput">virtualization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.bootMode">boot_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.deprecationTime">deprecation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.enaSupport">ena_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imageLocation">image_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imdsSupport">imds_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.kernelId">kernel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ramdiskId">ramdisk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.rootDeviceName">root_device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.sriovNetSupport">sriov_net_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tpmSupport">tpm_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.virtualizationType">virtualization_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ami.Ami.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ami.Ami.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.Ami.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ami.Ami.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ami.Ami.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ami.Ami.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ami.Ami.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ami.Ami.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ami.Ami.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ami.Ami.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ami.Ami.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ami.Ami.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ami.Ami.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ami.Ami.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ami.Ami.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `ebs_block_device`<sup>Required</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.ami.Ami.property.ebsBlockDevice"></a>

```python
ebs_block_device: AmiEbsBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList">AmiEbsBlockDeviceList</a>

---

##### `ephemeral_block_device`<sup>Required</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.ami.Ami.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: AmiEphemeralBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList">AmiEphemeralBlockDeviceList</a>

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-aws.ami.Ami.property.hypervisor"></a>

```python
hypervisor: str
```

- *Type:* str

---

##### `image_owner_alias`<sup>Required</sup> <a name="image_owner_alias" id="@cdktf/provider-aws.ami.Ami.property.imageOwnerAlias"></a>

```python
image_owner_alias: str
```

- *Type:* str

---

##### `image_type`<sup>Required</sup> <a name="image_type" id="@cdktf/provider-aws.ami.Ami.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

---

##### `manage_ebs_snapshots`<sup>Required</sup> <a name="manage_ebs_snapshots" id="@cdktf/provider-aws.ami.Ami.property.manageEbsSnapshots"></a>

```python
manage_ebs_snapshots: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.ami.Ami.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.ami.Ami.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `platform_details`<sup>Required</sup> <a name="platform_details" id="@cdktf/provider-aws.ami.Ami.property.platformDetails"></a>

```python
platform_details: str
```

- *Type:* str

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-aws.ami.Ami.property.public"></a>

```python
public: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `root_snapshot_id`<sup>Required</sup> <a name="root_snapshot_id" id="@cdktf/provider-aws.ami.Ami.property.rootSnapshotId"></a>

```python
root_snapshot_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ami.Ami.property.timeouts"></a>

```python
timeouts: AmiTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference">AmiTimeoutsOutputReference</a>

---

##### `usage_operation`<sup>Required</sup> <a name="usage_operation" id="@cdktf/provider-aws.ami.Ami.property.usageOperation"></a>

```python
usage_operation: str
```

- *Type:* str

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktf/provider-aws.ami.Ami.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `boot_mode_input`<sup>Optional</sup> <a name="boot_mode_input" id="@cdktf/provider-aws.ami.Ami.property.bootModeInput"></a>

```python
boot_mode_input: str
```

- *Type:* str

---

##### `deprecation_time_input`<sup>Optional</sup> <a name="deprecation_time_input" id="@cdktf/provider-aws.ami.Ami.property.deprecationTimeInput"></a>

```python
deprecation_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ami.Ami.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ebs_block_device_input`<sup>Optional</sup> <a name="ebs_block_device_input" id="@cdktf/provider-aws.ami.Ami.property.ebsBlockDeviceInput"></a>

```python
ebs_block_device_input: typing.Union[IResolvable, typing.List[AmiEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>]]

---

##### `ena_support_input`<sup>Optional</sup> <a name="ena_support_input" id="@cdktf/provider-aws.ami.Ami.property.enaSupportInput"></a>

```python
ena_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ephemeral_block_device_input`<sup>Optional</sup> <a name="ephemeral_block_device_input" id="@cdktf/provider-aws.ami.Ami.property.ephemeralBlockDeviceInput"></a>

```python
ephemeral_block_device_input: typing.Union[IResolvable, typing.List[AmiEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ami.Ami.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_location_input`<sup>Optional</sup> <a name="image_location_input" id="@cdktf/provider-aws.ami.Ami.property.imageLocationInput"></a>

```python
image_location_input: str
```

- *Type:* str

---

##### `imds_support_input`<sup>Optional</sup> <a name="imds_support_input" id="@cdktf/provider-aws.ami.Ami.property.imdsSupportInput"></a>

```python
imds_support_input: str
```

- *Type:* str

---

##### `kernel_id_input`<sup>Optional</sup> <a name="kernel_id_input" id="@cdktf/provider-aws.ami.Ami.property.kernelIdInput"></a>

```python
kernel_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ami.Ami.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ramdisk_id_input`<sup>Optional</sup> <a name="ramdisk_id_input" id="@cdktf/provider-aws.ami.Ami.property.ramdiskIdInput"></a>

```python
ramdisk_id_input: str
```

- *Type:* str

---

##### `root_device_name_input`<sup>Optional</sup> <a name="root_device_name_input" id="@cdktf/provider-aws.ami.Ami.property.rootDeviceNameInput"></a>

```python
root_device_name_input: str
```

- *Type:* str

---

##### `sriov_net_support_input`<sup>Optional</sup> <a name="sriov_net_support_input" id="@cdktf/provider-aws.ami.Ami.property.sriovNetSupportInput"></a>

```python
sriov_net_support_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ami.Ami.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ami.Ami.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ami.Ami.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AmiTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a>, cdktf.IResolvable]

---

##### `tpm_support_input`<sup>Optional</sup> <a name="tpm_support_input" id="@cdktf/provider-aws.ami.Ami.property.tpmSupportInput"></a>

```python
tpm_support_input: str
```

- *Type:* str

---

##### `virtualization_type_input`<sup>Optional</sup> <a name="virtualization_type_input" id="@cdktf/provider-aws.ami.Ami.property.virtualizationTypeInput"></a>

```python
virtualization_type_input: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-aws.ami.Ami.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `boot_mode`<sup>Required</sup> <a name="boot_mode" id="@cdktf/provider-aws.ami.Ami.property.bootMode"></a>

```python
boot_mode: str
```

- *Type:* str

---

##### `deprecation_time`<sup>Required</sup> <a name="deprecation_time" id="@cdktf/provider-aws.ami.Ami.property.deprecationTime"></a>

```python
deprecation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ami.Ami.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ena_support`<sup>Required</sup> <a name="ena_support" id="@cdktf/provider-aws.ami.Ami.property.enaSupport"></a>

```python
ena_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ami.Ami.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_location`<sup>Required</sup> <a name="image_location" id="@cdktf/provider-aws.ami.Ami.property.imageLocation"></a>

```python
image_location: str
```

- *Type:* str

---

##### `imds_support`<sup>Required</sup> <a name="imds_support" id="@cdktf/provider-aws.ami.Ami.property.imdsSupport"></a>

```python
imds_support: str
```

- *Type:* str

---

##### `kernel_id`<sup>Required</sup> <a name="kernel_id" id="@cdktf/provider-aws.ami.Ami.property.kernelId"></a>

```python
kernel_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ami.Ami.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ramdisk_id`<sup>Required</sup> <a name="ramdisk_id" id="@cdktf/provider-aws.ami.Ami.property.ramdiskId"></a>

```python
ramdisk_id: str
```

- *Type:* str

---

##### `root_device_name`<sup>Required</sup> <a name="root_device_name" id="@cdktf/provider-aws.ami.Ami.property.rootDeviceName"></a>

```python
root_device_name: str
```

- *Type:* str

---

##### `sriov_net_support`<sup>Required</sup> <a name="sriov_net_support" id="@cdktf/provider-aws.ami.Ami.property.sriovNetSupport"></a>

```python
sriov_net_support: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ami.Ami.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ami.Ami.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tpm_support`<sup>Required</sup> <a name="tpm_support" id="@cdktf/provider-aws.ami.Ami.property.tpmSupport"></a>

```python
tpm_support: str
```

- *Type:* str

---

##### `virtualization_type`<sup>Required</sup> <a name="virtualization_type" id="@cdktf/provider-aws.ami.Ami.property.virtualizationType"></a>

```python
virtualization_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ami.Ami.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AmiConfig <a name="AmiConfig" id="@cdktf/provider-aws.ami.AmiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ami.AmiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.AmiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  architecture: str = None,
  boot_mode: str = None,
  deprecation_time: str = None,
  description: str = None,
  ebs_block_device: typing.Union[IResolvable, typing.List[AmiEbsBlockDevice]] = None,
  ena_support: typing.Union[bool, IResolvable] = None,
  ephemeral_block_device: typing.Union[IResolvable, typing.List[AmiEphemeralBlockDevice]] = None,
  id: str = None,
  image_location: str = None,
  imds_support: str = None,
  kernel_id: str = None,
  ramdisk_id: str = None,
  root_device_name: str = None,
  sriov_net_support: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: AmiTimeouts = None,
  tpm_support: str = None,
  virtualization_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#name Ami#name}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#architecture Ami#architecture}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.bootMode">boot_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#boot_mode Ami#boot_mode}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.deprecationTime">deprecation_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#deprecation_time Ami#deprecation_time}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#description Ami#description}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.ebsBlockDevice">ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>]]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.enaSupport">ena_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ena_support Ami#ena_support}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>]]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#id Ami#id}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.imageLocation">image_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#image_location Ami#image_location}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.imdsSupport">imds_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#imds_support Ami#imds_support}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.kernelId">kernel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#kernel_id Ami#kernel_id}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.ramdiskId">ramdisk_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ramdisk_id Ami#ramdisk_id}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.rootDeviceName">root_device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#root_device_name Ami#root_device_name}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.sriovNetSupport">sriov_net_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#sriov_net_support Ami#sriov_net_support}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags Ami#tags}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags_all Ami#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.tpmSupport">tpm_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tpm_support Ami#tpm_support}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.virtualizationType">virtualization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtualization_type Ami#virtualization_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ami.AmiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ami.AmiConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ami.AmiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ami.AmiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ami.AmiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ami.AmiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ami.AmiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ami.AmiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#name Ami#name}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-aws.ami.AmiConfig.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#architecture Ami#architecture}.

---

##### `boot_mode`<sup>Optional</sup> <a name="boot_mode" id="@cdktf/provider-aws.ami.AmiConfig.property.bootMode"></a>

```python
boot_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#boot_mode Ami#boot_mode}.

---

##### `deprecation_time`<sup>Optional</sup> <a name="deprecation_time" id="@cdktf/provider-aws.ami.AmiConfig.property.deprecationTime"></a>

```python
deprecation_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#deprecation_time Ami#deprecation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ami.AmiConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#description Ami#description}.

---

##### `ebs_block_device`<sup>Optional</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.ami.AmiConfig.property.ebsBlockDevice"></a>

```python
ebs_block_device: typing.Union[IResolvable, typing.List[AmiEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>]]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ebs_block_device Ami#ebs_block_device}

---

##### `ena_support`<sup>Optional</sup> <a name="ena_support" id="@cdktf/provider-aws.ami.AmiConfig.property.enaSupport"></a>

```python
ena_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ena_support Ami#ena_support}.

---

##### `ephemeral_block_device`<sup>Optional</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.ami.AmiConfig.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: typing.Union[IResolvable, typing.List[AmiEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>]]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ephemeral_block_device Ami#ephemeral_block_device}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ami.AmiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#id Ami#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_location`<sup>Optional</sup> <a name="image_location" id="@cdktf/provider-aws.ami.AmiConfig.property.imageLocation"></a>

```python
image_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#image_location Ami#image_location}.

---

##### `imds_support`<sup>Optional</sup> <a name="imds_support" id="@cdktf/provider-aws.ami.AmiConfig.property.imdsSupport"></a>

```python
imds_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#imds_support Ami#imds_support}.

---

##### `kernel_id`<sup>Optional</sup> <a name="kernel_id" id="@cdktf/provider-aws.ami.AmiConfig.property.kernelId"></a>

```python
kernel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#kernel_id Ami#kernel_id}.

---

##### `ramdisk_id`<sup>Optional</sup> <a name="ramdisk_id" id="@cdktf/provider-aws.ami.AmiConfig.property.ramdiskId"></a>

```python
ramdisk_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ramdisk_id Ami#ramdisk_id}.

---

##### `root_device_name`<sup>Optional</sup> <a name="root_device_name" id="@cdktf/provider-aws.ami.AmiConfig.property.rootDeviceName"></a>

```python
root_device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#root_device_name Ami#root_device_name}.

---

##### `sriov_net_support`<sup>Optional</sup> <a name="sriov_net_support" id="@cdktf/provider-aws.ami.AmiConfig.property.sriovNetSupport"></a>

```python
sriov_net_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#sriov_net_support Ami#sriov_net_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ami.AmiConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags Ami#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ami.AmiConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags_all Ami#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ami.AmiConfig.property.timeouts"></a>

```python
timeouts: AmiTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#timeouts Ami#timeouts}

---

##### `tpm_support`<sup>Optional</sup> <a name="tpm_support" id="@cdktf/provider-aws.ami.AmiConfig.property.tpmSupport"></a>

```python
tpm_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tpm_support Ami#tpm_support}.

---

##### `virtualization_type`<sup>Optional</sup> <a name="virtualization_type" id="@cdktf/provider-aws.ami.AmiConfig.property.virtualizationType"></a>

```python
virtualization_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtualization_type Ami#virtualization_type}.

---

### AmiEbsBlockDevice <a name="AmiEbsBlockDevice" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.AmiEbsBlockDevice(
  device_name: str,
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  outpost_arn: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#device_name Ami#device_name}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#delete_on_termination Ami#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#encrypted Ami#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#iops Ami#iops}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.outpostArn">outpost_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#outpost_arn Ami#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#snapshot_id Ami#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#throughput Ami#throughput}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#volume_size Ami#volume_size}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#volume_type Ami#volume_type}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#device_name Ami#device_name}.

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#delete_on_termination Ami#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#encrypted Ami#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#iops Ami#iops}.

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#outpost_arn Ami#outpost_arn}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#snapshot_id Ami#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#throughput Ami#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#volume_size Ami#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#volume_type Ami#volume_type}.

---

### AmiEphemeralBlockDevice <a name="AmiEphemeralBlockDevice" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.AmiEphemeralBlockDevice(
  device_name: str,
  virtual_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#device_name Ami#device_name}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtual_name Ami#virtual_name}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#device_name Ami#device_name}.

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDevice.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtual_name Ami#virtual_name}.

---

### AmiTimeouts <a name="AmiTimeouts" id="@cdktf/provider-aws.ami.AmiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ami.AmiTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.AmiTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#create Ami#create}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#delete Ami#delete}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#update Ami#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ami.AmiTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#create Ami#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ami.AmiTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#delete Ami#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ami.AmiTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#update Ami#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmiEbsBlockDeviceList <a name="AmiEbsBlockDeviceList" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.AmiEbsBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmiEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AmiEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>]]

---


### AmiEbsBlockDeviceOutputReference <a name="AmiEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.AmiEbsBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetOutpostArn">reset_outpost_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_outpost_arn` <a name="reset_outpost_arn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetOutpostArn"></a>

```python
def reset_outpost_arn() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.outpostArnInput">outpost_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `outpost_arn_input`<sup>Optional</sup> <a name="outpost_arn_input" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.outpostArnInput"></a>

```python
outpost_arn_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AmiEbsBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>, cdktf.IResolvable]

---


### AmiEphemeralBlockDeviceList <a name="AmiEphemeralBlockDeviceList" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.AmiEphemeralBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmiEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AmiEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>]]

---


### AmiEphemeralBlockDeviceOutputReference <a name="AmiEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.AmiEphemeralBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AmiEphemeralBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>, cdktf.IResolvable]

---


### AmiTimeoutsOutputReference <a name="AmiTimeoutsOutputReference" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ami

ami.AmiTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AmiTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a>, cdktf.IResolvable]

---



