# `ami` Submodule <a name="`ami` Submodule" id="@cdktf/provider-aws.ami"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ami <a name="Ami" id="@cdktf/provider-aws.ami.Ami"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami aws_ami}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.Ami.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.Ami;

Ami.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .architecture(java.lang.String)
//  .bootMode(java.lang.String)
//  .deprecationTime(java.lang.String)
//  .description(java.lang.String)
//  .ebsBlockDevice(IResolvable)
//  .ebsBlockDevice(java.util.List<AmiEbsBlockDevice>)
//  .enaSupport(java.lang.Boolean)
//  .enaSupport(IResolvable)
//  .ephemeralBlockDevice(IResolvable)
//  .ephemeralBlockDevice(java.util.List<AmiEphemeralBlockDevice>)
//  .id(java.lang.String)
//  .imageLocation(java.lang.String)
//  .imdsSupport(java.lang.String)
//  .kernelId(java.lang.String)
//  .ramdiskId(java.lang.String)
//  .rootDeviceName(java.lang.String)
//  .sriovNetSupport(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AmiTimeouts)
//  .tpmSupport(java.lang.String)
//  .virtualizationType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#name Ami#name}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.architecture">architecture</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#architecture Ami#architecture}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.bootMode">bootMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#boot_mode Ami#boot_mode}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.deprecationTime">deprecationTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#deprecation_time Ami#deprecation_time}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#description Ami#description}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.ebsBlockDevice">ebsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>></code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.enaSupport">enaSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ena_support Ami#ena_support}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>></code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#id Ami#id}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.imageLocation">imageLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#image_location Ami#image_location}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.imdsSupport">imdsSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#imds_support Ami#imds_support}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.kernelId">kernelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#kernel_id Ami#kernel_id}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.ramdiskId">ramdiskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ramdisk_id Ami#ramdisk_id}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.rootDeviceName">rootDeviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#root_device_name Ami#root_device_name}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.sriovNetSupport">sriovNetSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#sriov_net_support Ami#sriov_net_support}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags Ami#tags}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags_all Ami#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.tpmSupport">tpmSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tpm_support Ami#tpm_support}. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.Initializer.parameter.virtualizationType">virtualizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtualization_type Ami#virtualization_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#name Ami#name}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.architecture"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#architecture Ami#architecture}.

---

##### `bootMode`<sup>Optional</sup> <a name="bootMode" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.bootMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#boot_mode Ami#boot_mode}.

---

##### `deprecationTime`<sup>Optional</sup> <a name="deprecationTime" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.deprecationTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#deprecation_time Ami#deprecation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#description Ami#description}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.ebsBlockDevice"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>>

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ebs_block_device Ami#ebs_block_device}

---

##### `enaSupport`<sup>Optional</sup> <a name="enaSupport" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.enaSupport"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ena_support Ami#ena_support}.

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.ephemeralBlockDevice"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>>

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ephemeral_block_device Ami#ephemeral_block_device}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#id Ami#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageLocation`<sup>Optional</sup> <a name="imageLocation" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.imageLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#image_location Ami#image_location}.

---

##### `imdsSupport`<sup>Optional</sup> <a name="imdsSupport" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.imdsSupport"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#imds_support Ami#imds_support}.

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.kernelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#kernel_id Ami#kernel_id}.

---

##### `ramdiskId`<sup>Optional</sup> <a name="ramdiskId" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.ramdiskId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ramdisk_id Ami#ramdisk_id}.

---

##### `rootDeviceName`<sup>Optional</sup> <a name="rootDeviceName" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.rootDeviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#root_device_name Ami#root_device_name}.

---

##### `sriovNetSupport`<sup>Optional</sup> <a name="sriovNetSupport" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.sriovNetSupport"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#sriov_net_support Ami#sriov_net_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags Ami#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags_all Ami#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#timeouts Ami#timeouts}

---

##### `tpmSupport`<sup>Optional</sup> <a name="tpmSupport" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.tpmSupport"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tpm_support Ami#tpm_support}.

---

