# `backupPlan` Submodule <a name="`backupPlan` Submodule" id="@cdktf/provider-aws.backupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPlan <a name="BackupPlan" id="@cdktf/provider-aws.backupPlan.BackupPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_plan aws_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlan;

BackupPlan.Builder.create(Construct scope, java.lang.String id)
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
    .rule(IResolvable)
    .rule(java.util.List<BackupPlanRule>)
//  .advancedBackupSetting(IResolvable)
//  .advancedBackupSetting(java.util.List<BackupPlanAdvancedBackupSetting>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#name BackupPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.advancedBackupSetting">advancedBackupSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>></code> | advanced_backup_setting block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#id BackupPlan#id}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags BackupPlan#tags}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags_all BackupPlan#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#name BackupPlan#name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule BackupPlan#rule}

---

##### `advancedBackupSetting`<sup>Optional</sup> <a name="advancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.advancedBackupSetting"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>>

advanced_backup_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#advanced_backup_setting BackupPlan#advanced_backup_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#id BackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags BackupPlan#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags_all BackupPlan#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting">putAdvancedBackupSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetAdvancedBackupSetting">resetAdvancedBackupSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.backupPlan.BackupPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.backupPlan.BackupPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAdvancedBackupSetting` <a name="putAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting"></a>

```java
public void putAdvancedBackupSetting(IResolvable OR java.util.List<BackupPlanAdvancedBackupSetting> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.backupPlan.BackupPlan.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<BackupPlanRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlan.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>>

---

##### `resetAdvancedBackupSetting` <a name="resetAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetAdvancedBackupSetting"></a>

```java
public void resetAdvancedBackupSetting()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlan;

BackupPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlan;

BackupPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlan;

BackupPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSetting">advancedBackupSetting</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList">BackupPlanAdvancedBackupSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList">BackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSettingInput">advancedBackupSettingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedBackupSetting`<sup>Required</sup> <a name="advancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSetting"></a>

```java
public BackupPlanAdvancedBackupSettingList getAdvancedBackupSetting();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList">BackupPlanAdvancedBackupSettingList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.rule"></a>

```java
public BackupPlanRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList">BackupPlanRuleList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `advancedBackupSettingInput`<sup>Optional</sup> <a name="advancedBackupSettingInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSettingInput"></a>

```java
public java.lang.Object getAdvancedBackupSettingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPlanAdvancedBackupSetting <a name="BackupPlanAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanAdvancedBackupSetting;

BackupPlanAdvancedBackupSetting.builder()
    .backupOptions(java.util.Map<java.lang.String, java.lang.String>)
    .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.backupOptions">backupOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#backup_options BackupPlan#backup_options}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#resource_type BackupPlan#resource_type}. |

---

##### `backupOptions`<sup>Required</sup> <a name="backupOptions" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.backupOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBackupOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#backup_options BackupPlan#backup_options}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#resource_type BackupPlan#resource_type}.

---

### BackupPlanConfig <a name="BackupPlanConfig" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanConfig;

BackupPlanConfig.builder()
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
    .rule(IResolvable)
    .rule(java.util.List<BackupPlanRule>)
//  .advancedBackupSetting(IResolvable)
//  .advancedBackupSetting(java.util.List<BackupPlanAdvancedBackupSetting>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#name BackupPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.advancedBackupSetting">advancedBackupSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>></code> | advanced_backup_setting block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#id BackupPlan#id}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags BackupPlan#tags}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags_all BackupPlan#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#name BackupPlan#name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule BackupPlan#rule}

---

##### `advancedBackupSetting`<sup>Optional</sup> <a name="advancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.advancedBackupSetting"></a>

```java
public java.lang.Object getAdvancedBackupSetting();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>>

advanced_backup_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#advanced_backup_setting BackupPlan#advanced_backup_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#id BackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags BackupPlan#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags_all BackupPlan#tags_all}.

---

### BackupPlanRule <a name="BackupPlanRule" id="@cdktf/provider-aws.backupPlan.BackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanRule;

BackupPlanRule.builder()
    .ruleName(java.lang.String)
    .targetVaultName(java.lang.String)
//  .completionWindow(java.lang.Number)
//  .copyAction(IResolvable)
//  .copyAction(java.util.List<BackupPlanRuleCopyAction>)
//  .enableContinuousBackup(java.lang.Boolean)
//  .enableContinuousBackup(IResolvable)
//  .lifecycle(BackupPlanRuleLifecycle)
//  .recoveryPointTags(java.util.Map<java.lang.String, java.lang.String>)
//  .schedule(java.lang.String)
//  .startWindow(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule_name BackupPlan#rule_name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.targetVaultName">targetVaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#target_vault_name BackupPlan#target_vault_name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.completionWindow">completionWindow</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#completion_window BackupPlan#completion_window}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.copyAction">copyAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>></code> | copy_action block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.enableContinuousBackup">enableContinuousBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | lifecycle block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.recoveryPointTags">recoveryPointTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#schedule BackupPlan#schedule}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.startWindow">startWindow</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#start_window BackupPlan#start_window}. |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule_name BackupPlan#rule_name}.

---

##### `targetVaultName`<sup>Required</sup> <a name="targetVaultName" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.targetVaultName"></a>

```java
public java.lang.String getTargetVaultName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#target_vault_name BackupPlan#target_vault_name}.

