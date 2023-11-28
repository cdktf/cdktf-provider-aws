# `fsxOntapVolume` Submodule <a name="`fsxOntapVolume` Submodule" id="@cdktf/provider-aws.fsxOntapVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOntapVolume <a name="FsxOntapVolume" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume aws_fsx_ontap_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolume;

FsxOntapVolume.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .sizeInMegabytes(java.lang.Number)
    .storageVirtualMachineId(java.lang.String)
//  .bypassSnaplockEnterpriseRetention(java.lang.Boolean)
//  .bypassSnaplockEnterpriseRetention(IResolvable)
//  .copyTagsToBackups(java.lang.Boolean)
//  .copyTagsToBackups(IResolvable)
//  .id(java.lang.String)
//  .junctionPath(java.lang.String)
//  .ontapVolumeType(java.lang.String)
//  .securityStyle(java.lang.String)
//  .skipFinalBackup(java.lang.Boolean)
//  .skipFinalBackup(IResolvable)
//  .snaplockConfiguration(FsxOntapVolumeSnaplockConfiguration)
//  .snapshotPolicy(java.lang.String)
//  .storageEfficiencyEnabled(java.lang.Boolean)
//  .storageEfficiencyEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tieringPolicy(FsxOntapVolumeTieringPolicy)
//  .timeouts(FsxOntapVolumeTimeouts)
//  .volumeType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.sizeInMegabytes">sizeInMegabytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.bypassSnaplockEnterpriseRetention">bypassSnaplockEnterpriseRetention</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#bypass_snaplock_enterprise_retention FsxOntapVolume#bypass_snaplock_enterprise_retention}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.copyTagsToBackups">copyTagsToBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#copy_tags_to_backups FsxOntapVolume#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#id FsxOntapVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.junctionPath">junctionPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.ontapVolumeType">ontapVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#ontap_volume_type FsxOntapVolume#ontap_volume_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#security_style FsxOntapVolume#security_style}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.skipFinalBackup">skipFinalBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#skip_final_backup FsxOntapVolume#skip_final_backup}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.snaplockConfiguration">snaplockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a></code> | snaplock_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.snapshotPolicy">snapshotPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#snapshot_policy FsxOntapVolume#snapshot_policy}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.storageEfficiencyEnabled">storageEfficiencyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#tags FsxOntapVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}.

---

##### `sizeInMegabytes`<sup>Required</sup> <a name="sizeInMegabytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.sizeInMegabytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}.

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.storageVirtualMachineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}.

---

##### `bypassSnaplockEnterpriseRetention`<sup>Optional</sup> <a name="bypassSnaplockEnterpriseRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.bypassSnaplockEnterpriseRetention"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#bypass_snaplock_enterprise_retention FsxOntapVolume#bypass_snaplock_enterprise_retention}.

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.copyTagsToBackups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#copy_tags_to_backups FsxOntapVolume#copy_tags_to_backups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#id FsxOntapVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `junctionPath`<sup>Optional</sup> <a name="junctionPath" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.junctionPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}.

---

##### `ontapVolumeType`<sup>Optional</sup> <a name="ontapVolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.ontapVolumeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#ontap_volume_type FsxOntapVolume#ontap_volume_type}.

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.securityStyle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#security_style FsxOntapVolume#security_style}.

---

##### `skipFinalBackup`<sup>Optional</sup> <a name="skipFinalBackup" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.skipFinalBackup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#skip_final_backup FsxOntapVolume#skip_final_backup}.

---

##### `snaplockConfiguration`<sup>Optional</sup> <a name="snaplockConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.snaplockConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a>

snaplock_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#snaplock_configuration FsxOntapVolume#snaplock_configuration}

---

##### `snapshotPolicy`<sup>Optional</sup> <a name="snapshotPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.snapshotPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#snapshot_policy FsxOntapVolume#snapshot_policy}.

---

##### `storageEfficiencyEnabled`<sup>Optional</sup> <a name="storageEfficiencyEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.storageEfficiencyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#tags FsxOntapVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}.

---