##### `virtualizationType`<sup>Optional</sup> <a name="virtualizationType" id="@cdktf/provider-aws.ami.Ami.Initializer.parameter.virtualizationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtualization_type Ami#virtualization_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.Ami.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.putEbsBlockDevice">putEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.putEphemeralBlockDevice">putEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetArchitecture">resetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetBootMode">resetBootMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetDeprecationTime">resetDeprecationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetEbsBlockDevice">resetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetEnaSupport">resetEnaSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetEphemeralBlockDevice">resetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetImageLocation">resetImageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetImdsSupport">resetImdsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetKernelId">resetKernelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetRamdiskId">resetRamdiskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetRootDeviceName">resetRootDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetSriovNetSupport">resetSriovNetSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetTpmSupport">resetTpmSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.resetVirtualizationType">resetVirtualizationType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ami.Ami.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ami.Ami.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ami.Ami.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ami.Ami.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ami.Ami.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ami.Ami.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ami.Ami.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ami.Ami.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ami.Ami.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ami.Ami.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.Ami.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ami.Ami.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.Ami.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ami.Ami.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.Ami.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ami.Ami.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.Ami.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ami.Ami.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.Ami.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ami.Ami.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.Ami.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ami.Ami.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.Ami.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ami.Ami.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.Ami.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ami.Ami.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.Ami.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ami.Ami.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.Ami.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEbsBlockDevice` <a name="putEbsBlockDevice" id="@cdktf/provider-aws.ami.Ami.putEbsBlockDevice"></a>

