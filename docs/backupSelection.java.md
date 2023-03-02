# `backupSelection` Submodule <a name="`backupSelection` Submodule" id="@cdktf/provider-aws.backupSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupSelection <a name="BackupSelection" id="@cdktf/provider-aws.backupSelection.BackupSelection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_selection aws_backup_selection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelection;

BackupSelection.Builder.create(Construct scope, java.lang.String id)
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
    .iamRoleArn(java.lang.String)
    .name(java.lang.String)
    .planId(java.lang.String)
//  .condition(IResolvable)
//  .condition(java.util.List<BackupSelectionCondition>)
//  .id(java.lang.String)
//  .notResources(java.util.List<java.lang.String>)
//  .resources(java.util.List<java.lang.String>)
//  .selectionTag(IResolvable)
//  .selectionTag(java.util.List<BackupSelectionSelectionTag>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#iam_role_arn BackupSelection#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#name BackupSelection#name}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.planId">planId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#plan_id BackupSelection#plan_id}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>></code> | condition block. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#id BackupSelection#id}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.notResources">notResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#not_resources BackupSelection#not_resources}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#resources BackupSelection#resources}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.selectionTag">selectionTag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>></code> | selection_tag block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.iamRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#iam_role_arn BackupSelection#iam_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#name BackupSelection#name}.

---

##### `planId`<sup>Required</sup> <a name="planId" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.planId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#plan_id BackupSelection#plan_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.condition"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#condition BackupSelection#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#id BackupSelection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notResources`<sup>Optional</sup> <a name="notResources" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.notResources"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#not_resources BackupSelection#not_resources}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.resources"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#resources BackupSelection#resources}.

---

##### `selectionTag`<sup>Optional</sup> <a name="selectionTag" id="@cdktf/provider-aws.backupSelection.BackupSelection.Initializer.parameter.selectionTag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>>

selection_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#selection_tag BackupSelection#selection_tag}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.putSelectionTag">putSelectionTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.resetNotResources">resetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.resetSelectionTag">resetSelectionTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.backupSelection.BackupSelection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupSelection.BackupSelection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.backupSelection.BackupSelection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupSelection.BackupSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.backupSelection.BackupSelection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.backupSelection.BackupSelection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.backupSelection.BackupSelection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-aws.backupSelection.BackupSelection.putCondition"></a>

