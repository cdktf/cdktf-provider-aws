# `ssmPatchBaseline` Submodule <a name="`ssmPatchBaseline` Submodule" id="@cdktf/provider-aws.ssmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmPatchBaseline <a name="SsmPatchBaseline" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline aws_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaseline;

SsmPatchBaseline.Builder.create(Construct scope, java.lang.String id)
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
//  .approvalRule(IResolvable)
//  .approvalRule(java.util.List<SsmPatchBaselineApprovalRule>)
//  .approvedPatches(java.util.List<java.lang.String>)
//  .approvedPatchesComplianceLevel(java.lang.String)
//  .approvedPatchesEnableNonSecurity(java.lang.Boolean)
//  .approvedPatchesEnableNonSecurity(IResolvable)
//  .description(java.lang.String)
//  .globalFilter(IResolvable)
//  .globalFilter(java.util.List<SsmPatchBaselineGlobalFilter>)
//  .id(java.lang.String)
//  .operatingSystem(java.lang.String)
//  .rejectedPatches(java.util.List<java.lang.String>)
//  .rejectedPatchesAction(java.lang.String)
//  .source(IResolvable)
//  .source(java.util.List<SsmPatchBaselineSource>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvalRule">approvalRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>></code> | approval_rule block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatches">approvedPatches</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.globalFilter">globalFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>></code> | global_filter block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatches">rejectedPatches</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.source">source</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>></code> | source block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `approvalRule`<sup>Optional</sup> <a name="approvalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvalRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>>

approval_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approval_rule SsmPatchBaseline#approval_rule}

---

##### `approvedPatches`<sup>Optional</sup> <a name="approvedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatches"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}.

---

##### `approvedPatchesComplianceLevel`<sup>Optional</sup> <a name="approvedPatchesComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesComplianceLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}.

---

##### `approvedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesEnableNonSecurity"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}.

---

##### `globalFilter`<sup>Optional</sup> <a name="globalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.globalFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>>

global_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#global_filter SsmPatchBaseline#global_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.operatingSystem"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}.

---

##### `rejectedPatches`<sup>Optional</sup> <a name="rejectedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatches"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}.

---

##### `rejectedPatchesAction`<sup>Optional</sup> <a name="rejectedPatchesAction" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatchesAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.source"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#source SsmPatchBaseline#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule">putApprovalRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter">putGlobalFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRule">resetApprovalRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches">resetApprovedPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel">resetApprovedPatchesComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity">resetApprovedPatchesEnableNonSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilter">resetGlobalFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches">resetRejectedPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction">resetRejectedPatchesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putApprovalRule` <a name="putApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule"></a>

