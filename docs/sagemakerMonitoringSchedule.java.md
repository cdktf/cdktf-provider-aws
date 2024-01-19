# `sagemakerMonitoringSchedule` Submodule <a name="`sagemakerMonitoringSchedule` Submodule" id="@cdktf/provider-aws.sagemakerMonitoringSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMonitoringSchedule <a name="SagemakerMonitoringSchedule" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule aws_sagemaker_monitoring_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_monitoring_schedule.SagemakerMonitoringSchedule;

SagemakerMonitoringSchedule.Builder.create(Construct scope, java.lang.String id)
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
    .monitoringScheduleConfig(SagemakerMonitoringScheduleMonitoringScheduleConfig)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.monitoringScheduleConfig">monitoringScheduleConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a></code> | monitoring_schedule_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#id SagemakerMonitoringSchedule#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#name SagemakerMonitoringSchedule#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#tags SagemakerMonitoringSchedule#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#tags_all SagemakerMonitoringSchedule#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitoringScheduleConfig`<sup>Required</sup> <a name="monitoringScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.monitoringScheduleConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a>

monitoring_schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#monitoring_schedule_config SagemakerMonitoringSchedule#monitoring_schedule_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#id SagemakerMonitoringSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#name SagemakerMonitoringSchedule#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#tags SagemakerMonitoringSchedule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#tags_all SagemakerMonitoringSchedule#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.putMonitoringScheduleConfig">putMonitoringScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMonitoringScheduleConfig` <a name="putMonitoringScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.putMonitoringScheduleConfig"></a>

```java
public void putMonitoringScheduleConfig(SagemakerMonitoringScheduleMonitoringScheduleConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.putMonitoringScheduleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerMonitoringSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_monitoring_schedule.SagemakerMonitoringSchedule;

SagemakerMonitoringSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_monitoring_schedule.SagemakerMonitoringSchedule;

SagemakerMonitoringSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_monitoring_schedule.SagemakerMonitoringSchedule;

SagemakerMonitoringSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_monitoring_schedule.SagemakerMonitoringSchedule;

SagemakerMonitoringSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerMonitoringSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SagemakerMonitoringSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerMonitoringSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerMonitoringSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerMonitoringSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.monitoringScheduleConfig">monitoringScheduleConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference">SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.monitoringScheduleConfigInput">monitoringScheduleConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `monitoringScheduleConfig`<sup>Required</sup> <a name="monitoringScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.monitoringScheduleConfig"></a>

```java
public SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference getMonitoringScheduleConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference">SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monitoringScheduleConfigInput`<sup>Optional</sup> <a name="monitoringScheduleConfigInput" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.monitoringScheduleConfigInput"></a>

```java
public SagemakerMonitoringScheduleMonitoringScheduleConfig getMonitoringScheduleConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMonitoringScheduleConfig <a name="SagemakerMonitoringScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_monitoring_schedule.SagemakerMonitoringScheduleConfig;

SagemakerMonitoringScheduleConfig.builder()
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
    .monitoringScheduleConfig(SagemakerMonitoringScheduleMonitoringScheduleConfig)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.monitoringScheduleConfig">monitoringScheduleConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a></code> | monitoring_schedule_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#id SagemakerMonitoringSchedule#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#name SagemakerMonitoringSchedule#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#tags SagemakerMonitoringSchedule#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#tags_all SagemakerMonitoringSchedule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitoringScheduleConfig`<sup>Required</sup> <a name="monitoringScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.monitoringScheduleConfig"></a>

