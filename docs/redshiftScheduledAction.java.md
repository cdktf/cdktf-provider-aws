# `redshiftScheduledAction` Submodule <a name="`redshiftScheduledAction` Submodule" id="@cdktf/provider-aws.redshiftScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftScheduledAction <a name="RedshiftScheduledAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action aws_redshift_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledAction;

RedshiftScheduledAction.Builder.create(Construct scope, java.lang.String id)
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
    .iamRole(java.lang.String)
    .name(java.lang.String)
    .schedule(java.lang.String)
    .targetAction(RedshiftScheduledActionTargetAction)
//  .description(java.lang.String)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .endTime(java.lang.String)
//  .id(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.iamRole">iamRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#name RedshiftScheduledAction#name}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.targetAction">targetAction</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | target_action block. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#description RedshiftScheduledAction#description}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#enable RedshiftScheduledAction#enable}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#id RedshiftScheduledAction#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.iamRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#name RedshiftScheduledAction#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}.

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.targetAction"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

target_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#target_action RedshiftScheduledAction#target_action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#description RedshiftScheduledAction#description}.

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.enable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#enable RedshiftScheduledAction#enable}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.endTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#id RedshiftScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction">putTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTargetAction` <a name="putTargetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction"></a>

```java
public void putTargetAction(RedshiftScheduledActionTargetAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetId"></a>

```java
public void resetId()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetStartTime"></a>

```java
public void resetStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledAction;

RedshiftScheduledAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledAction;

RedshiftScheduledAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledAction;

RedshiftScheduledAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetAction">targetAction</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference">RedshiftScheduledActionTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRoleInput">iamRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetActionInput">targetActionInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRole">iamRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetAction"></a>

```java
public RedshiftScheduledActionTargetActionOutputReference getTargetAction();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference">RedshiftScheduledActionTargetActionOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `iamRoleInput`<sup>Optional</sup> <a name="iamRoleInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRoleInput"></a>

```java
public java.lang.String getIamRoleInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `targetActionInput`<sup>Optional</sup> <a name="targetActionInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetActionInput"></a>

```java
public RedshiftScheduledActionTargetAction getTargetActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRole"></a>

```java
public java.lang.String getIamRole();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftScheduledActionConfig <a name="RedshiftScheduledActionConfig" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledActionConfig;

RedshiftScheduledActionConfig.builder()
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
    .iamRole(java.lang.String)
    .name(java.lang.String)
    .schedule(java.lang.String)
    .targetAction(RedshiftScheduledActionTargetAction)
//  .description(java.lang.String)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .endTime(java.lang.String)
//  .id(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.iamRole">iamRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#name RedshiftScheduledAction#name}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.targetAction">targetAction</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | target_action block. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#description RedshiftScheduledAction#description}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#enable RedshiftScheduledAction#enable}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#id RedshiftScheduledAction#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.iamRole"></a>

```java
public java.lang.String getIamRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#name RedshiftScheduledAction#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}.

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.targetAction"></a>

```java
public RedshiftScheduledActionTargetAction getTargetAction();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

target_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#target_action RedshiftScheduledAction#target_action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#description RedshiftScheduledAction#description}.

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#enable RedshiftScheduledAction#enable}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#id RedshiftScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}.

---

### RedshiftScheduledActionTargetAction <a name="RedshiftScheduledActionTargetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledActionTargetAction;

RedshiftScheduledActionTargetAction.builder()
//  .pauseCluster(RedshiftScheduledActionTargetActionPauseCluster)
//  .resizeCluster(RedshiftScheduledActionTargetActionResizeCluster)
//  .resumeCluster(RedshiftScheduledActionTargetActionResumeCluster)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.pauseCluster">pauseCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | pause_cluster block. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resizeCluster">resizeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | resize_cluster block. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resumeCluster">resumeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | resume_cluster block. |

---

##### `pauseCluster`<sup>Optional</sup> <a name="pauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.pauseCluster"></a>

```java
public RedshiftScheduledActionTargetActionPauseCluster getPauseCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

pause_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#pause_cluster RedshiftScheduledAction#pause_cluster}

---

##### `resizeCluster`<sup>Optional</sup> <a name="resizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resizeCluster"></a>

```java
public RedshiftScheduledActionTargetActionResizeCluster getResizeCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

resize_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#resize_cluster RedshiftScheduledAction#resize_cluster}

---

##### `resumeCluster`<sup>Optional</sup> <a name="resumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resumeCluster"></a>

```java
public RedshiftScheduledActionTargetActionResumeCluster getResumeCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

resume_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#resume_cluster RedshiftScheduledAction#resume_cluster}

---

### RedshiftScheduledActionTargetActionPauseCluster <a name="RedshiftScheduledActionTargetActionPauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledActionTargetActionPauseCluster;

RedshiftScheduledActionTargetActionPauseCluster.builder()
    .clusterIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

### RedshiftScheduledActionTargetActionResizeCluster <a name="RedshiftScheduledActionTargetActionResizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledActionTargetActionResizeCluster;

RedshiftScheduledActionTargetActionResizeCluster.builder()
    .clusterIdentifier(java.lang.String)
//  .classic(java.lang.Boolean)
//  .classic(IResolvable)
//  .clusterType(java.lang.String)
//  .nodeType(java.lang.String)
//  .numberOfNodes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.classic">classic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#classic RedshiftScheduledAction#classic}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_type RedshiftScheduledAction#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#node_type RedshiftScheduledAction#node_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.numberOfNodes">numberOfNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#number_of_nodes RedshiftScheduledAction#number_of_nodes}. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

##### `classic`<sup>Optional</sup> <a name="classic" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.classic"></a>