```java
public void putCondition(IResolvable OR java.util.List<BackupSelectionCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelection.putCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>>

---

##### `putSelectionTag` <a name="putSelectionTag" id="@cdktf/provider-aws.backupSelection.BackupSelection.putSelectionTag"></a>

```java
public void putSelectionTag(IResolvable OR java.util.List<BackupSelectionSelectionTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelection.putSelectionTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-aws.backupSelection.BackupSelection.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.backupSelection.BackupSelection.resetId"></a>

```java
public void resetId()
```

##### `resetNotResources` <a name="resetNotResources" id="@cdktf/provider-aws.backupSelection.BackupSelection.resetNotResources"></a>

```java
public void resetNotResources()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-aws.backupSelection.BackupSelection.resetResources"></a>

```java
public void resetResources()
```

##### `resetSelectionTag` <a name="resetSelectionTag" id="@cdktf/provider-aws.backupSelection.BackupSelection.resetSelectionTag"></a>

```java
public void resetSelectionTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.backupSelection.BackupSelection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelection;

BackupSelection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupSelection.BackupSelection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.backupSelection.BackupSelection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelection;

BackupSelection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupSelection.BackupSelection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelection;

BackupSelection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupSelection.BackupSelection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList">BackupSelectionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.selectionTag">selectionTag</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList">BackupSelectionSelectionTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.conditionInput">conditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.notResourcesInput">notResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.planIdInput">planIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.selectionTagInput">selectionTagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.notResources">notResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.planId">planId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.condition"></a>

```java
public BackupSelectionConditionList getCondition();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList">BackupSelectionConditionList</a>

---

##### `selectionTag`<sup>Required</sup> <a name="selectionTag" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.selectionTag"></a>

```java
public BackupSelectionSelectionTagList getSelectionTag();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList">BackupSelectionSelectionTagList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.conditionInput"></a>

```java
public java.lang.Object getConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>>

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notResourcesInput`<sup>Optional</sup> <a name="notResourcesInput" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.notResourcesInput"></a>

```java
public java.util.List<java.lang.String> getNotResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `planIdInput`<sup>Optional</sup> <a name="planIdInput" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.planIdInput"></a>

```java
public java.lang.String getPlanIdInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selectionTagInput`<sup>Optional</sup> <a name="selectionTagInput" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.selectionTagInput"></a>

```java
public java.lang.Object getSelectionTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notResources`<sup>Required</sup> <a name="notResources" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.notResources"></a>

```java
public java.util.List<java.lang.String> getNotResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `planId`<sup>Required</sup> <a name="planId" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.planId"></a>

```java
public java.lang.String getPlanId();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupSelection.BackupSelection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupSelectionCondition <a name="BackupSelectionCondition" id="@cdktf/provider-aws.backupSelection.BackupSelectionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupSelection.BackupSelectionCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionCondition;

BackupSelectionCondition.builder()
//  .stringEquals(IResolvable)
//  .stringEquals(java.util.List<BackupSelectionConditionStringEquals>)
//  .stringLike(IResolvable)
//  .stringLike(java.util.List<BackupSelectionConditionStringLike>)
//  .stringNotEquals(IResolvable)
//  .stringNotEquals(java.util.List<BackupSelectionConditionStringNotEquals>)
//  .stringNotLike(IResolvable)
//  .stringNotLike(java.util.List<BackupSelectionConditionStringNotLike>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition.property.stringEquals">stringEquals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>></code> | string_equals block. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition.property.stringLike">stringLike</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>></code> | string_like block. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition.property.stringNotEquals">stringNotEquals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>></code> | string_not_equals block. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition.property.stringNotLike">stringNotLike</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>></code> | string_not_like block. |

---

##### `stringEquals`<sup>Optional</sup> <a name="stringEquals" id="@cdktf/provider-aws.backupSelection.BackupSelectionCondition.property.stringEquals"></a>

```java
public java.lang.Object getStringEquals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>>

string_equals block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#string_equals BackupSelection#string_equals}

---

##### `stringLike`<sup>Optional</sup> <a name="stringLike" id="@cdktf/provider-aws.backupSelection.BackupSelectionCondition.property.stringLike"></a>

```java
public java.lang.Object getStringLike();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>>

string_like block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#string_like BackupSelection#string_like}

---

##### `stringNotEquals`<sup>Optional</sup> <a name="stringNotEquals" id="@cdktf/provider-aws.backupSelection.BackupSelectionCondition.property.stringNotEquals"></a>

```java
public java.lang.Object getStringNotEquals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>>

string_not_equals block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#string_not_equals BackupSelection#string_not_equals}

---

##### `stringNotLike`<sup>Optional</sup> <a name="stringNotLike" id="@cdktf/provider-aws.backupSelection.BackupSelectionCondition.property.stringNotLike"></a>

```java
public java.lang.Object getStringNotLike();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>>

string_not_like block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#string_not_like BackupSelection#string_not_like}

---

### BackupSelectionConditionStringEquals <a name="BackupSelectionConditionStringEquals" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringEquals;

BackupSelectionConditionStringEquals.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#key BackupSelection#key}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#value BackupSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#key BackupSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#value BackupSelection#value}.

---

### BackupSelectionConditionStringLike <a name="BackupSelectionConditionStringLike" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringLike;

BackupSelectionConditionStringLike.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#key BackupSelection#key}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#value BackupSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#key BackupSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#value BackupSelection#value}.

---

### BackupSelectionConditionStringNotEquals <a name="BackupSelectionConditionStringNotEquals" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringNotEquals;

BackupSelectionConditionStringNotEquals.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#key BackupSelection#key}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#value BackupSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#key BackupSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#value BackupSelection#value}.

---

### BackupSelectionConditionStringNotLike <a name="BackupSelectionConditionStringNotLike" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringNotLike;

BackupSelectionConditionStringNotLike.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#key BackupSelection#key}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#value BackupSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#key BackupSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#value BackupSelection#value}.

---

### BackupSelectionConfig <a name="BackupSelectionConfig" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConfig;

BackupSelectionConfig.builder()
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
    .iamRoleArn(java.lang.String)
    .name(java.lang.String)
    .planId(java.lang.String)
//  .condition(IResolvable)
//  .condition(java.util.List<BackupSelectionCondition>)
//  .id(java.lang.String)
//  .notResources(java.util.List<java.lang.String>)
//  .resources(java.util.List<java.lang.String>)
//  .selectionTag(IResolvable)
//  .selectionTag(java.util.List<BackupSelectionSelectionTag>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#iam_role_arn BackupSelection#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#name BackupSelection#name}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.planId">planId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#plan_id BackupSelection#plan_id}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>></code> | condition block. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#id BackupSelection#id}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.notResources">notResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#not_resources BackupSelection#not_resources}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#resources BackupSelection#resources}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.selectionTag">selectionTag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>></code> | selection_tag block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#iam_role_arn BackupSelection#iam_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#name BackupSelection#name}.

---

##### `planId`<sup>Required</sup> <a name="planId" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.planId"></a>

```java
public java.lang.String getPlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#plan_id BackupSelection#plan_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.condition"></a>

```java
public java.lang.Object getCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#condition BackupSelection#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#id BackupSelection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notResources`<sup>Optional</sup> <a name="notResources" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.notResources"></a>

```java
public java.util.List<java.lang.String> getNotResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#not_resources BackupSelection#not_resources}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#resources BackupSelection#resources}.

---

##### `selectionTag`<sup>Optional</sup> <a name="selectionTag" id="@cdktf/provider-aws.backupSelection.BackupSelectionConfig.property.selectionTag"></a>

```java
public java.lang.Object getSelectionTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>>

selection_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#selection_tag BackupSelection#selection_tag}

---

### BackupSelectionSelectionTag <a name="BackupSelectionSelectionTag" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionSelectionTag;

BackupSelectionSelectionTag.builder()
    .key(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#key BackupSelection#key}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#type BackupSelection#type}. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#value BackupSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#key BackupSelection#key}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#type BackupSelection#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection#value BackupSelection#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupSelectionConditionList <a name="BackupSelectionConditionList" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionList;

new BackupSelectionConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.get"></a>

```java
public BackupSelectionConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>>

---


### BackupSelectionConditionOutputReference <a name="BackupSelectionConditionOutputReference" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionOutputReference;

new BackupSelectionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringEquals">putStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringLike">putStringLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringNotEquals">putStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringNotLike">putStringNotLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.resetStringEquals">resetStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.resetStringLike">resetStringLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.resetStringNotEquals">resetStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.resetStringNotLike">resetStringNotLike</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStringEquals` <a name="putStringEquals" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringEquals"></a>

```java
public void putStringEquals(IResolvable OR java.util.List<BackupSelectionConditionStringEquals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringEquals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>>

---

##### `putStringLike` <a name="putStringLike" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringLike"></a>

```java
public void putStringLike(IResolvable OR java.util.List<BackupSelectionConditionStringLike> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringLike.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>>

---

##### `putStringNotEquals` <a name="putStringNotEquals" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringNotEquals"></a>

```java
public void putStringNotEquals(IResolvable OR java.util.List<BackupSelectionConditionStringNotEquals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringNotEquals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>>

---

##### `putStringNotLike` <a name="putStringNotLike" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringNotLike"></a>

```java
public void putStringNotLike(IResolvable OR java.util.List<BackupSelectionConditionStringNotLike> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.putStringNotLike.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>>

---

##### `resetStringEquals` <a name="resetStringEquals" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.resetStringEquals"></a>

```java
public void resetStringEquals()
```

##### `resetStringLike` <a name="resetStringLike" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.resetStringLike"></a>

```java
public void resetStringLike()
```

##### `resetStringNotEquals` <a name="resetStringNotEquals" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.resetStringNotEquals"></a>

```java
public void resetStringNotEquals()
```

##### `resetStringNotLike` <a name="resetStringNotLike" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.resetStringNotLike"></a>

```java
public void resetStringNotLike()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringEquals">stringEquals</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList">BackupSelectionConditionStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringLike">stringLike</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList">BackupSelectionConditionStringLikeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringNotEquals">stringNotEquals</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList">BackupSelectionConditionStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringNotLike">stringNotLike</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList">BackupSelectionConditionStringNotLikeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringEqualsInput">stringEqualsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringLikeInput">stringLikeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringNotEqualsInput">stringNotEqualsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringNotLikeInput">stringNotLikeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stringEquals`<sup>Required</sup> <a name="stringEquals" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringEquals"></a>

```java
public BackupSelectionConditionStringEqualsList getStringEquals();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList">BackupSelectionConditionStringEqualsList</a>

---

##### `stringLike`<sup>Required</sup> <a name="stringLike" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringLike"></a>

```java
public BackupSelectionConditionStringLikeList getStringLike();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList">BackupSelectionConditionStringLikeList</a>

---

##### `stringNotEquals`<sup>Required</sup> <a name="stringNotEquals" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringNotEquals"></a>

```java
public BackupSelectionConditionStringNotEqualsList getStringNotEquals();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList">BackupSelectionConditionStringNotEqualsList</a>

---

##### `stringNotLike`<sup>Required</sup> <a name="stringNotLike" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringNotLike"></a>

```java
public BackupSelectionConditionStringNotLikeList getStringNotLike();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList">BackupSelectionConditionStringNotLikeList</a>

---

##### `stringEqualsInput`<sup>Optional</sup> <a name="stringEqualsInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringEqualsInput"></a>

```java
public java.lang.Object getStringEqualsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>>

---

##### `stringLikeInput`<sup>Optional</sup> <a name="stringLikeInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringLikeInput"></a>

```java
public java.lang.Object getStringLikeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>>

---

##### `stringNotEqualsInput`<sup>Optional</sup> <a name="stringNotEqualsInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringNotEqualsInput"></a>

```java
public java.lang.Object getStringNotEqualsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>>

---

##### `stringNotLikeInput`<sup>Optional</sup> <a name="stringNotLikeInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.stringNotLikeInput"></a>

```java
public java.lang.Object getStringNotLikeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a> OR com.hashicorp.cdktf.IResolvable

---


### BackupSelectionConditionStringEqualsList <a name="BackupSelectionConditionStringEqualsList" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringEqualsList;

new BackupSelectionConditionStringEqualsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.get"></a>

```java
public BackupSelectionConditionStringEqualsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>>

---


### BackupSelectionConditionStringEqualsOutputReference <a name="BackupSelectionConditionStringEqualsOutputReference" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringEqualsOutputReference;

new BackupSelectionConditionStringEqualsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a> OR com.hashicorp.cdktf.IResolvable

---


### BackupSelectionConditionStringLikeList <a name="BackupSelectionConditionStringLikeList" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringLikeList;

new BackupSelectionConditionStringLikeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.get"></a>

```java
public BackupSelectionConditionStringLikeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>>

---


### BackupSelectionConditionStringLikeOutputReference <a name="BackupSelectionConditionStringLikeOutputReference" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringLikeOutputReference;

new BackupSelectionConditionStringLikeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a> OR com.hashicorp.cdktf.IResolvable

---


### BackupSelectionConditionStringNotEqualsList <a name="BackupSelectionConditionStringNotEqualsList" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringNotEqualsList;

new BackupSelectionConditionStringNotEqualsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.get"></a>

```java
public BackupSelectionConditionStringNotEqualsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>>

---


### BackupSelectionConditionStringNotEqualsOutputReference <a name="BackupSelectionConditionStringNotEqualsOutputReference" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringNotEqualsOutputReference;

new BackupSelectionConditionStringNotEqualsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a> OR com.hashicorp.cdktf.IResolvable

---


### BackupSelectionConditionStringNotLikeList <a name="BackupSelectionConditionStringNotLikeList" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringNotLikeList;

new BackupSelectionConditionStringNotLikeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.get"></a>

```java
public BackupSelectionConditionStringNotLikeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>>

---


### BackupSelectionConditionStringNotLikeOutputReference <a name="BackupSelectionConditionStringNotLikeOutputReference" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionConditionStringNotLikeOutputReference;

new BackupSelectionConditionStringNotLikeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a> OR com.hashicorp.cdktf.IResolvable

---


### BackupSelectionSelectionTagList <a name="BackupSelectionSelectionTagList" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionSelectionTagList;

new BackupSelectionSelectionTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.get"></a>

```java
public BackupSelectionSelectionTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>>

---


### BackupSelectionSelectionTagOutputReference <a name="BackupSelectionSelectionTagOutputReference" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.backup_selection.BackupSelectionSelectionTagOutputReference;

new BackupSelectionSelectionTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a> OR com.hashicorp.cdktf.IResolvable

---