```java
public SagemakerMonitoringScheduleMonitoringScheduleConfig getMonitoringScheduleConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a>

monitoring_schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#monitoring_schedule_config SagemakerMonitoringSchedule#monitoring_schedule_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#id SagemakerMonitoringSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#name SagemakerMonitoringSchedule#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#tags SagemakerMonitoringSchedule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#tags_all SagemakerMonitoringSchedule#tags_all}.

---

### SagemakerMonitoringScheduleMonitoringScheduleConfig <a name="SagemakerMonitoringScheduleMonitoringScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_monitoring_schedule.SagemakerMonitoringScheduleMonitoringScheduleConfig;

SagemakerMonitoringScheduleMonitoringScheduleConfig.builder()
    .monitoringJobDefinitionName(java.lang.String)
    .monitoringType(java.lang.String)
//  .scheduleConfig(SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.monitoringJobDefinitionName">monitoringJobDefinitionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#monitoring_job_definition_name SagemakerMonitoringSchedule#monitoring_job_definition_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.monitoringType">monitoringType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#monitoring_type SagemakerMonitoringSchedule#monitoring_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a></code> | schedule_config block. |

---

##### `monitoringJobDefinitionName`<sup>Required</sup> <a name="monitoringJobDefinitionName" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.monitoringJobDefinitionName"></a>

```java
public java.lang.String getMonitoringJobDefinitionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#monitoring_job_definition_name SagemakerMonitoringSchedule#monitoring_job_definition_name}.

---

##### `monitoringType`<sup>Required</sup> <a name="monitoringType" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.monitoringType"></a>

```java
public java.lang.String getMonitoringType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#monitoring_type SagemakerMonitoringSchedule#monitoring_type}.

---

##### `scheduleConfig`<sup>Optional</sup> <a name="scheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig.property.scheduleConfig"></a>

```java
public SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig getScheduleConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a>

schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#schedule_config SagemakerMonitoringSchedule#schedule_config}

---

### SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig <a name="SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_monitoring_schedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig;

SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig.builder()
    .scheduleExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#schedule_expression SagemakerMonitoringSchedule#schedule_expression}. |

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/sagemaker_monitoring_schedule#schedule_expression SagemakerMonitoringSchedule#schedule_expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference <a name="SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_monitoring_schedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference;

new SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.putScheduleConfig">putScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.resetScheduleConfig">resetScheduleConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScheduleConfig` <a name="putScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.putScheduleConfig"></a>

```java
public void putScheduleConfig(SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.putScheduleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a>

---

##### `resetScheduleConfig` <a name="resetScheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.resetScheduleConfig"></a>

```java
public void resetScheduleConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringJobDefinitionNameInput">monitoringJobDefinitionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringTypeInput">monitoringTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.scheduleConfigInput">scheduleConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringJobDefinitionName">monitoringJobDefinitionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringType">monitoringType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleConfig`<sup>Required</sup> <a name="scheduleConfig" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.scheduleConfig"></a>

```java
public SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference getScheduleConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference</a>

---

##### `monitoringJobDefinitionNameInput`<sup>Optional</sup> <a name="monitoringJobDefinitionNameInput" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringJobDefinitionNameInput"></a>

```java
public java.lang.String getMonitoringJobDefinitionNameInput();
```

- *Type:* java.lang.String

---

##### `monitoringTypeInput`<sup>Optional</sup> <a name="monitoringTypeInput" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringTypeInput"></a>

```java
public java.lang.String getMonitoringTypeInput();
```

- *Type:* java.lang.String

---

##### `scheduleConfigInput`<sup>Optional</sup> <a name="scheduleConfigInput" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.scheduleConfigInput"></a>

```java
public SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig getScheduleConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a>

---

##### `monitoringJobDefinitionName`<sup>Required</sup> <a name="monitoringJobDefinitionName" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringJobDefinitionName"></a>

```java
public java.lang.String getMonitoringJobDefinitionName();
```

- *Type:* java.lang.String

---

##### `monitoringType`<sup>Required</sup> <a name="monitoringType" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.monitoringType"></a>

```java
public java.lang.String getMonitoringType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference.property.internalValue"></a>

```java
public SagemakerMonitoringScheduleMonitoringScheduleConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfig</a>

---


### SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference <a name="SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_monitoring_schedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference;

new SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference.property.internalValue"></a>

```java
public SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerMonitoringSchedule.SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig">SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig</a>

---



