# `appautoscalingScheduledAction` Submodule <a name="`appautoscalingScheduledAction` Submodule" id="@cdktf/provider-aws.appautoscalingScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppautoscalingScheduledAction <a name="AppautoscalingScheduledAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action aws_appautoscaling_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appautoscaling_scheduled_action.AppautoscalingScheduledAction;

AppautoscalingScheduledAction.Builder.create(Construct scope, java.lang.String id)
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
    .resourceId(java.lang.String)
    .scalableDimension(java.lang.String)
    .scalableTargetAction(AppautoscalingScheduledActionScalableTargetAction)
    .schedule(java.lang.String)
    .serviceNamespace(java.lang.String)
//  .endTime(java.lang.String)
//  .id(java.lang.String)
//  .startTime(java.lang.String)
//  .timezone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scalableDimension">scalableDimension</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scalableTargetAction">scalableTargetAction</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | scalable_target_action block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}.

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scalableDimension"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}.

---

##### `scalableTargetAction`<sup>Required</sup> <a name="scalableTargetAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scalableTargetAction"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

scalable_target_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}.

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.serviceNamespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.endTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction">putScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putScalableTargetAction` <a name="putScalableTargetAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction"></a>

```java
public void putScalableTargetAction(AppautoscalingScheduledActionScalableTargetAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

---

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetId"></a>

```java
public void resetId()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetTimezone"></a>

```java
public void resetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appautoscaling_scheduled_action.AppautoscalingScheduledAction;

AppautoscalingScheduledAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appautoscaling_scheduled_action.AppautoscalingScheduledAction;

AppautoscalingScheduledAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appautoscaling_scheduled_action.AppautoscalingScheduledAction;

AppautoscalingScheduledAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetAction">scalableTargetAction</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference">AppautoscalingScheduledActionScalableTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimensionInput">scalableDimensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetActionInput">scalableTargetActionInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespaceInput">serviceNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimension">scalableDimension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `scalableTargetAction`<sup>Required</sup> <a name="scalableTargetAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetAction"></a>

```java
public AppautoscalingScheduledActionScalableTargetActionOutputReference getScalableTargetAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference">AppautoscalingScheduledActionScalableTargetActionOutputReference</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `scalableDimensionInput`<sup>Optional</sup> <a name="scalableDimensionInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimensionInput"></a>

```java
public java.lang.String getScalableDimensionInput();
```

- *Type:* java.lang.String

---

##### `scalableTargetActionInput`<sup>Optional</sup> <a name="scalableTargetActionInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetActionInput"></a>

```java
public AppautoscalingScheduledActionScalableTargetAction getScalableTargetActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `serviceNamespaceInput`<sup>Optional</sup> <a name="serviceNamespaceInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespaceInput"></a>

```java
public java.lang.String getServiceNamespaceInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimension"></a>

```java
public java.lang.String getScalableDimension();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespace"></a>

```java
public java.lang.String getServiceNamespace();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppautoscalingScheduledActionConfig <a name="AppautoscalingScheduledActionConfig" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appautoscaling_scheduled_action.AppautoscalingScheduledActionConfig;

AppautoscalingScheduledActionConfig.builder()
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
    .resourceId(java.lang.String)
    .scalableDimension(java.lang.String)
    .scalableTargetAction(AppautoscalingScheduledActionScalableTargetAction)
    .schedule(java.lang.String)
    .serviceNamespace(java.lang.String)
//  .endTime(java.lang.String)
//  .id(java.lang.String)
//  .startTime(java.lang.String)
//  .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableDimension">scalableDimension</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableTargetAction">scalableTargetAction</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | scalable_target_action block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}.

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableDimension"></a>

```java
public java.lang.String getScalableDimension();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}.

---

##### `scalableTargetAction`<sup>Required</sup> <a name="scalableTargetAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableTargetAction"></a>

```java
public AppautoscalingScheduledActionScalableTargetAction getScalableTargetAction();
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

scalable_target_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}.

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.serviceNamespace"></a>

```java
public java.lang.String getServiceNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}.

---

### AppautoscalingScheduledActionScalableTargetAction <a name="AppautoscalingScheduledActionScalableTargetAction" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appautoscaling_scheduled_action.AppautoscalingScheduledActionScalableTargetAction;

AppautoscalingScheduledActionScalableTargetAction.builder()
//  .maxCapacity(java.lang.String)
//  .minCapacity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#max_capacity AppautoscalingScheduledAction#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.minCapacity">minCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#min_capacity AppautoscalingScheduledAction#min_capacity}. |

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.maxCapacity"></a>

```java
public java.lang.String getMaxCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#max_capacity AppautoscalingScheduledAction#max_capacity}.

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.minCapacity"></a>

```java
public java.lang.String getMinCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action#min_capacity AppautoscalingScheduledAction#min_capacity}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppautoscalingScheduledActionScalableTargetActionOutputReference <a name="AppautoscalingScheduledActionScalableTargetActionOutputReference" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appautoscaling_scheduled_action.AppautoscalingScheduledActionScalableTargetActionOutputReference;

new AppautoscalingScheduledActionScalableTargetActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMinCapacity"></a>

```java
public void resetMinCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.String getMaxCapacityInput();
```

- *Type:* java.lang.String

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacityInput"></a>

```java
public java.lang.String getMinCapacityInput();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacity"></a>

```java
public java.lang.String getMaxCapacity();
```

- *Type:* java.lang.String

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacity"></a>

```java
public java.lang.String getMinCapacity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.internalValue"></a>

```java
public AppautoscalingScheduledActionScalableTargetAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

---



