# `backupReportPlan` Submodule <a name="`backupReportPlan` Submodule" id="@cdktf/provider-aws.backupReportPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupReportPlan <a name="BackupReportPlan" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan aws_backup_report_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_report_plan.BackupReportPlan;

BackupReportPlan.Builder.create(Construct scope, java.lang.String id)
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
    .reportDeliveryChannel(BackupReportPlanReportDeliveryChannel)
    .reportSetting(BackupReportPlanReportSetting)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#name BackupReportPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.reportDeliveryChannel">reportDeliveryChannel</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | report_delivery_channel block. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.reportSetting">reportSetting</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | report_setting block. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#description BackupReportPlan#description}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#id BackupReportPlan#id}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags BackupReportPlan#tags}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags_all BackupReportPlan#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#name BackupReportPlan#name}.

---

##### `reportDeliveryChannel`<sup>Required</sup> <a name="reportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.reportDeliveryChannel"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

report_delivery_channel block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_delivery_channel BackupReportPlan#report_delivery_channel}

---

##### `reportSetting`<sup>Required</sup> <a name="reportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.reportSetting"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

report_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_setting BackupReportPlan#report_setting}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#description BackupReportPlan#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#id BackupReportPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags BackupReportPlan#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags_all BackupReportPlan#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportDeliveryChannel">putReportDeliveryChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportSetting">putReportSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putReportDeliveryChannel` <a name="putReportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportDeliveryChannel"></a>

```java
public void putReportDeliveryChannel(BackupReportPlanReportDeliveryChannel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportDeliveryChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---

##### `putReportSetting` <a name="putReportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportSetting"></a>

```java
public void putReportSetting(BackupReportPlanReportSetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_report_plan.BackupReportPlan;

BackupReportPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_report_plan.BackupReportPlan;

BackupReportPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_report_plan.BackupReportPlan;

BackupReportPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.deploymentStatus">deploymentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel">reportDeliveryChannel</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSetting">reportSetting</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput">reportDeliveryChannelInput</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSettingInput">reportSettingInput</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `deploymentStatus`<sup>Required</sup> <a name="deploymentStatus" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.deploymentStatus"></a>

```java
public java.lang.String getDeploymentStatus();
```

- *Type:* java.lang.String

---

##### `reportDeliveryChannel`<sup>Required</sup> <a name="reportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel"></a>

```java
public BackupReportPlanReportDeliveryChannelOutputReference getReportDeliveryChannel();
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a>

---

##### `reportSetting`<sup>Required</sup> <a name="reportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSetting"></a>

```java
public BackupReportPlanReportSettingOutputReference getReportSetting();
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `reportDeliveryChannelInput`<sup>Optional</sup> <a name="reportDeliveryChannelInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput"></a>

```java
public BackupReportPlanReportDeliveryChannel getReportDeliveryChannelInput();
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---

##### `reportSettingInput`<sup>Optional</sup> <a name="reportSettingInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSettingInput"></a>

```java
public BackupReportPlanReportSetting getReportSettingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupReportPlanConfig <a name="BackupReportPlanConfig" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_report_plan.BackupReportPlanConfig;

BackupReportPlanConfig.builder()
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
    .reportDeliveryChannel(BackupReportPlanReportDeliveryChannel)
    .reportSetting(BackupReportPlanReportSetting)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#name BackupReportPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel">reportDeliveryChannel</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | report_delivery_channel block. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportSetting">reportSetting</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | report_setting block. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#description BackupReportPlan#description}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#id BackupReportPlan#id}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags BackupReportPlan#tags}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags_all BackupReportPlan#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#name BackupReportPlan#name}.

---

##### `reportDeliveryChannel`<sup>Required</sup> <a name="reportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel"></a>

```java
public BackupReportPlanReportDeliveryChannel getReportDeliveryChannel();
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

report_delivery_channel block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_delivery_channel BackupReportPlan#report_delivery_channel}

---

##### `reportSetting`<sup>Required</sup> <a name="reportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportSetting"></a>

```java
public BackupReportPlanReportSetting getReportSetting();
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

report_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_setting BackupReportPlan#report_setting}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#description BackupReportPlan#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#id BackupReportPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags BackupReportPlan#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags_all BackupReportPlan#tags_all}.

---

### BackupReportPlanReportDeliveryChannel <a name="BackupReportPlanReportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_report_plan.BackupReportPlanReportDeliveryChannel;

BackupReportPlanReportDeliveryChannel.builder()
    .s3BucketName(java.lang.String)
//  .formats(java.util.List<java.lang.String>)
//  .s3KeyPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats">formats</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#formats BackupReportPlan#formats}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}. |

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}.