---

##### `completionWindow`<sup>Optional</sup> <a name="completionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.completionWindow"></a>

```java
public java.lang.Number getCompletionWindow();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#completion_window BackupPlan#completion_window}.

---

##### `copyAction`<sup>Optional</sup> <a name="copyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.copyAction"></a>

```java
public java.lang.Object getCopyAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>>

copy_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#copy_action BackupPlan#copy_action}

---

##### `enableContinuousBackup`<sup>Optional</sup> <a name="enableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.enableContinuousBackup"></a>

```java
public java.lang.Object getEnableContinuousBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}.

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.lifecycle"></a>

```java
public BackupPlanRuleLifecycle getLifecycle();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#lifecycle BackupPlan#lifecycle}

---

##### `recoveryPointTags`<sup>Optional</sup> <a name="recoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.recoveryPointTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRecoveryPointTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#schedule BackupPlan#schedule}.

---

##### `startWindow`<sup>Optional</sup> <a name="startWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.startWindow"></a>

```java
public java.lang.Number getStartWindow();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#start_window BackupPlan#start_window}.

---

### BackupPlanRuleCopyAction <a name="BackupPlanRuleCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanRuleCopyAction;

BackupPlanRuleCopyAction.builder()
    .destinationVaultArn(java.lang.String)
//  .lifecycle(BackupPlanRuleCopyActionLifecycle)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.destinationVaultArn">destinationVaultArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | lifecycle block. |

---

##### `destinationVaultArn`<sup>Required</sup> <a name="destinationVaultArn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.destinationVaultArn"></a>

```java
public java.lang.String getDestinationVaultArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}.

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.lifecycle"></a>

```java
public BackupPlanRuleCopyActionLifecycle getLifecycle();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#lifecycle BackupPlan#lifecycle}

---

### BackupPlanRuleCopyActionLifecycle <a name="BackupPlanRuleCopyActionLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanRuleCopyActionLifecycle;

BackupPlanRuleCopyActionLifecycle.builder()
//  .coldStorageAfter(java.lang.Number)
//  .deleteAfter(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.coldStorageAfter">coldStorageAfter</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.deleteAfter">deleteAfter</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}. |

---

##### `coldStorageAfter`<sup>Optional</sup> <a name="coldStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.coldStorageAfter"></a>

```java
public java.lang.Number getColdStorageAfter();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}.

---

##### `deleteAfter`<sup>Optional</sup> <a name="deleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.deleteAfter"></a>

```java
public java.lang.Number getDeleteAfter();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}.

---

### BackupPlanRuleLifecycle <a name="BackupPlanRuleLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanRuleLifecycle;

BackupPlanRuleLifecycle.builder()
//  .coldStorageAfter(java.lang.Number)
//  .deleteAfter(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.coldStorageAfter">coldStorageAfter</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.deleteAfter">deleteAfter</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}. |

---

##### `coldStorageAfter`<sup>Optional</sup> <a name="coldStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.coldStorageAfter"></a>

```java
public java.lang.Number getColdStorageAfter();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}.

---

##### `deleteAfter`<sup>Optional</sup> <a name="deleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.deleteAfter"></a>

```java
public java.lang.Number getDeleteAfter();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPlanAdvancedBackupSettingList <a name="BackupPlanAdvancedBackupSettingList" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanAdvancedBackupSettingList;

new BackupPlanAdvancedBackupSettingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get"></a>

```java
public BackupPlanAdvancedBackupSettingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a>>

---


### BackupPlanAdvancedBackupSettingOutputReference <a name="BackupPlanAdvancedBackupSettingOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanAdvancedBackupSettingOutputReference;

new BackupPlanAdvancedBackupSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptionsInput">backupOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptions">backupOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupOptionsInput`<sup>Optional</sup> <a name="backupOptionsInput" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBackupOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `backupOptions`<sup>Required</sup> <a name="backupOptions" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBackupOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting">BackupPlanAdvancedBackupSetting</a> OR com.hashicorp.cdktf.IResolvable

---


### BackupPlanRuleCopyActionLifecycleOutputReference <a name="BackupPlanRuleCopyActionLifecycleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanRuleCopyActionLifecycleOutputReference;

new BackupPlanRuleCopyActionLifecycleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetColdStorageAfter">resetColdStorageAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetDeleteAfter">resetDeleteAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColdStorageAfter` <a name="resetColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetColdStorageAfter"></a>

```java
public void resetColdStorageAfter()
```

##### `resetDeleteAfter` <a name="resetDeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetDeleteAfter"></a>

```java
public void resetDeleteAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfterInput">coldStorageAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfterInput">deleteAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter">coldStorageAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter">deleteAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coldStorageAfterInput`<sup>Optional</sup> <a name="coldStorageAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfterInput"></a>

```java
public java.lang.Number getColdStorageAfterInput();
```

- *Type:* java.lang.Number

---

##### `deleteAfterInput`<sup>Optional</sup> <a name="deleteAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfterInput"></a>

```java
public java.lang.Number getDeleteAfterInput();
```

- *Type:* java.lang.Number

---

##### `coldStorageAfter`<sup>Required</sup> <a name="coldStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter"></a>

```java
public java.lang.Number getColdStorageAfter();
```

- *Type:* java.lang.Number

---

##### `deleteAfter`<sup>Required</sup> <a name="deleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter"></a>

```java
public java.lang.Number getDeleteAfter();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue"></a>

```java
public BackupPlanRuleCopyActionLifecycle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---


### BackupPlanRuleCopyActionList <a name="BackupPlanRuleCopyActionList" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanRuleCopyActionList;

new BackupPlanRuleCopyActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get"></a>

```java
public BackupPlanRuleCopyActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>>

---


### BackupPlanRuleCopyActionOutputReference <a name="BackupPlanRuleCopyActionOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanRuleCopyActionOutputReference;

new BackupPlanRuleCopyActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle">putLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resetLifecycle">resetLifecycle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLifecycle` <a name="putLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle"></a>

```java
public void putLifecycle(BackupPlanRuleCopyActionLifecycle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---

##### `resetLifecycle` <a name="resetLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resetLifecycle"></a>

```java
public void resetLifecycle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference">BackupPlanRuleCopyActionLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArnInput">destinationVaultArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycleInput">lifecycleInput</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArn">destinationVaultArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycle"></a>

```java
public BackupPlanRuleCopyActionLifecycleOutputReference getLifecycle();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference">BackupPlanRuleCopyActionLifecycleOutputReference</a>

---

##### `destinationVaultArnInput`<sup>Optional</sup> <a name="destinationVaultArnInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArnInput"></a>

```java
public java.lang.String getDestinationVaultArnInput();
```

- *Type:* java.lang.String

---

##### `lifecycleInput`<sup>Optional</sup> <a name="lifecycleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycleInput"></a>

```java
public BackupPlanRuleCopyActionLifecycle getLifecycleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---

##### `destinationVaultArn`<sup>Required</sup> <a name="destinationVaultArn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArn"></a>

```java
public java.lang.String getDestinationVaultArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a> OR com.hashicorp.cdktf.IResolvable

---


### BackupPlanRuleLifecycleOutputReference <a name="BackupPlanRuleLifecycleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanRuleLifecycleOutputReference;

new BackupPlanRuleLifecycleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetColdStorageAfter">resetColdStorageAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetDeleteAfter">resetDeleteAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColdStorageAfter` <a name="resetColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetColdStorageAfter"></a>

```java
public void resetColdStorageAfter()
```

##### `resetDeleteAfter` <a name="resetDeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetDeleteAfter"></a>

```java
public void resetDeleteAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfterInput">coldStorageAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfterInput">deleteAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfter">coldStorageAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfter">deleteAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coldStorageAfterInput`<sup>Optional</sup> <a name="coldStorageAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfterInput"></a>

```java
public java.lang.Number getColdStorageAfterInput();
```

- *Type:* java.lang.Number

---

##### `deleteAfterInput`<sup>Optional</sup> <a name="deleteAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfterInput"></a>

```java
public java.lang.Number getDeleteAfterInput();
```

- *Type:* java.lang.Number

---

##### `coldStorageAfter`<sup>Required</sup> <a name="coldStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfter"></a>

```java
public java.lang.Number getColdStorageAfter();
```

- *Type:* java.lang.Number

---

##### `deleteAfter`<sup>Required</sup> <a name="deleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfter"></a>