```java
public void putEbsBlockDevice(IResolvable OR java.util.List<AmiEbsBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ami.Ami.putEbsBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>>

---

##### `putEphemeralBlockDevice` <a name="putEphemeralBlockDevice" id="@cdktf/provider-aws.ami.Ami.putEphemeralBlockDevice"></a>

```java
public void putEphemeralBlockDevice(IResolvable OR java.util.List<AmiEphemeralBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ami.Ami.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ami.Ami.putTimeouts"></a>

```java
public void putTimeouts(AmiTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ami.Ami.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a>

---

##### `resetArchitecture` <a name="resetArchitecture" id="@cdktf/provider-aws.ami.Ami.resetArchitecture"></a>

```java
public void resetArchitecture()
```

##### `resetBootMode` <a name="resetBootMode" id="@cdktf/provider-aws.ami.Ami.resetBootMode"></a>

```java
public void resetBootMode()
```

##### `resetDeprecationTime` <a name="resetDeprecationTime" id="@cdktf/provider-aws.ami.Ami.resetDeprecationTime"></a>

```java
public void resetDeprecationTime()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ami.Ami.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEbsBlockDevice` <a name="resetEbsBlockDevice" id="@cdktf/provider-aws.ami.Ami.resetEbsBlockDevice"></a>

```java
public void resetEbsBlockDevice()
```

##### `resetEnaSupport` <a name="resetEnaSupport" id="@cdktf/provider-aws.ami.Ami.resetEnaSupport"></a>

```java
public void resetEnaSupport()
```

##### `resetEphemeralBlockDevice` <a name="resetEphemeralBlockDevice" id="@cdktf/provider-aws.ami.Ami.resetEphemeralBlockDevice"></a>

```java
public void resetEphemeralBlockDevice()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ami.Ami.resetId"></a>

```java
public void resetId()
```

##### `resetImageLocation` <a name="resetImageLocation" id="@cdktf/provider-aws.ami.Ami.resetImageLocation"></a>

```java
public void resetImageLocation()
```

##### `resetImdsSupport` <a name="resetImdsSupport" id="@cdktf/provider-aws.ami.Ami.resetImdsSupport"></a>

```java
public void resetImdsSupport()
```

##### `resetKernelId` <a name="resetKernelId" id="@cdktf/provider-aws.ami.Ami.resetKernelId"></a>

```java
public void resetKernelId()
```

##### `resetRamdiskId` <a name="resetRamdiskId" id="@cdktf/provider-aws.ami.Ami.resetRamdiskId"></a>

```java
public void resetRamdiskId()
```

##### `resetRootDeviceName` <a name="resetRootDeviceName" id="@cdktf/provider-aws.ami.Ami.resetRootDeviceName"></a>

```java
public void resetRootDeviceName()
```

##### `resetSriovNetSupport` <a name="resetSriovNetSupport" id="@cdktf/provider-aws.ami.Ami.resetSriovNetSupport"></a>

```java
public void resetSriovNetSupport()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ami.Ami.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ami.Ami.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ami.Ami.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTpmSupport` <a name="resetTpmSupport" id="@cdktf/provider-aws.ami.Ami.resetTpmSupport"></a>

```java
public void resetTpmSupport()
```

##### `resetVirtualizationType` <a name="resetVirtualizationType" id="@cdktf/provider-aws.ami.Ami.resetVirtualizationType"></a>

```java
public void resetVirtualizationType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.Ami.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ami.Ami.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.Ami;

Ami.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ami.Ami.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.Ami;

Ami.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ami.Ami.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ami.Ami.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.Ami;

Ami.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ami.Ami.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList">AmiEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList">AmiEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.hypervisor">hypervisor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imageOwnerAlias">imageOwnerAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imageType">imageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.manageEbsSnapshots">manageEbsSnapshots</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.platformDetails">platformDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.public">public</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.rootSnapshotId">rootSnapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference">AmiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.usageOperation">usageOperation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.architectureInput">architectureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.bootModeInput">bootModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.deprecationTimeInput">deprecationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ebsBlockDeviceInput">ebsBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.enaSupportInput">enaSupportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ephemeralBlockDeviceInput">ephemeralBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imageLocationInput">imageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imdsSupportInput">imdsSupportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.kernelIdInput">kernelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ramdiskIdInput">ramdiskIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.rootDeviceNameInput">rootDeviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.sriovNetSupportInput">sriovNetSupportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tpmSupportInput">tpmSupportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.virtualizationTypeInput">virtualizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.bootMode">bootMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.deprecationTime">deprecationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.enaSupport">enaSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imageLocation">imageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.imdsSupport">imdsSupport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.kernelId">kernelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.ramdiskId">ramdiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.rootDeviceName">rootDeviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.sriovNetSupport">sriovNetSupport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tpmSupport">tpmSupport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.virtualizationType">virtualizationType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ami.Ami.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ami.Ami.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.Ami.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ami.Ami.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ami.Ami.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ami.Ami.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ami.Ami.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ami.Ami.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ami.Ami.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ami.Ami.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ami.Ami.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ami.Ami.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ami.Ami.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ami.Ami.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ami.Ami.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ebsBlockDevice`<sup>Required</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.ami.Ami.property.ebsBlockDevice"></a>

```java
public AmiEbsBlockDeviceList getEbsBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList">AmiEbsBlockDeviceList</a>

---

##### `ephemeralBlockDevice`<sup>Required</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.ami.Ami.property.ephemeralBlockDevice"></a>

```java
public AmiEphemeralBlockDeviceList getEphemeralBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList">AmiEphemeralBlockDeviceList</a>

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-aws.ami.Ami.property.hypervisor"></a>

```java
public java.lang.String getHypervisor();
```

- *Type:* java.lang.String

---

##### `imageOwnerAlias`<sup>Required</sup> <a name="imageOwnerAlias" id="@cdktf/provider-aws.ami.Ami.property.imageOwnerAlias"></a>

```java
public java.lang.String getImageOwnerAlias();
```

- *Type:* java.lang.String

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-aws.ami.Ami.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

---

##### `manageEbsSnapshots`<sup>Required</sup> <a name="manageEbsSnapshots" id="@cdktf/provider-aws.ami.Ami.property.manageEbsSnapshots"></a>

```java
public IResolvable getManageEbsSnapshots();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.ami.Ami.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.ami.Ami.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `platformDetails`<sup>Required</sup> <a name="platformDetails" id="@cdktf/provider-aws.ami.Ami.property.platformDetails"></a>

```java
public java.lang.String getPlatformDetails();
```

- *Type:* java.lang.String

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-aws.ami.Ami.property.public"></a>

```java
public IResolvable getPublic();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rootSnapshotId`<sup>Required</sup> <a name="rootSnapshotId" id="@cdktf/provider-aws.ami.Ami.property.rootSnapshotId"></a>

```java
public java.lang.String getRootSnapshotId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ami.Ami.property.timeouts"></a>

```java
public AmiTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference">AmiTimeoutsOutputReference</a>

---

##### `usageOperation`<sup>Required</sup> <a name="usageOperation" id="@cdktf/provider-aws.ami.Ami.property.usageOperation"></a>

```java
public java.lang.String getUsageOperation();
```

- *Type:* java.lang.String

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktf/provider-aws.ami.Ami.property.architectureInput"></a>

```java
public java.lang.String getArchitectureInput();
```

- *Type:* java.lang.String

---

##### `bootModeInput`<sup>Optional</sup> <a name="bootModeInput" id="@cdktf/provider-aws.ami.Ami.property.bootModeInput"></a>

```java
public java.lang.String getBootModeInput();
```

- *Type:* java.lang.String

---

##### `deprecationTimeInput`<sup>Optional</sup> <a name="deprecationTimeInput" id="@cdktf/provider-aws.ami.Ami.property.deprecationTimeInput"></a>

```java
public java.lang.String getDeprecationTimeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ami.Ami.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `ebsBlockDeviceInput`<sup>Optional</sup> <a name="ebsBlockDeviceInput" id="@cdktf/provider-aws.ami.Ami.property.ebsBlockDeviceInput"></a>

```java
public java.lang.Object getEbsBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>>

---

##### `enaSupportInput`<sup>Optional</sup> <a name="enaSupportInput" id="@cdktf/provider-aws.ami.Ami.property.enaSupportInput"></a>

```java
public java.lang.Object getEnaSupportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ephemeralBlockDeviceInput`<sup>Optional</sup> <a name="ephemeralBlockDeviceInput" id="@cdktf/provider-aws.ami.Ami.property.ephemeralBlockDeviceInput"></a>

```java
public java.lang.Object getEphemeralBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ami.Ami.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageLocationInput`<sup>Optional</sup> <a name="imageLocationInput" id="@cdktf/provider-aws.ami.Ami.property.imageLocationInput"></a>

```java
public java.lang.String getImageLocationInput();
```

- *Type:* java.lang.String

---

##### `imdsSupportInput`<sup>Optional</sup> <a name="imdsSupportInput" id="@cdktf/provider-aws.ami.Ami.property.imdsSupportInput"></a>

```java
public java.lang.String getImdsSupportInput();
```

- *Type:* java.lang.String

---

##### `kernelIdInput`<sup>Optional</sup> <a name="kernelIdInput" id="@cdktf/provider-aws.ami.Ami.property.kernelIdInput"></a>

```java
public java.lang.String getKernelIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ami.Ami.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ramdiskIdInput`<sup>Optional</sup> <a name="ramdiskIdInput" id="@cdktf/provider-aws.ami.Ami.property.ramdiskIdInput"></a>

```java
public java.lang.String getRamdiskIdInput();
```

- *Type:* java.lang.String

---

##### `rootDeviceNameInput`<sup>Optional</sup> <a name="rootDeviceNameInput" id="@cdktf/provider-aws.ami.Ami.property.rootDeviceNameInput"></a>

```java
public java.lang.String getRootDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `sriovNetSupportInput`<sup>Optional</sup> <a name="sriovNetSupportInput" id="@cdktf/provider-aws.ami.Ami.property.sriovNetSupportInput"></a>

```java
public java.lang.String getSriovNetSupportInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ami.Ami.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ami.Ami.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ami.Ami.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `tpmSupportInput`<sup>Optional</sup> <a name="tpmSupportInput" id="@cdktf/provider-aws.ami.Ami.property.tpmSupportInput"></a>

```java
public java.lang.String getTpmSupportInput();
```

- *Type:* java.lang.String

---

##### `virtualizationTypeInput`<sup>Optional</sup> <a name="virtualizationTypeInput" id="@cdktf/provider-aws.ami.Ami.property.virtualizationTypeInput"></a>

```java
public java.lang.String getVirtualizationTypeInput();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-aws.ami.Ami.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `bootMode`<sup>Required</sup> <a name="bootMode" id="@cdktf/provider-aws.ami.Ami.property.bootMode"></a>

```java
public java.lang.String getBootMode();
```

- *Type:* java.lang.String

---

##### `deprecationTime`<sup>Required</sup> <a name="deprecationTime" id="@cdktf/provider-aws.ami.Ami.property.deprecationTime"></a>

```java
public java.lang.String getDeprecationTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ami.Ami.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enaSupport`<sup>Required</sup> <a name="enaSupport" id="@cdktf/provider-aws.ami.Ami.property.enaSupport"></a>

```java
public java.lang.Object getEnaSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ami.Ami.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageLocation`<sup>Required</sup> <a name="imageLocation" id="@cdktf/provider-aws.ami.Ami.property.imageLocation"></a>

```java
public java.lang.String getImageLocation();
```

- *Type:* java.lang.String

---

##### `imdsSupport`<sup>Required</sup> <a name="imdsSupport" id="@cdktf/provider-aws.ami.Ami.property.imdsSupport"></a>

```java
public java.lang.String getImdsSupport();
```

- *Type:* java.lang.String

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktf/provider-aws.ami.Ami.property.kernelId"></a>

```java
public java.lang.String getKernelId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ami.Ami.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ramdiskId`<sup>Required</sup> <a name="ramdiskId" id="@cdktf/provider-aws.ami.Ami.property.ramdiskId"></a>

```java
public java.lang.String getRamdiskId();
```

- *Type:* java.lang.String

---

##### `rootDeviceName`<sup>Required</sup> <a name="rootDeviceName" id="@cdktf/provider-aws.ami.Ami.property.rootDeviceName"></a>

```java
public java.lang.String getRootDeviceName();
```

- *Type:* java.lang.String

---

##### `sriovNetSupport`<sup>Required</sup> <a name="sriovNetSupport" id="@cdktf/provider-aws.ami.Ami.property.sriovNetSupport"></a>

```java
public java.lang.String getSriovNetSupport();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ami.Ami.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ami.Ami.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tpmSupport`<sup>Required</sup> <a name="tpmSupport" id="@cdktf/provider-aws.ami.Ami.property.tpmSupport"></a>

```java
public java.lang.String getTpmSupport();
```

- *Type:* java.lang.String

---

##### `virtualizationType`<sup>Required</sup> <a name="virtualizationType" id="@cdktf/provider-aws.ami.Ami.property.virtualizationType"></a>

```java
public java.lang.String getVirtualizationType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.Ami.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ami.Ami.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AmiConfig <a name="AmiConfig" id="@cdktf/provider-aws.ami.AmiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ami.AmiConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.AmiConfig;

AmiConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .architecture(java.lang.String)
//  .bootMode(java.lang.String)
//  .deprecationTime(java.lang.String)
//  .description(java.lang.String)
//  .ebsBlockDevice(IResolvable)
//  .ebsBlockDevice(java.util.List<AmiEbsBlockDevice>)
//  .enaSupport(java.lang.Boolean)
//  .enaSupport(IResolvable)
//  .ephemeralBlockDevice(IResolvable)
//  .ephemeralBlockDevice(java.util.List<AmiEphemeralBlockDevice>)
//  .id(java.lang.String)
//  .imageLocation(java.lang.String)
//  .imdsSupport(java.lang.String)
//  .kernelId(java.lang.String)
//  .ramdiskId(java.lang.String)
//  .rootDeviceName(java.lang.String)
//  .sriovNetSupport(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AmiTimeouts)
//  .tpmSupport(java.lang.String)
//  .virtualizationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#name Ami#name}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.architecture">architecture</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#architecture Ami#architecture}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.bootMode">bootMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#boot_mode Ami#boot_mode}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.deprecationTime">deprecationTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#deprecation_time Ami#deprecation_time}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#description Ami#description}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>></code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.enaSupport">enaSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ena_support Ami#ena_support}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>></code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#id Ami#id}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.imageLocation">imageLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#image_location Ami#image_location}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.imdsSupport">imdsSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#imds_support Ami#imds_support}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.kernelId">kernelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#kernel_id Ami#kernel_id}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.ramdiskId">ramdiskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ramdisk_id Ami#ramdisk_id}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.rootDeviceName">rootDeviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#root_device_name Ami#root_device_name}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.sriovNetSupport">sriovNetSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#sriov_net_support Ami#sriov_net_support}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags Ami#tags}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags_all Ami#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.tpmSupport">tpmSupport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tpm_support Ami#tpm_support}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiConfig.property.virtualizationType">virtualizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtualization_type Ami#virtualization_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ami.AmiConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ami.AmiConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ami.AmiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ami.AmiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ami.AmiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ami.AmiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ami.AmiConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ami.AmiConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#name Ami#name}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-aws.ami.AmiConfig.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#architecture Ami#architecture}.

---

##### `bootMode`<sup>Optional</sup> <a name="bootMode" id="@cdktf/provider-aws.ami.AmiConfig.property.bootMode"></a>

```java
public java.lang.String getBootMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#boot_mode Ami#boot_mode}.

---

##### `deprecationTime`<sup>Optional</sup> <a name="deprecationTime" id="@cdktf/provider-aws.ami.AmiConfig.property.deprecationTime"></a>

```java
public java.lang.String getDeprecationTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#deprecation_time Ami#deprecation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ami.AmiConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#description Ami#description}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.ami.AmiConfig.property.ebsBlockDevice"></a>

```java
public java.lang.Object getEbsBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>>

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ebs_block_device Ami#ebs_block_device}

---

##### `enaSupport`<sup>Optional</sup> <a name="enaSupport" id="@cdktf/provider-aws.ami.AmiConfig.property.enaSupport"></a>

```java
public java.lang.Object getEnaSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ena_support Ami#ena_support}.

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.ami.AmiConfig.property.ephemeralBlockDevice"></a>

```java
public java.lang.Object getEphemeralBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>>

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ephemeral_block_device Ami#ephemeral_block_device}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ami.AmiConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#id Ami#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageLocation`<sup>Optional</sup> <a name="imageLocation" id="@cdktf/provider-aws.ami.AmiConfig.property.imageLocation"></a>

```java
public java.lang.String getImageLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#image_location Ami#image_location}.

---

##### `imdsSupport`<sup>Optional</sup> <a name="imdsSupport" id="@cdktf/provider-aws.ami.AmiConfig.property.imdsSupport"></a>

```java
public java.lang.String getImdsSupport();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#imds_support Ami#imds_support}.

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@cdktf/provider-aws.ami.AmiConfig.property.kernelId"></a>

```java
public java.lang.String getKernelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#kernel_id Ami#kernel_id}.

---

##### `ramdiskId`<sup>Optional</sup> <a name="ramdiskId" id="@cdktf/provider-aws.ami.AmiConfig.property.ramdiskId"></a>

```java
public java.lang.String getRamdiskId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#ramdisk_id Ami#ramdisk_id}.

---

##### `rootDeviceName`<sup>Optional</sup> <a name="rootDeviceName" id="@cdktf/provider-aws.ami.AmiConfig.property.rootDeviceName"></a>

```java
public java.lang.String getRootDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#root_device_name Ami#root_device_name}.

---

##### `sriovNetSupport`<sup>Optional</sup> <a name="sriovNetSupport" id="@cdktf/provider-aws.ami.AmiConfig.property.sriovNetSupport"></a>

```java
public java.lang.String getSriovNetSupport();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#sriov_net_support Ami#sriov_net_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ami.AmiConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags Ami#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ami.AmiConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tags_all Ami#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ami.AmiConfig.property.timeouts"></a>

```java
public AmiTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#timeouts Ami#timeouts}

---

##### `tpmSupport`<sup>Optional</sup> <a name="tpmSupport" id="@cdktf/provider-aws.ami.AmiConfig.property.tpmSupport"></a>

```java
public java.lang.String getTpmSupport();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#tpm_support Ami#tpm_support}.

---

##### `virtualizationType`<sup>Optional</sup> <a name="virtualizationType" id="@cdktf/provider-aws.ami.AmiConfig.property.virtualizationType"></a>

```java
public java.lang.String getVirtualizationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtualization_type Ami#virtualization_type}.

---

### AmiEbsBlockDevice <a name="AmiEbsBlockDevice" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.AmiEbsBlockDevice;

AmiEbsBlockDevice.builder()
    .deviceName(java.lang.String)
//  .deleteOnTermination(java.lang.Boolean)
//  .deleteOnTermination(IResolvable)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .iops(java.lang.Number)
//  .outpostArn(java.lang.String)
//  .snapshotId(java.lang.String)
//  .throughput(java.lang.Number)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#device_name Ami#device_name}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#delete_on_termination Ami#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#encrypted Ami#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#iops Ami#iops}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#outpost_arn Ami#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#snapshot_id Ami#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#throughput Ami#throughput}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#volume_size Ami#volume_size}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#volume_type Ami#volume_type}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#device_name Ami#device_name}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#delete_on_termination Ami#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#encrypted Ami#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#iops Ami#iops}.

---

##### `outpostArn`<sup>Optional</sup> <a name="outpostArn" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#outpost_arn Ami#outpost_arn}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#snapshot_id Ami#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#throughput Ami#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#volume_size Ami#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.ami.AmiEbsBlockDevice.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#volume_type Ami#volume_type}.

---

### AmiEphemeralBlockDevice <a name="AmiEphemeralBlockDevice" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.AmiEphemeralBlockDevice;

AmiEphemeralBlockDevice.builder()
    .deviceName(java.lang.String)
    .virtualName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#device_name Ami#device_name}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtual_name Ami#virtual_name}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDevice.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#device_name Ami#device_name}.

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDevice.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#virtual_name Ami#virtual_name}.

---

### AmiTimeouts <a name="AmiTimeouts" id="@cdktf/provider-aws.ami.AmiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ami.AmiTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.AmiTimeouts;

AmiTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#create Ami#create}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#delete Ami#delete}. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#update Ami#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ami.AmiTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#create Ami#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ami.AmiTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#delete Ami#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ami.AmiTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami#update Ami#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmiEbsBlockDeviceList <a name="AmiEbsBlockDeviceList" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.AmiEbsBlockDeviceList;

new AmiEbsBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.get"></a>

```java
public AmiEbsBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a>>

---


### AmiEbsBlockDeviceOutputReference <a name="AmiEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.AmiEbsBlockDeviceOutputReference;

new AmiEbsBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetOutpostArn">resetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetOutpostArn` <a name="resetOutpostArn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetOutpostArn"></a>

```java
public void resetOutpostArn()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.outpostArnInput">outpostArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `outpostArnInput`<sup>Optional</sup> <a name="outpostArnInput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.outpostArnInput"></a>

```java
public java.lang.String getOutpostArnInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ami.AmiEbsBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiEbsBlockDevice">AmiEbsBlockDevice</a> OR com.hashicorp.cdktf.IResolvable

---


### AmiEphemeralBlockDeviceList <a name="AmiEphemeralBlockDeviceList" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.AmiEphemeralBlockDeviceList;

new AmiEphemeralBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.get"></a>

```java
public AmiEphemeralBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a>>

---


### AmiEphemeralBlockDeviceOutputReference <a name="AmiEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.AmiEphemeralBlockDeviceOutputReference;

new AmiEphemeralBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```java
public java.lang.String getVirtualNameInput();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ami.AmiEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiEphemeralBlockDevice">AmiEphemeralBlockDevice</a> OR com.hashicorp.cdktf.IResolvable

---


### AmiTimeoutsOutputReference <a name="AmiTimeoutsOutputReference" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ami.AmiTimeoutsOutputReference;

new AmiTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ami.AmiTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ami.AmiTimeouts">AmiTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