---

##### `formats`<sup>Optional</sup> <a name="formats" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats"></a>

```java
public java.util.List<java.lang.String> getFormats();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#formats BackupReportPlan#formats}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}.

---

### BackupReportPlanReportSetting <a name="BackupReportPlanReportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_report_plan.BackupReportPlanReportSetting;

BackupReportPlanReportSetting.builder()
    .reportTemplate(java.lang.String)
//  .frameworkArns(java.util.List<java.lang.String>)
//  .numberOfFrameworks(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate">reportTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_template BackupReportPlan#report_template}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns">frameworkArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#framework_arns BackupReportPlan#framework_arns}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.numberOfFrameworks">numberOfFrameworks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#number_of_frameworks BackupReportPlan#number_of_frameworks}. |

---

##### `reportTemplate`<sup>Required</sup> <a name="reportTemplate" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate"></a>

```java
public java.lang.String getReportTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_template BackupReportPlan#report_template}.

---

##### `frameworkArns`<sup>Optional</sup> <a name="frameworkArns" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns"></a>

```java
public java.util.List<java.lang.String> getFrameworkArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#framework_arns BackupReportPlan#framework_arns}.

---

##### `numberOfFrameworks`<sup>Optional</sup> <a name="numberOfFrameworks" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.numberOfFrameworks"></a>

```java
public java.lang.Number getNumberOfFrameworks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#number_of_frameworks BackupReportPlan#number_of_frameworks}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupReportPlanReportDeliveryChannelOutputReference <a name="BackupReportPlanReportDeliveryChannelOutputReference" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_report_plan.BackupReportPlanReportDeliveryChannelOutputReference;

new BackupReportPlanReportDeliveryChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats">resetFormats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFormats` <a name="resetFormats" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats"></a>

```java
public void resetFormats()
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix"></a>

```java
public void resetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput">formatsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats">formats</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `formatsInput`<sup>Optional</sup> <a name="formatsInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput"></a>

```java
public java.util.List<java.lang.String> getFormatsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput"></a>

```java
public java.lang.String getS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `formats`<sup>Required</sup> <a name="formats" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats"></a>

```java
public java.util.List<java.lang.String> getFormats();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue"></a>

```java
public BackupReportPlanReportDeliveryChannel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---


### BackupReportPlanReportSettingOutputReference <a name="BackupReportPlanReportSettingOutputReference" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_report_plan.BackupReportPlanReportSettingOutputReference;

new BackupReportPlanReportSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns">resetFrameworkArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetNumberOfFrameworks">resetNumberOfFrameworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrameworkArns` <a name="resetFrameworkArns" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns"></a>

```java
public void resetFrameworkArns()
```

##### `resetNumberOfFrameworks` <a name="resetNumberOfFrameworks" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetNumberOfFrameworks"></a>

```java
public void resetNumberOfFrameworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput">frameworkArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworksInput">numberOfFrameworksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput">reportTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns">frameworkArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworks">numberOfFrameworks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate">reportTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frameworkArnsInput`<sup>Optional</sup> <a name="frameworkArnsInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput"></a>

```java
public java.util.List<java.lang.String> getFrameworkArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `numberOfFrameworksInput`<sup>Optional</sup> <a name="numberOfFrameworksInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworksInput"></a>

```java
public java.lang.Number getNumberOfFrameworksInput();
```

- *Type:* java.lang.Number

---

##### `reportTemplateInput`<sup>Optional</sup> <a name="reportTemplateInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput"></a>

```java
public java.lang.String getReportTemplateInput();
```

- *Type:* java.lang.String

---

##### `frameworkArns`<sup>Required</sup> <a name="frameworkArns" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns"></a>

```java
public java.util.List<java.lang.String> getFrameworkArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `numberOfFrameworks`<sup>Required</sup> <a name="numberOfFrameworks" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworks"></a>

```java
public java.lang.Number getNumberOfFrameworks();
```

- *Type:* java.lang.Number

---

##### `reportTemplate`<sup>Required</sup> <a name="reportTemplate" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate"></a>

```java
public java.lang.String getReportTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue"></a>

```java
public BackupReportPlanReportSetting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---