```java
public java.lang.Number getDeleteAfter();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```java
public BackupPlanRuleLifecycle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---


### BackupPlanRuleList <a name="BackupPlanRuleList" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanRuleList;

new BackupPlanRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.get"></a>

```java
public BackupPlanRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a>>

---


### BackupPlanRuleOutputReference <a name="BackupPlanRuleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_plan.BackupPlanRuleOutputReference;

new BackupPlanRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction">putCopyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle">putLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCompletionWindow">resetCompletionWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCopyAction">resetCopyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetEnableContinuousBackup">resetEnableContinuousBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetLifecycle">resetLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetRecoveryPointTags">resetRecoveryPointTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetStartWindow">resetStartWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCopyAction` <a name="putCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction"></a>

```java
public void putCopyAction(IResolvable OR java.util.List<BackupPlanRuleCopyAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>>

---

##### `putLifecycle` <a name="putLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle"></a>

```java
public void putLifecycle(BackupPlanRuleLifecycle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---

##### `resetCompletionWindow` <a name="resetCompletionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCompletionWindow"></a>

```java
public void resetCompletionWindow()
```

##### `resetCopyAction` <a name="resetCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCopyAction"></a>

```java
public void resetCopyAction()
```

##### `resetEnableContinuousBackup` <a name="resetEnableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetEnableContinuousBackup"></a>

```java
public void resetEnableContinuousBackup()
```

##### `resetLifecycle` <a name="resetLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetLifecycle"></a>

```java
public void resetLifecycle()
```

##### `resetRecoveryPointTags` <a name="resetRecoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetRecoveryPointTags"></a>

```java
public void resetRecoveryPointTags()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetStartWindow` <a name="resetStartWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetStartWindow"></a>

```java
public void resetStartWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyAction">copyAction</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList">BackupPlanRuleCopyActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference">BackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindowInput">completionWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyActionInput">copyActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackupInput">enableContinuousBackupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycleInput">lifecycleInput</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTagsInput">recoveryPointTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindowInput">startWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultNameInput">targetVaultNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindow">completionWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackup">enableContinuousBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTags">recoveryPointTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindow">startWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultName">targetVaultName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `copyAction`<sup>Required</sup> <a name="copyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyAction"></a>

```java
public BackupPlanRuleCopyActionList getCopyAction();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList">BackupPlanRuleCopyActionList</a>

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycle"></a>

```java
public BackupPlanRuleLifecycleOutputReference getLifecycle();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference">BackupPlanRuleLifecycleOutputReference</a>

---

##### `completionWindowInput`<sup>Optional</sup> <a name="completionWindowInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindowInput"></a>

```java
public java.lang.Number getCompletionWindowInput();
```

- *Type:* java.lang.Number

---

##### `copyActionInput`<sup>Optional</sup> <a name="copyActionInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyActionInput"></a>

```java
public java.lang.Object getCopyActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction">BackupPlanRuleCopyAction</a>>

---

##### `enableContinuousBackupInput`<sup>Optional</sup> <a name="enableContinuousBackupInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackupInput"></a>

```java
public java.lang.Object getEnableContinuousBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lifecycleInput`<sup>Optional</sup> <a name="lifecycleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycleInput"></a>

```java
public BackupPlanRuleLifecycle getLifecycleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---

##### `recoveryPointTagsInput`<sup>Optional</sup> <a name="recoveryPointTagsInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRecoveryPointTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `startWindowInput`<sup>Optional</sup> <a name="startWindowInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindowInput"></a>

```java
public java.lang.Number getStartWindowInput();
```

- *Type:* java.lang.Number

---

##### `targetVaultNameInput`<sup>Optional</sup> <a name="targetVaultNameInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultNameInput"></a>

```java
public java.lang.String getTargetVaultNameInput();
```

- *Type:* java.lang.String

---

##### `completionWindow`<sup>Required</sup> <a name="completionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindow"></a>

```java
public java.lang.Number getCompletionWindow();
```

- *Type:* java.lang.Number

---

##### `enableContinuousBackup`<sup>Required</sup> <a name="enableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```java
public java.lang.Object getEnableContinuousBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recoveryPointTags`<sup>Required</sup> <a name="recoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRecoveryPointTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `startWindow`<sup>Required</sup> <a name="startWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindow"></a>

```java
public java.lang.Number getStartWindow();
```

- *Type:* java.lang.Number

---

##### `targetVaultName`<sup>Required</sup> <a name="targetVaultName" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultName"></a>

```java
public java.lang.String getTargetVaultName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule">BackupPlanRule</a> OR com.hashicorp.cdktf.IResolvable

---