##### `tieringPolicy`<sup>Optional</sup> <a name="tieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.tieringPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#tiering_policy FsxOntapVolume#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#timeouts FsxOntapVolume#timeouts}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.volumeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putSnaplockConfiguration">putSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy">putTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetBypassSnaplockEnterpriseRetention">resetBypassSnaplockEnterpriseRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetCopyTagsToBackups">resetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetJunctionPath">resetJunctionPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOntapVolumeType">resetOntapVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSecurityStyle">resetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSkipFinalBackup">resetSkipFinalBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSnaplockConfiguration">resetSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSnapshotPolicy">resetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetStorageEfficiencyEnabled">resetStorageEfficiencyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTieringPolicy">resetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putSnaplockConfiguration` <a name="putSnaplockConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putSnaplockConfiguration"></a>

```java
public void putSnaplockConfiguration(FsxOntapVolumeSnaplockConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putSnaplockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a>

---

##### `putTieringPolicy` <a name="putTieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy"></a>

```java
public void putTieringPolicy(FsxOntapVolumeTieringPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts"></a>

```java
public void putTimeouts(FsxOntapVolumeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

---

##### `resetBypassSnaplockEnterpriseRetention` <a name="resetBypassSnaplockEnterpriseRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetBypassSnaplockEnterpriseRetention"></a>

```java
public void resetBypassSnaplockEnterpriseRetention()
```

##### `resetCopyTagsToBackups` <a name="resetCopyTagsToBackups" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetCopyTagsToBackups"></a>

```java
public void resetCopyTagsToBackups()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetId"></a>

```java
public void resetId()
```

##### `resetJunctionPath` <a name="resetJunctionPath" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetJunctionPath"></a>

```java
public void resetJunctionPath()
```

##### `resetOntapVolumeType` <a name="resetOntapVolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOntapVolumeType"></a>

```java
public void resetOntapVolumeType()
```

##### `resetSecurityStyle` <a name="resetSecurityStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSecurityStyle"></a>

```java
public void resetSecurityStyle()
```

##### `resetSkipFinalBackup` <a name="resetSkipFinalBackup" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSkipFinalBackup"></a>

```java
public void resetSkipFinalBackup()
```

##### `resetSnaplockConfiguration` <a name="resetSnaplockConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSnaplockConfiguration"></a>

```java
public void resetSnaplockConfiguration()
```

##### `resetSnapshotPolicy` <a name="resetSnapshotPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSnapshotPolicy"></a>

```java
public void resetSnapshotPolicy()
```

##### `resetStorageEfficiencyEnabled` <a name="resetStorageEfficiencyEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetStorageEfficiencyEnabled"></a>

```java
public void resetStorageEfficiencyEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTieringPolicy` <a name="resetTieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTieringPolicy"></a>

```java
public void resetTieringPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetVolumeType"></a>

```java
public void resetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FsxOntapVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolume;

FsxOntapVolume.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolume;

FsxOntapVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolume;

FsxOntapVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolume;

FsxOntapVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FsxOntapVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FsxOntapVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FsxOntapVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FsxOntapVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FsxOntapVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.flexcacheEndpointType">flexcacheEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snaplockConfiguration">snaplockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference">FsxOntapVolumeSnaplockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference">FsxOntapVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference">FsxOntapVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.bypassSnaplockEnterpriseRetentionInput">bypassSnaplockEnterpriseRetentionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.copyTagsToBackupsInput">copyTagsToBackupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPathInput">junctionPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeTypeInput">ontapVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyleInput">securityStyleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytesInput">sizeInMegabytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.skipFinalBackupInput">skipFinalBackupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snaplockConfigurationInput">snaplockConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snapshotPolicyInput">snapshotPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabledInput">storageEfficiencyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineIdInput">storageVirtualMachineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicyInput">tieringPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.bypassSnaplockEnterpriseRetention">bypassSnaplockEnterpriseRetention</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPath">junctionPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeType">ontapVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytes">sizeInMegabytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.skipFinalBackup">skipFinalBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snapshotPolicy">snapshotPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabled">storageEfficiencyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `flexcacheEndpointType`<sup>Required</sup> <a name="flexcacheEndpointType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.flexcacheEndpointType"></a>

```java
public java.lang.String getFlexcacheEndpointType();
```

- *Type:* java.lang.String

---

##### `snaplockConfiguration`<sup>Required</sup> <a name="snaplockConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snaplockConfiguration"></a>

```java
public FsxOntapVolumeSnaplockConfigurationOutputReference getSnaplockConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference">FsxOntapVolumeSnaplockConfigurationOutputReference</a>

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicy"></a>

```java
public FsxOntapVolumeTieringPolicyOutputReference getTieringPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference">FsxOntapVolumeTieringPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeouts"></a>

```java
public FsxOntapVolumeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference">FsxOntapVolumeTimeoutsOutputReference</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `bypassSnaplockEnterpriseRetentionInput`<sup>Optional</sup> <a name="bypassSnaplockEnterpriseRetentionInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.bypassSnaplockEnterpriseRetentionInput"></a>

```java
public java.lang.Object getBypassSnaplockEnterpriseRetentionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `copyTagsToBackupsInput`<sup>Optional</sup> <a name="copyTagsToBackupsInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.copyTagsToBackupsInput"></a>

```java
public java.lang.Object getCopyTagsToBackupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `junctionPathInput`<sup>Optional</sup> <a name="junctionPathInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPathInput"></a>

```java
public java.lang.String getJunctionPathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ontapVolumeTypeInput`<sup>Optional</sup> <a name="ontapVolumeTypeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeTypeInput"></a>

```java
public java.lang.String getOntapVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `securityStyleInput`<sup>Optional</sup> <a name="securityStyleInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyleInput"></a>

```java
public java.lang.String getSecurityStyleInput();
```

- *Type:* java.lang.String

---

##### `sizeInMegabytesInput`<sup>Optional</sup> <a name="sizeInMegabytesInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytesInput"></a>

```java
public java.lang.Number getSizeInMegabytesInput();
```

- *Type:* java.lang.Number

---

##### `skipFinalBackupInput`<sup>Optional</sup> <a name="skipFinalBackupInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.skipFinalBackupInput"></a>

```java
public java.lang.Object getSkipFinalBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snaplockConfigurationInput`<sup>Optional</sup> <a name="snaplockConfigurationInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snaplockConfigurationInput"></a>

```java
public FsxOntapVolumeSnaplockConfiguration getSnaplockConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a>

---

##### `snapshotPolicyInput`<sup>Optional</sup> <a name="snapshotPolicyInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snapshotPolicyInput"></a>

```java
public java.lang.String getSnapshotPolicyInput();
```

- *Type:* java.lang.String

---

##### `storageEfficiencyEnabledInput`<sup>Optional</sup> <a name="storageEfficiencyEnabledInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabledInput"></a>

```java
public java.lang.Object getStorageEfficiencyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageVirtualMachineIdInput`<sup>Optional</sup> <a name="storageVirtualMachineIdInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineIdInput"></a>

```java
public java.lang.String getStorageVirtualMachineIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tieringPolicyInput`<sup>Optional</sup> <a name="tieringPolicyInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicyInput"></a>

```java
public FsxOntapVolumeTieringPolicy getTieringPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `bypassSnaplockEnterpriseRetention`<sup>Required</sup> <a name="bypassSnaplockEnterpriseRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.bypassSnaplockEnterpriseRetention"></a>

```java
public java.lang.Object getBypassSnaplockEnterpriseRetention();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.copyTagsToBackups"></a>

```java
public java.lang.Object getCopyTagsToBackups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `junctionPath`<sup>Required</sup> <a name="junctionPath" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPath"></a>

```java
public java.lang.String getJunctionPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ontapVolumeType`<sup>Required</sup> <a name="ontapVolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeType"></a>

```java
public java.lang.String getOntapVolumeType();
```

- *Type:* java.lang.String

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyle"></a>

```java
public java.lang.String getSecurityStyle();
```

- *Type:* java.lang.String

---

##### `sizeInMegabytes`<sup>Required</sup> <a name="sizeInMegabytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytes"></a>

```java
public java.lang.Number getSizeInMegabytes();
```

- *Type:* java.lang.Number

---

##### `skipFinalBackup`<sup>Required</sup> <a name="skipFinalBackup" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.skipFinalBackup"></a>

```java
public java.lang.Object getSkipFinalBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotPolicy`<sup>Required</sup> <a name="snapshotPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snapshotPolicy"></a>

```java
public java.lang.String getSnapshotPolicy();
```

- *Type:* java.lang.String

---

##### `storageEfficiencyEnabled`<sup>Required</sup> <a name="storageEfficiencyEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabled"></a>

```java
public java.lang.Object getStorageEfficiencyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineId"></a>

```java
public java.lang.String getStorageVirtualMachineId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOntapVolumeConfig <a name="FsxOntapVolumeConfig" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeConfig;

FsxOntapVolumeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .sizeInMegabytes(java.lang.Number)
    .storageVirtualMachineId(java.lang.String)
//  .bypassSnaplockEnterpriseRetention(java.lang.Boolean)
//  .bypassSnaplockEnterpriseRetention(IResolvable)
//  .copyTagsToBackups(java.lang.Boolean)
//  .copyTagsToBackups(IResolvable)
//  .id(java.lang.String)
//  .junctionPath(java.lang.String)
//  .ontapVolumeType(java.lang.String)
//  .securityStyle(java.lang.String)
//  .skipFinalBackup(java.lang.Boolean)
//  .skipFinalBackup(IResolvable)
//  .snaplockConfiguration(FsxOntapVolumeSnaplockConfiguration)
//  .snapshotPolicy(java.lang.String)
//  .storageEfficiencyEnabled(java.lang.Boolean)
//  .storageEfficiencyEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tieringPolicy(FsxOntapVolumeTieringPolicy)
//  .timeouts(FsxOntapVolumeTimeouts)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInMegabytes">sizeInMegabytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.bypassSnaplockEnterpriseRetention">bypassSnaplockEnterpriseRetention</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#bypass_snaplock_enterprise_retention FsxOntapVolume#bypass_snaplock_enterprise_retention}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#copy_tags_to_backups FsxOntapVolume#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#id FsxOntapVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.junctionPath">junctionPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.ontapVolumeType">ontapVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#ontap_volume_type FsxOntapVolume#ontap_volume_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#security_style FsxOntapVolume#security_style}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.skipFinalBackup">skipFinalBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#skip_final_backup FsxOntapVolume#skip_final_backup}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.snaplockConfiguration">snaplockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a></code> | snaplock_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.snapshotPolicy">snapshotPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#snapshot_policy FsxOntapVolume#snapshot_policy}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageEfficiencyEnabled">storageEfficiencyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#tags FsxOntapVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}.

---

##### `sizeInMegabytes`<sup>Required</sup> <a name="sizeInMegabytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInMegabytes"></a>

```java
public java.lang.Number getSizeInMegabytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}.

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageVirtualMachineId"></a>

```java
public java.lang.String getStorageVirtualMachineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}.