```java
public void putApprovalRule(IResolvable OR java.util.List<SsmPatchBaselineApprovalRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>>

---

##### `putGlobalFilter` <a name="putGlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter"></a>

```java
public void putGlobalFilter(IResolvable OR java.util.List<SsmPatchBaselineGlobalFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource"></a>

```java
public void putSource(IResolvable OR java.util.List<SsmPatchBaselineSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>>

---

##### `resetApprovalRule` <a name="resetApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRule"></a>

```java
public void resetApprovalRule()
```

##### `resetApprovedPatches` <a name="resetApprovedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches"></a>

```java
public void resetApprovedPatches()
```

##### `resetApprovedPatchesComplianceLevel` <a name="resetApprovedPatchesComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel"></a>

```java
public void resetApprovedPatchesComplianceLevel()
```

##### `resetApprovedPatchesEnableNonSecurity` <a name="resetApprovedPatchesEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity"></a>

```java
public void resetApprovedPatchesEnableNonSecurity()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGlobalFilter` <a name="resetGlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilter"></a>

```java
public void resetGlobalFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetId"></a>

```java
public void resetId()
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem"></a>

```java
public void resetOperatingSystem()
```

##### `resetRejectedPatches` <a name="resetRejectedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches"></a>

```java
public void resetRejectedPatches()
```

##### `resetRejectedPatchesAction` <a name="resetRejectedPatchesAction" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction"></a>

```java
public void resetRejectedPatchesAction()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetSource"></a>

```java
public void resetSource()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaseline;

SsmPatchBaseline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaseline;

SsmPatchBaseline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaseline;

SsmPatchBaseline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRule">approvalRule</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList">SsmPatchBaselineApprovalRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilter">globalFilter</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList">SsmPatchBaselineGlobalFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList">SsmPatchBaselineSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRuleInput">approvalRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput">approvedPatchesComplianceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput">approvedPatchesEnableNonSecurityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput">approvedPatchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilterInput">globalFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput">operatingSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput">rejectedPatchesActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput">rejectedPatchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.sourceInput">sourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches">approvedPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches">rejectedPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalRule`<sup>Required</sup> <a name="approvalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRule"></a>

```java
public SsmPatchBaselineApprovalRuleList getApprovalRule();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList">SsmPatchBaselineApprovalRuleList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `globalFilter`<sup>Required</sup> <a name="globalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilter"></a>

```java
public SsmPatchBaselineGlobalFilterList getGlobalFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList">SsmPatchBaselineGlobalFilterList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.source"></a>

```java
public SsmPatchBaselineSourceList getSource();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList">SsmPatchBaselineSourceList</a>

---

##### `approvalRuleInput`<sup>Optional</sup> <a name="approvalRuleInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRuleInput"></a>

```java
public java.lang.Object getApprovalRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>>

---

##### `approvedPatchesComplianceLevelInput`<sup>Optional</sup> <a name="approvedPatchesComplianceLevelInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput"></a>

```java
public java.lang.String getApprovedPatchesComplianceLevelInput();
```

- *Type:* java.lang.String

---

##### `approvedPatchesEnableNonSecurityInput`<sup>Optional</sup> <a name="approvedPatchesEnableNonSecurityInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput"></a>

```java
public java.lang.Object getApprovedPatchesEnableNonSecurityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `approvedPatchesInput`<sup>Optional</sup> <a name="approvedPatchesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput"></a>

```java
public java.util.List<java.lang.String> getApprovedPatchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `globalFilterInput`<sup>Optional</sup> <a name="globalFilterInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilterInput"></a>

```java
public java.lang.Object getGlobalFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput"></a>

```java
public java.lang.String getOperatingSystemInput();
```

- *Type:* java.lang.String

---

##### `rejectedPatchesActionInput`<sup>Optional</sup> <a name="rejectedPatchesActionInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput"></a>

```java
public java.lang.String getRejectedPatchesActionInput();
```

- *Type:* java.lang.String

---

##### `rejectedPatchesInput`<sup>Optional</sup> <a name="rejectedPatchesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput"></a>

```java
public java.util.List<java.lang.String> getRejectedPatchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.sourceInput"></a>

```java
public java.lang.Object getSourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `approvedPatches`<sup>Required</sup> <a name="approvedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches"></a>

```java
public java.util.List<java.lang.String> getApprovedPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approvedPatchesComplianceLevel`<sup>Required</sup> <a name="approvedPatchesComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```java
public java.lang.String getApprovedPatchesComplianceLevel();
```

- *Type:* java.lang.String

---

##### `approvedPatchesEnableNonSecurity`<sup>Required</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```java
public java.lang.Object getApprovedPatchesEnableNonSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `rejectedPatches`<sup>Required</sup> <a name="rejectedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches"></a>

```java
public java.util.List<java.lang.String> getRejectedPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rejectedPatchesAction`<sup>Required</sup> <a name="rejectedPatchesAction" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction"></a>

```java
public java.lang.String getRejectedPatchesAction();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmPatchBaselineApprovalRule <a name="SsmPatchBaselineApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineApprovalRule;

SsmPatchBaselineApprovalRule.builder()
    .patchFilter(IResolvable)
    .patchFilter(java.util.List<SsmPatchBaselineApprovalRulePatchFilter>)
//  .approveAfterDays(java.lang.Number)
//  .approveUntilDate(java.lang.String)
//  .complianceLevel(java.lang.String)
//  .enableNonSecurity(java.lang.Boolean)
//  .enableNonSecurity(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.patchFilter">patchFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>></code> | patch_filter block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveAfterDays">approveAfterDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveUntilDate">approveUntilDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.complianceLevel">complianceLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.enableNonSecurity">enableNonSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}. |

---

##### `patchFilter`<sup>Required</sup> <a name="patchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.patchFilter"></a>

```java
public java.lang.Object getPatchFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>>

patch_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#patch_filter SsmPatchBaseline#patch_filter}

---

##### `approveAfterDays`<sup>Optional</sup> <a name="approveAfterDays" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveAfterDays"></a>

```java
public java.lang.Number getApproveAfterDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}.

---

##### `approveUntilDate`<sup>Optional</sup> <a name="approveUntilDate" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveUntilDate"></a>

```java
public java.lang.String getApproveUntilDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}.

---

##### `complianceLevel`<sup>Optional</sup> <a name="complianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.complianceLevel"></a>

