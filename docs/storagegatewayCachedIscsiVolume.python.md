# `storagegatewayCachedIscsiVolume` Submodule <a name="`storagegatewayCachedIscsiVolume` Submodule" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayCachedIscsiVolume <a name="StoragegatewayCachedIscsiVolume" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume aws_storagegateway_cached_iscsi_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_cached_iscsi_volume

storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_arn: str,
  network_interface_id: str,
  target_name: str,
  volume_size_in_bytes: typing.Union[int, float],
  id: str = None,
  kms_encrypted: typing.Union[bool, IResolvable] = None,
  kms_key: str = None,
  snapshot_id: str = None,
  source_volume_arn: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.gatewayArn">gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.targetName">target_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.volumeSizeInBytes">volume_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.kmsEncrypted">kms_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.sourceVolumeArn">source_volume_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.gatewayArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}.

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.networkInterfaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}.

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.targetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}.

---

##### `volume_size_in_bytes`<sup>Required</sup> <a name="volume_size_in_bytes" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.volumeSizeInBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_encrypted`<sup>Optional</sup> <a name="kms_encrypted" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.kmsEncrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}.

---

##### `source_volume_arn`<sup>Optional</sup> <a name="source_volume_arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.sourceVolumeArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsEncrypted">reset_kms_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSourceVolumeArn">reset_source_volume_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_encrypted` <a name="reset_kms_encrypted" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsEncrypted"></a>

```python
def reset_kms_encrypted() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_source_volume_arn` <a name="reset_source_volume_arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSourceVolumeArn"></a>

```python
def reset_source_volume_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_cached_iscsi_volume

storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_cached_iscsi_volume

storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_cached_iscsi_volume

storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.chapEnabled">chap_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lunNumber">lun_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfacePort">network_interface_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeArn">volume_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArnInput">gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncryptedInput">kms_encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArnInput">source_volume_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetNameInput">target_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytesInput">volume_size_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncrypted">kms_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArn">source_volume_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytes">volume_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `chap_enabled`<sup>Required</sup> <a name="chap_enabled" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.chapEnabled"></a>

```python
chap_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lun_number`<sup>Required</sup> <a name="lun_number" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lunNumber"></a>

```python
lun_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_interface_port`<sup>Required</sup> <a name="network_interface_port" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfacePort"></a>

```python
network_interface_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `volume_arn`<sup>Required</sup> <a name="volume_arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeArn"></a>

```python
volume_arn: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `gateway_arn_input`<sup>Optional</sup> <a name="gateway_arn_input" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArnInput"></a>

```python
gateway_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_encrypted_input`<sup>Optional</sup> <a name="kms_encrypted_input" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncryptedInput"></a>

```python
kms_encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `source_volume_arn_input`<sup>Optional</sup> <a name="source_volume_arn_input" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArnInput"></a>

```python
source_volume_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_name_input`<sup>Optional</sup> <a name="target_name_input" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetNameInput"></a>

```python
target_name_input: str
```

- *Type:* str

---

##### `volume_size_in_bytes_input`<sup>Optional</sup> <a name="volume_size_in_bytes_input" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytesInput"></a>

```python
volume_size_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_encrypted`<sup>Required</sup> <a name="kms_encrypted" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncrypted"></a>

```python
kms_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `source_volume_arn`<sup>Required</sup> <a name="source_volume_arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArn"></a>

```python
source_volume_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `volume_size_in_bytes`<sup>Required</sup> <a name="volume_size_in_bytes" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytes"></a>

```python
volume_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayCachedIscsiVolumeConfig <a name="StoragegatewayCachedIscsiVolumeConfig" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_cached_iscsi_volume

storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_arn: str,
  network_interface_id: str,
  target_name: str,
  volume_size_in_bytes: typing.Union[int, float],
  id: str = None,
  kms_encrypted: typing.Union[bool, IResolvable] = None,
  kms_key: str = None,
  snapshot_id: str = None,
  source_volume_arn: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.targetName">target_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.volumeSizeInBytes">volume_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsEncrypted">kms_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.sourceVolumeArn">source_volume_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}.

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}.

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}.

---

##### `volume_size_in_bytes`<sup>Required</sup> <a name="volume_size_in_bytes" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.volumeSizeInBytes"></a>

```python
volume_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_encrypted`<sup>Optional</sup> <a name="kms_encrypted" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsEncrypted"></a>

```python
kms_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}.

---

##### `source_volume_arn`<sup>Optional</sup> <a name="source_volume_arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.sourceVolumeArn"></a>

```python
source_volume_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}.

---