---

##### `bypassSnaplockEnterpriseRetention`<sup>Optional</sup> <a name="bypassSnaplockEnterpriseRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.bypassSnaplockEnterpriseRetention"></a>

```java
public java.lang.Object getBypassSnaplockEnterpriseRetention();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#bypass_snaplock_enterprise_retention FsxOntapVolume#bypass_snaplock_enterprise_retention}.

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.copyTagsToBackups"></a>

```java
public java.lang.Object getCopyTagsToBackups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#copy_tags_to_backups FsxOntapVolume#copy_tags_to_backups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#id FsxOntapVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `junctionPath`<sup>Optional</sup> <a name="junctionPath" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.junctionPath"></a>

```java
public java.lang.String getJunctionPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}.

---

##### `ontapVolumeType`<sup>Optional</sup> <a name="ontapVolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.ontapVolumeType"></a>

```java
public java.lang.String getOntapVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#ontap_volume_type FsxOntapVolume#ontap_volume_type}.

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.securityStyle"></a>

```java
public java.lang.String getSecurityStyle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#security_style FsxOntapVolume#security_style}.

---

##### `skipFinalBackup`<sup>Optional</sup> <a name="skipFinalBackup" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.skipFinalBackup"></a>

```java
public java.lang.Object getSkipFinalBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#skip_final_backup FsxOntapVolume#skip_final_backup}.

