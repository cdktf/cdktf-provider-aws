# `backupRestoreTestingSelection` Submodule <a name="`backupRestoreTestingSelection` Submodule" id="@cdktf/provider-aws.backupRestoreTestingSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupRestoreTestingSelection <a name="BackupRestoreTestingSelection" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection aws_backup_restore_testing_selection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelection;

BackupRestoreTestingSelection.Builder.create(Construct scope, java.lang.String id)
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
    .iamRoleArn(java.lang.String)
    .name(java.lang.String)
    .protectedResourceType(java.lang.String)
    .restoreTestingPlanName(java.lang.String)
//  .protectedResourceArns(java.util.List<java.lang.String>)
//  .protectedResourceConditions(IResolvable)
//  .protectedResourceConditions(java.util.List<BackupRestoreTestingSelectionProtectedResourceConditions>)
//  .region(java.lang.String)
//  .restoreMetadataOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .validationWindowHours(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceType">protectedResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.restoreTestingPlanName">restoreTestingPlanName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceArns">protectedResourceArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceConditions">protectedResourceConditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>></code> | protected_resource_conditions block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.restoreMetadataOverrides">restoreMetadataOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.validationWindowHours">validationWindowHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.iamRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}.

---

##### `protectedResourceType`<sup>Required</sup> <a name="protectedResourceType" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}.

---

##### `restoreTestingPlanName`<sup>Required</sup> <a name="restoreTestingPlanName" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.restoreTestingPlanName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}.

---

##### `protectedResourceArns`<sup>Optional</sup> <a name="protectedResourceArns" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}.

---

##### `protectedResourceConditions`<sup>Optional</sup> <a name="protectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceConditions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>>

protected_resource_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#protected_resource_conditions BackupRestoreTestingSelection#protected_resource_conditions}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#region BackupRestoreTestingSelection#region}

---

##### `restoreMetadataOverrides`<sup>Optional</sup> <a name="restoreMetadataOverrides" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.restoreMetadataOverrides"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}.

---

##### `validationWindowHours`<sup>Optional</sup> <a name="validationWindowHours" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.validationWindowHours"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions">putProtectedResourceConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceArns">resetProtectedResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceConditions">resetProtectedResourceConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetRestoreMetadataOverrides">resetRestoreMetadataOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetValidationWindowHours">resetValidationWindowHours</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProtectedResourceConditions` <a name="putProtectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions"></a>

```java
public void putProtectedResourceConditions(IResolvable OR java.util.List<BackupRestoreTestingSelectionProtectedResourceConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>>

---

##### `resetProtectedResourceArns` <a name="resetProtectedResourceArns" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceArns"></a>

```java
public void resetProtectedResourceArns()
```

##### `resetProtectedResourceConditions` <a name="resetProtectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceConditions"></a>

```java
public void resetProtectedResourceConditions()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRestoreMetadataOverrides` <a name="resetRestoreMetadataOverrides" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetRestoreMetadataOverrides"></a>

```java
public void resetRestoreMetadataOverrides()
```

##### `resetValidationWindowHours` <a name="resetValidationWindowHours" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetValidationWindowHours"></a>

```java
public void resetValidationWindowHours()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BackupRestoreTestingSelection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelection;

BackupRestoreTestingSelection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelection;

BackupRestoreTestingSelection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelection;

BackupRestoreTestingSelection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelection;

BackupRestoreTestingSelection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BackupRestoreTestingSelection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BackupRestoreTestingSelection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BackupRestoreTestingSelection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BackupRestoreTestingSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BackupRestoreTestingSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditions">protectedResourceConditions</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList">BackupRestoreTestingSelectionProtectedResourceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArnsInput">protectedResourceArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditionsInput">protectedResourceConditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceTypeInput">protectedResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverridesInput">restoreMetadataOverridesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanNameInput">restoreTestingPlanNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHoursInput">validationWindowHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArns">protectedResourceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceType">protectedResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverrides">restoreMetadataOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanName">restoreTestingPlanName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHours">validationWindowHours</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `protectedResourceConditions`<sup>Required</sup> <a name="protectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditions"></a>

```java
public BackupRestoreTestingSelectionProtectedResourceConditionsList getProtectedResourceConditions();
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList">BackupRestoreTestingSelectionProtectedResourceConditionsList</a>

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protectedResourceArnsInput`<sup>Optional</sup> <a name="protectedResourceArnsInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArnsInput"></a>

```java
public java.util.List<java.lang.String> getProtectedResourceArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protectedResourceConditionsInput`<sup>Optional</sup> <a name="protectedResourceConditionsInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditionsInput"></a>

```java
public java.lang.Object getProtectedResourceConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>>

---

##### `protectedResourceTypeInput`<sup>Optional</sup> <a name="protectedResourceTypeInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceTypeInput"></a>

```java
public java.lang.String getProtectedResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `restoreMetadataOverridesInput`<sup>Optional</sup> <a name="restoreMetadataOverridesInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverridesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRestoreMetadataOverridesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `restoreTestingPlanNameInput`<sup>Optional</sup> <a name="restoreTestingPlanNameInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanNameInput"></a>

```java
public java.lang.String getRestoreTestingPlanNameInput();
```

- *Type:* java.lang.String

---

##### `validationWindowHoursInput`<sup>Optional</sup> <a name="validationWindowHoursInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHoursInput"></a>

```java
public java.lang.Number getValidationWindowHoursInput();
```

