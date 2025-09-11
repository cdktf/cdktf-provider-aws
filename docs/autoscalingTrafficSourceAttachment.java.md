# `autoscalingTrafficSourceAttachment` Submodule <a name="`autoscalingTrafficSourceAttachment` Submodule" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingTrafficSourceAttachment <a name="AutoscalingTrafficSourceAttachment" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment aws_autoscaling_traffic_source_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_traffic_source_attachment.AutoscalingTrafficSourceAttachment;

AutoscalingTrafficSourceAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .autoscalingGroupName(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(AutoscalingTrafficSourceAttachmentTimeouts)
//  .trafficSource(AutoscalingTrafficSourceAttachmentTrafficSource)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.trafficSource">trafficSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | traffic_source block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.autoscalingGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#region AutoscalingTrafficSourceAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#timeouts AutoscalingTrafficSourceAttachment#timeouts}

---

##### `trafficSource`<sup>Optional</sup> <a name="trafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.trafficSource"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

traffic_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#traffic_source AutoscalingTrafficSourceAttachment#traffic_source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource">putTrafficSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTrafficSource">resetTrafficSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts"></a>

```java
public void putTimeouts(AutoscalingTrafficSourceAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

---

##### `putTrafficSource` <a name="putTrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource"></a>

```java
public void putTrafficSource(AutoscalingTrafficSourceAttachmentTrafficSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrafficSource` <a name="resetTrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTrafficSource"></a>

```java
public void resetTrafficSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutoscalingTrafficSourceAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_traffic_source_attachment.AutoscalingTrafficSourceAttachment;

AutoscalingTrafficSourceAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_traffic_source_attachment.AutoscalingTrafficSourceAttachment;

AutoscalingTrafficSourceAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_traffic_source_attachment.AutoscalingTrafficSourceAttachment;

AutoscalingTrafficSourceAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_traffic_source_attachment.AutoscalingTrafficSourceAttachment;

AutoscalingTrafficSourceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutoscalingTrafficSourceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AutoscalingTrafficSourceAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutoscalingTrafficSourceAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutoscalingTrafficSourceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AutoscalingTrafficSourceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference">AutoscalingTrafficSourceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSource">trafficSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference">AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupNameInput">autoscalingGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSourceInput">trafficSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeouts"></a>

```java
public AutoscalingTrafficSourceAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference">AutoscalingTrafficSourceAttachmentTimeoutsOutputReference</a>

---

##### `trafficSource`<sup>Required</sup> <a name="trafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSource"></a>

```java
public AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference getTrafficSource();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference">AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference</a>

---

##### `autoscalingGroupNameInput`<sup>Optional</sup> <a name="autoscalingGroupNameInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupNameInput"></a>

```java
public java.lang.String getAutoscalingGroupNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

---

##### `trafficSourceInput`<sup>Optional</sup> <a name="trafficSourceInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSourceInput"></a>

```java
public AutoscalingTrafficSourceAttachmentTrafficSource getTrafficSourceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupName"></a>

```java
public java.lang.String getAutoscalingGroupName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingTrafficSourceAttachmentConfig <a name="AutoscalingTrafficSourceAttachmentConfig" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_traffic_source_attachment.AutoscalingTrafficSourceAttachmentConfig;

AutoscalingTrafficSourceAttachmentConfig.builder()
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
    .autoscalingGroupName(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(AutoscalingTrafficSourceAttachmentTimeouts)
//  .trafficSource(AutoscalingTrafficSourceAttachmentTrafficSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.trafficSource">trafficSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | traffic_source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.autoscalingGroupName"></a>

```java
public java.lang.String getAutoscalingGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#region AutoscalingTrafficSourceAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.timeouts"></a>

```java
public AutoscalingTrafficSourceAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#timeouts AutoscalingTrafficSourceAttachment#timeouts}

---

##### `trafficSource`<sup>Optional</sup> <a name="trafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.trafficSource"></a>

```java
public AutoscalingTrafficSourceAttachmentTrafficSource getTrafficSource();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

traffic_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#traffic_source AutoscalingTrafficSourceAttachment#traffic_source}

---

### AutoscalingTrafficSourceAttachmentTimeouts <a name="AutoscalingTrafficSourceAttachmentTimeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_traffic_source_attachment.AutoscalingTrafficSourceAttachmentTimeouts;

AutoscalingTrafficSourceAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#create AutoscalingTrafficSourceAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#delete AutoscalingTrafficSourceAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#create AutoscalingTrafficSourceAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#delete AutoscalingTrafficSourceAttachment#delete}.

---

### AutoscalingTrafficSourceAttachmentTrafficSource <a name="AutoscalingTrafficSourceAttachmentTrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_traffic_source_attachment.AutoscalingTrafficSourceAttachmentTrafficSource;

AutoscalingTrafficSourceAttachmentTrafficSource.builder()
    .identifier(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#identifier AutoscalingTrafficSourceAttachment#identifier}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#type AutoscalingTrafficSourceAttachment#type}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#identifier AutoscalingTrafficSourceAttachment#identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/autoscaling_traffic_source_attachment#type AutoscalingTrafficSourceAttachment#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingTrafficSourceAttachmentTimeoutsOutputReference <a name="AutoscalingTrafficSourceAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_traffic_source_attachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference;

new AutoscalingTrafficSourceAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

---


### AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference <a name="AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_traffic_source_attachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference;

new AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.internalValue"></a>

```java
public AutoscalingTrafficSourceAttachmentTrafficSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

---