---

##### `snaplockConfiguration`<sup>Optional</sup> <a name="snaplockConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.snaplockConfiguration"></a>

```java
public FsxOntapVolumeSnaplockConfiguration getSnaplockConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a>

snaplock_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#snaplock_configuration FsxOntapVolume#snaplock_configuration}

---

##### `snapshotPolicy`<sup>Optional</sup> <a name="snapshotPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.snapshotPolicy"></a>

```java
public java.lang.String getSnapshotPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#snapshot_policy FsxOntapVolume#snapshot_policy}.

---

##### `storageEfficiencyEnabled`<sup>Optional</sup> <a name="storageEfficiencyEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageEfficiencyEnabled"></a>

```java
public java.lang.Object getStorageEfficiencyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#tags FsxOntapVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}.

---

##### `tieringPolicy`<sup>Optional</sup> <a name="tieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tieringPolicy"></a>

```java
public FsxOntapVolumeTieringPolicy getTieringPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#tiering_policy FsxOntapVolume#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.timeouts"></a>

```java
public FsxOntapVolumeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#timeouts FsxOntapVolume#timeouts}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}.

---

### FsxOntapVolumeSnaplockConfiguration <a name="FsxOntapVolumeSnaplockConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfiguration;

FsxOntapVolumeSnaplockConfiguration.builder()
    .snaplockType(java.lang.String)
//  .auditLogVolume(java.lang.Boolean)
//  .auditLogVolume(IResolvable)
//  .autocommitPeriod(FsxOntapVolumeSnaplockConfigurationAutocommitPeriod)
//  .privilegedDelete(java.lang.String)
//  .retentionPeriod(FsxOntapVolumeSnaplockConfigurationRetentionPeriod)
//  .volumeAppendModeEnabled(java.lang.Boolean)
//  .volumeAppendModeEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.snaplockType">snaplockType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#snaplock_type FsxOntapVolume#snaplock_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.auditLogVolume">auditLogVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#audit_log_volume FsxOntapVolume#audit_log_volume}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.autocommitPeriod">autocommitPeriod</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a></code> | autocommit_period block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.privilegedDelete">privilegedDelete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#privileged_delete FsxOntapVolume#privileged_delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a></code> | retention_period block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.volumeAppendModeEnabled">volumeAppendModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#volume_append_mode_enabled FsxOntapVolume#volume_append_mode_enabled}. |

---

##### `snaplockType`<sup>Required</sup> <a name="snaplockType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.snaplockType"></a>

```java
public java.lang.String getSnaplockType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#snaplock_type FsxOntapVolume#snaplock_type}.

