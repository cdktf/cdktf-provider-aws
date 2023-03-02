# `autoscalingplansScalingPlan` Submodule <a name="`autoscalingplansScalingPlan` Submodule" id="@cdktf/provider-aws.autoscalingplansScalingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingplansScalingPlan <a name="AutoscalingplansScalingPlan" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan aws_autoscalingplans_scaling_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlan;

AutoscalingplansScalingPlan.Builder.create(Construct scope, java.lang.String id)
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
    .applicationSource(AutoscalingplansScalingPlanApplicationSource)
    .name(java.lang.String)
    .scalingInstruction(IResolvable)
    .scalingInstruction(java.util.List<AutoscalingplansScalingPlanScalingInstruction>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.applicationSource">applicationSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | application_source block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scalingInstruction">scalingInstruction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>></code> | scaling_instruction block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#id AutoscalingplansScalingPlan#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.applicationSource"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

application_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#application_source AutoscalingplansScalingPlan#application_source}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}.

---

##### `scalingInstruction`<sup>Required</sup> <a name="scalingInstruction" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scalingInstruction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>>

scaling_instruction block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scaling_instruction AutoscalingplansScalingPlan#scaling_instruction}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#id AutoscalingplansScalingPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource">putApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstruction">putScalingInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putApplicationSource` <a name="putApplicationSource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource"></a>

```java
public void putApplicationSource(AutoscalingplansScalingPlanApplicationSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---

##### `putScalingInstruction` <a name="putScalingInstruction" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstruction"></a>

```java
public void putScalingInstruction(IResolvable OR java.util.List<AutoscalingplansScalingPlanScalingInstruction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstruction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlan;

AutoscalingplansScalingPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlan;

AutoscalingplansScalingPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlan;

AutoscalingplansScalingPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSource">applicationSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference">AutoscalingplansScalingPlanApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstruction">scalingInstruction</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList">AutoscalingplansScalingPlanScalingInstructionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanVersion">scalingPlanVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSourceInput">applicationSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructionInput">scalingInstructionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSource"></a>

```java
public AutoscalingplansScalingPlanApplicationSourceOutputReference getApplicationSource();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference">AutoscalingplansScalingPlanApplicationSourceOutputReference</a>

---

##### `scalingInstruction`<sup>Required</sup> <a name="scalingInstruction" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstruction"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionList getScalingInstruction();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList">AutoscalingplansScalingPlanScalingInstructionList</a>

---

##### `scalingPlanVersion`<sup>Required</sup> <a name="scalingPlanVersion" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanVersion"></a>

```java
public java.lang.Number getScalingPlanVersion();
```

- *Type:* java.lang.Number

---

##### `applicationSourceInput`<sup>Optional</sup> <a name="applicationSourceInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSourceInput"></a>

```java
public AutoscalingplansScalingPlanApplicationSource getApplicationSourceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scalingInstructionInput`<sup>Optional</sup> <a name="scalingInstructionInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructionInput"></a>

```java
public java.lang.Object getScalingInstructionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingplansScalingPlanApplicationSource <a name="AutoscalingplansScalingPlanApplicationSource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanApplicationSource;

AutoscalingplansScalingPlanApplicationSource.builder()
//  .cloudformationStackArn(java.lang.String)
//  .tagFilter(IResolvable)
//  .tagFilter(java.util.List<AutoscalingplansScalingPlanApplicationSourceTagFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.cloudformationStackArn">cloudformationStackArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#cloudformation_stack_arn AutoscalingplansScalingPlan#cloudformation_stack_arn}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.tagFilter">tagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>></code> | tag_filter block. |

---

##### `cloudformationStackArn`<sup>Optional</sup> <a name="cloudformationStackArn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.cloudformationStackArn"></a>

```java
public java.lang.String getCloudformationStackArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#cloudformation_stack_arn AutoscalingplansScalingPlan#cloudformation_stack_arn}.

---

##### `tagFilter`<sup>Optional</sup> <a name="tagFilter" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.tagFilter"></a>

```java
public java.lang.Object getTagFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>>

tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#tag_filter AutoscalingplansScalingPlan#tag_filter}

---

### AutoscalingplansScalingPlanApplicationSourceTagFilter <a name="AutoscalingplansScalingPlanApplicationSourceTagFilter" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanApplicationSourceTagFilter;

AutoscalingplansScalingPlanApplicationSourceTagFilter.builder()
    .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#key AutoscalingplansScalingPlan#key}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#values AutoscalingplansScalingPlan#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#key AutoscalingplansScalingPlan#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#values AutoscalingplansScalingPlan#values}.

---

### AutoscalingplansScalingPlanConfig <a name="AutoscalingplansScalingPlanConfig" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanConfig;

AutoscalingplansScalingPlanConfig.builder()
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
    .applicationSource(AutoscalingplansScalingPlanApplicationSource)
    .name(java.lang.String)
    .scalingInstruction(IResolvable)
    .scalingInstruction(java.util.List<AutoscalingplansScalingPlanScalingInstruction>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.applicationSource">applicationSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | application_source block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.scalingInstruction">scalingInstruction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>></code> | scaling_instruction block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#id AutoscalingplansScalingPlan#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.applicationSource"></a>

```java
public AutoscalingplansScalingPlanApplicationSource getApplicationSource();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

application_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#application_source AutoscalingplansScalingPlan#application_source}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}.

---

##### `scalingInstruction`<sup>Required</sup> <a name="scalingInstruction" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.scalingInstruction"></a>

```java
public java.lang.Object getScalingInstruction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>>

scaling_instruction block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scaling_instruction AutoscalingplansScalingPlan#scaling_instruction}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#id AutoscalingplansScalingPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AutoscalingplansScalingPlanScalingInstruction <a name="AutoscalingplansScalingPlanScalingInstruction" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstruction;

AutoscalingplansScalingPlanScalingInstruction.builder()
    .maxCapacity(java.lang.Number)
    .minCapacity(java.lang.Number)
    .resourceId(java.lang.String)
    .scalableDimension(java.lang.String)
    .serviceNamespace(java.lang.String)
    .targetTrackingConfiguration(IResolvable)
    .targetTrackingConfiguration(java.util.List<AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration>)
//  .customizedLoadMetricSpecification(AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification)
//  .disableDynamicScaling(java.lang.Boolean)
//  .disableDynamicScaling(IResolvable)
//  .predefinedLoadMetricSpecification(AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification)
//  .predictiveScalingMaxCapacityBehavior(java.lang.String)
//  .predictiveScalingMaxCapacityBuffer(java.lang.Number)
//  .predictiveScalingMode(java.lang.String)
//  .scalingPolicyUpdateBehavior(java.lang.String)
//  .scheduledActionBufferTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#max_capacity AutoscalingplansScalingPlan#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#min_capacity AutoscalingplansScalingPlan#min_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_id AutoscalingplansScalingPlan#resource_id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scalableDimension">scalableDimension</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scalable_dimension AutoscalingplansScalingPlan#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#service_namespace AutoscalingplansScalingPlan#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.targetTrackingConfiguration">targetTrackingConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>></code> | target_tracking_configuration block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.customizedLoadMetricSpecification">customizedLoadMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a></code> | customized_load_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.disableDynamicScaling">disableDynamicScaling</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#disable_dynamic_scaling AutoscalingplansScalingPlan#disable_dynamic_scaling}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predefinedLoadMetricSpecification">predefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a></code> | predefined_load_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMaxCapacityBehavior">predictiveScalingMaxCapacityBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_behavior AutoscalingplansScalingPlan#predictive_scaling_max_capacity_behavior}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMaxCapacityBuffer">predictiveScalingMaxCapacityBuffer</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_buffer AutoscalingplansScalingPlan#predictive_scaling_max_capacity_buffer}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMode">predictiveScalingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_mode AutoscalingplansScalingPlan#predictive_scaling_mode}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scalingPolicyUpdateBehavior">scalingPolicyUpdateBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scaling_policy_update_behavior AutoscalingplansScalingPlan#scaling_policy_update_behavior}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scheduledActionBufferTime">scheduledActionBufferTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scheduled_action_buffer_time AutoscalingplansScalingPlan#scheduled_action_buffer_time}. |

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#max_capacity AutoscalingplansScalingPlan#max_capacity}.

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#min_capacity AutoscalingplansScalingPlan#min_capacity}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_id AutoscalingplansScalingPlan#resource_id}.

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scalableDimension"></a>

```java
public java.lang.String getScalableDimension();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scalable_dimension AutoscalingplansScalingPlan#scalable_dimension}.

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.serviceNamespace"></a>

```java
public java.lang.String getServiceNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#service_namespace AutoscalingplansScalingPlan#service_namespace}.

---

##### `targetTrackingConfiguration`<sup>Required</sup> <a name="targetTrackingConfiguration" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.targetTrackingConfiguration"></a>

```java
public java.lang.Object getTargetTrackingConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>>

target_tracking_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#target_tracking_configuration AutoscalingplansScalingPlan#target_tracking_configuration}

---

##### `customizedLoadMetricSpecification`<sup>Optional</sup> <a name="customizedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.customizedLoadMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification getCustomizedLoadMetricSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a>

customized_load_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#customized_load_metric_specification AutoscalingplansScalingPlan#customized_load_metric_specification}

---

##### `disableDynamicScaling`<sup>Optional</sup> <a name="disableDynamicScaling" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.disableDynamicScaling"></a>

```java
public java.lang.Object getDisableDynamicScaling();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#disable_dynamic_scaling AutoscalingplansScalingPlan#disable_dynamic_scaling}.

---

##### `predefinedLoadMetricSpecification`<sup>Optional</sup> <a name="predefinedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predefinedLoadMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification getPredefinedLoadMetricSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a>

predefined_load_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_load_metric_specification AutoscalingplansScalingPlan#predefined_load_metric_specification}

---

##### `predictiveScalingMaxCapacityBehavior`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMaxCapacityBehavior"></a>

```java
public java.lang.String getPredictiveScalingMaxCapacityBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_behavior AutoscalingplansScalingPlan#predictive_scaling_max_capacity_behavior}.

---

##### `predictiveScalingMaxCapacityBuffer`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBuffer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMaxCapacityBuffer"></a>

```java
public java.lang.Number getPredictiveScalingMaxCapacityBuffer();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_buffer AutoscalingplansScalingPlan#predictive_scaling_max_capacity_buffer}.

---

##### `predictiveScalingMode`<sup>Optional</sup> <a name="predictiveScalingMode" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMode"></a>

```java
public java.lang.String getPredictiveScalingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_mode AutoscalingplansScalingPlan#predictive_scaling_mode}.

---

##### `scalingPolicyUpdateBehavior`<sup>Optional</sup> <a name="scalingPolicyUpdateBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scalingPolicyUpdateBehavior"></a>

```java
public java.lang.String getScalingPolicyUpdateBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scaling_policy_update_behavior AutoscalingplansScalingPlan#scaling_policy_update_behavior}.

---

##### `scheduledActionBufferTime`<sup>Optional</sup> <a name="scheduledActionBufferTime" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scheduledActionBufferTime"></a>

```java
public java.lang.Number getScheduledActionBufferTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scheduled_action_buffer_time AutoscalingplansScalingPlan#scheduled_action_buffer_time}.

---

### AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification;

AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .statistic(java.lang.String)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}.

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}.

---

### AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification;

AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification.builder()
    .predefinedLoadMetricType(java.lang.String)
//  .resourceLabel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification.property.predefinedLoadMetricType">predefinedLoadMetricType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_load_metric_type AutoscalingplansScalingPlan#predefined_load_metric_type}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}. |

---

##### `predefinedLoadMetricType`<sup>Required</sup> <a name="predefinedLoadMetricType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification.property.predefinedLoadMetricType"></a>

```java
public java.lang.String getPredefinedLoadMetricType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_load_metric_type AutoscalingplansScalingPlan#predefined_load_metric_type}.

---

##### `resourceLabel`<sup>Optional</sup> <a name="resourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification.property.resourceLabel"></a>

```java
public java.lang.String getResourceLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}.

---

### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration;

AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.builder()
    .targetValue(java.lang.Number)
//  .customizedScalingMetricSpecification(AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification)
//  .disableScaleIn(java.lang.Boolean)
//  .disableScaleIn(IResolvable)
//  .estimatedInstanceWarmup(java.lang.Number)
//  .predefinedScalingMetricSpecification(AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification)
//  .scaleInCooldown(java.lang.Number)
//  .scaleOutCooldown(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#target_value AutoscalingplansScalingPlan#target_value}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.customizedScalingMetricSpecification">customizedScalingMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a></code> | customized_scaling_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.disableScaleIn">disableScaleIn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#disable_scale_in AutoscalingplansScalingPlan#disable_scale_in}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#estimated_instance_warmup AutoscalingplansScalingPlan#estimated_instance_warmup}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.predefinedScalingMetricSpecification">predefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a></code> | predefined_scaling_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.scaleInCooldown">scaleInCooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scale_in_cooldown AutoscalingplansScalingPlan#scale_in_cooldown}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scale_out_cooldown AutoscalingplansScalingPlan#scale_out_cooldown}. |

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#target_value AutoscalingplansScalingPlan#target_value}.

---

##### `customizedScalingMetricSpecification`<sup>Optional</sup> <a name="customizedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.customizedScalingMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification getCustomizedScalingMetricSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a>

customized_scaling_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#customized_scaling_metric_specification AutoscalingplansScalingPlan#customized_scaling_metric_specification}

---

##### `disableScaleIn`<sup>Optional</sup> <a name="disableScaleIn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.disableScaleIn"></a>

```java
public java.lang.Object getDisableScaleIn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#disable_scale_in AutoscalingplansScalingPlan#disable_scale_in}.

---

##### `estimatedInstanceWarmup`<sup>Optional</sup> <a name="estimatedInstanceWarmup" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.estimatedInstanceWarmup"></a>

```java
public java.lang.Number getEstimatedInstanceWarmup();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#estimated_instance_warmup AutoscalingplansScalingPlan#estimated_instance_warmup}.

---

##### `predefinedScalingMetricSpecification`<sup>Optional</sup> <a name="predefinedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.predefinedScalingMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification getPredefinedScalingMetricSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a>

predefined_scaling_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_scaling_metric_specification AutoscalingplansScalingPlan#predefined_scaling_metric_specification}

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="scaleInCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.scaleInCooldown"></a>

```java
public java.lang.Number getScaleInCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scale_in_cooldown AutoscalingplansScalingPlan#scale_in_cooldown}.

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="scaleOutCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.scaleOutCooldown"></a>

```java
public java.lang.Number getScaleOutCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scale_out_cooldown AutoscalingplansScalingPlan#scale_out_cooldown}.

---

### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification;

AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .statistic(java.lang.String)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}.

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}.

---

### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification;

AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification.builder()
    .predefinedScalingMetricType(java.lang.String)
//  .resourceLabel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification.property.predefinedScalingMetricType">predefinedScalingMetricType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_scaling_metric_type AutoscalingplansScalingPlan#predefined_scaling_metric_type}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}. |

---

##### `predefinedScalingMetricType`<sup>Required</sup> <a name="predefinedScalingMetricType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification.property.predefinedScalingMetricType"></a>

```java
public java.lang.String getPredefinedScalingMetricType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_scaling_metric_type AutoscalingplansScalingPlan#predefined_scaling_metric_type}.

---

##### `resourceLabel`<sup>Optional</sup> <a name="resourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification.property.resourceLabel"></a>

```java
public java.lang.String getResourceLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingplansScalingPlanApplicationSourceOutputReference <a name="AutoscalingplansScalingPlanApplicationSourceOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanApplicationSourceOutputReference;

new AutoscalingplansScalingPlanApplicationSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilter">putTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetCloudformationStackArn">resetCloudformationStackArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetTagFilter">resetTagFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilter` <a name="putTagFilter" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilter"></a>

```java
public void putTagFilter(IResolvable OR java.util.List<AutoscalingplansScalingPlanApplicationSourceTagFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>>

---

##### `resetCloudformationStackArn` <a name="resetCloudformationStackArn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetCloudformationStackArn"></a>

```java
public void resetCloudformationStackArn()
```

##### `resetTagFilter` <a name="resetTagFilter" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetTagFilter"></a>

```java
public void resetTagFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilter">tagFilter</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList">AutoscalingplansScalingPlanApplicationSourceTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArnInput">cloudformationStackArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilterInput">tagFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArn">cloudformationStackArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilter"></a>

```java
public AutoscalingplansScalingPlanApplicationSourceTagFilterList getTagFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList">AutoscalingplansScalingPlanApplicationSourceTagFilterList</a>

---

##### `cloudformationStackArnInput`<sup>Optional</sup> <a name="cloudformationStackArnInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArnInput"></a>

```java
public java.lang.String getCloudformationStackArnInput();
```

- *Type:* java.lang.String

---

##### `tagFilterInput`<sup>Optional</sup> <a name="tagFilterInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilterInput"></a>

```java
public java.lang.Object getTagFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>>

---

##### `cloudformationStackArn`<sup>Required</sup> <a name="cloudformationStackArn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArn"></a>

```java
public java.lang.String getCloudformationStackArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.internalValue"></a>

```java
public AutoscalingplansScalingPlanApplicationSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---


### AutoscalingplansScalingPlanApplicationSourceTagFilterList <a name="AutoscalingplansScalingPlanApplicationSourceTagFilterList" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanApplicationSourceTagFilterList;

new AutoscalingplansScalingPlanApplicationSourceTagFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.get"></a>

```java
public AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>>

---


### AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference <a name="AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference;

new AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference;

new AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionList <a name="AutoscalingplansScalingPlanScalingInstructionList" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionList;

new AutoscalingplansScalingPlanScalingInstructionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.get"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>>

---


### AutoscalingplansScalingPlanScalingInstructionOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionOutputReference;

new AutoscalingplansScalingPlanScalingInstructionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putCustomizedLoadMetricSpecification">putCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putPredefinedLoadMetricSpecification">putPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putTargetTrackingConfiguration">putTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetCustomizedLoadMetricSpecification">resetCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetDisableDynamicScaling">resetDisableDynamicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredefinedLoadMetricSpecification">resetPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMaxCapacityBehavior">resetPredictiveScalingMaxCapacityBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMaxCapacityBuffer">resetPredictiveScalingMaxCapacityBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMode">resetPredictiveScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetScalingPolicyUpdateBehavior">resetScalingPolicyUpdateBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetScheduledActionBufferTime">resetScheduledActionBufferTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizedLoadMetricSpecification` <a name="putCustomizedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putCustomizedLoadMetricSpecification"></a>

```java
public void putCustomizedLoadMetricSpecification(AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putCustomizedLoadMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a>

---

##### `putPredefinedLoadMetricSpecification` <a name="putPredefinedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putPredefinedLoadMetricSpecification"></a>

```java
public void putPredefinedLoadMetricSpecification(AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putPredefinedLoadMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a>

---

##### `putTargetTrackingConfiguration` <a name="putTargetTrackingConfiguration" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putTargetTrackingConfiguration"></a>

```java
public void putTargetTrackingConfiguration(IResolvable OR java.util.List<AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putTargetTrackingConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>>

---

##### `resetCustomizedLoadMetricSpecification` <a name="resetCustomizedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetCustomizedLoadMetricSpecification"></a>

```java
public void resetCustomizedLoadMetricSpecification()
```

##### `resetDisableDynamicScaling` <a name="resetDisableDynamicScaling" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetDisableDynamicScaling"></a>

```java
public void resetDisableDynamicScaling()
```

##### `resetPredefinedLoadMetricSpecification` <a name="resetPredefinedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredefinedLoadMetricSpecification"></a>

```java
public void resetPredefinedLoadMetricSpecification()
```

##### `resetPredictiveScalingMaxCapacityBehavior` <a name="resetPredictiveScalingMaxCapacityBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMaxCapacityBehavior"></a>

```java
public void resetPredictiveScalingMaxCapacityBehavior()
```

##### `resetPredictiveScalingMaxCapacityBuffer` <a name="resetPredictiveScalingMaxCapacityBuffer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMaxCapacityBuffer"></a>

```java
public void resetPredictiveScalingMaxCapacityBuffer()
```

##### `resetPredictiveScalingMode` <a name="resetPredictiveScalingMode" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMode"></a>

```java
public void resetPredictiveScalingMode()
```

##### `resetScalingPolicyUpdateBehavior` <a name="resetScalingPolicyUpdateBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetScalingPolicyUpdateBehavior"></a>

```java
public void resetScalingPolicyUpdateBehavior()
```

##### `resetScheduledActionBufferTime` <a name="resetScheduledActionBufferTime" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetScheduledActionBufferTime"></a>

```java
public void resetScheduledActionBufferTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.customizedLoadMetricSpecification">customizedLoadMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predefinedLoadMetricSpecification">predefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.targetTrackingConfiguration">targetTrackingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.customizedLoadMetricSpecificationInput">customizedLoadMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.disableDynamicScalingInput">disableDynamicScalingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predefinedLoadMetricSpecificationInput">predefinedLoadMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBehaviorInput">predictiveScalingMaxCapacityBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBufferInput">predictiveScalingMaxCapacityBufferInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingModeInput">predictiveScalingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalableDimensionInput">scalableDimensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalingPolicyUpdateBehaviorInput">scalingPolicyUpdateBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scheduledActionBufferTimeInput">scheduledActionBufferTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.serviceNamespaceInput">serviceNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.targetTrackingConfigurationInput">targetTrackingConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.disableDynamicScaling">disableDynamicScaling</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBehavior">predictiveScalingMaxCapacityBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBuffer">predictiveScalingMaxCapacityBuffer</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMode">predictiveScalingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalableDimension">scalableDimension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalingPolicyUpdateBehavior">scalingPolicyUpdateBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scheduledActionBufferTime">scheduledActionBufferTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customizedLoadMetricSpecification`<sup>Required</sup> <a name="customizedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.customizedLoadMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference getCustomizedLoadMetricSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference</a>

---

##### `predefinedLoadMetricSpecification`<sup>Required</sup> <a name="predefinedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predefinedLoadMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference getPredefinedLoadMetricSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference</a>

---

##### `targetTrackingConfiguration`<sup>Required</sup> <a name="targetTrackingConfiguration" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.targetTrackingConfiguration"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList getTargetTrackingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList</a>

---

##### `customizedLoadMetricSpecificationInput`<sup>Optional</sup> <a name="customizedLoadMetricSpecificationInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.customizedLoadMetricSpecificationInput"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification getCustomizedLoadMetricSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a>

---

##### `disableDynamicScalingInput`<sup>Optional</sup> <a name="disableDynamicScalingInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.disableDynamicScalingInput"></a>

```java
public java.lang.Object getDisableDynamicScalingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.minCapacityInput"></a>

```java
public java.lang.Number getMinCapacityInput();
```

- *Type:* java.lang.Number

---

##### `predefinedLoadMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedLoadMetricSpecificationInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predefinedLoadMetricSpecificationInput"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification getPredefinedLoadMetricSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a>

---

##### `predictiveScalingMaxCapacityBehaviorInput`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBehaviorInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBehaviorInput"></a>

```java
public java.lang.String getPredictiveScalingMaxCapacityBehaviorInput();
```

- *Type:* java.lang.String

---

##### `predictiveScalingMaxCapacityBufferInput`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBufferInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBufferInput"></a>

```java
public java.lang.Number getPredictiveScalingMaxCapacityBufferInput();
```

- *Type:* java.lang.Number

---

##### `predictiveScalingModeInput`<sup>Optional</sup> <a name="predictiveScalingModeInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingModeInput"></a>

```java
public java.lang.String getPredictiveScalingModeInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `scalableDimensionInput`<sup>Optional</sup> <a name="scalableDimensionInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalableDimensionInput"></a>

```java
public java.lang.String getScalableDimensionInput();
```

- *Type:* java.lang.String

---

##### `scalingPolicyUpdateBehaviorInput`<sup>Optional</sup> <a name="scalingPolicyUpdateBehaviorInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalingPolicyUpdateBehaviorInput"></a>

```java
public java.lang.String getScalingPolicyUpdateBehaviorInput();
```

- *Type:* java.lang.String

---

##### `scheduledActionBufferTimeInput`<sup>Optional</sup> <a name="scheduledActionBufferTimeInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scheduledActionBufferTimeInput"></a>

```java
public java.lang.Number getScheduledActionBufferTimeInput();
```

- *Type:* java.lang.Number

---

##### `serviceNamespaceInput`<sup>Optional</sup> <a name="serviceNamespaceInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.serviceNamespaceInput"></a>

```java
public java.lang.String getServiceNamespaceInput();
```

- *Type:* java.lang.String

---

##### `targetTrackingConfigurationInput`<sup>Optional</sup> <a name="targetTrackingConfigurationInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.targetTrackingConfigurationInput"></a>

```java
public java.lang.Object getTargetTrackingConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>>

---

##### `disableDynamicScaling`<sup>Required</sup> <a name="disableDynamicScaling" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.disableDynamicScaling"></a>

```java
public java.lang.Object getDisableDynamicScaling();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `predictiveScalingMaxCapacityBehavior`<sup>Required</sup> <a name="predictiveScalingMaxCapacityBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBehavior"></a>

```java
public java.lang.String getPredictiveScalingMaxCapacityBehavior();
```

- *Type:* java.lang.String

---

##### `predictiveScalingMaxCapacityBuffer`<sup>Required</sup> <a name="predictiveScalingMaxCapacityBuffer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBuffer"></a>

```java
public java.lang.Number getPredictiveScalingMaxCapacityBuffer();
```

- *Type:* java.lang.Number

---

##### `predictiveScalingMode`<sup>Required</sup> <a name="predictiveScalingMode" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMode"></a>

```java
public java.lang.String getPredictiveScalingMode();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalableDimension"></a>

```java
public java.lang.String getScalableDimension();
```

- *Type:* java.lang.String

---

##### `scalingPolicyUpdateBehavior`<sup>Required</sup> <a name="scalingPolicyUpdateBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalingPolicyUpdateBehavior"></a>

```java
public java.lang.String getScalingPolicyUpdateBehavior();
```

- *Type:* java.lang.String

---

##### `scheduledActionBufferTime`<sup>Required</sup> <a name="scheduledActionBufferTime" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scheduledActionBufferTime"></a>

```java
public java.lang.Number getScheduledActionBufferTime();
```

- *Type:* java.lang.Number

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.serviceNamespace"></a>

```java
public java.lang.String getServiceNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a> OR com.hashicorp.cdktf.IResolvable

---


### AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference;

new AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.resetResourceLabel">resetResourceLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceLabel` <a name="resetResourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.resetResourceLabel"></a>

```java
public void resetResourceLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricTypeInput">predefinedLoadMetricTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricType">predefinedLoadMetricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predefinedLoadMetricTypeInput`<sup>Optional</sup> <a name="predefinedLoadMetricTypeInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricTypeInput"></a>

```java
public java.lang.String getPredefinedLoadMetricTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```java
public java.lang.String getResourceLabelInput();
```

- *Type:* java.lang.String

---

##### `predefinedLoadMetricType`<sup>Required</sup> <a name="predefinedLoadMetricType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricType"></a>

```java
public java.lang.String getPredefinedLoadMetricType();
```

- *Type:* java.lang.String

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel"></a>

```java
public java.lang.String getResourceLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference;

new AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList;

new AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.get"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>>

---


### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference;

new AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putCustomizedScalingMetricSpecification">putCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putPredefinedScalingMetricSpecification">putPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetCustomizedScalingMetricSpecification">resetCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetDisableScaleIn">resetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetEstimatedInstanceWarmup">resetEstimatedInstanceWarmup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetPredefinedScalingMetricSpecification">resetPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetScaleInCooldown">resetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetScaleOutCooldown">resetScaleOutCooldown</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizedScalingMetricSpecification` <a name="putCustomizedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putCustomizedScalingMetricSpecification"></a>

```java
public void putCustomizedScalingMetricSpecification(AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putCustomizedScalingMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a>

---

##### `putPredefinedScalingMetricSpecification` <a name="putPredefinedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putPredefinedScalingMetricSpecification"></a>

```java
public void putPredefinedScalingMetricSpecification(AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putPredefinedScalingMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a>

---

##### `resetCustomizedScalingMetricSpecification` <a name="resetCustomizedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetCustomizedScalingMetricSpecification"></a>

```java
public void resetCustomizedScalingMetricSpecification()
```

##### `resetDisableScaleIn` <a name="resetDisableScaleIn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetDisableScaleIn"></a>

```java
public void resetDisableScaleIn()
```

##### `resetEstimatedInstanceWarmup` <a name="resetEstimatedInstanceWarmup" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetEstimatedInstanceWarmup"></a>

```java
public void resetEstimatedInstanceWarmup()
```

##### `resetPredefinedScalingMetricSpecification` <a name="resetPredefinedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetPredefinedScalingMetricSpecification"></a>

```java
public void resetPredefinedScalingMetricSpecification()
```

##### `resetScaleInCooldown` <a name="resetScaleInCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetScaleInCooldown"></a>

```java
public void resetScaleInCooldown()
```

##### `resetScaleOutCooldown` <a name="resetScaleOutCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetScaleOutCooldown"></a>

```java
public void resetScaleOutCooldown()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.customizedScalingMetricSpecification">customizedScalingMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.predefinedScalingMetricSpecification">predefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.customizedScalingMetricSpecificationInput">customizedScalingMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.disableScaleInInput">disableScaleInInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.estimatedInstanceWarmupInput">estimatedInstanceWarmupInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.predefinedScalingMetricSpecificationInput">predefinedScalingMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleInCooldownInput">scaleInCooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleOutCooldownInput">scaleOutCooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customizedScalingMetricSpecification`<sup>Required</sup> <a name="customizedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.customizedScalingMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference getCustomizedScalingMetricSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference</a>

---

##### `predefinedScalingMetricSpecification`<sup>Required</sup> <a name="predefinedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.predefinedScalingMetricSpecification"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference getPredefinedScalingMetricSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference</a>

---

##### `customizedScalingMetricSpecificationInput`<sup>Optional</sup> <a name="customizedScalingMetricSpecificationInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.customizedScalingMetricSpecificationInput"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification getCustomizedScalingMetricSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a>

---

##### `disableScaleInInput`<sup>Optional</sup> <a name="disableScaleInInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.disableScaleInInput"></a>

```java
public java.lang.Object getDisableScaleInInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `estimatedInstanceWarmupInput`<sup>Optional</sup> <a name="estimatedInstanceWarmupInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.estimatedInstanceWarmupInput"></a>

```java
public java.lang.Number getEstimatedInstanceWarmupInput();
```

- *Type:* java.lang.Number

---

##### `predefinedScalingMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedScalingMetricSpecificationInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.predefinedScalingMetricSpecificationInput"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification getPredefinedScalingMetricSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a>

---

##### `scaleInCooldownInput`<sup>Optional</sup> <a name="scaleInCooldownInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleInCooldownInput"></a>

```java
public java.lang.Number getScaleInCooldownInput();
```

- *Type:* java.lang.Number

---

##### `scaleOutCooldownInput`<sup>Optional</sup> <a name="scaleOutCooldownInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```java
public java.lang.Number getScaleOutCooldownInput();
```

- *Type:* java.lang.Number

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.targetValueInput"></a>

```java
public java.lang.Number getTargetValueInput();
```

- *Type:* java.lang.Number

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.disableScaleIn"></a>

```java
public java.lang.Object getDisableScaleIn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `estimatedInstanceWarmup`<sup>Required</sup> <a name="estimatedInstanceWarmup" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.estimatedInstanceWarmup"></a>

```java
public java.lang.Number getEstimatedInstanceWarmup();
```

- *Type:* java.lang.Number

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleInCooldown"></a>

```java
public java.lang.Number getScaleInCooldown();
```

- *Type:* java.lang.Number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleOutCooldown"></a>

```java
public java.lang.Number getScaleOutCooldown();
```

- *Type:* java.lang.Number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a> OR com.hashicorp.cdktf.IResolvable

---


### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscalingplans_scaling_plan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference;

new AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.resetResourceLabel">resetResourceLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceLabel` <a name="resetResourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.resetResourceLabel"></a>

```java
public void resetResourceLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricTypeInput">predefinedScalingMetricTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricType">predefinedScalingMetricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predefinedScalingMetricTypeInput`<sup>Optional</sup> <a name="predefinedScalingMetricTypeInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricTypeInput"></a>

```java
public java.lang.String getPredefinedScalingMetricTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```java
public java.lang.String getResourceLabelInput();
```

- *Type:* java.lang.String

---

##### `predefinedScalingMetricType`<sup>Required</sup> <a name="predefinedScalingMetricType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricType"></a>

```java
public java.lang.String getPredefinedScalingMetricType();
```

- *Type:* java.lang.String

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel"></a>

```java
public java.lang.String getResourceLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```java
public AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a>

---