- *Type:* java.lang.Number

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protectedResourceArns`<sup>Required</sup> <a name="protectedResourceArns" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArns"></a>

```java
public java.util.List<java.lang.String> getProtectedResourceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protectedResourceType`<sup>Required</sup> <a name="protectedResourceType" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceType"></a>

```java
public java.lang.String getProtectedResourceType();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `restoreMetadataOverrides`<sup>Required</sup> <a name="restoreMetadataOverrides" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRestoreMetadataOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `restoreTestingPlanName`<sup>Required</sup> <a name="restoreTestingPlanName" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanName"></a>

```java
public java.lang.String getRestoreTestingPlanName();
```

- *Type:* java.lang.String

---

##### `validationWindowHours`<sup>Required</sup> <a name="validationWindowHours" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHours"></a>

```java
public java.lang.Number getValidationWindowHours();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupRestoreTestingSelectionConfig <a name="BackupRestoreTestingSelectionConfig" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelectionConfig;

BackupRestoreTestingSelectionConfig.builder()
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
    .iamRoleArn(java.lang.String)
    .name(java.lang.String)
    .protectedResourceType(java.lang.String)
    .restoreTestingPlanName(java.lang.String)
//  .protectedResourceArns(java.util.List<java.lang.String>)
//  .protectedResourceConditions(IResolvable)
//  .protectedResourceConditions(java.util.List<BackupRestoreTestingSelectionProtectedResourceConditions>)
//  .region(java.lang.String)
//  .restoreMetadataOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .validationWindowHours(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceType">protectedResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreTestingPlanName">restoreTestingPlanName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceArns">protectedResourceArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceConditions">protectedResourceConditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>></code> | protected_resource_conditions block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreMetadataOverrides">restoreMetadataOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.validationWindowHours">validationWindowHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}.

---

##### `protectedResourceType`<sup>Required</sup> <a name="protectedResourceType" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceType"></a>

```java
public java.lang.String getProtectedResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}.

---

##### `restoreTestingPlanName`<sup>Required</sup> <a name="restoreTestingPlanName" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreTestingPlanName"></a>

```java
public java.lang.String getRestoreTestingPlanName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}.

---

##### `protectedResourceArns`<sup>Optional</sup> <a name="protectedResourceArns" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceArns"></a>

```java
public java.util.List<java.lang.String> getProtectedResourceArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}.

---

##### `protectedResourceConditions`<sup>Optional</sup> <a name="protectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceConditions"></a>

```java
public java.lang.Object getProtectedResourceConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>>

protected_resource_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#protected_resource_conditions BackupRestoreTestingSelection#protected_resource_conditions}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#region BackupRestoreTestingSelection#region}

---

##### `restoreMetadataOverrides`<sup>Optional</sup> <a name="restoreMetadataOverrides" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreMetadataOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRestoreMetadataOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}.

---

##### `validationWindowHours`<sup>Optional</sup> <a name="validationWindowHours" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.validationWindowHours"></a>

```java
public java.lang.Number getValidationWindowHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}.

---

### BackupRestoreTestingSelectionProtectedResourceConditions <a name="BackupRestoreTestingSelectionProtectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelectionProtectedResourceConditions;

BackupRestoreTestingSelectionProtectedResourceConditions.builder()
//  .stringEquals(IResolvable)
//  .stringEquals(java.util.List<BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals>)
//  .stringNotEquals(IResolvable)
//  .stringNotEquals(java.util.List<BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringEquals">stringEquals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>></code> | string_equals block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringNotEquals">stringNotEquals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>></code> | string_not_equals block. |

---

##### `stringEquals`<sup>Optional</sup> <a name="stringEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringEquals"></a>

```java
public java.lang.Object getStringEquals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>>

string_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#string_equals BackupRestoreTestingSelection#string_equals}

---

##### `stringNotEquals`<sup>Optional</sup> <a name="stringNotEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringNotEquals"></a>

```java
public java.lang.Object getStringNotEquals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>>

string_not_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#string_not_equals BackupRestoreTestingSelection#string_not_equals}

---

### BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals;

BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}.

---

### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals;

BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupRestoreTestingSelectionProtectedResourceConditionsList <a name="BackupRestoreTestingSelectionProtectedResourceConditionsList" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelectionProtectedResourceConditionsList;

new BackupRestoreTestingSelectionProtectedResourceConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.get"></a>

```java
public BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>>

---


### BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference;

new BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals">putStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals">putStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringEquals">resetStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringNotEquals">resetStringNotEquals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStringEquals` <a name="putStringEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals"></a>

```java
public void putStringEquals(IResolvable OR java.util.List<BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>>

---

##### `putStringNotEquals` <a name="putStringNotEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals"></a>

```java
public void putStringNotEquals(IResolvable OR java.util.List<BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>>

---

##### `resetStringEquals` <a name="resetStringEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringEquals"></a>

```java
public void resetStringEquals()
```

##### `resetStringNotEquals` <a name="resetStringNotEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringNotEquals"></a>

```java
public void resetStringNotEquals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals">stringEquals</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals">stringNotEquals</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEqualsInput">stringEqualsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEqualsInput">stringNotEqualsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stringEquals`<sup>Required</sup> <a name="stringEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals"></a>

```java
public BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList getStringEquals();
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a>

---

##### `stringNotEquals`<sup>Required</sup> <a name="stringNotEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals"></a>

```java
public BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList getStringNotEquals();
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a>

---

##### `stringEqualsInput`<sup>Optional</sup> <a name="stringEqualsInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEqualsInput"></a>

```java
public java.lang.Object getStringEqualsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>>

---

##### `stringNotEqualsInput`<sup>Optional</sup> <a name="stringNotEqualsInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEqualsInput"></a>

```java
public java.lang.Object getStringNotEqualsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList;

new BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get"></a>

```java
public BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>>

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference;

new BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList;

new BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get"></a>

```java
public BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>>

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_restore_testing_selection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference;

new BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>

---