---

##### `auditLogVolume`<sup>Optional</sup> <a name="auditLogVolume" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.auditLogVolume"></a>

```java
public java.lang.Object getAuditLogVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#audit_log_volume FsxOntapVolume#audit_log_volume}.

---

##### `autocommitPeriod`<sup>Optional</sup> <a name="autocommitPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.autocommitPeriod"></a>

```java
public FsxOntapVolumeSnaplockConfigurationAutocommitPeriod getAutocommitPeriod();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a>

autocommit_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#autocommit_period FsxOntapVolume#autocommit_period}

---

##### `privilegedDelete`<sup>Optional</sup> <a name="privilegedDelete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.privilegedDelete"></a>

```java
public java.lang.String getPrivilegedDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#privileged_delete FsxOntapVolume#privileged_delete}.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.retentionPeriod"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriod getRetentionPeriod();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a>

retention_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#retention_period FsxOntapVolume#retention_period}

---

##### `volumeAppendModeEnabled`<sup>Optional</sup> <a name="volumeAppendModeEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.volumeAppendModeEnabled"></a>

```java
public java.lang.Object getVolumeAppendModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#volume_append_mode_enabled FsxOntapVolume#volume_append_mode_enabled}.

---

### FsxOntapVolumeSnaplockConfigurationAutocommitPeriod <a name="FsxOntapVolumeSnaplockConfigurationAutocommitPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod;

FsxOntapVolumeSnaplockConfigurationAutocommitPeriod.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}.

---

### FsxOntapVolumeSnaplockConfigurationRetentionPeriod <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod;

FsxOntapVolumeSnaplockConfigurationRetentionPeriod.builder()
//  .defaultRetention(FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention)
//  .maximumRetention(FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention)
//  .minimumRetention(FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.defaultRetention">defaultRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | default_retention block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.maximumRetention">maximumRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | maximum_retention block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.minimumRetention">minimumRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | minimum_retention block. |

---

##### `defaultRetention`<sup>Optional</sup> <a name="defaultRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.defaultRetention"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention getDefaultRetention();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a>

default_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#default_retention FsxOntapVolume#default_retention}

---