```java
public java.lang.Object getClassic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#classic RedshiftScheduledAction#classic}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_type RedshiftScheduledAction#cluster_type}.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#node_type RedshiftScheduledAction#node_type}.

---

##### `numberOfNodes`<sup>Optional</sup> <a name="numberOfNodes" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.numberOfNodes"></a>

```java
public java.lang.Number getNumberOfNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#number_of_nodes RedshiftScheduledAction#number_of_nodes}.

---

### RedshiftScheduledActionTargetActionResumeCluster <a name="RedshiftScheduledActionTargetActionResumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledActionTargetActionResumeCluster;

RedshiftScheduledActionTargetActionResumeCluster.builder()
    .clusterIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftScheduledActionTargetActionOutputReference <a name="RedshiftScheduledActionTargetActionOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledActionTargetActionOutputReference;

new RedshiftScheduledActionTargetActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster">putPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster">putResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster">putResumeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetPauseCluster">resetPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResizeCluster">resetResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResumeCluster">resetResumeCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPauseCluster` <a name="putPauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster"></a>

```java
public void putPauseCluster(RedshiftScheduledActionTargetActionPauseCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---

##### `putResizeCluster` <a name="putResizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster"></a>

```java
public void putResizeCluster(RedshiftScheduledActionTargetActionResizeCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---

##### `putResumeCluster` <a name="putResumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster"></a>

```java
public void putResumeCluster(RedshiftScheduledActionTargetActionResumeCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---

##### `resetPauseCluster` <a name="resetPauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetPauseCluster"></a>

```java
public void resetPauseCluster()
```

##### `resetResizeCluster` <a name="resetResizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResizeCluster"></a>

```java
public void resetResizeCluster()
```

##### `resetResumeCluster` <a name="resetResumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResumeCluster"></a>

```java
public void resetResumeCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseCluster">pauseCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference">RedshiftScheduledActionTargetActionPauseClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeCluster">resizeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference">RedshiftScheduledActionTargetActionResizeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeCluster">resumeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference">RedshiftScheduledActionTargetActionResumeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseClusterInput">pauseClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeClusterInput">resizeClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeClusterInput">resumeClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pauseCluster`<sup>Required</sup> <a name="pauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseCluster"></a>

```java
public RedshiftScheduledActionTargetActionPauseClusterOutputReference getPauseCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference">RedshiftScheduledActionTargetActionPauseClusterOutputReference</a>

---

##### `resizeCluster`<sup>Required</sup> <a name="resizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeCluster"></a>

```java
public RedshiftScheduledActionTargetActionResizeClusterOutputReference getResizeCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference">RedshiftScheduledActionTargetActionResizeClusterOutputReference</a>

---

##### `resumeCluster`<sup>Required</sup> <a name="resumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeCluster"></a>

```java
public RedshiftScheduledActionTargetActionResumeClusterOutputReference getResumeCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference">RedshiftScheduledActionTargetActionResumeClusterOutputReference</a>

---

##### `pauseClusterInput`<sup>Optional</sup> <a name="pauseClusterInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseClusterInput"></a>

```java
public RedshiftScheduledActionTargetActionPauseCluster getPauseClusterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---

##### `resizeClusterInput`<sup>Optional</sup> <a name="resizeClusterInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeClusterInput"></a>

```java
public RedshiftScheduledActionTargetActionResizeCluster getResizeClusterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---

##### `resumeClusterInput`<sup>Optional</sup> <a name="resumeClusterInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeClusterInput"></a>

```java
public RedshiftScheduledActionTargetActionResumeCluster getResumeClusterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.internalValue"></a>

```java
public RedshiftScheduledActionTargetAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---


### RedshiftScheduledActionTargetActionPauseClusterOutputReference <a name="RedshiftScheduledActionTargetActionPauseClusterOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledActionTargetActionPauseClusterOutputReference;

new RedshiftScheduledActionTargetActionPauseClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue"></a>

```java
public RedshiftScheduledActionTargetActionPauseCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---


### RedshiftScheduledActionTargetActionResizeClusterOutputReference <a name="RedshiftScheduledActionTargetActionResizeClusterOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledActionTargetActionResizeClusterOutputReference;

new RedshiftScheduledActionTargetActionResizeClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClassic">resetClassic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNumberOfNodes">resetNumberOfNodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassic` <a name="resetClassic" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClassic"></a>

```java
public void resetClassic()
```

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterType"></a>

```java
public void resetClusterType()
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNodeType"></a>

```java
public void resetNodeType()
```

##### `resetNumberOfNodes` <a name="resetNumberOfNodes" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNumberOfNodes"></a>

```java
public void resetNumberOfNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classicInput">classicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterTypeInput">clusterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodesInput">numberOfNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic">classic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes">numberOfNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classicInput`<sup>Optional</sup> <a name="classicInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classicInput"></a>

```java
public java.lang.Object getClassicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterTypeInput"></a>

```java
public java.lang.String getClusterTypeInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `numberOfNodesInput`<sup>Optional</sup> <a name="numberOfNodesInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodesInput"></a>

```java
public java.lang.Number getNumberOfNodesInput();
```

- *Type:* java.lang.Number

---

##### `classic`<sup>Required</sup> <a name="classic" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic"></a>

```java
public java.lang.Object getClassic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `numberOfNodes`<sup>Required</sup> <a name="numberOfNodes" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes"></a>

```java
public java.lang.Number getNumberOfNodes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue"></a>

```java
public RedshiftScheduledActionTargetActionResizeCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---


### RedshiftScheduledActionTargetActionResumeClusterOutputReference <a name="RedshiftScheduledActionTargetActionResumeClusterOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_scheduled_action.RedshiftScheduledActionTargetActionResumeClusterOutputReference;

new RedshiftScheduledActionTargetActionResumeClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue"></a>

```java
public RedshiftScheduledActionTargetActionResumeCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---