```java
public java.lang.String getComplianceLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}.

---

##### `enableNonSecurity`<sup>Optional</sup> <a name="enableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.enableNonSecurity"></a>

```java
public java.lang.Object getEnableNonSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}.

---

### SsmPatchBaselineApprovalRulePatchFilter <a name="SsmPatchBaselineApprovalRulePatchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineApprovalRulePatchFilter;

SsmPatchBaselineApprovalRulePatchFilter.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineConfig <a name="SsmPatchBaselineConfig" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineConfig;

SsmPatchBaselineConfig.builder()
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
//  .approvalRule(IResolvable)
//  .approvalRule(java.util.List<SsmPatchBaselineApprovalRule>)
//  .approvedPatches(java.util.List<java.lang.String>)
//  .approvedPatchesComplianceLevel(java.lang.String)
//  .approvedPatchesEnableNonSecurity(java.lang.Boolean)
//  .approvedPatchesEnableNonSecurity(IResolvable)
//  .description(java.lang.String)
//  .globalFilter(IResolvable)
//  .globalFilter(java.util.List<SsmPatchBaselineGlobalFilter>)
//  .id(java.lang.String)
//  .operatingSystem(java.lang.String)
//  .rejectedPatches(java.util.List<java.lang.String>)
//  .rejectedPatchesAction(java.lang.String)
//  .source(IResolvable)
//  .source(java.util.List<SsmPatchBaselineSource>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRule">approvalRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>></code> | approval_rule block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches">approvedPatches</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilter">globalFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>></code> | global_filter block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches">rejectedPatches</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.source">source</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>></code> | source block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `approvalRule`<sup>Optional</sup> <a name="approvalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRule"></a>

```java
public java.lang.Object getApprovalRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>>

approval_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approval_rule SsmPatchBaseline#approval_rule}

---

##### `approvedPatches`<sup>Optional</sup> <a name="approvedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches"></a>

```java
public java.util.List<java.lang.String> getApprovedPatches();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}.

---

##### `approvedPatchesComplianceLevel`<sup>Optional</sup> <a name="approvedPatchesComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel"></a>

```java
public java.lang.String getApprovedPatchesComplianceLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}.

---

##### `approvedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity"></a>

```java
public java.lang.Object getApprovedPatchesEnableNonSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}.

---

##### `globalFilter`<sup>Optional</sup> <a name="globalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilter"></a>

```java
public java.lang.Object getGlobalFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>>

global_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#global_filter SsmPatchBaseline#global_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}.

---

##### `rejectedPatches`<sup>Optional</sup> <a name="rejectedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches"></a>

```java
public java.util.List<java.lang.String> getRejectedPatches();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}.

---

##### `rejectedPatchesAction`<sup>Optional</sup> <a name="rejectedPatchesAction" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction"></a>

```java
public java.lang.String getRejectedPatchesAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.source"></a>

```java
public java.lang.Object getSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#source SsmPatchBaseline#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}.

---

### SsmPatchBaselineGlobalFilter <a name="SsmPatchBaselineGlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineGlobalFilter;

SsmPatchBaselineGlobalFilter.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineSource <a name="SsmPatchBaselineSource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineSource;

SsmPatchBaselineSource.builder()
    .configuration(java.lang.String)
    .name(java.lang.String)
    .products(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.configuration">configuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.products">products</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#products SsmPatchBaseline#products}. |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.products"></a>

```java
public java.util.List<java.lang.String> getProducts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#products SsmPatchBaseline#products}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmPatchBaselineApprovalRuleList <a name="SsmPatchBaselineApprovalRuleList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineApprovalRuleList;

new SsmPatchBaselineApprovalRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get"></a>

```java
public SsmPatchBaselineApprovalRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>>

---


### SsmPatchBaselineApprovalRuleOutputReference <a name="SsmPatchBaselineApprovalRuleOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineApprovalRuleOutputReference;

new SsmPatchBaselineApprovalRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter">putPatchFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveAfterDays">resetApproveAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveUntilDate">resetApproveUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetComplianceLevel">resetComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetEnableNonSecurity">resetEnableNonSecurity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPatchFilter` <a name="putPatchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter"></a>