##### `maximumRetention`<sup>Optional</sup> <a name="maximumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.maximumRetention"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention getMaximumRetention();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a>

maximum_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#maximum_retention FsxOntapVolume#maximum_retention}

---

##### `minimumRetention`<sup>Optional</sup> <a name="minimumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.minimumRetention"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention getMinimumRetention();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a>

minimum_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#minimum_retention FsxOntapVolume#minimum_retention}

---

### FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention;

FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}.

---

### FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention;

FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}.

---

### FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention;

FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}.

---

### FsxOntapVolumeTieringPolicy <a name="FsxOntapVolumeTieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeTieringPolicy;

FsxOntapVolumeTieringPolicy.builder()
//  .coolingPeriod(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.coolingPeriod">coolingPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}. |

---

##### `coolingPeriod`<sup>Optional</sup> <a name="coolingPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.coolingPeriod"></a>

```java
public java.lang.Number getCoolingPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}.

---

### FsxOntapVolumeTimeouts <a name="FsxOntapVolumeTimeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeTimeouts;

FsxOntapVolumeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#create FsxOntapVolume#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#delete FsxOntapVolume#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#update FsxOntapVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#create FsxOntapVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#delete FsxOntapVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/fsx_ontap_volume#update FsxOntapVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference <a name="FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference;

new FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue"></a>

```java
public FsxOntapVolumeSnaplockConfigurationAutocommitPeriod getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a>

---


### FsxOntapVolumeSnaplockConfigurationOutputReference <a name="FsxOntapVolumeSnaplockConfigurationOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfigurationOutputReference;

new FsxOntapVolumeSnaplockConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putAutocommitPeriod">putAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putRetentionPeriod">putRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetAuditLogVolume">resetAuditLogVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetAutocommitPeriod">resetAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetPrivilegedDelete">resetPrivilegedDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled">resetVolumeAppendModeEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutocommitPeriod` <a name="putAutocommitPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putAutocommitPeriod"></a>

```java
public void putAutocommitPeriod(FsxOntapVolumeSnaplockConfigurationAutocommitPeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putAutocommitPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a>

---

##### `putRetentionPeriod` <a name="putRetentionPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putRetentionPeriod"></a>

```java
public void putRetentionPeriod(FsxOntapVolumeSnaplockConfigurationRetentionPeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putRetentionPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a>

---

##### `resetAuditLogVolume` <a name="resetAuditLogVolume" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetAuditLogVolume"></a>

```java
public void resetAuditLogVolume()
```

##### `resetAutocommitPeriod` <a name="resetAutocommitPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetAutocommitPeriod"></a>

```java
public void resetAutocommitPeriod()
```

##### `resetPrivilegedDelete` <a name="resetPrivilegedDelete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetPrivilegedDelete"></a>

```java
public void resetPrivilegedDelete()
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetRetentionPeriod"></a>

```java
public void resetRetentionPeriod()
```

##### `resetVolumeAppendModeEnabled` <a name="resetVolumeAppendModeEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled"></a>

```java
public void resetVolumeAppendModeEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.autocommitPeriod">autocommitPeriod</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference">FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.auditLogVolumeInput">auditLogVolumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.autocommitPeriodInput">autocommitPeriodInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.privilegedDeleteInput">privilegedDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.snaplockTypeInput">snaplockTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput">volumeAppendModeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.auditLogVolume">auditLogVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.privilegedDelete">privilegedDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.snaplockType">snaplockType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled">volumeAppendModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autocommitPeriod`<sup>Required</sup> <a name="autocommitPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.autocommitPeriod"></a>

```java
public FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference getAutocommitPeriod();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference">FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference</a>

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.retentionPeriod"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference getRetentionPeriod();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference</a>

---

##### `auditLogVolumeInput`<sup>Optional</sup> <a name="auditLogVolumeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.auditLogVolumeInput"></a>

```java
public java.lang.Object getAuditLogVolumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autocommitPeriodInput`<sup>Optional</sup> <a name="autocommitPeriodInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.autocommitPeriodInput"></a>

```java
public FsxOntapVolumeSnaplockConfigurationAutocommitPeriod getAutocommitPeriodInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a>

---

##### `privilegedDeleteInput`<sup>Optional</sup> <a name="privilegedDeleteInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.privilegedDeleteInput"></a>

```java
public java.lang.String getPrivilegedDeleteInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.retentionPeriodInput"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriod getRetentionPeriodInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a>

---

##### `snaplockTypeInput`<sup>Optional</sup> <a name="snaplockTypeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.snaplockTypeInput"></a>

```java
public java.lang.String getSnaplockTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeAppendModeEnabledInput`<sup>Optional</sup> <a name="volumeAppendModeEnabledInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput"></a>

```java
public java.lang.Object getVolumeAppendModeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `auditLogVolume`<sup>Required</sup> <a name="auditLogVolume" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.auditLogVolume"></a>

```java
public java.lang.Object getAuditLogVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privilegedDelete`<sup>Required</sup> <a name="privilegedDelete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.privilegedDelete"></a>

```java
public java.lang.String getPrivilegedDelete();
```

- *Type:* java.lang.String

---

##### `snaplockType`<sup>Required</sup> <a name="snaplockType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.snaplockType"></a>

```java
public java.lang.String getSnaplockType();
```

- *Type:* java.lang.String

---

##### `volumeAppendModeEnabled`<sup>Required</sup> <a name="volumeAppendModeEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled"></a>

```java
public java.lang.Object getVolumeAppendModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.internalValue"></a>

```java
public FsxOntapVolumeSnaplockConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a>

---


### FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference;

new FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---


### FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference;

new FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---


### FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference;

new FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---


### FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference;

new FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention">putDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention">putMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention">putMinimumRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention">resetDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention">resetMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention">resetMinimumRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultRetention` <a name="putDefaultRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention"></a>

```java
public void putDefaultRetention(FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---

##### `putMaximumRetention` <a name="putMaximumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention"></a>

```java
public void putMaximumRetention(FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---

##### `putMinimumRetention` <a name="putMinimumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention"></a>

```java
public void putMinimumRetention(FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---

##### `resetDefaultRetention` <a name="resetDefaultRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention"></a>

```java
public void resetDefaultRetention()
```

##### `resetMaximumRetention` <a name="resetMaximumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention"></a>

```java
public void resetMaximumRetention()
```

##### `resetMinimumRetention` <a name="resetMinimumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention"></a>

```java
public void resetMinimumRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention">defaultRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention">maximumRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention">minimumRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput">defaultRetentionInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput">maximumRetentionInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput">minimumRetentionInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultRetention`<sup>Required</sup> <a name="defaultRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference getDefaultRetention();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a>

---

##### `maximumRetention`<sup>Required</sup> <a name="maximumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference getMaximumRetention();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a>

---

##### `minimumRetention`<sup>Required</sup> <a name="minimumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference getMinimumRetention();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a>

---

##### `defaultRetentionInput`<sup>Optional</sup> <a name="defaultRetentionInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention getDefaultRetentionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---

##### `maximumRetentionInput`<sup>Optional</sup> <a name="maximumRetentionInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention getMaximumRetentionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---

##### `minimumRetentionInput`<sup>Optional</sup> <a name="minimumRetentionInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention getMinimumRetentionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue"></a>

```java
public FsxOntapVolumeSnaplockConfigurationRetentionPeriod getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a>

---


### FsxOntapVolumeTieringPolicyOutputReference <a name="FsxOntapVolumeTieringPolicyOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeTieringPolicyOutputReference;

new FsxOntapVolumeTieringPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetCoolingPeriod">resetCoolingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoolingPeriod` <a name="resetCoolingPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetCoolingPeriod"></a>

```java
public void resetCoolingPeriod()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriodInput">coolingPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriod">coolingPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coolingPeriodInput`<sup>Optional</sup> <a name="coolingPeriodInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriodInput"></a>

```java
public java.lang.Number getCoolingPeriodInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `coolingPeriod`<sup>Required</sup> <a name="coolingPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriod"></a>

```java
public java.lang.Number getCoolingPeriod();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.internalValue"></a>

```java
public FsxOntapVolumeTieringPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---


### FsxOntapVolumeTimeoutsOutputReference <a name="FsxOntapVolumeTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_ontap_volume.FsxOntapVolumeTimeoutsOutputReference;

new FsxOntapVolumeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

---



