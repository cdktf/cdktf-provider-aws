# `apprunnerDefaultAutoScalingConfigurationVersion` Submodule <a name="`apprunnerDefaultAutoScalingConfigurationVersion` Submodule" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerDefaultAutoScalingConfigurationVersion <a name="ApprunnerDefaultAutoScalingConfigurationVersion" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/apprunner_default_auto_scaling_configuration_version aws_apprunner_default_auto_scaling_configuration_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_default_auto_scaling_configuration_version.ApprunnerDefaultAutoScalingConfigurationVersion;

ApprunnerDefaultAutoScalingConfigurationVersion.Builder.create(Construct scope, java.lang.String id)
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
    .autoScalingConfigurationArn(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/apprunner_default_auto_scaling_configuration_version#auto_scaling_configuration_arn ApprunnerDefaultAutoScalingConfigurationVersion#auto_scaling_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoScalingConfigurationArn`<sup>Required</sup> <a name="autoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.autoScalingConfigurationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/apprunner_default_auto_scaling_configuration_version#auto_scaling_configuration_arn ApprunnerDefaultAutoScalingConfigurationVersion#auto_scaling_configuration_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/apprunner_default_auto_scaling_configuration_version#region ApprunnerDefaultAutoScalingConfigurationVersion#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApprunnerDefaultAutoScalingConfigurationVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_default_auto_scaling_configuration_version.ApprunnerDefaultAutoScalingConfigurationVersion;

ApprunnerDefaultAutoScalingConfigurationVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_default_auto_scaling_configuration_version.ApprunnerDefaultAutoScalingConfigurationVersion;

ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_default_auto_scaling_configuration_version.ApprunnerDefaultAutoScalingConfigurationVersion;

ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_default_auto_scaling_configuration_version.ApprunnerDefaultAutoScalingConfigurationVersion;

ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApprunnerDefaultAutoScalingConfigurationVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApprunnerDefaultAutoScalingConfigurationVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApprunnerDefaultAutoScalingConfigurationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/apprunner_default_auto_scaling_configuration_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApprunnerDefaultAutoScalingConfigurationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.autoScalingConfigurationArnInput">autoScalingConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `autoScalingConfigurationArnInput`<sup>Optional</sup> <a name="autoScalingConfigurationArnInput" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.autoScalingConfigurationArnInput"></a>

```java
public java.lang.String getAutoScalingConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `autoScalingConfigurationArn`<sup>Required</sup> <a name="autoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.autoScalingConfigurationArn"></a>

```java
public java.lang.String getAutoScalingConfigurationArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerDefaultAutoScalingConfigurationVersionConfig <a name="ApprunnerDefaultAutoScalingConfigurationVersionConfig" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_default_auto_scaling_configuration_version.ApprunnerDefaultAutoScalingConfigurationVersionConfig;

ApprunnerDefaultAutoScalingConfigurationVersionConfig.builder()
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
    .autoScalingConfigurationArn(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/apprunner_default_auto_scaling_configuration_version#auto_scaling_configuration_arn ApprunnerDefaultAutoScalingConfigurationVersion#auto_scaling_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoScalingConfigurationArn`<sup>Required</sup> <a name="autoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.autoScalingConfigurationArn"></a>

```java
public java.lang.String getAutoScalingConfigurationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/apprunner_default_auto_scaling_configuration_version#auto_scaling_configuration_arn ApprunnerDefaultAutoScalingConfigurationVersion#auto_scaling_configuration_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/apprunner_default_auto_scaling_configuration_version#region ApprunnerDefaultAutoScalingConfigurationVersion#region}

---