```java
public void putPatchFilter(IResolvable OR java.util.List<SsmPatchBaselineApprovalRulePatchFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>>

---

##### `resetApproveAfterDays` <a name="resetApproveAfterDays" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveAfterDays"></a>

```java
public void resetApproveAfterDays()
```

##### `resetApproveUntilDate` <a name="resetApproveUntilDate" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveUntilDate"></a>

```java
public void resetApproveUntilDate()
```

##### `resetComplianceLevel` <a name="resetComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetComplianceLevel"></a>

```java
public void resetComplianceLevel()
```

##### `resetEnableNonSecurity` <a name="resetEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetEnableNonSecurity"></a>

```java
public void resetEnableNonSecurity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilter">patchFilter</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList">SsmPatchBaselineApprovalRulePatchFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDaysInput">approveAfterDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDateInput">approveUntilDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevelInput">complianceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurityInput">enableNonSecurityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilterInput">patchFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays">approveAfterDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate">approveUntilDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel">complianceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity">enableNonSecurity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patchFilter`<sup>Required</sup> <a name="patchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilter"></a>

```java
public SsmPatchBaselineApprovalRulePatchFilterList getPatchFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList">SsmPatchBaselineApprovalRulePatchFilterList</a>

---

##### `approveAfterDaysInput`<sup>Optional</sup> <a name="approveAfterDaysInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDaysInput"></a>

```java
public java.lang.Number getApproveAfterDaysInput();
```

- *Type:* java.lang.Number

---

##### `approveUntilDateInput`<sup>Optional</sup> <a name="approveUntilDateInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDateInput"></a>

```java
public java.lang.String getApproveUntilDateInput();
```

- *Type:* java.lang.String

---

##### `complianceLevelInput`<sup>Optional</sup> <a name="complianceLevelInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevelInput"></a>

```java
public java.lang.String getComplianceLevelInput();
```

- *Type:* java.lang.String

---

##### `enableNonSecurityInput`<sup>Optional</sup> <a name="enableNonSecurityInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurityInput"></a>

```java
public java.lang.Object getEnableNonSecurityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `patchFilterInput`<sup>Optional</sup> <a name="patchFilterInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilterInput"></a>

```java
public java.lang.Object getPatchFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>>

---

##### `approveAfterDays`<sup>Required</sup> <a name="approveAfterDays" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays"></a>

```java
public java.lang.Number getApproveAfterDays();
```

- *Type:* java.lang.Number

---

##### `approveUntilDate`<sup>Required</sup> <a name="approveUntilDate" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate"></a>

```java
public java.lang.String getApproveUntilDate();
```

- *Type:* java.lang.String

---

##### `complianceLevel`<sup>Required</sup> <a name="complianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel"></a>

```java
public java.lang.String getComplianceLevel();
```

- *Type:* java.lang.String

---

##### `enableNonSecurity`<sup>Required</sup> <a name="enableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity"></a>

```java
public java.lang.Object getEnableNonSecurity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a> OR com.hashicorp.cdktf.IResolvable

---


### SsmPatchBaselineApprovalRulePatchFilterList <a name="SsmPatchBaselineApprovalRulePatchFilterList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineApprovalRulePatchFilterList;

new SsmPatchBaselineApprovalRulePatchFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get"></a>

```java
public SsmPatchBaselineApprovalRulePatchFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>>

---


### SsmPatchBaselineApprovalRulePatchFilterOutputReference <a name="SsmPatchBaselineApprovalRulePatchFilterOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference;

new SsmPatchBaselineApprovalRulePatchFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### SsmPatchBaselineGlobalFilterList <a name="SsmPatchBaselineGlobalFilterList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineGlobalFilterList;

new SsmPatchBaselineGlobalFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get"></a>

```java
public SsmPatchBaselineGlobalFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>>

---


### SsmPatchBaselineGlobalFilterOutputReference <a name="SsmPatchBaselineGlobalFilterOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineGlobalFilterOutputReference;

new SsmPatchBaselineGlobalFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### SsmPatchBaselineSourceList <a name="SsmPatchBaselineSourceList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineSourceList;

new SsmPatchBaselineSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get"></a>

```java
public SsmPatchBaselineSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>>

---


### SsmPatchBaselineSourceOutputReference <a name="SsmPatchBaselineSourceOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssm_patch_baseline.SsmPatchBaselineSourceOutputReference;

new SsmPatchBaselineSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configurationInput">configurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.productsInput">productsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.products">products</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configurationInput"></a>

```java
public java.lang.String getConfigurationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productsInput`<sup>Optional</sup> <a name="productsInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.productsInput"></a>

```java
public java.util.List<java.lang.String> getProductsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.products"></a>

```java
public java.util.List<java.lang.String> getProducts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a> OR com.hashicorp.cdktf.IResolvable

---



